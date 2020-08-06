/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands } from "vscode";
import { WhatsNewManager } from "../../vscode-whats-new/src/Manager";
import { Container } from "../container";
import { WhatsNewRTFContentProvider } from "./contentProvider";

export function registerWhatsNew() {
    let provider = new WhatsNewRTFContentProvider();
    let viewer = new WhatsNewManager(Container.context).registerContentProvider("rtf", provider);
    viewer.showPageInActivation();
    Container.context.subscriptions.push(commands.registerCommand('rtf.whatsNew', () => viewer.showPage()));
}
