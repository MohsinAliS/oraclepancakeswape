const { ChainId, Token, WETH, Fetcher, Route } = require('@uniswap/sdk');
const { ethers } = require("hardhat");

async function main() {

const DAI = new Token(ChainId.MAINNET, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18)
// note that you may want/need to handle this async code differently,
// for example if top-level await is not an option
const pair = await Fetcher.fetchPairData(DAI, WETH[DAI.chainId])
const route = new Route([pair], WETH[DAI.chainId])
console.log(route.midPrice.toSignificant(6)) // 201.306
console.log(route.midPrice.invert().toSignificant(6)) // 0.00496756

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });