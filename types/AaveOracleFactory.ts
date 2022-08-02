/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AaveOracle } from "./AaveOracle";

export class AaveOracleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    assets: string[],
    sources: string[],
    fallbackOracle: string,
    weth: string,
    overrides?: Overrides
  ): Promise<AaveOracle> {
    return super.deploy(
      assets,
      sources,
      fallbackOracle,
      weth,
      overrides || {}
    ) as Promise<AaveOracle>;
  }
  getDeployTransaction(
    assets: string[],
    sources: string[],
    fallbackOracle: string,
    weth: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      assets,
      sources,
      fallbackOracle,
      weth,
      overrides || {}
    );
  }
  attach(address: string): AaveOracle {
    return super.attach(address) as AaveOracle;
  }
  connect(signer: Signer): AaveOracleFactory {
    return super.connect(signer) as AaveOracleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveOracle {
    return new Contract(address, _abi, signerOrProvider) as AaveOracle;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "sources",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "source",
        type: "address",
      },
    ],
    name: "AssetSourceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
    ],
    name: "FallbackOracleUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "weth",
        type: "address",
      },
    ],
    name: "WethSet",
    type: "event",
  },
  {
    inputs: [],
    name: "WETH",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getAssetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
    ],
    name: "getAssetsPrices",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFallbackOracle",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getSourceOfAsset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "sources",
        type: "address[]",
      },
    ],
    name: "setAssetSources",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "fallbackOracle",
        type: "address",
      },
    ],
    name: "setFallbackOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000ead38038062000ead833981810160405260808110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82518660208202830111640100000000821117156200008c57600080fd5b82525081516020918201928201910280838360005b83811015620000bb578181015183820152602001620000a1565b5050505090500160405260200180516040519392919084640100000000821115620000e557600080fd5b908301906020820185811115620000fb57600080fd5b82518660208202830111640100000000821117156200011957600080fd5b82525081516020918201928201910280838360005b83811015620001485781810151838201526020016200012e565b505050509190910160409081526020830151920151919350909150600090506200017162000222565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350620001c68262000226565b620001d2848462000270565b6001600160601b0319606082901b166080526040516001600160a01b038216907f13a533084dcbb1cfe0dbea708ea977223c27c44d94f2fa3867a167c9cd340bf990600090a250505050620003bc565b3390565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b8051825114620002c7576040805162461bcd60e51b815260206004820152601a60248201527f494e434f4e53495354454e545f504152414d535f4c454e475448000000000000604482015290519081900360640190fd5b60005b8251811015620003b757818181518110620002e157fe5b602002602001015160016000858481518110620002fa57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106200035357fe5b60200260200101516001600160a01b03168382815181106200037157fe5b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a3600101620002ca565b505050565b60805160601c610ace620003df600039806105bc52806106005250610ace6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80639d23d9f2116100665780639d23d9f214610125578063abfd5310146101e5578063ad5c4648146102a7578063b3596f07146102af578063f2fde38b146102e75761009e565b8063170aee73146100a35780636210308c146100cb578063715018a6146100ef5780638da5cb5b146100f757806392bf2be0146100ff575b600080fd5b6100c9600480360360208110156100b957600080fd5b50356001600160a01b031661030d565b005b6100d3610371565b604080516001600160a01b039092168252519081900360200190f35b6100c9610380565b6100d3610422565b6100d36004803603602081101561011557600080fd5b50356001600160a01b0316610431565b6101956004803603602081101561013b57600080fd5b81019060208101813564010000000081111561015657600080fd5b82018360208201111561016857600080fd5b8035906020019184602083028401116401000000008311171561018a57600080fd5b509092509050610452565b60408051602080825283518183015283519192839290830191858101910280838360005b838110156101d15781810151838201526020016101b9565b505050509050019250505060405180910390f35b6100c9600480360360408110156101fb57600080fd5b81019060208101813564010000000081111561021657600080fd5b82018360208201111561022857600080fd5b8035906020019184602083028401116401000000008311171561024a57600080fd5b91939092909160208101903564010000000081111561026857600080fd5b82018360208201111561027a57600080fd5b8035906020019184602083028401116401000000008311171561029c57600080fd5b5090925090506104ef565b6100d36105ba565b6102d5600480360360208110156102c557600080fd5b50356001600160a01b03166105de565b60408051918252519081900360200190f35b6100c9600480360360208110156102fd57600080fd5b50356001600160a01b03166107c7565b6103156108bf565b6000546001600160a01b03908116911614610365576040805162461bcd60e51b81526020600482018190526024820152600080516020610a79833981519152604482015290519081900360640190fd5b61036e816108c3565b50565b6002546001600160a01b031690565b6103886108bf565b6000546001600160a01b039081169116146103d8576040805162461bcd60e51b81526020600482018190526024820152600080516020610a79833981519152604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6001600160a01b03808216600090815260016020526040902054165b919050565b6060808267ffffffffffffffff8111801561046c57600080fd5b50604051908082528060200260200182016040528015610496578160200160208202803683370190505b50905060005b838110156104e7576104c88585838181106104b357fe5b905060200201356001600160a01b03166105de565b8282815181106104d457fe5b602090810291909101015260010161049c565b509392505050565b6104f76108bf565b6000546001600160a01b03908116911614610547576040805162461bcd60e51b81526020600482018190526024820152600080516020610a79833981519152604482015290519081900360640190fd5b6105b48484808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060408051602080880282810182019093528782529093508792508691829185019084908082843760009201919091525061090d92505050565b50505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b038082166000818152600160205260408120549092908116917f0000000000000000000000000000000000000000000000000000000000000000909116141561063957670de0b6b3a764000091505061044d565b6001600160a01b0381166106c9576002546040805163b3596f0760e01b81526001600160a01b0386811660048301529151919092169163b3596f07916024808301926020929190829003018186803b15801561069457600080fd5b505afa1580156106a8573d6000803e3d6000fd5b505050506040513d60208110156106be57600080fd5b5051915061044d9050565b6000816001600160a01b03166350d25bcd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561070457600080fd5b505afa158015610718573d6000803e3d6000fd5b505050506040513d602081101561072e57600080fd5b50519050600081131561074457915061044d9050565b6002546040805163b3596f0760e01b81526001600160a01b0387811660048301529151919092169163b3596f07916024808301926020929190829003018186803b15801561079157600080fd5b505afa1580156107a5573d6000803e3d6000fd5b505050506040513d60208110156107bb57600080fd5b5051925061044d915050565b6107cf6108bf565b6000546001600160a01b0390811691161461081f576040805162461bcd60e51b81526020600482018190526024820152600080516020610a79833981519152604482015290519081900360640190fd5b6001600160a01b0381166108645760405162461bcd60e51b8152600401808060200182810382526026815260200180610a536026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fce7a780d33665b1ea097af5f155e3821b809ecbaa839d3b33aa83ba28168cefb90600090a250565b8051825114610963576040805162461bcd60e51b815260206004820152601a60248201527f494e434f4e53495354454e545f504152414d535f4c454e475448000000000000604482015290519081900360640190fd5b60005b8251811015610a4d5781818151811061097b57fe5b60200260200101516001600085848151811061099357fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508181815181106109eb57fe5b60200260200101516001600160a01b0316838281518110610a0857fe5b60200260200101516001600160a01b03167f22c5b7b2d8561d39f7f210b6b326a1aa69f15311163082308ac4877db6339dc160405160405180910390a3600101610966565b50505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572a26469706673582212209a1167a227df15fb039706304a47b11b43fc1d05345e12a5ae735f35722f79a064736f6c634300060c0033";
