# React Native Timer App

A React Native application built with Redux Toolkit that allows users to create, manage, and interact with multiple customizable timers. The app features timer grouping by category, progress visualization, bulk actions, history tracking, customizable alerts, and a theme switcher (light/dark).

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Running the App](#running-the-app)
- [Building the APK](#building-the-apk)
- [Folder Structure](#folder-structure)
- [Assumptions](#assumptions)
- [License](#license)

## Overview

This app allows users to create timers with specific names, durations, and categories. Timers are grouped by category and support individual actions (start, pause, reset) as well as bulk actions on groups. Once a timer completes, the app logs it in a history screen. Additionally, the app supports a halfway alert for timers and includes a theme switcher to toggle between light and dark modes.

## Features

- **Timer Creation:**  
  Create timers by specifying a name, duration (in seconds), and category. Optionally enable a halfway alert.

- **Timer List & Grouping:**  
  Display timers grouped by their category. Expand/collapse categories to manage the timers.

- **Timer Management:**  
  Start, pause, and reset timers. When a timer reaches zero, mark it as "Completed" and log it in history.

- **Progress Visualization:**  
  Each timer displays a progress bar that visualizes the elapsed time relative to its total duration.

- **Bulk Actions:**  
  Perform bulk operations (start all, pause all, reset all) for timers within a specific category.

- **Timer History:**  
  Maintain and view a log of completed timers along with their completion times.

- **Customizable Alerts:**  
  Enable an optional halfway alert to notify the user when the timer reaches 50% of its duration.

- **Theme Switching:**  
  Toggle between light and dark themes.

- **Filtering:**  
  Filter timers by category using a dropdown filter integrated into the bottom navigation bar.

## Tech Stack

- **React Native** – Mobile UI framework.
- **Redux Toolkit** – State management.
- **React Navigation** – Navigation between screens.
- **AsyncStorage** – Local persistence of timers and history.
- **Expo (Managed Workflow)** – For easier development and building APKs.
- **react-native-vector-icons** – For custom icons (optional).

## Setup Instructions

1. **Clone the Repository:**

   ```
   git clone https://github.com/yourusername/react-native-timer-app.git
   cd react-native-timer-app
   ```

2. **Install Dependencies:**

    If using npm:
   
      ```
       npm install
      ```
    
3. **Start the Development Server:**
        
     ```
     expo start
     ```

## Running the App
- **Running the App**
    Install the Expo Go app from the App Store or Google Play, then scan the QR code provided by Expo.

- **On an Emulator/Simulator:**
    Follow the prompts in Expo Dev Tools to run the app on your Android emulator or iOS simulator.


## Assumptions

- The app uses minimal third-party dependencies to maintain a clean UI/UX.
- Timer data and history logs are persisted locally using AsyncStorage.
- The app is built using the Expo managed workflow for easier deployment and building.
- The default theme is light; users can toggle to dark mode.
- Timers are identified by a unique ID generated using the current timestamp.
- Error handling is implemented primarily through alerts to notify users of validation issues.
- Bulk actions and category filtering assume that timers have valid categories assigned.
- The app assumes a reliable internet connection when using Expo build services.

