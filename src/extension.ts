// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
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