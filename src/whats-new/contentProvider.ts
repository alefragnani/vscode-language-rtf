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
        const changeLog: ChangeLogItem[] = [];

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "2.4.0", releaseDate: "October 2021" } });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
            message: "Add CONTRIBUTING documentation",
                id: 21,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
            message: "Update dependencies",
                id: 22,
                kind: IssueKind.Issue
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "2.3.0", releaseDate: "May 2021" } });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
            message: "Support <b>Virtual Workspaces</b>",
                id: 18,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.NEW,
            detail: {
            message: "Support <b>Workspace Trust</b>",
                id: 17,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
            message: "Security Alert: lodash",
                id: 16,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
            message: "Security Alert: ssri",
                id: 15,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
            message: "Security Alert: y18n",
                id: 14,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
            message: "Security Alert: elliptic",
                id: 13,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });

        changeLog.push({ kind: ChangeLogKind.VERSION, detail: { releaseNumber: "2.2.0", releaseDate: "August 2020" } });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Migrate from TSLint to ESLint",
                id: 10,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Support VS Code package split",
                id: 7,
                kind: IssueKind.Issue
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: elliptic",
                id: 11,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });
        changeLog.push({
            kind: ChangeLogKind.INTERNAL,
            detail: {
                message: "Security Alert: acorn",
                id: 8,
                kind: IssueKind.PR,
                kudos: "dependabot"
            }
        });

        return changeLog;
    }

    provideSponsors(): Sponsor[] {
        const sponsors: Sponsor[] = [];
        return sponsors
    }
   
}