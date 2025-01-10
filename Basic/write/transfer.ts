import {
    LAMPORTS_PER_SOL,
    SystemProgram,
    Transaction,
    sendAndConfirmTransaction,
    Keypair,
  } from "@solana/web3.js";
  
  // Use the keypair of the sender (playground wallet)
  const sender = pg.wallet.keypair;
  
  const receiver = new Keypair();
  
  // Create a transfer instruction to send 0.01 SOL from the sender to the receiver
  const transferInstruction = SystemProgram.transfer({
    fromPubkey: sender.publicKey, 
    toPubkey: receiver.publicKey, 
    lamports: 0.01 * LAMPORTS_PER_SOL, // Amount to transfer in lamports (0.01 SOL)
  });
  
  // Create a new transaction and add the transfer instruction to it
  const transaction = new Transaction().add(transferInstruction);
  
  // Send the transaction to the Solana network and wait for confirmation
  const transactionSignature = await sendAndConfirmTransaction(
    pg.connection, // Connection to the Solana network
    transaction, 
    [sender] // Signers of the transaction (sender's keypair)
  );
  
  // Log the transaction signature to the console with a link to view it on SolanaFM
  console.log(
    "Transaction Signature:",
    `https://solana.fm/tx/${transactionSignature}?cluster=devnet-solana`
  );
  
  
  // Transaction Signature: 
  // https://solana.fm/tx/3x3CpyebxG3eXXmBkC2F4aFHqeQq2z4D3PcJ6KrHwma1Z5jgoAZgiuKT8DxJYpP4QAW1qyLnNC4qu1ThMXshCvjQ?cluster=devnet-solana