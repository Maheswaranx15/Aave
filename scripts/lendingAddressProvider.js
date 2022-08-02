
const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const depolyAddr = await hre.ethers.getContractFactory("LendingPoolAddressesProvider");
  const LendingPoolAddressesProvider = await depolyAddr.deploy("IngressDefi Market");

  await LendingPoolAddressesProvider.deployed();

  console.log("LendingPoolAddressProviders:", LendingPoolAddressesProvider.address);

  await hre.run("verify:verify", {
    address: LendingPoolAddressesProvider.address,
    constructorArguments: [
      "IngressDefi Market"
    ],
  });
  
  await LendingPoolAddressesProvider.setPoolAdmin(process.env.ADMIN_WALLET);
  await LendingPoolAddressesProvider.setEmergencyAdmin(process.env.ADMIN_WALLET)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});

