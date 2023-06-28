import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("TokenV2", {
    from: deployer,
    contract: "TokenV2",
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      upgradeIndex: 0,
    },
    log: true,
  });
};

export default func;
func.tags = ["TokenV2"];
