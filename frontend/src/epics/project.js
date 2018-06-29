import { GET_PROJECTS, PROPOSE_PROJECT, STAKE_PROJECT, UNSTAKE_PROJECT, CHECK_STAKED_STATUS, CHECK_ACTIVE_STATUS, SET_TASK_SUBMISSION, SET_PROJECT_TASK_LIST } from '../constants/ProjectActionTypes'
import { projectsReceived, projectProposed, projectStaked, projectUnstaked, taskHashSubmitted, stakedStatusChecked, taskListSubmitted } from '../actions/projectActions'
import { map, mergeMap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { push } from 'react-router-redux'
import { client } from '../index'
import { merge } from 'rxjs/observable/merge'
import { rr, tr, pr } from '../utilities/blockchain'
import gql from 'graphql-tag'

const getProposedProjectsEpic = action$ => {
  let state
  return action$.ofType(GET_PROJECTS).pipe(
    mergeMap(action => {
      state = action.state
      return client.query({query: action.query}
      )
    }),
    map(result => projectsReceived(state, result.data.allProjectsinState))
  )
}

const proposeProject = action$ =>
  action$.ofType(PROPOSE_PROJECT).pipe(
    mergeMap(action =>
      action.collateralType === 'tokens'
        ? Observable.from(tr.proposeProject(action.projObj.cost, action.projObj.stakingEndDate, action.projObj.multiHash, action.txObj))
        : Observable.from(rr.proposeProject(action.projObj.cost, action.projObj.stakingEndDate, action.projObj.multiHash, action.txObj))
    ),
    mergeMap(result => Observable.concat(
      Observable.of(projectProposed(result)),
      Observable.of(push('/stake'))
    ))
  )

const stakeProject = action$ => {
  let collateralType
  return action$.ofType(STAKE_PROJECT).pipe(
    mergeMap(action => {
      collateralType = action.collateralType
      return action.collateralType === 'tokens'
        ? Observable.from(tr.stakeTokens(action.projectAddress, action.value, action.txObj))
        : Observable.from(rr.stakeReputation(action.projectAddress, action.value, action.txObj))
    }),
    map(result => projectStaked(collateralType, result))
  )
}

const unstakeProject = action$ => {
  let collateralType
  return action$.ofType(UNSTAKE_PROJECT).pipe(
    mergeMap(action => {
      collateralType = action.collateralType
      return action.collateralType === 'tokens'
        ? Observable.from(tr.unstakeTokens(action.projectAddress, action.value, action.txObj))
        : Observable.from(rr.unstakeReputation(action.projectAddress, action.value, action.txObj))
    }),
    map(result => projectUnstaked(collateralType, result))
  )
}

const checkStakedStatus = action$ =>
  action$.ofType(CHECK_STAKED_STATUS).pipe(
    mergeMap(action => { return pr.checkStaked(action.projectAddress, action.txObj) }),
    map(result => stakedStatusChecked(result))
  )

const getStakedProjectsEpic = action$ => {
  let state
  return action$.ofType(GET_PROJECTS).pipe(
    mergeMap(action => {
      state = action.state
      return client.query({query: action.query}
      )
    }),
    map(result => projectsReceived(state, result.data.allProjectsinState))
  )
}

const setTaskList = action$ => {
  // let address
  return action$.ofType(SET_PROJECT_TASK_LIST).pipe(
    mergeMap(action => {
      return console.log('hi')
    }
      // add to project through proj id, add task list key to model to update
      // any new object is only created through logs
//       let mutation = gql`
//
//         mutation addTaskList($input: TaskInput, $address: String!) {
//           addTask(input: $input, address: $address) {
//             id
//           }
//         }
//       `
//       return client.mutate({
//         mutation: mutation,
//         variables: {
//           input: action.taskInput,
//           address: action.address
//         }
//       })
//     }),
//     map(result => Observable.concat(
//       Observable.of(taskHashSubmitted(result)),
//       Observable.of(push('/add'))
//     ))
    ))
}
// //       taskDetails = action.taskDetails
// //       return client.mutate({mutation: action.mutate}
// //       )
// //     }),
// //     map(result => taskListSubmitted(taskDetails, result))
// //   )
// // }

const setTaskSubmission = action$ => {
  let submissionDetails
  return action$.ofType(SET_TASK_SUBMISSION).pipe(
    mergeMap(action => {
      submissionDetails = action.submissionDetails
      return Observable.from(pr.addTaskHash(action.submissionDetails, action.projectAddress))
    }),
    map(result => taskHashSubmitted(submissionDetails, result))
  )
}

const checkActiveStatus = action$ =>
  action$.ofType(CHECK_ACTIVE_STATUS).pipe(
    mergeMap(action => pr.checkActive(action.projectAddress, action.txObj)),
    map(result => stakedStatusChecked(result))
  )

export default (action$, store) => merge(
  getProposedProjectsEpic(action$, store),
  getStakedProjectsEpic(action$, store),
  proposeProject(action$, store),
  stakeProject(action$, store),
  unstakeProject(action$, store),
  checkStakedStatus(action$, store),
  checkActiveStatus(action$, store),
  setTaskSubmission(action$, store),
  setTaskList(action$, store)
)
