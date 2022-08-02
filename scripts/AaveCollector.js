const hre = require("hardhat");

async function main() {

  const depolyAddr = await hre.ethers.getContractFactory("AaveCollector");
  const AaveCollector = await depolyAddr.deploy();

  await AaveCollector.deployed();

  console.log("AaveCollector:", AaveCollector.address);

  await hre.run("verify:verify", {
    address: AaveCollector.address,
    constructorArguments: [
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