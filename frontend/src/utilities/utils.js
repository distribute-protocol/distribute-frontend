import {eth} from './blockchain'

const utils = {
  // returns the solidity-sha3 output for VoteMap indexing
  checkTransactionMined: async (txhash) => {
    let txreceipt = await eth.getTransactionReceipt(txhash)
    // if txreceipt.status === 1 the tx has been mined
    return txreceipt.status === 1
  }
}

export default utils
