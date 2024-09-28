import moment from "moment"; // from moment.js**
import * as vscode from "vscode";
import { showInputBox } from "./basicInput"; // quick input sampple
// status bar item sample

let myStatusBarItem: vscode.StatusBarItem;
var { Timer } = require("easytimer.js"); // from easytimer.js**********
let timerMode: boolean = false;
// calls when function is activated
export async function activate({ subscriptions }: vscode.ExtensionContext) {
  let firstActivation: boolean = true;
  let text: string | undefined;
  // local object to pass in values
  let time = { hours: 0, minutes: 0, seconds: 0 };
  // create the timer
  var timer = new Timer();

  // register a command that is invoked when the status bar item is selected
  const myCommandId = "clocktimer.timer";
  subscriptions.push(
    vscode.commands.registerCommand(myCommandId, async () => {
      // prevents the input box from inadvertently prompting on startup
      if (firstActivation) {
        firstActivation = false;
      } else {
        // wait for the the input to continue
        text = await showInputBox(text);
      }
      // if the timer string is present set the timer accordingly
      if (text) {
        handleTimer(timer, text);
      }
    })
  );

  // create a new status bar item that we can now manage
  myStatusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  myStatusBarItem.command = myCommandId;
  subscriptions.push(myStatusBarItem);

  // update the the timer on the status bar at an interval (every 100ms)
  const interval = setInterval(() => {
    updateStatusBarItem(timer.getTimeValues().toString());
  }, 100);
}
function updateStatusBarItem(timer: string): void {
  // create an string instance of the current timem
  let curentTime = moment().format("LTS");
  // check if a timer was set and dispay info accordingly
  if (timerMode) {
    myStatusBarItem.text = "$(clock) " + timer;
  } else {
    myStatusBarItem.text = "$(clock) " + curentTime;
  }
  myStatusBarItem.show();
}
// helper function that splices the timer string by the colon and converts them into an object of integers
function convertTime(time: string): {
  hours: number;
  minutes: number;
  seconds: number;
} {
  const parts = time.split(":");

  let hours = 0,
    minutes = 0,
    seconds = 0;
  // determine if its hours minutes and seconds, only hrs and min, or only seconds
  if (parts.length === 3) {
    [hours, minutes, seconds] = [
      parseInt(parts[0], 10),
      parseInt(parts[1], 10),
      parseInt(parts[2], 10),
    ];
  } else if (parts.length === 2) {
    [minutes, seconds] = [parseInt(parts[0], 10), parseInt(parts[1], 10)];
  } else if (parts.length === 1) {
    seconds = parseInt(parts[0], 10);
  }
  return { hours, minutes, seconds };
}
// helper function to handle the timer object
async function handleTimer(timer: typeof Timer, inputTime: string) {
  if (timer.isRunning()) {
    timer.stop();
  }
  // conver the time to start the timer
  const time = convertTime(inputTime);
  timerMode = true;
  // start the timer with specified parameters
  timer.start({
    countdown: true,
    startValues: {
      seconds: time.seconds,
      minutes: time.minutes,
      hours: time.hours,
    },
  });
  // when the timer ends the user will be prompted to restart or exit
  timer.addEventListener("targetAchieved", async function () {
    const selection = await vscode.window.showInformationMessage(
      "Timer complete",
      "Restart",
      "Exit"
    );

    if (selection === "Restart") {
      vscode.window.showInformationMessage("Restarting...");
      await handleTimer(timer, inputTime); // Restart the timer , otherwise set the clock if exit is clicked or notifaction is dismissed
    } else if (selection === "Exit") {
      timerMode = false;
    } else {
      timerMode = false;
    }
  });

  vscode.window.showInformationMessage(
    `Setting Timer: ${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds`
  );
}
