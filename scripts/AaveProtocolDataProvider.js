const hre = require("hardhat");
require("dotenv").config();

async function main() {

  const depolyAddr = await hre.ethers.getContractFactory("AaveProtocolDataProvider");
  const AaveProtocolDataProvider = await depolyAddr.deploy(process.env.LENDING_ADDRESS_PROVIDER);

  await AaveProtocolDataProvider.deployed();

  console.log("AaveProtocolDataProvider:", AaveProtocolDataProvider.address);

  await hre.run("verify:verify", {
    address: AaveProtocolDataProvider.address,
    constructorArguments: [
      process.env.LENDING_ADDRESS_PROVIDER
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });