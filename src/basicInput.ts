/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { window } from "vscode";

/**
 * Shows a pick list using window.showQuickPick().
 */
export async function showQuickPick() {
  let i = 0;
  const result = await window.showQuickPick(["one", "two", "three"], {
    placeHolder: "one, two or three",
    onDidSelectItem: (item) =>
      window.showInformationMessage(`Focus ${++i}: ${item}`),
  });
  window.showInformationMessage(`Got: ${result}`);
}

/**
 * Shows an input box using window.showInputBox().
 */
// added the text parameter to stroe the previous time as the default value in the timer prompt as well as regex for validation
export async function showInputBox(text: string | undefined) {
  const result = await window.showInputBox({
    value: text,
    valueSelection: [2, 4],
    placeHolder: "Enter in 'hh:mm:ss' fomrat Ex 17:38:00",
    validateInput: (text) => {
      // regex for hours minutes and seconds
      const regexHMS = /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
      const regexMS = /^(?:[01]\d|2[0-3]):[0-5]\d$/;
      const regexS = /^[0-5]\d$/;
      if (!regexHMS.test(text) && !regexMS.test(text) && !regexS.test(text)) {
        return "Invalid time format. Please enter time as hh:mm:ss (e.g., 17:38:45)";
      }
      return null;
    },
  });

  return result;
}
