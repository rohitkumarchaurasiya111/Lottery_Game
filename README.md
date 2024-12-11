# Lottery Game

Lottery Game is a simple project developed using React to explore its core concepts, including component-based architecture, lifting state up, and other common design patterns. This project was created as a learning exercise to understand how to structure React applications for real-world use cases.

## Project Overview

The Lottery Game generates random numbers, and based on a predefined winning condition, it determines whether the player wins. The game provides flexibility to modify the winning condition and the number of lottery numbers as needed.

### Features:
- Generates random 4-digit lottery numbers.
- Simple winning condition: the sum of all digits equals 15.
- Fully customizable: you can modify the winning condition and the number of digits.
- Component-based architecture: different tasks are handled by separate components.
- Uses the "Lifting State Up" React design pattern for state management.

## How It Works
1. Click the **Get Ticket** button to generate a new random lottery number.
2. The application checks the winning condition (sum of digits = 15).
3. A message displays whether you win or lose.
4. The logic is modular, allowing you to update the number of digits or change the winning condition easily.

### Screenshot
Below is a screenshot of the game displaying a winning condition:

![Winning Screenshot](![image](https://github.com/user-attachments/assets/9a8b0eba-dba2-4dda-a124-48dbc9ec9413)
)

## Learning Objectives
This project was built with the following objectives:
- Practice building and structuring React components.
- Understand and apply the "Lifting State Up" pattern in React.
- Develop a simple interactive UI with React.

## Installation and Usage
1. Clone this repository:
   ```bash
   git clone https://github.com/rohitkumarchaurasiya111/Lottery_Game.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Lottery_Game
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:3000` to play the Lottery Game.

## Customization
- **Modify Winning Condition:** You can change the condition for winning by updating the logic in the main state management component.
- **Adjust Lottery Numbers:** The number of digits in the lottery can be changed easily by modifying the corresponding component and state logic.

## Technologies Used
- **React:** For building the user interface.
- **JavaScript (ES6):** Core language used in the project.
- **CSS:** For styling the application.

## Project Structure
The project is divided into multiple React components, each responsible for a specific part of the application. The "Lifting State Up" pattern has been used to ensure seamless communication between components and efficient state management.

## Contribution
**If you'd like to contribute to this project, feel free to fork the repository and submit a pull request.
**---

Enjoy the game! Feel free to share your feedback or suggestions for improvement.

