/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IVariableDebtTokenInterface extends ethers.utils.Interface {
  functions: {
    "burn(address,uint256,uint256)": FunctionFragment;
    "getScaledUserBalanceAndSupply(address)": FunctionFragment;
    "mint(address,address,uint256,uint256)": FunctionFragment;
    "scaledBalanceOf(address)": FunctionFragment;
    "scaledTotalSupply()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "burn",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getScaledUserBalanceAndSupply",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "mint",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledBalanceOf",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "scaledTotalSupply",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getScaledUserBalanceAndSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scaledBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scaledTotalSupply",
    data: BytesLike
  ): Result;

  events: {
    "Burn(address,uint256,uint256)": EventFragment;
    "Mint(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Burn"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Mint"): EventFragment;
}

export class IVariableDebtToken extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IVariableDebtTokenInterface;

  functions: {
    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    scaledTotalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "scaledTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;
  };

  burn(
    user: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "burn(address,uint256,uint256)"(
    user: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  getScaledUserBalanceAndSupply(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  "getScaledUserBalanceAndSupply(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<{
    0: BigNumber;
    1: BigNumber;
  }>;

  mint(
    user: string,
    onBehalfOf: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "mint(address,address,uint256,uint256)"(
    user: string,
    onBehalfOf: string,
    amount: BigNumberish,
    index: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  scaledBalanceOf(user: string, overrides?: CallOverrides): Promise<BigNumber>;

  "scaledBalanceOf(address)"(
    user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
      1: BigNumber;
    }>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Burn(user: string | null, amount: null, index: null): EventFilter;

    Mint(
      from: string | null,
      onBehalfOf: string | null,
      value: null,
      index: null
    ): EventFilter;
  };

  estimateGas: {
    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "scaledTotalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "burn(address,uint256,uint256)"(
      user: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getScaledUserBalanceAndSupply(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getScaledUserBalanceAndSupply(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mint(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "mint(address,address,uint256,uint256)"(
      user: string,
      onBehalfOf: string,
      amount: BigNumberish,
      index: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    scaledBalanceOf(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "scaledBalanceOf(address)"(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    scaledTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "scaledTotalSupply()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
