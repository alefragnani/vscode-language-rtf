// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createTextEditorDecorationType, createDecorationOptions } from './rtf-decorator';

export function activate(context: vscode.ExtensionContext) {


    const decorationTypeOffset2 = createTextEditorDecorationType(2);
    
    let activeEditor = vscode.window.activeTextEditor;
    
    if (activeEditor) {
        triggerUpdateDecorations();
    }

    vscode.window.onDidChangeActiveTextEditor(editor => {
        activeEditor = editor;
        if (editor) {
            triggerUpdateDecorations();
        }
    }, null, context.subscriptions);

    vscode.workspace.onDidChangeTextDocument(event => {
        if (activeEditor && event.document === activeEditor.document) {
            updateDecorations();
        }
    }, null, context.subscriptions);


    let timeout = null;
    function triggerUpdateDecorations() {
        updateDecorations();
    }

    function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    function updateDecorations() {
        if (!activeEditor) {
            return;
        }

        let books: vscode.Range[] = [];

		// Remove all bookmarks if active file is empty
        if (activeEditor.document.lineCount > 0) {

            let decoration = new vscode.Range(1, 10, 1, 10);
            books.push(decoration);

            for (var index = 0; index < activeEditor.document.lineCount; index++) {
                var element = activeEditor.document.lineAt(index).text;
                
                // let matches: RegExpMatchArray = element.match(/\\red\d+\\green\d+\\blue\d+\;/);
                // if (matches) {
                //     for (var xx = 0; xx < matches.length; xx++) {
                //         var xxmm = matches[xx];
                //         // console.log(xxmm);
                                                
                //     }
                // }

                var myRe = /\\red\d+\\green\d+\\blue\d+\;/g;
                var str = element;
                var myArray;
                while ((myArray = myRe.exec(str)) !== null) {
                    var msg = 'Found ' + myArray[0] + '. ';
                    msg += 'Next match starts at ' + myRe.lastIndex;
                    
                    // \redNNN\greenNNN\blueNNN;
                    
                    //var cRED = msg.substr(5)                    
                    var myReRGB = /\d{1,3}/g;
                    var strRGB = myArray[0];
                    var myArrayRGB;
                    var colors = [];
                    while ((myArrayRGB = myReRGB.exec(strRGB)) !== null) {
                        colors.push(myArrayRGB[0]);
                    }   
                    let rrr = rgbToHex(colors[0], colors[1], colors[2]);
                    var xxxxx = rrr;


                    //console.log(msg);
                }
            }

            // let invalids = [];
            // // for (let index = 0; index < bookmarks.activeBookmark.bookmarks.length; index++) {
            // for (let element of bookmarks.activeBookmark.bookmarks) {
            //     // let element = bookmarks.activeBookmark.bookmarks[index];

            //     if (element <= activeEditor.document.lineCount) { 
            //         let decoration = new vscode.Range(element, 0, element, 0);
            //         books.push(decoration);
            //     } else {
            //         invalids.push(element);
            //     }
            // }

            // if (invalids.length > 0) {
            //     let idxInvalid: number;
            //     // for (let indexI = 0; indexI < invalids.length; indexI++) {
            //     for (const element of invalids) {
            //         idxInvalid = bookmarks.activeBookmark.bookmarks.indexOf(element); // invalids[indexI]);
            //         bookmarks.activeBookmark.bookmarks.splice(idxInvalid, 1);
            //     }
            // }
        }
        activeEditor.setDecorations(decorationTypeOffset2, books);
    }
}


export function deactivate() {
}
