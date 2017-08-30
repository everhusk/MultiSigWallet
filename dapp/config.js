var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://ropsten.infura.io",
  alertsNode: 'https://alerts.gnosis.pm',
  connectionChecker:{
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  wallet: "injected",
  // Testrpc
  // walletFactoryAddress: "0xd79426bcee5b46fde413ededeb38364b3e666097"
  // Ropsten
  // walletFactoryAddress: "0xa6d9c5f7d4de3cef51ad3b7235d79ccc95114de5"
  // Mainnet
  walletFactoryAddress: "0xFc45F4d0317B87bb1B4504F8507480652fBb9954"
};

var txDefault = {};

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

loadConfiguration();
