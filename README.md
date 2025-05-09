# Astro Health Checker

This project monitors the health of specified API endpoints and can send email notifications using the Resend API.

## Configuration

### 1. Endpoints Configuration

The `endpoints.json` file is used to define the API endpoints you want to monitor. It should be located in the `src/data/` directory.

**Format:**

The file should contain an array of endpoint objects. Each object must have a `name` and a `url`.

**Example `src/data/endpoints.json`:**

```json
[
  {
    "name": "Google Homepage",
    "url": "https://www.google.com"
  },
  {
    "name": "Example API - Success",
    "url": "https://jsonplaceholder.typicode.com/todos/1"
  },
  {
    "name": "Example API - Not Found",
    "url": "https://jsonplaceholder.typicode.com/nonexistent"
  }
]
```

- **`name`**: A descriptive name for the endpoint (e.g., "Main API", "User Service"). This name will be used in logs and notifications.
- **`url`**: The full URL of the endpoint to be checked.

### 2. Resend API for Email Notifications

This project can use the Resend API to send email notifications about endpoint statuses.

**Setup:**

1.  **Sign up for Resend:** If you don't have an account, sign up at [https://resend.com/](https://resend.com/).
2.  **Get an API Key:** Once registered, obtain an API key from your Resend dashboard.
3.  **Configure Environment Variable:**
    Create a `.env` file in the root of the project if it doesn't already exist.
    Add your Resend API key to this file:

    ```env
    RESEND_API_KEY=your_resend_api_key_here
    ```

4.  **Specify Sender and Recipient:**
    You will also need to specify the sender email (which must be a verified domain in Resend) and the recipient email(s) in your `.env` file:

    ```env
    EMAIL_FROM=sender@yourverifieddomain.com
    EMAIL_TO=recipient1@example.com,recipient2@example.com
    ```
    Multiple recipient emails can be comma-separated.

**Usage in Code (Conceptual):**

While the detailed implementation for sending emails will be within the application's codebase (e.g., in a specific Astro component or API route), the general idea involves:

-   Reading the `RESEND_API_KEY`, `EMAIL_FROM`, and `EMAIL_TO` from environment variables.
-   Using a library or `fetch` to make a POST request to the Resend API endpoint (`https://api.resend.com/emails`).
-   Formatting the email content (e.g., subject, body with details of the endpoint status).

**Example (Illustrative - actual implementation might vary):**

```javascript
// This is a conceptual example, not direct runnable code for this project.
// Actual implementation would be in an .astro file or a server-side script.

// async function sendEmailNotification(subject, htmlContent) {
//   const apiKey = import.meta.env.RESEND_API_KEY;
//   const fromEmail = import.meta.env.EMAIL_FROM;
//   const toEmails = import.meta.env.EMAIL_TO.split(',');

//   if (!apiKey || !fromEmail || !toEmails.length) {
//     console.error("Email configuration missing in .env file.");
//     return;
//   }

//   try {
//     const response = await fetch('https://api.resend.com/emails', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${apiKey}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         from: fromEmail,
//         to: toEmails,
//         subject: subject,
//         html: htmlContent,
//       }),
//     });

//     if (response.ok) {
//       console.log('Email sent successfully!');
//     } else {
//       const errorData = await response.json();
//       console.error('Failed to send email:', errorData);
//     }
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// }

// Example usage:
// sendEmailNotification(
//   "Endpoint 'Example API' is DOWN",
//   "<p>The endpoint <strong>Example API</strong> (https://example.com/api) is currently unresponsive.</p>"
// );
```

Ensure your Astro project is set up to handle server-side code or API routes if you intend to send emails directly from the application based on health check results.

## Running the Project

(Instructions on how to run the project would go here, e.g., `npm install`, `npm run dev`)
