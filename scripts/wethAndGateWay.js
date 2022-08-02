const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const depolyAddr = await hre.ethers.getContractFactory("WETH9");
  const WETH9 = await depolyAddr.deploy();

  await WETH9.deployed();

  console.log("WETH9:", WETH9.address);

  await hre.run("verify:verify", {
    address: WETH9.address,
    constructorArguments: [
    ],
  });

  const depolyAddr2 = await hre.ethers.getContractFactory("WETHGateway");
  const WETHGateway = await depolyAddr2.deploy(WETH9.address,process.env.LENDING_POOL);

  await WETHGateway.deployed();

  console.log("WETHGateway:", WETHGateway.address);

  await hre.run("verify:verify", {
    address: WETHGateway.address,
    constructorArguments: [
      WETH9.address,process.env.LENDING_POOL,
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