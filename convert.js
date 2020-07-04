function convert(text) {
  text = text.replace(/c/g, "š");
  text = text.replace(/C/g, "Š");
  text = text.replace(/sz/g, "š");
  text = text.replace(/SZ/g, "Š");
  text = text.replace(/s,/g, "ṣ");
  text = text.replace(/S,/g, "Ṣ");
  text = text.replace(/t,/g, "ṭ");
  text = text.replace(/T,/g, "Ṭ");
  text = text.replace(/t_/g, "ṯ");
  text = text.replace(/T_/g, "Ṯ");
  text = text.replace(/j/g, "ŋ");
  text = text.replace(/J/g, "Ŋ");
  text = text.replace(/g~/g, "g̃");
  text = text.replace(/G~/g, "G̃");
  text = text.replace(/h,/g, "ḥ");
  text = text.replace(/h/g, "ḫ");
  text = text.replace(/H/g, "Ḫ");
  text = text.replace(/a\^/g, "â");
  text = text.replace(/i\^/g, "î");
  text = text.replace(/u\^/g, "û");
  text = text.replace(/e\^/g, "ê");
  text = text.replace(/o\^/g, "ô");
  text = text.replace(/A\^/g, "Â");
  text = text.replace(/I\^/g, "Î");
  text = text.replace(/U\^/g, "Û");
  text = text.replace(/E\^/g, "Ê");
  text = text.replace(/O\^/g, "Ô");
  text = text.replace(/a~/g, "ā");
  text = text.replace(/i~/g, "ī");
  text = text.replace(/u~/g, "ū");
  text = text.replace(/e~/g, "ē");
  text = text.replace(/o~/g, "ō");
  text = text.replace(/A~/g, "Ā");
  text = text.replace(/I~/g, "Ī");
  text = text.replace(/U~/g, "Ū");
  text = text.replace(/E~/g, "Ē");
  text = text.replace(/O~/g, "Ō");
  text = text.replace(/'/g, "ʿ"); //ayin
  text = text.replace(/`/g, "ʾ"); //aleph

  return text;
}

function index_to_accent(word) {
  const m = word.match(/^([^0-9]+)([0-9x]+)$/);
  if (m) {
    const number = Number(m[2]);
    if (number === 2 || number === 3) {
      const accent = function (c) {
        return {
          a: ["a", "á", "à"],
          i: ["i", "í", "ì"],
          u: ["u", "ú", "ù"],
          e: ["e", "é", "è"],
          A: ["A", "Á", "À"],
          I: ["I", "Í", "Ì"],
          U: ["U", "Ú", "Ù"],
          E: ["E", "É", "È"],
        }[c][number - 1];
      };
      return m[1].replace(/[aiueAIUE]/, accent);
    } else {
      return word;
    }
  } else {
    return word;
  }
}

function accent_to_index(word) {
  const exp = /[áíúéÁÍÚÉàìùèÀÌÙÈ]/;
  const exp2 = /[áíúéÁÍÚÉ]/;
  const exp3 = /[àìùèÀÌÙÈ]/;

  const m = word.match(/^([^0-9]+)([0-9x]+)$/);
  if (m) {
    return word;
  }
  const m2 = word.match(exp) || [];
  if (m2.length !== 1) {
    return word;
  }

  if (word.match(exp2)) {
    return (
      word.replace(exp2, (c) => {
        return {
          á: "a",
          í: "i",
          ú: "u",
          é: "e",
          Á: "A",
          Í: "I",
          Ú: "U",
          É: "E",
        }[c];
      }) + "2"
    );
  } else {
    return (
      word.replace(exp3, (c) => {
        return {
          à: "a",
          ì: "i",
          ù: "u",
          è: "e",
          À: "A",
          Ì: "I",
          Ù: "U",
          È: "E",
        }[c];
      }) + "3"
    );
  }
}

function convert_index_to_accent(text) {
  const delimiter = /([{}.\- ])/;
  let words = text.split(delimiter);
  return words.map(index_to_accent).join("");
}

function convert_accent_to_index(text) {
  const delimiter = /([{}.\- ])/;
  let words = text.split(delimiter);
  return words.map(accent_to_index).join("");
}

module.exports.convert = convert;
module.exports.convert_index_to_accent = convert_index_to_accent;
module.exports.convert_accent_to_index = convert_accent_to_index;
