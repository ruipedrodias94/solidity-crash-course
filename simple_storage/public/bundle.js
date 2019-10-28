const simpleStorageABI = [{
    "constant": true,
    "inputs": [],
    "name": "data",
    "outputs": [
        {
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {
            "name": "_data",
            "type": "string"
        }
    ],
    "name": "setData",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
},
{
    "constant": true,
    "inputs": [],
    "name": "getData",
    "outputs": [
        {
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
}]

const simpleStorageAddress = "0xC406a4b7e1D8d728035094d6ec9D1744ba00e50e";

const web3 = new Web3("http://localhost:9545");

const simpleStorageContract = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);

document.addEventListener("DOMContentLoaded", () => {
    const $setData = document.getElementById("setData");
    const $data = document.getElementById("data");
    let accounts = [];

    // Get the accounts
    web3.eth.getAccounts()
        .then((_accounts) => {
            accounts = _accounts;
        })


    const getData = () => {
        simpleStorageContract.methods
            .data()
            .call()
            .then((result) => {
                $data.innerHTML = result;
            });
    }

    getData();

    const value = document.getElementById("setData");
    const button = document.getElementById("button-1").addEventListener("mouseover", (event) => {
        document.getElementById("button-1").innerHTML= "CONAAAAAAAAAAAAAAAAAAAAAAAA";
    })
    

    $setData.addEventListener("submit", event => {
        event.preventDefault();
        const data = event.target.elements[0].value;
        simpleStorageContract.methods.setData(data)
            .send({
                from: accounts[0]
            })
            .then(getData);
    })
});