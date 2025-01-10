use anchor_lang::prelude::*;

// The program's public key, which will be automatically updated during the build process.
declare_id!("B5LfTKkcGuRJWe68pBP7MnVx1hSgZ5NSVcTc7poRaSb4");

#[program]
mod hello_anchor {
    use super::*;
    
    // The initialize function sets data in a new account and logs it.
    pub fn initialize(ctx: Context<Initialize>, data: u64) -> Result<()> {
        // Set the 'data' field of the new account
        ctx.accounts.new_account.data = data;

        // Log the change for debugging purposes
        msg!("Changed data to: {}!", data); 

        // Return OK to indicate the transaction was successful
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    // Define the new account and specify account creation details:
    // - `init`: Create the new account
    // - `payer = signer`: The signer will pay for the transaction
    // - `space = 8 + 8`: Account size: 8 bytes for account discriminator + 8 bytes for u64 data
    #[account(init, payer = signer, space = 8 + 8)]
    pub new_account: Account<'info, NewAccount>,

    // The signer is the one paying for the transaction and creating the new account
    #[account(mut)] 
    pub signer: Signer<'info>,

    // Use the system program to create the account on Solana's blockchain
    pub system_program: Program<'info, System>,
}

// Define the structure of the account to store data (u64)
#[account]
pub struct NewAccount {
    data: u64, // The data field holds a 64-bit unsigned integer
}

