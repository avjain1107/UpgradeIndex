import "@nomiclabs/hardhat-ethers"; // aliased to hardhat-deploy-ethers

import "dotenv/config";
// import "hardhat-contract-sizer";
import "hardhat-deploy";

import "hardhat-gas-reporter";

import { HardhatUserConfig } from "hardhat/types";
import "solidity-coverage";
// const { INFURA_API_KEY, SEPOLIA_PRIVATE_KEY } = process.env;
// import { accounts, node_url } from "./utils/network";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    hardhat: {},
    sepolia: {
      url: `https://sepolia.infura.io/v3/${"0b56c8e153e6499d8f9d567092ec32fe"}`,
      accounts: ["0x9d8276f0e5585e1cd5fbdf047cebac1ce86daf6ee03998d06d21f427a241d371"],
    },
  },
  // etherscan: {
  //   apiKey: "34SWFCP4TAAQYC1P588G7SEJJPJYHC4C5E",
  // },

  namedAccounts: {
    deployer: 0,
  },
};

export default config;
