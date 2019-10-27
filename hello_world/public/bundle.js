let contractABI = [{
    "constant": true,
    "inputs": [],
    "name": "helloWorld",
    "outputs": [
        {
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
}];

const contractAdress = "0xaC044924992747BD5aacC1Fd170299B58B4BaEAC";

const web3 = new Web3("http://localhost:9545");

const helloWorldContract = new web3.eth.Contract(contractABI, contractAdress);

document.addEventListener("DOMContentLoaded", () => {
    helloWorldContract.methods.helloWorld().call()
        .then((result) => {
            document.getElementById('hello').innerHTML = result;
        });
});

web3.eth.getAccounts()
    .then(console.log)