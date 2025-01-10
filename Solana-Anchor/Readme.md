## How to run locally
- Install tools
Instructions on how to install Anchor can be found here.

- Install dependencies
Extract the zip file in your project's directory and run:
```bash
yarn
```
- Build
```bash
anchor build
```
- Test
```bash
anchor build
```
- Run Client
```bash
anchor run client
```
> Note You might need to adjust the client and test code to fully work in local Node environment since there are playground exclusive features, e.g. if you are using pg.wallets.myWallet, you'll need to manually load each keypair.
