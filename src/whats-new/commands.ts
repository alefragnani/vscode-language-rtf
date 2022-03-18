/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { commands } from "vscode";
import { WhatsNewManager } from "../../vscode-whats-new/src/Manager";
import { Container } from "../container";
import { RtfContentProvider, RtfSocialMediaProvider } from "./contentProvider";

export async function registerWhatsNew() {
    const provider = new RtfContentProvider();
    const viewer = new WhatsNewManager(Container.context)
        .registerContentProvider("alefragnani", "rtf", provider)
        .registerSocialMediaProvider(new RtfSocialMediaProvider());
    await viewer.showPageInActivation();
    
    Container.context.subscriptions.push(commands.registerCommand('rtf.whatsNew', () => viewer.showPage()));
}
