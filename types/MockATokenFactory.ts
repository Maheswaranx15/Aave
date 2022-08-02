/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { MockAToken } from "./MockAToken";

export class MockATokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    pool: string,
    underlyingAssetAddress: string,
    reserveTreasury: string,
    tokenName: string,
    tokenSymbol: string,
    incentivesController: string,
    overrides?: Overrides
  ): Promise<MockAToken> {
    return super.deploy(
      pool,
      underlyingAssetAddress,
      reserveTreasury,
      tokenName,
      tokenSymbol,
      incentivesController,
      overrides || {}
    ) as Promise<MockAToken>;
  }
  getDeployTransaction(
    pool: string,
    underlyingAssetAddress: string,
    reserveTreasury: string,
    tokenName: string,
    tokenSymbol: string,
    incentivesController: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      pool,
      underlyingAssetAddress,
      reserveTreasury,
      tokenName,
      tokenSymbol,
      incentivesController,
      overrides || {}
    );
  }
  attach(address: string): MockAToken {
    return super.attach(address) as MockAToken;
  }
  connect(signer: Signer): MockATokenFactory {
    return super.connect(signer) as MockATokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAToken {
    return new Contract(address, _abi, signerOrProvider) as MockAToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract LendingPool",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "underlyingAssetAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveTreasury",
        type: "address",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
        type: "string",
      },
      {
        internalType: "address",
        name: "incentivesController",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "BalanceTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "ATOKEN_REVISION",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EIP712_REVISION",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RESERVE_TREASURY_ADDRESS",
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
    name: "UINT_MAX_VALUE",
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
    inputs: [],
    name: "UNDERLYING_ASSET_ADDRESS",
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
        name: "",
        type: "address",
      },
    ],
    name: "_nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiverOfUnderlying",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getScaledUserBalanceAndSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_underlyingAssetDecimals",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "_tokenSymbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "mintToTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "scaledBalanceOf",
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
    inputs: [],
    name: "scaledTotalSupply",
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
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferOnLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferUnderlyingTo",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x610100604052600080553480156200001657600080fd5b5060405162002ae238038062002ae2833981810160405260c08110156200003c57600080fd5b8151602083015160408085015160608601805192519496939591949391820192846401000000008211156200007057600080fd5b9083019060208201858111156200008657600080fd5b8251640100000000811182820188101715620000a157600080fd5b82525081516020918201929091019080838360005b83811015620000d0578181015183820152602001620000b6565b50505050905090810190601f168015620000fe5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200012257600080fd5b9083019060208201858111156200013857600080fd5b82516401000000008111828201881017156200015357600080fd5b82525081516020918201929091019080838360005b838110156200018257818101518382015260200162000168565b50505050905090810190601f168015620001b05780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919050505085858585858582826012838360379080519060200190620001e79291906200024f565b508251620001fd9060389060208601906200024f565b506039805460ff90931660ff19909316929092179091556001600160601b0319606091821b811660805298811b891660e05296871b881660a0525050505050901b1660c05250620002eb945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200029257805160ff1916838001178555620002c2565b82800160010185558215620002c2579182015b82811115620002c2578251825591602001919060010190620002a5565b50620002d0929150620002d4565b5090565b5b80821115620002d05760008155600101620002d5565b60805160601c60a05160601c60c05160601c60e05160601c6127476200039b600039806107c652806109ce5280610d0a5280610ded5280610eb55280610ef6528061146a52806116755280611dc25280611f1e525080610fa75280610fe8528061103e52806111b45250806109fd5280610db95280610e1c52806111d852806115985280611df15280611ecf525080611a335280611a5a5280612309528061233752806123e752506127476000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c80637535d24611610104578063b16a19de116100a2578063d505accf11610071578063d505accf146105fa578063d7020d0a1461064b578063dd62ed3e14610687578063f866c319146106b5576101da565b8063b16a19de146105bc578063b1bf962d146105c4578063b9844d8d146105cc578063d0fc81d2146105f2576101da565b806395d89b41116100de57806395d89b4114610554578063a457c2d71461055c578063a9059cbb14610588578063ae167335146105b4576101da565b80637535d2461461050557806378160376146105295780637df5bd3b14610531576101da565b806323b872dd1161017c5780633644e5151161014b5780633644e5151461047f57806339509351146104875780634efecaa5146104b357806370a08231146104df576101da565b806323b872dd1461035557806330adf81f1461038b5780633118724e14610393578063313ce56714610461576101da565b80630bd7ad3b116101b85780630bd7ad3b146102db578063156e29f6146102f557806318160ddd146103275780631da24f3e1461032f576101da565b806306fdde03146101df578063095ea7b31461025c5780630afbcdc91461029c575b600080fd5b6101e76106eb565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610221578181015183820152602001610209565b50505050905090810190601f16801561024e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102886004803603604081101561027257600080fd5b506001600160a01b038135169060200135610782565b604080519115158252519081900360200190f35b6102c2600480360360208110156102b257600080fd5b50356001600160a01b03166107a0565b6040805192835260208301919091528051918290030190f35b6102e36107bd565b60408051918252519081900360200190f35b6102886004803603606081101561030b57600080fd5b506001600160a01b0381351690602081013590604001356107c2565b6102e36109ad565b6102e36004803603602081101561034557600080fd5b50356001600160a01b0316610a92565b6102886004803603606081101561036b57600080fd5b506001600160a01b03813581169160208101359091169060400135610a9d565b6102e3610b5d565b61045f600480360360608110156103a957600080fd5b60ff82351691908101906040810160208201356401000000008111156103ce57600080fd5b8201836020820111156103e057600080fd5b8035906020019184600183028401116401000000008311171561040257600080fd5b91939092909160208101903564010000000081111561042057600080fd5b82018360208201111561043257600080fd5b8035906020019184600183028401116401000000008311171561045457600080fd5b509092509050610b81565b005b610469610ca9565b6040805160ff9092168252519081900360200190f35b6102e3610cb2565b6102886004803603604081101561049d57600080fd5b506001600160a01b038135169060200135610cb8565b6102e3600480360360408110156104c957600080fd5b506001600160a01b038135169060200135610d06565b6102e3600480360360208110156104f557600080fd5b50356001600160a01b0316610de6565b61050d610eb3565b604080516001600160a01b039092168252519081900360200190f35b6101e7610ed7565b61045f6004803603604081101561054757600080fd5b5080359060200135610ef4565b6101e761108c565b6102886004803603604081101561057257600080fd5b506001600160a01b0381351690602001356110ed565b6102886004803603604081101561059e57600080fd5b506001600160a01b038135169060200135611155565b61050d6111b2565b61050d6111d6565b6102e36111fa565b6102e3600480360360208110156105e257600080fd5b50356001600160a01b0316611209565b6102e361121b565b61045f600480360360e081101561061057600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611221565b61045f6004803603608081101561066157600080fd5b506001600160a01b03813581169160208101359091169060408101359060600135611468565b6102e36004803603604081101561069d57600080fd5b506001600160a01b0381358116916020013516611648565b61045f600480360360608110156106cb57600080fd5b506001600160a01b03813581169160208101359091169060400135611673565b60378054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107775780601f1061074c57610100808354040283529160200191610777565b820191906000526020600020905b81548152906001019060200180831161075a57829003601f168201915b505050505090505b90565b600061079661078f611762565b8484611766565b5060015b92915050565b6000806107ac83611852565b6107b461186d565b91509150915091565b600181565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107f6611762565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906108a45760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610869578181015183820152602001610851565b50505050905090810190601f1680156108965780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060006108b085611852565b905060006108be8585611873565b6040805180820190915260028152611a9b60f11b6020820152909150816109265760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b50610931868261197a565b6040805186815290516001600160a01b038816916000916000805160206126398339815191529181900360200190a3604080518681526020810186905281516001600160a01b038916927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25015949350505050565b6000806109b861186d565b9050806109c957600091505061077f565b610a8c7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a5957600080fd5b505afa158015610a6d573d6000803e3d6000fd5b505050506040513d6020811015610a8357600080fd5b50518290611af6565b91505090565b600061079a82611852565b6000610aaa848484611bb4565b610b1a84610ab6611762565b610b15856040518060600160405280602881526020016125e3602891396001600160a01b038a16600090815260356020526040812090610af4611762565b6001600160a01b031681526020810191909152604001600020549190611bc6565b611766565b826001600160a01b0316846001600160a01b0316600080516020612639833981519152846040518082815260200191505060405180910390a35060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6000610b8b611c20565b60015490915060ff1680610ba25750610ba2611c25565b80610bae575060005481115b610be95760405162461bcd60e51b815260040180806020018281038252602e81526020018061260b602e913960400191505060405180910390fd5b60015460ff16158015610c08576001805460ff19168117905560008290555b610c4786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c2b92505050565b610c8684848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611c3e92505050565b610c8f87611c51565b8015610ca0576001805460ff191690555b50505050505050565b60395460ff1690565b603b5481565b6000610796610cc5611762565b84610b158560356000610cd6611762565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490611c67565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610d3a611762565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610dab5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b50610de06001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484611cc8565b50919050565b600061079a7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610e7857600080fd5b505afa158015610e8c573d6000803e3d6000fd5b505050506040513d6020811015610ea257600080fd5b5051610ead84611852565b90611af6565b7f000000000000000000000000000000000000000000000000000000000000000081565b604051806040016040528060018152602001603160f81b81525081565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610f26611762565b6001600160a01b03161460405180604001604052806002815260200161323960f01b81525090610f975760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b5081610fa257611088565b610fd57f0000000000000000000000000000000000000000000000000000000000000000610fd08484611873565b61197a565b6040805183815290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916000916000805160206126398339815191529181900360200190a3604080518381526020810183905281516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a25b5050565b60388054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107775780601f1061074c57610100808354040283529160200191610777565b60006107966110fa611762565b84610b15856040518060600160405280602581526020016126ed6025913960356000611124611762565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190611bc6565b6000611169611162611762565b8484611bb4565b826001600160a01b031661117b611762565b6001600160a01b0316600080516020612639833981519152846040518082815260200191505060405180910390a350600192915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061120461186d565b905090565b603a6020526000908152604090205481565b60001981565b6001600160a01b03871661126c576040805162461bcd60e51b815260206004820152600d60248201526c24a72b20a624a22fa7aba722a960991b604482015290519081900360640190fd5b834211156112b6576040805162461bcd60e51b815260206004820152601260248201527124a72b20a624a22fa2ac2824a920aa24a7a760711b604482015290519081900360640190fd5b6001600160a01b038088166000818152603a6020908152604080832054603b5482517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958c166060860152608085018b905260a0850181905260c08086018b90528251808703909101815260e08601835280519084012061190160f01b6101008701526101028601969096526101228086019690965281518086039096018652610142850180835286519684019690962093909552610162840180825283905260ff88166101828501526101a284018790526101c284018690525191926001926101e28083019392601f198301929081900390910190855afa1580156113cb573d6000803e3d6000fd5b505050602060405103516001600160a01b0316896001600160a01b03161461142e576040805162461bcd60e51b8152602060048201526011602482015270494e56414c49445f5349474e415455524560781b604482015290519081900360640190fd5b611439826001611c67565b6001600160a01b038a166000908152603a602052604090205561145d898989611766565b505050505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661149a611762565b6001600160a01b03161460405180604001604052806002815260200161323960f01b8152509061150b5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b5060006115188383611873565b60408051808201909152600281526106a760f31b6020820152909150816115805760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b5061158b8582611d1a565b6115bf6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585611cc8565b6040805184815290516000916001600160a01b038816916000805160206126398339815191529181900360200190a3836001600160a01b0316856001600160a01b03167f5d624aa9c148153ab3446c1b154f660ee7701e549fe9b62dab7171b1c80e6fa28585604051808381526020018281526020019250505060405180910390a35050505050565b6001600160a01b03918216600090815260356020908152604080832093909416825291909152205490565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166116a5611762565b6001600160a01b03161460405180604001604052806002815260200161323960f01b815250906117165760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b506117248383836000611dbe565b816001600160a01b0316836001600160a01b0316600080516020612639833981519152836040518082815260200191505060405180910390a3505050565b3390565b6001600160a01b0383166117ab5760405162461bcd60e51b815260040180806020018281038252602481526020018061269f6024913960400191505060405180910390fd5b6001600160a01b0382166117f05760405162461bcd60e51b815260040180806020018281038252602281526020018061259b6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260356020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b031660009081526034602052604090205490565b60365490565b604080518082019091526002815261035360f41b6020820152600090826118db5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b5060408051808201909152600280825261068760f31b60208301528304906b033b2e3c9fd0803ce80000008219048511156119575760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b5082816b033b2e3c9fd0803ce80000008602018161197157fe5b04949350505050565b6001600160a01b0382166119d5576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6119e160008383611bc1565b6036546119ee8183611c67565b6036556001600160a01b038316600090815260346020526040902054611a148184611c67565b6001600160a01b038086166000908152603460205260409020919091557f00000000000000000000000000000000000000000000000000000000000000001615611af0577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8584846040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b158015611ad757600080fd5b505af1158015611aeb573d6000803e3d6000fd5b505050505b50505050565b6000821580611b03575081155b15611b105750600061079a565b816b019d971e4fe8401e740000001981611b2657fe5b0483111560405180604001604052806002815260200161068760f31b81525090611b915760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b50506b033b2e3c9fd0803ce800000091026b019d971e4fe8401e74000000010490565b611bc18383836001611dbe565b505050565b60008184841115611c185760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610869578181015183820152602001610851565b505050900390565b600290565b303b1590565b80516110889060379060208401906124c2565b80516110889060389060208401906124c2565b6039805460ff191660ff92909216919091179055565b600082820183811015611cc1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611bc1908490611fdd565b6001600160a01b038216611d5f5760405162461bcd60e51b81526004018080602001828103825260218152602001806126596021913960400191505060405180910390fd5b611d6b82600083611bc1565b603654611d788183612195565b6036556001600160a01b0383166000908152603460209081526040918290205482516060810190935260228084529092611a149286929061257990830139839190611bc6565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663d15e00537f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015611e4d57600080fd5b505afa158015611e61573d6000803e3d6000fd5b505050506040513d6020811015611e7757600080fd5b505190506000611e8a82610ead88611852565b90506000611e9b83610ead88611852565b9050611eb18787611eac8887611873565b6121d7565b8315611f81576040805163d5ed393360e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483015289811660248301528881166044830152606482018890526084820185905260a4820184905291517f00000000000000000000000000000000000000000000000000000000000000009092169163d5ed39339160c48082019260009290919082900301818387803b158015611f6857600080fd5b505af1158015611f7c573d6000803e3d6000fd5b505050505b856001600160a01b0316876001600160a01b03167f4beccb90f994c31aced7a23b5611020728a23d8ec5cddd1a3e9d97b96fda86668786604051808381526020018281526020019250505060405180910390a350505050505050565b611fef826001600160a01b0316612486565b612040576040805162461bcd60e51b815260206004820152601f60248201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b6020831061207e5780518252601f19909201916020918201910161205f565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146120e0576040519150601f19603f3d011682016040523d82523d6000602084013e6120e5565b606091505b50915091508161213c576040805162461bcd60e51b815260206004820181905260248201527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604482015290519081900360640190fd5b805115611af05780806020019051602081101561215857600080fd5b5051611af05760405162461bcd60e51b815260040180806020018281038252602a8152602001806126c3602a913960400191505060405180910390fd5b6000611cc183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611bc6565b6001600160a01b03831661221c5760405162461bcd60e51b815260040180806020018281038252602581526020018061267a6025913960400191505060405180910390fd5b6001600160a01b0382166122615760405162461bcd60e51b81526004018080602001828103825260238152602001806125566023913960400191505060405180910390fd5b61226c838383611bc1565b600060346000856001600160a01b03166001600160a01b031681526020019081526020016000205490506122bb826040518060600160405280602681526020016125bd60269139839190611bc6565b6001600160a01b0380861660009081526034602052604080822093909355908516815220546122ea8184611c67565b6001600160a01b038086166000908152603460205260409020919091557f0000000000000000000000000000000000000000000000000000000000000000161561247f57600060365490507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8783866040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b1580156123b457600080fd5b505af11580156123c8573d6000803e3d6000fd5b50505050846001600160a01b0316866001600160a01b03161461247d577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166331873e2e8683856040518463ffffffff1660e01b815260040180846001600160a01b031681526020018381526020018281526020019350505050600060405180830381600087803b15801561246457600080fd5b505af1158015612478573d6000803e3d6000fd5b505050505b505b5050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906124ba57508115155b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061250357805160ff1916838001178555612530565b82800160010185558215612530579182015b82811115612530578251825591602001919060010190612515565b5061253c929150612540565b5090565b5b8082111561253c576000815560010161254156fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365436f6e747261637420696e7374616e63652068617320616c7265616479206265656e20696e697469616c697a6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef45524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656445524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122021d5cbaeb850638b6b16e6fbaf944729cdb5592fdc3454bb2c1587893e87929864736f6c634300060c0033";
