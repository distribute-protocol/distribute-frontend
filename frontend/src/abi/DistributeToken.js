export const DistributeTokenAddress = '0xecfcab0a285d3380e488a39b4bb21e777f8a4eac'

export const DistributeTokenABI = `[{"constant":true,"inputs":[],"name":"totalFreeSupply","outputs":[{"name":"","type":"uint256"}],
"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"weiBal","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFromEscrow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"transferWeiTo","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_amountToBurn","type":"uint256"}],"name":"burnAndRefundTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_amountToBurn","type":"uint256"}],"name":"burnTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"targetPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_owner","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferToEscrow","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_tokens","type":"uint256"}],"name":"mint","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_targetPrice","type":"uint256"},{"name":"_tokens","type":"uint256"}],"name":"weiRequired","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_address","type":"address"},{"name":"_weiValue","type":"uint256"}],"name":"transferWeiFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_tokenRegistry","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountMinted","type":"uint256"},{"indexed":false,"name":"totalCost","type":"uint256"}],"name":"LogMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountWithdrawn","type":"uint256"},{"indexed":false,"name":"reward","type":"uint256"}],"name":"LogWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]`

export const DistributeTokenBytecode = `0x606060405260006004556000600555655af3107a4000600755341561002357600080fd5b604
051602080611586833981016040528080519060200190919050506000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561008657600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506114af806100d76000396000f30060606040526004361061011d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063027c89771461011f578063065d5d0a1461014857806306fdde0314610171578063095ea7b3146101ff57806318160ddd1461025957806323b872dd14610282578063283760fa146102fb578063313ce567146103555780634dbee1c914610384578063590bf7871461038e5780636d1b229d146103b157806370a08231146103d457806381af81911461042157806395d89b41146104585780639d1b464a146104e65780639e88fd811461050f578063a0712d6814610569578063a9059cbb14610581578063dd62ed3e146105db578063dfd30f4714610647578063e9d46d7414610687575b005b341561012a57600080fd5b6101326106c9565b6040518082815260200191505060405180910390f35b341561015357600080fd5b61015b6106cf565b6040518082815260200191505060405180910390f35b341561017c57600080fd5b6101846106d5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c45780820151818401526020810190506101a9565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561020a57600080fd5b61023f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061070e565b604051808215151515815260200191505060405180910390f35b341561026457600080fd5b61026c610800565b6040518082815260200191505060405180910390f35b341561028d57600080fd5b6102e1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610806565b604051808215151515815260200191505060405180910390f35b341561030657600080fd5b61033b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610aa0565b604051808215151515815260200191505060405180910390f35b341561036057600080fd5b610368610c00565b604051808260ff1660ff16815260200191505060405180910390f35b61038c610c05565b005b341561039957600080fd5b6103af6004808035906020019091905050610c17565b005b34156103bc57600080fd5b6103d26004808035906020019091905050610d7e565b005b34156103df57600080fd5b61040b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ded565b6040518082815260200191505060405180910390f35b341561042c57600080fd5b6104426004808035906020019091905050610e36565b6040518082815260200191505060405180910390f35b341561046357600080fd5b61046b610e74565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104ab578082015181840152602081019050610490565b50505050905090810190601f1680156104d85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104f157600080fd5b6104f9610ead565b6040518082815260200191505060405180910390f35b341561051a57600080fd5b61054f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ed9565b604051808215151515815260200191505060405180910390f35b61057f6004808035906020019091905050611039565b005b341561058c57600080fd5b6105c1600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061119c565b604051808215151515815260200191505060405180910390f35b34156105e657600080fd5b610631600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506112f5565b6040518082815260200191505060405180910390f35b341561065257600080fd5b610671600480803590602001909190803590602001909190505061137c565b6040518082815260200191505060405180910390f35b341561069257600080fd5b6106c7600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061139a565b005b60055481565b60065481565b6040805190810160405280601981526020017f4469737472696275746564205574696c69747920546f6b656e0000000000000081525081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60045481565b600080600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101580156108d75750828110155b15156108e257600080fd5b82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254019250508190555082600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811015610a2f5782600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a360019150509392505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610afe57600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610b4c57600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508160056000828254019250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506001905092915050565b601281565b34600660008282540192505081905550565b60008082118015610c67575081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410155b1515610c7257600080fd5b610c7a610ead565b8202905081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508160046000828254039250508190555081600560008282540392505081905550806006600082825403925050819055507f210405eb88ac7589aa9de0a6e36b9c9d3cd6e4061b74363d250a77afe3c6efb78282604051808381526020018281526020019250505060405180910390a13373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501515610d7a57600080fd5b5050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dda57600080fd5b8060046000828254039250508190555050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600080600083600454019150610e4a610ead565b90506103e8610e5b8584600361144a565b6103e8018202811515610e6a57fe5b0492505050919050565b6040805190810160405280600381526020017f445354000000000000000000000000000000000000000000000000000000000081525081565b6000806005541415610ec3576007549050610ed6565b600554600654811515610ed257fe5b0490505b90565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f3757600080fd5b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610f8557600080fd5b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055508160056000828254039250508190555081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055506001905092915050565b600080600080600454148061105557506000611053610ead565b145b15611064576007549250611070565b61106d84610e36565b92505b61107a838561137c565b915081341015151561108b57600080fd5b836004600082825401925050819055508360056000828254019250508190555083600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816006600082825401925050819055507fe7360c0fa1984a85874443100f5b25dd4f84192659660eb199f6c96e11defbcb8483604051808381526020018281526020019250505060405180910390a181340390506000811115611196573373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561119557600080fd5b5b50505050565b600081600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156111ec57600080fd5b81600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600454611389610ead565b028260045401840203905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113f657600080fd5b806006600082825403925050819055508173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050151561144657600080fd5b5050565b600080600060018401600a0a86029150600a6005868481151561146957fe5b040181151561147457fe5b049050809250505093925050505600a165627a7a723058200ae9d8fa2b7940ea797634d883e7a9dbfbd92924861ddbab1f85d3652f2f27410029`
