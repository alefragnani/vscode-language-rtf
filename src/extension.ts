/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import * as vscode from "vscode";

import { WhatsNewManager } from '../vscode-whats-new/src/Manager';
import { WhatsNewRTFContentProvider } from './whats-new/RTFContentProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let provider = new WhatsNewRTFContentProvider();
    let viewer = new WhatsNewManager(context).registerContentProvider("rtf", provider);
    viewer.showPageInActivation();
    context.subscriptions.push(vscode.commands.registerCommand('rtf.whatsNew', () => viewer.showPage()));
}