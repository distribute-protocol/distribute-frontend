import React from 'react'
import { connect } from 'react-redux'
import StakeComponent from '../../components/project/1Stake'
import moment from 'moment'
import { web3 } from '../../utilities/blockchain'
import { BigNumber } from 'bignumber.js'

class StakeProject extends React.Component {
  constructor () {
    super()
    this.state = {
      stake: ''
    }
  }

  onChange (val) {
    try {
      this.setState({stake: val})
    } catch (error) {
      throw new Error(error)
    }
  }

  render () {
    let tokensLeft, currentPrice
    if (typeof this.props.project !== `undefined`) {
      let weiCost = new BigNumber(this.props.project.weiCost.toString())
      let weiBal = new BigNumber(this.props.project.weiBal.toString())
      this.props.project.currentPrice !== `undefined`
        ? currentPrice = this.props.currentPrice
        : currentPrice = this.props.project.currentPrice
      tokensLeft = Math.ceil((weiCost).minus(weiBal).div(currentPrice))
    } else {
      tokensLeft = 'calculating...'
    }
    return (
      <StakeComponent
        name={this.props.project.name}
        address={this.props.address}
        photo={this.props.project.photo}
        summary={this.props.project.summary}
        location={this.props.project.location}
        cost={web3.fromWei(Math.ceil(this.props.project.weiCost / 1.05), 'ether')}
        tokensLeft={tokensLeft}
        reputationCost={this.props.project.reputationCost}
        totalReputationStaked={this.props.project.reputationBalance}
        date={moment(this.props.project.nextDeadline)}
        stakeInput={
          <input
            ref={(input) => (this.stakedValue = input)}
            placeholder='Amount'
            type='number'
            onChange={() => this.onChange(this.stakedValue.value)}
            value={this.state.stake}
            style={{height: 30, marginRight: 15}}
          />
        }
        user={this.props.user}
        value={this.state.stake}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.projects[1][ownProps.address]
  }
}

export default connect(mapStateToProps)(StakeProject)
