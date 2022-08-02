// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  //We get the contract to deploy

  let AaveFallbackOracleAddress;

  const depolyAddr = await hre.ethers.getContractFactory("AaveFallbackOracle");
  const AaveFallbackOracle = await depolyAddr.deploy();

  await AaveFallbackOracle.deployed();

  console.log("AaveCollector:", AaveFallbackOracle.address);

  AaveFallbackOracleAddress = AaveFallbackOracle.address;
  await hre.run("verify:verify", {
    address: AaveFallbackOracleAddress,
    constructorArguments: [
    ],
  });


  const depolyAddr2 = await hre.ethers.getContractFactory("AaveOracle");
  const AaveOracle = await depolyAddr2.deploy(
      [process.env.DAI,process.env.BUSD,process.env.UNI],
      ["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000"],
      AaveFallbackOracleAddress,
      process.env.WETH
  );

  await AaveOracle.deployed();

  console.log("AaveCollector:", AaveOracle.address);

  await hre.run("verify:verify", {
    address: AaveOracle.address,
    constructorArguments: [
        [process.env.DAI,process.env.BUSD,process.env.UNI],
        ["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000"],
        AaveFallbackOracleAddress,
        process.env.WETH
    ],
  });


  




//   const depolyAddr = await hre.ethers.getContractFactory("AaveOracle");
//   const AaveCollector = await AaveCollector.deploy();

//   await AaveCollector.deployed();

//   console.log("AaveCollector:", AaveCollector.address);

//   await hre.run("verify:verify", {
//     address: AaveCollector.address,
//     constructorArguments: [
//     ],
//   });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });