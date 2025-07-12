use anchor_lang::prelude::*;

// Program ID
// solpg automatically fill up
declare_id!("6WeHzzLuxUjT9FTCjAjFD1dJJrmYjULRK19sk6LrrZwE");

// type of account
// Anchor programs always use 8 bits for the discriminator
pub const ANCHOR_DISCRIMINATOR_SIZE: usize = 8;

// Full solana program smart contract using this macro
// Anchor feature
#[program]
pub mod favorites {
    use super::*;
    
    // Our instruction handler! It sets the user's favorite number and color
    pub fn set_favorites(
        context: Context<SetFavorites>,
        number: u64,
        color: String,
        hobbies: Vec<String>,
    ) -> Result<()> {
        // Write information in blockchain
        let user_public_key = context.accounts.user.key();

        // Message for transaction
        msg!("Greetings from {}", context.program_id);

        msg!(
            "User {user_public_key}'s favorite number is {number}, favorite color is: {color}",
        );
        // {hobbies:?} <- Exapand the vector of strings
        msg!("User's hobbies are: {:?}", hobbies);

        // Write the favorites in account provider
        context.accounts.favorites.set_inner(Favorites {
            number,
            color,
            hobbies,
        });

        Ok(()) // return response
    }
}

// Save things into blockchain PDA
#[account]
#[derive(InitSpace)] // calculate total space item inside
pub struct Favorites {
    pub number: u64,

    #[max_len(50)] // 50 bytes
    pub color: String,

    #[max_len(5, 50)] // nested Vec, String bytes respectively
    pub hobbies: Vec<String>,
}

// info will make the account live in lifetime
#[derive(Accounts)]
pub struct SetFavorites<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(
        init_if_needed, // make the account, if its not created
        payer = user,
        space = ANCHOR_DISCRIMINATOR_SIZE + Favorites::INIT_SPACE,
        // favorites and user key is used to find an address
        seeds = [b"favorites" , user.key().as_ref()],
        bump
    )]
    pub favorites: Account<'info, Favorites>,

    pub system_program: Program<'info, System>,
}
