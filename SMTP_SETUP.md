# SMTP Email Configuration Setup

## Quick Setup

1. **Create `.env.local` file** in the project root with your SMTP credentials:

```env
# SMTP Email Configuration
SMTP_HOST=your-smtp-host.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-smtp-password
```

2. **Replace the placeholder values** with your actual SMTP details

3. **Restart the development server**: `npm run dev`

4. **Test the demo form** to verify email sending works

## Common SMTP Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```
*Note: Requires App Password (not regular password)*

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Custom Hosting
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
SMTP_USER=your-email@yourdomain.com
SMTP_PASS=your-password
```

## Port Information
- **587**: Standard SMTP with TLS (recommended)
- **465**: SMTP over SSL
- **25**: Standard SMTP (not recommended for production)

## Security Notes
- Never commit `.env.local` to version control
- Use app-specific passwords when available
- The configuration includes TLS certificate handling for self-signed certificates

## Troubleshooting
1. Check console logs for specific error messages
2. Verify SMTP credentials are correct
3. Ensure your email provider allows SMTP access
4. Check if firewall is blocking the SMTP port

## Testing
After setup, test by:
1. Going to `/demo` page
2. Filling out the form
3. Checking if email arrives at `devaang@solascompliance.com`
4. Checking console for any error messages
