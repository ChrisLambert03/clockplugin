# VSCode Timer Status Bar Extension

A simple Visual Studio Code extension that adds a status bar item to display the current time. When clicked, it prompts the user to enter a timer in HH:MM:SS format. The status bar will then show the current timer countdown, and once the timer is complete, the user will be prompted whether to restart the timer or exit. The previous time value is saved as the default parameter.

## Features

- Displays the current time in the status bar.
- Prompts the user to enter a timer in HH:MM:SS format when clicked.
- Counts down the timer and updates the status bar accordingly.
- Prompts the user to restart the timer or exit once the countdown is complete.
- The previously entered timer value is saved as the default input for future use.

## Dependencies

This extension requires the following packages:

- [moment](https://momentjs.com) : A JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [easytimer.js](https://albert-gonzalez.github.io/easytimer.js/) : A simple timer library for JavaScript.

## Installation

1. Copy the extention files in your local directory

To install the necessary dependencies manually, run the following command in your terminal (Note that you must have git and Node.js installed):

```bash
npm install moment-timer easytimer.js
```

Or you can run this to install dependencies listed in package.json

```bash
npm install
```

## Usage

1. Install the extension in Visual Studio Code.
2. Click on the status bar item to open the timer input prompt.
3. Enter the time in the HH:MM:SS format.
4. The timer will start counting down, and the status bar will update to show the remaining time.
5. Once the timer reaches zero, a prompt will appear asking if you want to restart the timer or exit.

## Activation

The extension activates when you open Visual Studio Code and run `>Timer` in the Command Palette

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

Thanks to the contributors of [moment](https://www.npmjs.com/package/moment) and [easytimer.js](https://www.npmjs.com/package/easytimer.js) for their libraries that made this project possible.
