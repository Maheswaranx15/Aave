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

interface PriceOracleInterface extends ethers.utils.Interface {
  functions: {
    "getAssetPrice(address)": FunctionFragment;
    "getEthUsdPrice()": FunctionFragment;
    "setAssetPrice(address,uint256)": FunctionFragment;
    "setEthUsdPrice(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getEthUsdPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetPrice",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setEthUsdPrice",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthUsdPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setEthUsdPrice",
    data: BytesLike
  ): Result;

  events: {
    "AssetPriceUpdated(address,uint256,uint256)": EventFragment;
    "EthPriceUpdated(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetPriceUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EthPriceUpdated"): EventFragment;
}

export class PriceOracle extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PriceOracleInterface;

  functions: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getEthUsdPrice(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getEthUsdPrice()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAssetPrice(address,uint256)"(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setEthUsdPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getAssetPrice(_asset: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getAssetPrice(address)"(
    _asset: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

  "getEthUsdPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

  setAssetPrice(
    _asset: string,
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAssetPrice(address,uint256)"(
    _asset: string,
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setEthUsdPrice(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setEthUsdPrice(uint256)"(
    _price: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getEthUsdPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAssetPrice(address,uint256)"(
      _asset: string,
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setEthUsdPrice(uint256)"(
      _price: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AssetPriceUpdated(_asset: null, _price: null, timestamp: null): EventFilter;

    EthPriceUpdated(_price: null, timestamp: null): EventFilter;
  };

  estimateGas: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<BigNumber>;

    "getEthUsdPrice()"(overrides?: CallOverrides): Promise<BigNumber>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAssetPrice(address,uint256)"(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setEthUsdPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAssetPrice(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAssetPrice(address)"(
      _asset: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthUsdPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getEthUsdPrice()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAssetPrice(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAssetPrice(address,uint256)"(
      _asset: string,
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setEthUsdPrice(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setEthUsdPrice(uint256)"(
      _price: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
