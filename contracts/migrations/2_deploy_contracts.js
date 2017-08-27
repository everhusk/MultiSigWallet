var MultiSigWalletFactory = artifacts.require("./MultiSigWalletFactory.sol");

module.exports = function (deployer) {
  deployer.deploy(MultiSigWalletFactory);
};
