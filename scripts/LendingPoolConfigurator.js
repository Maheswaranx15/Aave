
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  
  let LendingPoolConfiguratorAddr;
  
  const depolyAddr = await hre.ethers.getContractFactory("LendingPoolConfigurator");
  const LendingPoolConfigurator = await depolyAddr.deploy();

  await LendingPoolConfigurator.deployed();

  console.log("LendingPoolConfigurator:", LendingPoolConfigurator.address);

  LendingPoolConfiguratorAddr = LendingPoolConfigurator.address;

  await hre.run("verify:verify", {
    address: LendingPoolConfiguratorAddr,
    constructorArguments: [
    ],
  });

  const LendingAddrProvider = await hre.ethers.getContractAt("LendingPoolAddressesProvider",process.env.LENDING_ADDRESS_PROVIDER);
  await LendingAddrProvider.setLendingPoolConfiguratorImpl(LendingPoolConfiguratorAddr);
  var impAddress = await LendingAddrProvider.getLendingPoolConfigurator();

  console.log("LendingPoolConfigurator Proxy Address", impAddress);

  await hre.run("verify:verify", {
    address: impAddress,
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