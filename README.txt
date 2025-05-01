# Pet Care Reminder Application

## Setup Instructions

1. Clone or download the project files to your local machine.
2. Open the project in a code editor like Visual Studio Code.
3. The app is built as a static website using HTML, CSS, and JavaScript.
4. Open `index.html` in a browser to view the application.

## AWS Deployment

1. Create an S3 bucket in the AWS Management Console.
2. Upload all files (`index.html`, `style.css`, `script.js`, `reminder.js`, `images/`) to the bucket.
3. Set the S3 bucket's permissions to allow public access.
4. Enable static website hosting in the S3 bucket settings.
5. Use the provided URL to access your deployed application.

## Features

- Add, delete, and view reminders for your pet's care activities.
- Persistent data storage using browser's `localStorage` to ensure reminders stay across page reloads.
