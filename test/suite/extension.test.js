const assert = require("assert");

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
//const vscode = require("vscode");
const {
  convert,
  convert_index_to_accent,
  convert_accent_to_index,
} = require("../convert");

suite("Extension Test Suite", () => {
  //vscode.window.showInformationMessage("Start all tests.");

  test("Convert test", () => {
    assert.equal(convert("cszs,t,jg~ha^i^u^e^a~i~u~e~"), "ššṣṭŋg̃ḫâîûêāīūē");
    assert.equal(convert("CSZS,T,JG~HA^I^U^E^A~I~U~E~"), "ŠŠṢṬŊG̃ḪÂÎÛÊĀĪŪĒ");
  });

  test("Convert Index to Accent", () => {
    assert.equal(convert_index_to_accent("a2.a3"), "á.à");
  });
  test("Convert Index to Accent", () => {
    assert.equal(convert_accent_to_index("á.à"), "a2.a3");
  });
});
