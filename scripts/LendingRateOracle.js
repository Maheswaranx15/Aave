const hre = require("hardhat");
require("dotenv").config();

async function main() {

    let LendingRateOracleAddress;
    const depolyAddr = await hre.ethers.getContractFactory("LendingRateOracle");
    const LendingRateOracle = await depolyAddr.deploy();

    await LendingRateOracle.deployed();

    console.log("LendingRateOracle:", LendingRateOracle.address);

    await hre.run("verify:verify", {
      address: LendingRateOracle.address,
      constructorArguments: [
      ],
    });

    const LendingAddrProvider = await hre.ethers.getContractAt("LendingPoolAddressesProvider",process.env.LENDING_ADDRESS_PROVIDER);
    await LendingAddrProvider.setLendingRateOracle(LendingRateOracle.address);
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });