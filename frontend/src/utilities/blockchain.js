import { TokenRegistryABI, TokenRegistryAddress } from '../abi/TokenRegistry'
import { ReputationRegistryABI, ReputationRegistryAddress } from '../abi/ReputationRegistry'
import { ProjectRegistryABI, ProjectRegistryAddress } from '../abi/ProjectRegistry'
import { DistributeTokenABI, DistributeTokenAddress } from '../abi/DistributeToken'
import Web3 from 'web3'

let web3init
if (typeof web3init !== 'undefined') {
  web3init = new Web3(window.web3.currentProvider)
} else {
  // set the provider you want from Web3.providers
  web3init = new Web3(window.web3.currentProvider)
  // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'))
}

export const web3 = web3init
export const eth = web3init.eth

const TR = web3.eth.contract(JSON.parse(TokenRegistryABI))
export const tr = TR.at(TokenRegistryAddress)
const RR = web3.eth.contract(JSON.parse(ReputationRegistryABI))
export const rr = RR.at(ReputationRegistryAddress)
const PR = web3.eth.contract(JSON.parse(ProjectRegistryABI))
export const pr = PR.at(ProjectRegistryAddress)
const DT = web3.eth.contract(JSON.parse(DistributeTokenABI))
export const dt = DT.at(DistributeTokenAddress)

export default {TR, tr, RR, rr, PR, pr, DT, dt}
