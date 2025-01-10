// Import the PublicKey class from the Solana web3.js library
import { PublicKey } from "@solana/web3.js";

// Import the getMint function and TOKEN_2022_PROGRAM_ID from the @solana/spl-token library
import { getMint, TOKEN_2022_PROGRAM_ID } from "@solana/spl-token";

// Create a new PublicKey object using the provided address
const address = new PublicKey("C33qt1dZGZSsqTrHdtLKXPZNoxs6U1ZBfyDkzmj6mXeR");

// Fetch the Mint account information for the given address from the Solana network
const mintData = await getMint(
  pg.connection,
  address,
  "confirmed",
  TOKEN_2022_PROGRAM_ID,
);

// Log the Mint account information to the console
console.log(mintData);


// Deserialize Mint Data

// pub struct Mint {
//     /// Optional authority used to mint new tokens. The mint authority may only
//     /// be provided during mint creation. If no mint authority is present
//     /// then the mint has a fixed supply and no further tokens may be
//     /// minted.
//     pub mint_authority: COption<Pubkey>,
//     /// Total supply of tokens.
//     pub supply: u64,
//     /// Number of base 10 digits to the right of the decimal place.
//     pub decimals: u8,
//     /// Is `true` if this structure has been initialized
//     pub is_initialized: bool,
//     /// Optional authority to freeze token accounts.
//     pub freeze_authority: COption<Pubkey>,
// }

// {
//     "address": "C33qt1dZGZSsqTrHdtLKXPZNoxs6U1ZBfyDkzmj6mXeR",
//     "mintAuthority": "4Nd1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1m",
//     "supply": 1000000000,
//     "decimals": 9,
//     "isInitialized": true,
//     "freezeAuthority": "4Nd1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1mQ1m",
//     "tlvData": null
//   }
  