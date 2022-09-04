const { ethers } = require('hardhat');
require("dotenv").config({path: ".env"});
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require('../constants');

async function main() {
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    METADATA_URL,
    WHITELIST_CONTRACT_ADDRESS
  );
  console.log("Crypto Devs Contract Address:", deployedCryptoDevsContract.address);
}

main()
  .then(() => process.exit(0))
  .catch(err => {
    console.error(err)
    process.exit(1);
  });
