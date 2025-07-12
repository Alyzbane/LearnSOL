import { BankrunProvider, startAnchor } from "anchor-bankrun";
import { Keypair, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { BN, Program } from "@coral-xyz/anchor";
import { Votingdapp } from '../target/types/votingdapp';


const IDL = require('../target/idl/votingdapp.json')
const votingAddress = new PublicKey("JAVuBXeBZqXNtS73azhBDAoYaaAFfo4gWXoZe2e7Jf8H");
const  ANCHOR_DISCRIMINATOR_SIZE = 8;

describe("votingdapp", () => {

  let context;
  let provider;
  let votingProgram;

  beforeAll(async () => {
    // Setting up the Anchor context and provider
    context = await startAnchor("", [{ name: "votingdapp", programId: votingAddress }], []);
    provider = new BankrunProvider(context);

    // Setting the provider for Anchor
    votingProgram = new Program<Votingdapp>(
      IDL,
      provider,
    );
  })

  it("Initialize Poll", async () => {

    // Creating a new Keypair for the poll
    await votingProgram.methods.initializePoll(
      new anchor.BN(1),
      "Pizza",
      new anchor.BN(0),
      new anchor.BN(1852314100),
    ).rpc();

    // Finding the poll address
    const [pollAdress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", ANCHOR_DISCRIMINATOR_SIZE)],
      votingAddress,
    )

    // Fetching the poll data
    const poll = await votingProgram.account.poll.fetch(pollAdress);

    console.log(poll);

    // Testing
    expect(poll.pollId.toNumber()).toEqual(1);
    expect(poll.description).toEqual("Pizza");
    expect(poll.pollStart.toNumber()).toBeLessThan(poll.pollEnd.toNumber());

  }); // End of Initialize Poll

  it("Initialize Candidate", async() => {
    await votingProgram.methods.initializeCandidate(
      "Smoothie",
      new anchor.BN(1),
    ).rpc();

    await votingProgram.methods.initializeCandidate(
      "Burger",
      new anchor.BN(1),
    ).rpc();

    const [smoothieAddress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", ANCHOR_DISCRIMINATOR_SIZE), Buffer.from("Smoothie")],
      votingAddress
    );

    const [burgerAddress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", ANCHOR_DISCRIMINATOR_SIZE), Buffer.from("Burger")],
      votingAddress
    );

    // Testing the candidates
    const burgerCandidate = await votingProgram.account.candidate.fetch(burgerAddress);
    console.log(burgerCandidate)
    expect(burgerCandidate.candidateVotes.toNumber()).toEqual(0);

    const smoothieCandidate = await votingProgram.account.candidate.fetch(smoothieAddress);
    console.log(smoothieCandidate);
    expect(smoothieCandidate.candidateVotes.toNumber()).toEqual(0);


  }); // End of Initialize candidate

  it("Vote", async () => {
    await votingProgram.methods.vote(
      "Burger",
      new anchor.BN(1),
    ).rpc();
    
    const [burgerAddress] = PublicKey.findProgramAddressSync(
      [new anchor.BN(1).toArrayLike(Buffer, "le", ANCHOR_DISCRIMINATOR_SIZE), Buffer.from("Burger")],
      votingAddress
    )
    const burgerCandidate = await votingProgram.account.candidate.fetch(burgerAddress);
    console.log(burgerCandidate.candidateVotes.toNumber());
    expect(burgerCandidate.candidateVotes.toNumber()).toEqual(1);
  });

});