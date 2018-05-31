import Web3 from 'web3'
let web3
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider)
} else {
    web3 = new Web3(
        new Web3.providers.HttpProvider(
            'https://rinkeby.infura.io/WK3Krit54JEpdbLT2Yty'
        )
    )
}
export default web3
