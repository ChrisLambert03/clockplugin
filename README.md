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

1. To install the Yeoman generator for creating VSCode extensions, run the following command in your terminal (Note that you must have [git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en) installed):

   ```bash
   npm install --global yo generator-code
   ```

2. Run `yo code` to create a new VSCode extension.
3. Copy the extension files to your local directory. Be sure the `command` object in `package.json` is equal to `"myCommandID"` in extentions.ts (clocktimer.timer). Also in `package.json`, `title` should be `"Timer"`, `name` and `displayName` should be `"clocktimer"`.

- `package.json` dependencies may vary on the Operating System so ensure those parameters stay persistent is crucial.

4. To install the necessary dependencies manually, run the following command in your terminal :

   ```bash
   npm install moment-timer easytimer.js
   ```

5. Or you can run this command to install dependencies listed in `package.json`:

   ```bash
   npm install
   ```

## Activation

The extension activates when you open a Visual Studio Code window with the extension and run `>Timer` in the Command Palette

## Usage

1. Open the extention files in a VsCode Window
2. Select Run or simply press F5.
3. In the new window, open the command palette and type `>Timer` and enter.
4. Click on the status bar item to open the timer input prompt.
5. Enter the time in the HH:MM:SS format.
6. The timer will start counting down, and the status bar will update to show the remaining time.
7. Once the timer reaches zero, a prompt will appear asking if you want to restart the timer or exit.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Resources

Attacehd are link to the VsCode sample extentions provided by Microsoft under an MIT license:

- https://github.com/microsoft/vscode-extension-samples/tree/main/quickinput-sample
- https://github.com/microsoft/vscode-extension-samples/tree/main/statusbar-sample

## Acknowledgments

Thanks to the contributors of [moment](https://www.npmjs.com/package/moment) and [easytimer.js](https://www.npmjs.com/package/easytimer.js) for their libraries that made this project possible.
