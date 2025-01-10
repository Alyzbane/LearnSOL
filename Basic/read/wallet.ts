// Import the PublicKey class from the Solana web3.js library
import { PublicKey } from "@solana/web3.js";

// Use the public key of the playground wallet
const address = pg.wallet.publicKey;

// Fetch the account information for the given address from the Solana network
const accountInfo = await pg.connection.getAccountInfo(address);

// Log the account information to the console in a readable JSON format
console.log(JSON.stringify(accountInfo, null, 2))


// AccountInfo Struct Type output:
// {
//     "data": {
//       "type": "Buffer",
//       "data": [2, 0, 86, 51]
//     },
//     "executable": false,
//     "lamports": 2039280, // Frationalized solana  value
//     "owner": "11111111111111111111111111111111",
//     "rentEpoch": 18446744073709552000,
//     "space": 82
//   }