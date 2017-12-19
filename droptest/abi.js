window.abi = [{
  "constant": false,
  "inputs": [{"name": "_users", "type": "address[]"}, {"name": "_tokens", "type": "uint256[]"}],
  "name": "addSocial",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "", "type": "uint256"}],
  "name": "owners",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "", "type": "address"}],
  "name": "social",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_owner", "type": "address"}],
  "name": "removeOwner",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_users", "type": "address[]"}],
  "name": "removeUsers",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "", "type": "address"}],
  "name": "isOwner",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "dropEnabled",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "levPerUser",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "operator",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_users", "type": "address[]"}],
  "name": "addUsers",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_owner", "type": "address"}],
  "name": "addOwner",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "user", "type": "address"}],
  "name": "balanceOf",
  "outputs": [{"name": "", "type": "uint256"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "toggleDrop",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "getOwners",
  "outputs": [{"name": "", "type": "address[]"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{"name": "", "type": "address"}],
  "name": "users",
  "outputs": [{"name": "", "type": "bool"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_operator", "type": "address"}],
  "name": "setOperator",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{"name": "_address", "type": "address"}, {"name": "_amount", "type": "uint256"}],
  "name": "transferTokens",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [],
  "name": "redeemTokens",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [],
  "name": "token",
  "outputs": [{"name": "", "type": "address"}],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{"name": "owners", "type": "address[]"}, {"name": "_token", "type": "address"}, {
    "name": "_levPerUser",
    "type": "uint256"
  }], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{"indexed": false, "name": "user", "type": "address"}, {
    "indexed": false,
    "name": "tokens",
    "type": "uint256"
  }],
  "name": "Redeemed",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
  "name": "OwnerAddition",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{"indexed": true, "name": "owner", "type": "address"}],
  "name": "OwnerRemoval",
  "type": "event"
}]
