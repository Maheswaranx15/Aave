
const hre = require("hardhat");
require("dotenv").config();


async function main() {

  let underLeyAddress = "0xdAEc0A5A32d3352d20182Ef780Ef9BDF2aAaBf0D";
  let AtokenAddress = "0x8ef7ce61df05a0548978b0E876A2e3203385f2f5";
  let stableTokenAddress = "0x334574e15288E867AF05D6beF86d43ABCa8C9aD5" ;
  let varaibleTokenAddress = "0x46d337f57Ad6a081395CD306F2d9064516459F6A" ;
  let DefaultReserveInterestRateStrategyAddress ;


  // const token = await hre.ethers.getContractFactory("UNIToken");
  // const underleyAsset = await token.deploy();

  // await underleyAsset.deployed();

  // underLeyAddress = underleyAsset.address;

  // console.log("underleyAsset:", underLeyAddress);

  // await hre.run("verify:verify", {
  //   address: underleyAsset.address,
  //   constructorArguments: [],
  // });




  // const atoken = await hre.ethers.getContractFactory("AToken");
  // const aTokenAsset = await atoken.deploy(process.env.LENDING_POOL,
  //   underLeyAddress,
  //   process.env.COLLECTOR,
  //   "KapitonDefi interest bearing UNI ",
  //   "aUNI",
  //   process.env.ZERO_ADDRESS);

  // await aTokenAsset.deployed();

  // AtokenAddress = aTokenAsset.address;

  // console.log("underleyAsset:", AtokenAddress);

  // await hre.run("verify:verify", {
  //   address: AtokenAddress,
  //   constructorArguments: [process.env.LENDING_POOL,
  //       underLeyAddress,
  //       process.env.COLLECTOR,
  //       "KapitonDefi interest bearing UNI ",
  //       "aUNI",
  //       process.env.ZERO_ADDRESS],
  // });






  // const Stable = await hre.ethers.getContractFactory("StableDebtToken");
  // const StableLogic = await Stable.deploy(
  //   process.env.LENDING_POOL,
  //   underLeyAddress,
  //   "KapitonDefi stable debt bearing UNI  ",
  //   "stableDebtUNI",
  //   process.env.ZERO_ADDRESS
  // );
  
  // await StableLogic.deployed();

  // stableTokenAddress = StableLogic.address;
  
  // console.log("stableTokenAddress:", stableTokenAddress);

  // await hre.run("verify:verify", {
  //   address: stableTokenAddress,
  //   constructorArguments: [
  //       process.env.LENDING_POOL,
  //       underLeyAddress,
  //       "KapitonDefi stable debt bearing UNI  ",
  //       "stableDebtUNI",
  //       process.env.ZERO_ADDRESS
  //   ],
  // });


  // const Variable = await hre.ethers.getContractFactory("VariableDebtToken");
  
  // const VariableLogic = await Variable.deploy(
  //   process.env.LENDING_POOL,
  //   underLeyAddress,
  //   "KapitonDefi variable debt bearing UNI",
  //   "variableDebtUNI",
  //    process.env.ZERO_ADDRESS
  // );

  // await VariableLogic.deployed();

  // varaibleTokenAddress = VariableLogic.address;

  // console.log("varaibleTokenAddress:", varaibleTokenAddress);

  // await hre.run("verify:verify", {
  //   address: varaibleTokenAddress,
  //   constructorArguments: [
  //       process.env.LENDING_POOL,
  //       underLeyAddress,
  //       "KapitonDefi variable debt bearing UNI",
  //       "variableDebtUNI",
  //       process.env.ZERO_ADDRESS
  //   ],
  // });


//   const DRI = await hre.ethers.getContractFactory("DefaultReserveInterestRateStrategy");

//   const DRIAddr = await DRI.deploy(
//     process.env.LENDING_ADDRESS_PROVIDER,
//     "450000000000000000000000000",
//     "0",
//     "70000000000000000000000000",
//     "3000000000000000000000000000",
//     "120000000000000000000000000",
//     "3000000000000000000000000000"
//   );

//   await DRIAddr.deployed();

//   DefaultReserveInterestRateStrategyAddress =  DRIAddr.address;

//   console.log("DefaultReserveInterestRateStrategyAddress:", DefaultReserveInterestRateStrategyAddress);

//   await hre.run("verify:verify", {
//     address: DefaultReserveInterestRateStrategyAddress,
//     constructorArguments: [
//         process.env.LENDING_ADDRESS_PROVIDER,
//         "450000000000000000000000000",
//         "0",
//         "70000000000000000000000000",
//         "3000000000000000000000000000",
//         "120000000000000000000000000",
//         "3000000000000000000000000000"
//     ],
   
//   });
  
//   const LendingConfig = await hre.ethers.getContractAt("LendingPoolConfigurator",process.env.LendingPoolConfigurator);
//   await LendingConfig.initReserve(
//      AtokenAddress,
//      stableTokenAddress ,
//      varaibleTokenAddress ,
//      "18",
//      DefaultReserveInterestRateStrategyAddress
// );

  const lendingPoolAbi = await hre.ethers.getContractAt("LendingPool",process.env.LENDING_POOL);

   let impAddress = await lendingPoolAbi.getReserveData(underLeyAddress);

   console.log("AToken",impAddress.aTokenAddress);
   console.log("stableDebtTokenAddress:",impAddress.stableDebtTokenAddress);
   console.log("variableDebtTokenAddress:",impAddress.variableDebtTokenAddress);

  await hre.run("verify:verify", {
    address: impAddress.aTokenAddress,
    constructorArguments: [
      "0x66378A4E4F8Fd4CeBe1E5E07BcEEFe700eb02E59"
    ],
  });

  await hre.run("verify:verify", {
    address: impAddress.stableDebtTokenAddress,
    constructorArguments: [
     "0x66378A4E4F8Fd4CeBe1E5E07BcEEFe700eb02E59"
    ],
  });

  await hre.run("verify:verify", {
    address: impAddress.variableDebtTokenAddress,
    constructorArguments: [
      "0x66378A4E4F8Fd4CeBe1E5E07BcEEFe700eb02E59"
    ],
    
  });

}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

