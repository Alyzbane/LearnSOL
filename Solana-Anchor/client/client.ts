import * as anchor from "@coral-xyz/anchor";
import * as web3 from "@solana/web3.js";
import type { HelloAnchor } from "../target/types/hello_anchor";

// Configure the client to use the local cluster
anchor.setProvider(anchor.AnchorProvider.env());

const program = anchor.workspace.HelloAnchor as anchor.Program<HelloAnchor>;

// Client
console.log("My address:", program.provider.publicKey.toString());
const balance = await program.provider.connection.getBalance(program.provider.publicKey);
console.log(`My balance: ${balance / web3.LAMPORTS_PER_SOL} SOL`);

// $ solana confirm -v 2hfmeaPs2pFhHv28BYEbrbBwL99KBbm4mYmFe52Ct6ZjvUq3bQHiK8YnyHf2vPZyPg4NzDczkohLQHCxsgw4QZw4
// RPC URL: https://api.devnet.solana.com
// Default Signer: Playground Wallet
// Commitment: confirmed

// Transaction executed in slot 353168340:
//   Block Time: 2025-01-11T00:09:39+08:00
//   Version: legacy
//   Recent Blockhash: A26YuRYBW7BajuGXNiXveW4fJhDFaHHqMKYRoey3t8QC
//   Signature 0: 2hfmeaPs2pFhHv28BYEbrbBwL99KBbm4mYmFe52Ct6ZjvUq3bQHiK8YnyHf2vPZyPg4NzDczkohLQHCxsgw4QZw4
//   Signature 1: 2BuYafb7qyobZ6sk88u6Ln83S65E7V22KG2cfemjgfhR942i44miRqT4Gqyhte87jjKkM4sU9wWrpgivKV2nmjpg
//   Account 0: srw- 8LFEFBzSJj8yxFN3ChB1R6itbZ1qJKZWEDUNpubRcqvX (fee payer)
//   Account 1: srw- 6MDdxRA8ywqFCogPNEnU1pSdpKpw6obcF3588n5nL83n
//   Account 2: -r-- 11111111111111111111111111111111
//   Account 3: -r-x B5LfTKkcGuRJWe68pBP7MnVx1hSgZ5NSVcTc7poRaSb4
//   Instruction 0
//     Program:   B5LfTKkcGuRJWe68pBP7MnVx1hSgZ5NSVcTc7poRaSb4 (3)
//     Account 0: 6MDdxRA8ywqFCogPNEnU1pSdpKpw6obcF3588n5nL83n (1)
//     Account 1: 8LFEFBzSJj8yxFN3ChB1R6itbZ1qJKZWEDUNpubRcqvX (0)
//     Account 2: 11111111111111111111111111111111 (2)
//     Data: [175, 175, 109, 31, 13, 152, 155, 237, 42, 0, 0, 0, 0, 0, 0, 0]
//   Status: Ok
//     Fee: ◎0.00001
//     Account 0 balance: ◎7.18888208 -> ◎7.18786984
//     Account 1 balance: ◎0 -> ◎0.00100224
//     Account 2 balance: ◎0.000000001
//     Account 3 balance: ◎0.00139896
//   Log Messages:
//     Program B5LfTKkcGuRJWe68pBP7MnVx1hSgZ5NSVcTc7poRaSb4 invoke [1]
//     Program log: Instruction: Initialize
//     Program 11111111111111111111111111111111 invoke [2]
//     Program 11111111111111111111111111111111 success
//     Program log: Changed data to: 42!
//     Program B5LfTKkcGuRJWe68pBP7MnVx1hSgZ5NSVcTc7poRaSb4 consumed 5661 of 200000 compute units
//     Program B5LfTKkcGuRJWe68pBP7MnVx1hSgZ5NSVcTc7poRaSb4 success
 
// Finalized

// Lastly, the SOL allocated to the on-chain program can be fully recovered by closing the program.
// solana program close [ProgramID] <- On lib.rs