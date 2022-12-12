// importa o web3
import web3 from "../utils/web3";
// Endereço do contrato gerado no deploy
const address = "0x39031b2443f044d9e2A36Be645d138D0Cb4dc2DF";
// Abi gerada no deploy do contrato
const abi = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor",
        "signature": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_model",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_chassi",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_year",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "addVehicle",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function",
        "signature": "0x92a6782b"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_id",
                "type": "uint256"
            }
        ],
        "name": "buyVehicle",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true,
        "signature": "0x36ce0920"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x12065fe0"
    },
    {
        "inputs": [],
        "name": "getVehicles",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "model",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "chassi",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "year",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "toSale",
                        "type": "bool"
                    }
                ],
                "internalType": "struct Vehicle[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0xe6b7e207"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x8da5cb5b"
    },
    {
        "inputs": [],
        "name": "vehicleCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0x99704937"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "vehicles",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "model",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "chassi",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "year",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "toSale",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true,
        "signature": "0xb8ba95fa"
    }
]

//exporte o contrato
export default new web3.eth.Contract(abi, address);