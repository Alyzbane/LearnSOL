// Import the PublicKey class from the Solana web3.js library
import { PublicKey } from "@solana/web3.js";

// Create a new PublicKey object using the provided address
const address = new PublicKey("TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb");

// Fetch the account information for the given address from the Solana network
const accountInfo = await pg.connection.getAccountInfo(address);

// Log the account information to the console in a readable JSON format
console.log(JSON.stringify(accountInfo, null, 2));


// Serialied Data of AccountInfo for Token Program
// {
//     "data": {
//       "type": "Buffer",
//       "data": [2, 0, 86, 51]
//     },
//     "executable": true,
//     "lamports": 1141440, // Frationalized solana value
//     "owner": "BPFLoaderUpgradeab1e11111111111111111111111",
//     "rentEpoch": 18446744073709552000,
//     "space": 36
//   }
  