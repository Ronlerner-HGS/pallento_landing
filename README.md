# Pallento Landing Page

A landing page for Pallento, a rich text editor with built-in math equation functionality for students.

## Features

- Modern, responsive design
- Waitlist signup functionality with Supabase backend
- Ready for deployment to Vercel

## Setup Instructions

### Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env.local` file in the root directory with the following variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```
4. Run the development server:
   ```
   npm run dev
   ```

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create a new table named `waitlist` with the following schema:
   ```sql
   CREATE TABLE waitlist (
     id SERIAL PRIMARY KEY,
     email TEXT UNIQUE NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );
   ```
3. Get your Supabase URL and anon key from the API settings in your Supabase dashboard

### Vercel Deployment

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Add the following environment variables in your Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy your project

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Supabase
- Vercel

## License

MIT
