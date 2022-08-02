
const hre = require("hardhat");
require("dotenv").config();

async function main() {

  let underLeyAddress = "0xFf0cD64B858c8ea88382e98F82c4C01f124fB401"
  let AtokenAddress = "0x8fa61D739a06E3F4C18230A82Cfe6962962d38Ba"
  let stableTokenAddress = "0x6803EA5EA6d51153837B87000dBDC79aF90D7a18"
  let varaibleTokenAddress = "0x2525CC3066170C9226A375D29a4884BEe9b192F4"
  let DefaultReserveInterestRateStrategyAddress = "0x1558A7ccAb45b908b41A3049E532BdfbBe0f5024"


  const token = await hre.ethers.getContractFactory("BUSDToken");
  const underleyAsset = await token.deploy();

  await underleyAsset.deployed();

  underLeyAddress = underleyAsset.address;

  console.log("underleyAsset:", underLeyAddress);

  await hre.run("verify:verify", {
    address: underLeyAddress,
    constructorArguments: [],
  });




  const atoken = await hre.ethers.getContractFactory("AToken");
  const aTokenAsset = await atoken.deploy(process.env.LENDING_POOL,
    underLeyAddress,
    process.env.COLLECTOR,
    "KapitonDefi interest bearing Busd ",
    "aBusd",
    process.env.ZERO_ADDRESS);

  await aTokenAsset.deployed();

  AtokenAddress = aTokenAsset.address;

  console.log("underleyAsset:", AtokenAddress);

  await hre.run("verify:verify", {
    address: AtokenAddress,
    constructorArguments: [process.env.LENDING_POOL,
        underLeyAddress,
        process.env.COLLECTOR,
        "KapitonDefi interest bearing Busd ",
        "aBusd",
        process.env.ZERO_ADDRESS],
  });






  const Stable = await hre.ethers.getContractFactory("StableDebtToken");
  const StableLogic = await Stable.deploy(
    process.env.LENDING_POOL,
    underLeyAddress,
    "KapitonDefi stable debt bearing Busd  ",
    "stableDebtBusd",
    process.env.ZERO_ADDRESS
  );
  
  await StableLogic.deployed();

  stableTokenAddress = StableLogic.address;
  
  console.log("stableTokenAddress:", stableTokenAddress);

  await hre.run("verify:verify", {
    address: stableTokenAddress,
    constructorArguments: [
        process.env.LENDING_POOL,
        underLeyAddress,
        "KapitonDefi stable debt bearing Busd  ",
        "stableDebtBusd",
        process.env.ZERO_ADDRESS
    ],
  });


  const Variable = await hre.ethers.getContractFactory("VariableDebtToken");
  
  const VariableLogic = await Variable.deploy(
    process.env.LENDING_POOL,
    underLeyAddress,
    "KapitonDefi variable debt bearing Busd",
    "variableDebtBusd",
     process.env.ZERO_ADDRESS
  );

  await VariableLogic.deployed();

  varaibleTokenAddress = VariableLogic.address;

  console.log("varaibleTokenAddress:", varaibleTokenAddress);

  await hre.run("verify:verify", {
    address: varaibleTokenAddress,
    constructorArguments: [
        process.env.LENDING_POOL,
        underLeyAddress,
        "KapitonDefi variable debt bearing Busd",
        "variableDebtBusd",
        process.env.ZERO_ADDRESS
    ],
  });


  const DRI = await hre.ethers.getContractFactory("DefaultReserveInterestRateStrategy");

  const DRIAddr = await DRI.deploy(
    process.env.LENDING_ADDRESS_PROVIDER,
    "450000000000000000000000000",
    "0",
    "70000000000000000000000000",
    "3000000000000000000000000000",
    "120000000000000000000000000",
    "3000000000000000000000000000"
  );

  await DRIAddr.deployed();

  DefaultReserveInterestRateStrategyAddress =  DRIAddr.address;

  console.log("DefaultReserveInterestRateStrategyAddress:", DefaultReserveInterestRateStrategyAddress);

  await hre.run("verify:verify", {
    address: DefaultReserveInterestRateStrategyAddress,
    constructorArguments: [
        process.env.LENDING_ADDRESS_PROVIDER,
        "450000000000000000000000000",
        "0",
        "70000000000000000000000000",
        "3000000000000000000000000000",
        "120000000000000000000000000",
        "3000000000000000000000000000"
    ],   
  });
  
  const LendingConfig = await hre.ethers.getContractAt("LendingPoolConfigurator",process.env.LendingPoolConfigurator);
  const lendingPoolAbi = await hre.ethers.getContractAt("LendingPool",process.env.LENDING_POOL);
  const LendingAddrProvider = await hre.ethers.getContractAt("LendingPoolAddressesProvider",process.env.LENDING_ADDRESS_PROVIDER);
  // await LendingAddrProvider.setPoolAdmin(process.env.ADMIN_WALLET, {
  //   from: process.env.ADMIN_WALLET
  // });
  // await LendingConfig.initReserve(
  //   process.env.ATOKEN,
  //   process.env.STABLE ,
  //   process.env.VARIABlE ,
  //    "18",
  //   process.env.DEFAULT, {
  //     from : process.env.ADMIN_WALLET,
  //     gasLimit: 2500000
  // });

 

  var impAddress = await lendingPoolAbi.getReserveData(underLeyAddress);

  console.log("AToken",impAddress.aTokenAddress);
  console.log("stableDebtTokenAddress:",impAddress.stableDebtTokenAddress);
  console.log("variableDebtTokenAddress:",impAddress.variableDebtTokenAddress);

  await hre.run("verify:verify", {
    address: impAddress.aTokenAddress,
    constructorArguments: [
        process.env.LendingPoolConfigurator
    ],
  });

  await hre.run("verify:verify", {
    address: impAddress.stableDebtTokenAddress,
    constructorArguments: [
      process.env.LendingPoolConfigurator
    ],
  });

  await hre.run("verify:verify", {
    address: impAddress.variableDebtTokenAddress,
    constructorArguments: [
      process.env.LendingPoolConfigurator
    ],    
  });

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

