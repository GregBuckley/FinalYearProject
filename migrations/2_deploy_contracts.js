var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var People = artifacts.require("./People.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(People);
};
