const { ethers } = require('ethers')

const RPC_URL = process.env.INFURA_GOERLI_ENDPOINT

const abi = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor',
  },
]

const CONTRACT_ADDRESS = '0x28c1C6e59bC2C0b63C872a4d779e74401275827D'

const PRIVATE_KEY = process.env.PRIVATE_KEY

const provider = new ethers.providers.JsonRpcProvider(RPC_URL)


// Signer
const signer = new ethers.Wallet(PRIVATE_KEY)

// Signer connected to a provider
const signerWithProvider = signer.connect(provider)

// Interact with a contract
// const ChiamakaUgwu = new ethers.Contract(CONTRACT_ADDRESS, abi, signerWithProvider);
