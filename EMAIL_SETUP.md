# Email Setup for Demo Form

## Overview
The demo form now sends emails to `devaang@solascompliance.com` when users submit their information. The form requires users to consent to being contacted before submission.

## Features Implemented

### ✅ Required Consent Validation
- Users must check "I agree to be contacted" checkbox to submit
- Both client-side and server-side validation
- Clear error message if consent is not given
- Visual indicator (red asterisk) showing the field is required

### ✅ Email Sending
- Emails sent to: `devaang@solascompliance.com`
- Includes all form data in a formatted email
- Subject line includes user name and company
- Both HTML and plain text versions

## Email Configuration

### For Development/Testing
The current setup uses Gmail SMTP with environment variables. To set this up:

1. Create a `.env.local` file in the project root:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

2. Set up Gmail App Password:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an "App Password" for this application
   - Use that password in `EMAIL_PASS`

### For Production
Consider using a more robust email service:
- **SendGrid** (recommended)
- **Mailgun**
- **AWS SES**
- **Postmark**

## Email Content
The email includes:
- Contact information (name, email, job title, company)
- Industry and team size
- Use case description
- Marketing consent status
- Timestamp and source information

## Form Validation
- **Required fields**: First name, last name, email, company, consent
- **Optional fields**: Job title, industry, team size, use case, marketing consent
- **Client-side validation**: Immediate feedback
- **Server-side validation**: Security and data integrity

## Testing
1. Start the development server: `npm run dev`
2. Navigate to `/demo`
3. Try submitting without consent - should show error
4. Fill form with consent - should send email (if configured)

## Security Notes
- Never commit `.env.local` to version control
- Use environment variables for all sensitive data
- Consider rate limiting for production use
- Validate all inputs on both client and server side
