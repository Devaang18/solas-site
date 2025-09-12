# Email Setup Instructions

## Quick Start

1. **Create `.env.local` file** in the project root directory
2. **Copy the configuration** from `email-config-template.txt`
3. **Replace placeholder values** with your actual SMTP credentials
4. **Restart the server**: `npm run dev`
5. **Test the demo form** at `/demo`

## Files Created

- `SMTP_SETUP.md` - Detailed setup instructions
- `email-config-template.txt` - Template for your `.env.local` file
- `README-EMAIL-SETUP.md` - This quick reference

## Next Steps

1. Open `email-config-template.txt`
2. Copy the content to a new file called `.env.local`
3. Replace the placeholder values with your actual SMTP details
4. Save the file and restart your development server

## Testing

After configuration:
- Go to `/demo` page
- Fill out the form
- Check if email arrives at `devaang@solascompliance.com`
- Check console for any errors

## Support

If you encounter issues, check the console logs for specific error messages and refer to `SMTP_SETUP.md` for troubleshooting steps.
