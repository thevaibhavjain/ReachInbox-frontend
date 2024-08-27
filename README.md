# OneBox Email Application

## Overview

OneBox is a web application that allows users to log in using Google authentication and access their emails in an intuitive and user-friendly interface. Once authenticated, users are redirected to the OneBox email page, where they can view and manage their received emails, navigate through different sections, and enjoy a seamless experience.

## Features

- **Google Authentication**: Secure login using Google OAuth2.0.
- **Email Dashboard**: Access and manage your emails in a clean, organized interface.
- **Navigation**: Easily switch between different sections like Inbox, Sent, Drafts, etc.
- **Dark/Light Mode**: Toggle between dark and light themes for a comfortable viewing experience.

## Project Structure

- **Login Page**:  
  Users are required to log in via Google to access the OneBox application. If the user is already authenticated, they are redirected to the homepage.

  - **Google Login**:  
    The login page provides an option to sign up or sign in using Google. Upon clicking the Google login button, the user is redirected to the Google authentication page, and upon successful login, they are redirected back to the OneBox application.

  - **Account Creation**:  
    Users can create an account through the provided link on the login page.

- **OneBox Page**:  
  Once logged in, users are directed to the OneBox page, where they can access their emails.

  - **SideBar**:  
    Provides navigation to different sections like Inbox, Sent, Drafts, etc.

  - **TopBar**:  
    Displays search functionality and theme toggle.

  - **SubView**:  
    Renders the content based on the selected navigation item.

  - **AllInbox Component**:  
    Displays the list of emails, allows searching, and shows new replies.

  - **Mail Component**:  
    Displays individual email information and handles user interactions like loading specific email threads.

- **Theme Toggle**:  
  Users can switch between dark and light modes to enhance their viewing experience.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/thevaibhavjain/ReachInbox-frontend.git
   cd ReachInbox-frontend
2. **Install dependancy and run App**:   
   ```bash
   npm install
   npm run dev

3. Open the server.
   ```
