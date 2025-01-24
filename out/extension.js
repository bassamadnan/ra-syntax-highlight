"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand('ra.toggleComment', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        const selections = editor.selections;
        editor.edit(editBuilder => {
            selections.forEach(selection => {
                const lines = selection.isEmpty ?
                    [selection.start.line] :
                    range(selection.start.line, selection.end.line + 1);
                lines.forEach(lineNum => {
                    const line = editor.document.lineAt(lineNum);
                    if (line.text.trimStart().startsWith('# ')) {
                        const firstChar = line.text.indexOf('# ');
                        editBuilder.delete(new vscode.Range(new vscode.Position(lineNum, firstChar), new vscode.Position(lineNum, firstChar + 2)));
                    }
                    else {
                        editBuilder.insert(new vscode.Position(lineNum, 0), '# ');
                    }
                });
            });
        });
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
function range(start, end) {
    return Array.from({ length: end - start }, (_, i) => start + i);
}
//# sourceMappingURL=extension.js.map