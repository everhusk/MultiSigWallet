Ethereum Multisignature Wallet
===================

### This is a simplified version of the ([Gnosis MultiSigWallet](https://github.com/gnosis/MultiSigWallet))

Allows multiple parties to agree on transactions before execution. Allows to add and remove owners and update the number of required confirmations. A web user interface can be found [here](/dapp).

Deploy contracts
-------------
```
npm install truffle -g
cd contracts
truffle migrate
```

Start app
-------------
```
cd dapp
npm start
```

Limitations
-------------
This implementation does not allow the creation of smart contracts via multisignature transactions.
Transactions to address 0 cannot be done. Any other transaction can be done.

Security
-------------
All contracts are WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

License
-------------
[GPL v3](https://www.gnu.org/licenses/gpl-3.0.txt)
