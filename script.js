

/* ===============================
   DEVANAGARI → MODI (Unicode 17)
================================= */
const devToModi = {
  "अ":"&#x11600;","आ":"&#x11601;","इ":"&#x11602;","ई":"&#x11603;",
  "उ":"&#x11604;","ऊ":"&#x11605;","ऋ":"&#x11606;",
  "ए":"&#x1160A;","ऐ":"&#x1160B;","ओ":"&#x1160C;","औ":"&#x1160D;",

  "क":"&#x1160E;","ख":"&#x1160F;","ग":"&#x11610;","घ":"&#x11611;",
  "च":"&#x11613;","छ":"&#x11614;","ज":"&#x11615;","झ":"&#x11616;",
  "ट":"&#x11618;","ठ":"&#x11619;","ड":"&#x1161A;","ढ":"&#x1161B;",
  "त":"&#x1161D;","थ":"&#x1161E;","द":"&#x1161F;","ध":"&#x11620;",
  "न":"&#x11621;","प":"&#x11622;","फ":"&#x11623;","ब":"&#x11624;",
  "भ":"&#x11625;","म":"&#x11626;","य":"&#x11627;","र":"&#x11628;",
  "ल":"&#x11629;","व":"&#x1162A;","श":"&#x1162B;",
  "ष":"&#x1162C;","स":"&#x1162D;","ह":"&#x1162E;","ळ":"&#x1162F;",

  "ा":"&#x11630;","ि":"&#x11631;","ी":"&#x11632;",
  "ु":"&#x11633;","ू":"&#x11634;","े":"&#x11639;",
  "ै":"&#x1163A;","ो":"&#x1163B;","ौ":"&#x1163C;",

  "ं":"&#x1163D;","ः":"&#x1163E;","्":"&#x1163F;"
};

function devanagariToModi(text) {
  let out = "";
  for (let ch of text) {
    out += devToModi[ch] || ch;
  }
  return out;
}

/* ===============================
   MAIN CONVERT FUNCTION
================================= */
function fetchapi() {
  let input = document.getElementById("inputText").value.trim();

  // If English letters exist → convert to Devanagari first
  if (/[a-zA-Z]/.test(input)) {
    input = englishToDevanagari(input);
  }

  const output = devanagariToModi(input);
  document.getElementById("outputText").innerHTML = output;
}

/* ===============================
   COPY TO CLIPBOARD
================================= */
function copyText() {
  const text = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(text);

}
