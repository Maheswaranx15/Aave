/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ReserveLogic } from "./ReserveLogic";

export class ReserveLogicFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ReserveLogic> {
    return super.deploy(overrides || {}) as Promise<ReserveLogic>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ReserveLogic {
    return super.attach(address) as ReserveLogic;
  }
  connect(signer: Signer): ReserveLogicFactory {
    return super.connect(signer) as ReserveLogicFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReserveLogic {
    return new Contract(address, _abi, signerOrProvider) as ReserveLogic;
  }
}

const _abi = [
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
        indexed: false,
        internalType: "uint256",
        name: "liquidityRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stableBorrowRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "variableBorrowRate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "liquidityIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "variableBorrowIndex",
        type: "uint256",
      },
    ],
    name: "ReserveDataUpdated",
    type: "event",
  },
];

const _bytecode =
  "0x61023b610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80632b33897c1461003a575b600080fd5b81801561004657600080fd5b5061008b600480360360a081101561005d57600080fd5b508035906001600160a01b03602082013581169160408101358216916060820135811691608001351661008d565b005b6004850154604080518082019091526002815261199960f11b6020820152906001600160a01b03161561013e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156101035781810151838201526020016100eb565b50505050905090810190601f1680156101305780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506101476101f5565b6001860180546fffffffffffffffffffffffffffffffff19166001600160801b039290921691909117905561017a6101f5565b6001860180546001600160801b03928316600160801b0292169190911790556004850180546001600160a01b039586166001600160a01b031991821617909155600586018054948616948216949094179093556006850180549285169284169290921790915560079093018054939092169216919091179055565b6b033b2e3c9fd0803ce80000009056fea26469706673582212208bb0bddf39b4711b761b73ca4a45111ce4d152d696b1c811a4b7e7bbbc07173564736f6c634300060c0033";
