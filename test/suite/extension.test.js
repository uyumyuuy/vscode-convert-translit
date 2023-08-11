const assert = require("assert");

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
//const vscode = require("vscode");
const {
  convert,
  convert_index_to_accent,
  convert_accent_to_index,
  to_superscript,
  to_subscript,
} = require("../../convert");

suite("Extension Test Suite", () => {
  //vscode.window.showInformationMessage("Start all tests.");

  test("Convert test", () => {
    assert.strictEqual(
      convert("cszs,t,t_jg~hh,a^i^u^e^o^a~i~u~e~o~'"),
      "ššṣṭṯŋg̃ḫḥâîûêôāīūēōʿ"
    );
    assert.strictEqual(
      convert("CSZS,T,T_JG~HA^I^U^E^O^A~I~U~E~O~"),
      "ŠŠṢṬṮŊG̃ḪÂÎÛÊÔĀĪŪĒŌ"
    );
  });

  test("Convert Index to Accent", () => {
    assert.strictEqual(convert_index_to_accent("a2.a3"), "á.à");
  });
  test("Convert Index to Accent", () => {
    assert.strictEqual(convert_accent_to_index("á.à"), "a2.a3");
  });

  test("Convert to superscript", () => {
    assert.strictEqual(to_superscript("abcd-efg10"), "ᵃᵇᶜᵈ⁻ᵉᶠᵍ¹⁰");
  });

  test("Convert to subscript", () => {
    assert.strictEqual(to_subscript("abcdg4"), "abcdg₄");
  });
});
