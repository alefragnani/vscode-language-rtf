/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ChangeLogItem, ChangeLogKind, Sponsor, ContentProvider, Header, Image } from "../../vscode-whats-new/src/ContentProvider";

export class WhatsNewRTFContentProvider implements ContentProvider {

    provideHeader(logoUrl: string): Header {
        return <Header>{logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `Edit your <b>RTF</b> files with <b>Syntax Highlighting</b> and <b>Bracket matching</b>`};
    }

    provideChangeLog(): ChangeLogItem[] {
        let changeLog: ChangeLogItem[] = [];
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds <b>Remote Development</b> support"});
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds <b>Footnote</b> support"});
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds <b>Default font and language</b> support"});
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds <b>Special characters</b> support"});
        changeLog.push({kind: ChangeLogKind.NEW, message: "Adds <b>Alignment</b> support"});
        return changeLog;
    }

    provideSponsors(): Sponsor[] {
        let sponsors: Sponsor[] = [];
        return sponsors
    }
   
}