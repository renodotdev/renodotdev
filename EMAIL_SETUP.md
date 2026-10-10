# Email Setup Guide (Astro)

This contact form sends real emails to `renodotdev@gmail.com` using the Resend email service.

## Setup Instructions

### 1. Get Resend API Key

1. Go to [Resend.com](https://resend.com) and create a free account
2. Navigate to the API Keys section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 2. Environment Configuration

Create a `.env` or `.env.local` file in your project root with:

```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Domain Verification (Recommended for Production)

For production use, you should verify your domain with Resend:

1. In Resend dashboard, go to Domains section
2. Add and verify your domain
3. Update the `from` email in `/src/pages/api/contact.ts`:
   ```typescript
   from: 'Contact Form <noreply@yourdomain.com>',
   ```

### 4. Testing

1. Start your development server: `npm run dev`
2. Scroll to the contact section
3. Fill out and submit the form
4. Check your email at `renodotdev@gmail.com`

> **Note:** If no `RESEND_API_KEY` is provided, the endpoint will fall back to logging the contact form details safely to the console, allowing you to test form submissions locally without sending emails.
