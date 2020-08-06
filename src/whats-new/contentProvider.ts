/*---------------------------------------------------------------------------------------------
*  Copyright (c) Alessandro Fragnani. All rights reserved.
*  Licensed under the MIT License. See License.md in the project root for license information.
*--------------------------------------------------------------------------------------------*/

import { ChangeLogItem, ChangeLogKind, Sponsor, ContentProvider, Header, Image, IssueKind } from "../../vscode-whats-new/src/ContentProvider";

export class WhatsNewRTFContentProvider implements ContentProvider {

    provideHeader(logoUrl: string): Header {
        return <Header>{logo: <Image> {src: logoUrl, height: 50, width: 50}, 
            message: `Edit your <b>RTF</b> files with <b>Syntax Highlighting</b> and <b>Bracket matching</b>`};
    }

    provideChangeLog(): ChangeLogItem[] {
        let changeLog: ChangeLogItem[] = [];

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "2.1.0", releaseDate: "November 2019" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
                message: "Support <b>Remote Development</b>",
                id: 6,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "2.0.2", releaseDate: "May 2019" } });
        changeLog.push({
            kind: ChangeLogKind.FIXED,
            detail: {
                message: "Security Alert: tar",
                id: 4,
                kind: IssueKind.Issue
            }
        });

        return changeLog;
    }

    provideSponsors(): Sponsor[] {
        let sponsors: Sponsor[] = [];
        return sponsors
    }
   
}