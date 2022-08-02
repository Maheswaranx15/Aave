
const hre = require("hardhat");
require("dotenv").config();

async function main() {


  let ReserveAddress ;
  let GenericAddress ;
  let ValiditionAddress;
  let LendingPoolAddress;


  const Reserve = await hre.ethers.getContractFactory("ReserveLogic");
  // const ReserveLogic = await Reserve.deploy();

  // await ReserveLogic.deployed();

  // ReserveAddress = ReserveLogic.address;

  // console.log("ReserveLogic:", ReserveAddress);

  await hre.run("verify:verify", {
    address: '0xBa31790529b9CA63f647c8252F42E58153130E2D',
    constructorArguments: [],
  });



  const Generic = await hre.ethers.getContractFactory("GenericLogic");
  // const GenericLogic = await Generic.deploy();
  
  // await GenericLogic.deployed();

  // GenericAddress = GenericLogic.address;
  
  // console.log("GenericLogic:", GenericAddress);

  await hre.run("verify:verify", {
    address: '0xa493AeBa149C17813C926F56B2ddFF26057E4FAA',
    constructorArguments: [],
  });


  const validition = await hre.ethers.getContractFactory("ValidationLogic", {
  libraries: {
      GenericLogic: '0xa493AeBa149C17813C926F56B2ddFF26057E4FAA'
  },
  });
  
  // const validitionLogic = await validition.deploy();

  // await validitionLogic.deployed();

  // ValiditionAddress = validitionLogic.address;

  // console.log("validitionLogic:", ValiditionAddress);

  await hre.run("verify:verify", {
    address: '0x82bc8cEE79Af54151F7550722E056C19416B33B2',
    constructorArguments: [],
    libraries: {
      GenericLogic: '0xa493AeBa149C17813C926F56B2ddFF26057E4FAA'
    },
  });


  // const lp = await hre.ethers.getContractFactory("LendingPool", {
  //   libraries: {
  //     ValidationLogic: ValiditionAddress,
  //     ReserveLogic: ReserveAddress,    
  // }
  // });

  // const lpMain = await lp.deploy();

  // await lpMain.deployed();

  // LendingPoolAddress =  lpMain.address;

  // console.log("LendingPool:", LendingPoolAddress);

  await hre.run("verify:verify", {
    address: '0x19c15b343b2bb62e3Ab742bD91f519860Ba05edB',
    constructorArguments: [],
    libraries: {
      ValidationLogic: '0x82bc8cEE79Af54151F7550722E056C19416B33B2',
      ReserveLogic: '0xBa31790529b9CA63f647c8252F42E58153130E2D',
    },
  });

  // const LendingAddrProvider = await hre.ethers.getContractAt("LendingPoolAddressesProvider",process.env.LENDING_ADDRESS_PROVIDER);
  // await LendingAddrProvider.setLendingPoolImpl(LendingPoolAddress);
  // var impAddress = await LendingAddrProvider.getLendingPool();
  // console.log("impaddress", impAddress);

  await hre.run("verify:verify", {
    address: '0x0000000000000000000000000000000000000000',
    constructorArguments: [
      process.env.LENDING_ADDRESS_PROVIDER
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

