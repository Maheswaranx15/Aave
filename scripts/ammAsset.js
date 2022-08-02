
const hre = require("hardhat");

async function main() {

  let underLeyAddress = "0xb17d10eCC7D3DB65B669FdcCF7d43295d9a5698E";
  let AtokenAddress = "0xE6514Bf22170274cd86edd984adA3Bb7248815a9" ;
  let stableTokenAddress = "0x94abC9a61D97b349C36e02123b50b43b9FBB361f";
  let varaibleTokenAddress = "0xE194d4bfF05c91d0C2d2c695276be0D48aAD757A";
  let DefaultReserveInterestRateStrategyAddress = "0xCA031D7F27775a0b7d4a86CEeec603Bee9E11B6C" ;
  let LendingPoolAddressesProvider = "0x8411c382361294f1473616bC20c8ab4D6f24ca35";
  let LendingPool = "0x23C8691232deA7652f35Ba88bdC73dD5c5FB847f";
  let LendingPoolConfigurator = "0x3865B7bc6167D36abE35693daF0471030Ec439bD";
  let IncentivesController = "0x46c1c06f808586b3b64187569f52759DB8916624";
  let ReserveTreasuryAddress = "0x02a968BAf4ACbFd9a871f22b94312c7560b4BD46";


//   const atoken = await hre.ethers.getContractFactory("AToken");
//   const aTokenAsset = await atoken.deploy(LendingPool,
//     underLeyAddress,
//     ReserveTreasuryAddress,
//     "Morx AMM Market UniDAIBUSD",
//     "aAmmUniDAIBUSD",
//     IncentivesController);

//   await aTokenAsset.deployed();

//   AtokenAddress = aTokenAsset.address;

//   console.log("underleyAsset:", AtokenAddress);

//   await hre.run("verify:verify", {
//     address: AtokenAddress,
//     constructorArguments: [LendingPool,
//         underLeyAddress,
//         ReserveTreasuryAddress,
//         "Morx AMM Market UniDAIBUSD",
//         "aAmmUniDAIBUSD",
//         IncentivesController],
//   });



//   const Stable = await hre.ethers.getContractFactory("StableDebtToken");
//   const StableLogic = await Stable.deploy(
//     LendingPool,
//     underLeyAddress,
//     "Morx stable debt bearing UniDAIBUSD",
//     "stableDebtUniDAIBUSD",
//     IncentivesController
//   );
  
//   await StableLogic.deployed();

//   stableTokenAddress = StableLogic.address;
  
//   console.log("stableTokenAddress:", stableTokenAddress);

//   await hre.run("verify:verify", {
//     address: stableTokenAddress,
//     constructorArguments: [
//         LendingPool,
//         underLeyAddress,
//         "Morx stable debt bearing UniDAIBUSD",
//         "stableDebtUniDAIBUSD",
//         IncentivesController
//     ],
//   });


//   const Variable = await hre.ethers.getContractFactory("VariableDebtToken");
  
//   const VariableLogic = await Variable.deploy(
//     LendingPool,
//     underLeyAddress,
//     "Morx variable debt bearing UniDAIBUSD",
//     "variableDebtUniDAIBUSD",
//     IncentivesController
//   );

//   await VariableLogic.deployed();

//   varaibleTokenAddress = VariableLogic.address;

//   console.log("varaibleTokenAddress:", varaibleTokenAddress);

//   await hre.run("verify:verify", {
//     address: varaibleTokenAddress,
//     constructorArguments: [
//         LendingPool,
//         underLeyAddress,
//         "Morx variable debt bearing UniDAIBUSD",
//         "variableDebtUniDAIBUSD",
//         IncentivesController
//     ],
//   });


//   const DRI = await hre.ethers.getContractFactory("DefaultReserveInterestRateStrategy");

//   const DRIAddr = await DRI.deploy(
//     LendingPoolAddressesProvider,
//     "450000000000000000000000000",
//     "30000000000000000000000000",
//     "100000000000000000000000000",
//     "3000000000000000000000000000",
//     "100000000000000000000000000",
//     "3000000000000000000000000000"
//   );

//   await DRIAddr.deployed();

//   DefaultReserveInterestRateStrategyAddress =  DRIAddr.address;

//   console.log("DefaultReserveInterestRateStrategyAddress:", DefaultReserveInterestRateStrategyAddress);

//   await hre.run("verify:verify", {
//     address: DefaultReserveInterestRateStrategyAddress,
//     constructorArguments: [
//         LendingPoolAddressesProvider,
//         "450000000000000000000000000",
//         "30000000000000000000000000",
//         "100000000000000000000000000",
//         "3000000000000000000000000000",
//         "100000000000000000000000000",
//         "3000000000000000000000000000"
//     ],
   
//   });
  
  const LendingConfig = await hre.ethers.getContractAt("LendingPoolConfigurator",LendingPoolConfigurator);
  await LendingConfig.initReserve(
     AtokenAddress,
     stableTokenAddress ,
     varaibleTokenAddress ,
     "18",
     DefaultReserveInterestRateStrategyAddress,
     {
        gasPrice: 30,
        gasLimit: 900000
    }
);

//   const lendingPoolAbi = await hre.ethers.getContractAt("LendingPool",LendingPool);

//    var impAddress = await lendingPoolAbi.getReserveData(underLeyAddress);

//    console.log("AToken",impAddress.aTokenAddress);
//    console.log("stableDebtTokenAddress:",impAddress.stableDebtTokenAddress);
//    console.log("variableDebtTokenAddress:",impAddress.variableDebtTokenAddress);

//   await hre.run("verify:verify", {
//     address: impAddress.aTokenAddress,
//     constructorArguments: [
//         LendingPoolConfigurator
//     ],
//   });

//   await hre.run("verify:verify", {
//     address: impAddress.stableDebtTokenAddress,
//     constructorArguments: [
//         stableDebtTokenAddress
//     ],
//   });

//   await hre.run("verify:verify", {
//     address: impAddress.variableDebtTokenAddress,
//     constructorArguments: [
//         variableDebtTokenAddress
//     ],
    
//   });

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
