// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const {
  convert,
  convert_index_to_accent,
  convert_accent_to_index,
  to_subscript,
  to_superscript,
} = require("./convert");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "convert-assyriology-translit.convert",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let document = editor.document;
        let selection = editor.selection;
        let text = document.getText(selection);
        let converted = convert(text);
        let converted2 = convert_index_to_accent(converted);

        editor.edit((editBuilder) => {
          editBuilder.replace(selection, converted2);
        });
      }
    }
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "convert-assyriology-translit.convert_index_to_accent",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let document = editor.document;
        let selection = editor.selection;
        let text = document.getText(selection);
        let converted = convert_index_to_accent(text);
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, converted);
        });
      }
    }
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "convert-assyriology-translit.convert_accent_to_index",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let document = editor.document;
        let selection = editor.selection;
        let text = document.getText(selection);
        let converted = convert_accent_to_index(text);
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, converted);
        });
      }
    }
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "convert-assyriology-translit.convert_to_superscript",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let document = editor.document;
        let selection = editor.selection;
        let text = document.getText(selection);
        let converted = to_superscript(text);
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, converted);
        });
      }
    }
  );
  context.subscriptions.push(disposable);

  disposable = vscode.commands.registerCommand(
    "convert-assyriology-translit.convert_to_subscript",
    function () {
      let editor = vscode.window.activeTextEditor;
      if (editor) {
        let document = editor.document;
        let selection = editor.selection;
        let text = document.getText(selection);
        let converted = to_subscript(text);
        editor.edit((editBuilder) => {
          editBuilder.replace(selection, converted);
        });
      }
    }
  );
  context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
