// Import the PublicKey class from the Solana web3.js library
import { PublicKey } from "@solana/web3.js";

// Create a new PublicKey object using the provided address
const address = new PublicKey("C33qt1dZGZSsqTrHdtLKXPZNoxs6U1ZBfyDkzmj6mXeR");

// Fetch the account information for the given address from the Solana network
const accountInfo = await pg.connection.getAccountInfo(address);

// Log the account information to the console in a readable JSON format
console.log(JSON.stringify(accountInfo, null, 2));

// Serialized Mint Data:
// {
//     "data": {
//       "type": "Buffer",
//       "data": [2, 0, 86, 51]
//     },
//     "executable": false,
//     "lamports": 2039280,
//     "owner": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
//     "rentEpoch": 18446744073709552000, <-- (deprecated) collection manager
//     "space": 82
//   }
  