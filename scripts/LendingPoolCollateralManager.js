// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  
  const depolyAddr = await hre.ethers.getContractFactory("LendingPoolCollateralManager");
  const LendingPoolCollateralManager = await depolyAddr.deploy();

  await LendingPoolCollateralManager.deployed();

  console.log("LendingPoolCollateralManager:", LendingPoolCollateralManager.address);

  await hre.run("verify:verify", {
    address: LendingPoolCollateralManager.address,
    constructorArguments: [
    ],
  });

  const LendingAddrProvider = await hre.ethers.getContractAt("LendingPoolAddressesProvider",process.env.LENDING_ADDRESS_PROVIDER);
  await LendingAddrProvider.setLendingPoolCollateralManager(LendingPoolCollateralManager.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

