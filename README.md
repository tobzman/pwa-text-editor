# PWA Text Editor

![Demo]![screenshot1](<Screenshot 2023-09-11 at 22.36.18.png>)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Offline Usage](#offline-usage)
- [Deployment](#deployment)

## Description

This is a Progressive Web Application (PWA) Text Editor that allows users to create and edit text content with or without an internet connection. It provides a seamless user experience by leveraging service workers and IndexedDB for offline data storage.

## User Story

As a developer, I want to create notes or code snippets with or without an internet connection so that I can reliably retrieve them for later use.

## Acceptance Criteria

- The application should allow users to create and edit text content.
- Text content should be automatically saved when the DOM window is unfocused.
- The application should work without an internet connection.
- Static assets should be cached for offline use.
- Users should be able to install the application as a PWA.
- The application should use modern JavaScript features and be bundled with Webpack.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Webpack

## Installation

To run the application locally, follow these steps:

1. Clone the GitHub repository to your local machine.

```bash
git clone https://github.com/your-username/pwa-text-editor.git
```

2. Navigate to the project directory.

bash

cd pwa-text-editor

3. Install the project dependencies.

bash

npm install

## Usage

1. Start the application.
   bash

npm start

1. Open your web browser and access the application at http://localhost:3000.

2. Create and edit text content. The application will save your content automatically.

## Offline Usage

The PWA Text Editor is designed to work offline. You can use it without an internet connection, and your data will be stored locally using IndexedDB.

## Deployment

The application can be deployed to a hosting platform of your choice. To deploy to Heroku, you can follow the Heroku Deployment Guide.
