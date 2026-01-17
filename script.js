let isDevToModi = true;
document.getElementById("convertbtn").addEventListener("click", () => {
  if (isDevToModi) {
    DevtoModi();
  } else {
    ModiToDev();
  }
});


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


const modiToDev = {
  "𑘀":"अ","𑘁":"आ","𑘂":"इ","𑘃":"ई",
  "𑘄":"उ","𑘅":"ऊ","𑘆":"ऋ",

  "𑘊":"ए","𑘋":"ऐ","𑘌":"ओ","𑘍":"औ",

  "𑘎":"क","𑘏":"ख","𑘐":"ग","𑘑":"घ",
  "𑘓":"च","𑘔":"छ","𑘕":"ज","𑘖":"झ",

  "𑘘":"ट","𑘙":"ठ","𑘚":"ड","𑘛":"ढ",

  "𑘝":"त","𑘞":"थ","𑘟":"द","𑘠":"ध",

  "𑘡":"न","𑘢":"प","𑘣":"फ","𑘤":"ब",
  "𑘥":"भ","𑘦":"म",

  "𑘧":"य","𑘨":"र","𑘩":"ल","𑘪":"व",

  "𑘫":"श","𑘬":"ष","𑘭":"स","𑘮":"ह","𑘯":"ळ",

  "𑘰":"ा","𑘱":"ि","𑘲":"ी",
  "𑘳":"ु","𑘴":"ू",
  "𑘹":"े","𑘺":"ै",
  "𑘻":"ो","𑘼":"ौ",

  "𑘽":"ं","𑘾":"ः","𑘿":"्"
};


function devanagariToModi(text) {
  let out = "";
  for (let ch of text) {
    out += devToModi[ch] || ch;
  }
  return out;
}
function modiToDevanagari(text) {
  let out = "";
  for (let ch of text) {
    out += modiToDev[ch] || ch;
  }
  return out;
}

/*function switchbtn() {
  document.getElementById("label").innerText = "Convert Modi to Marathi";
 document.getElementById("header").innerText="Devnagri Output";
}*/

let SwitchBtn = document.getElementById("Switch");
function switchbtn() {
  isDevToModi = !isDevToModi; // 🔁 toggle direction
document.getElementById("outputText").innerText = "";
document.getElementById("inputText").value = "";
  if (isDevToModi) {

    document.getElementById("label").innerText =
      "Convert Devanagari to Modi";
    document.getElementById("header").innerText =
      "Modi Output";
  } else {
    document.getElementById("label").innerText =
      "Convert Modi to Devanagari";
    document.getElementById("header").innerText =
      "Devanagari Output";
  }
  document.querySelector(".switch").classList.toggle("active");
}

function ModiToDev() {
  let input = document.getElementById("inputText").value.trim();
  input = decodeHTML(input);

  const output = modiToDevanagari(input);
  document.getElementById("outputText").innerText = output;
}

  function decodeHTML(str) {
  const el = document.createElement("textarea");
  el.innerHTML = str;
  return el.value;
}



/* ===============================
   MAIN CONVERT FUNCTION
================================= */
function DevtoModi() {
   /*isDevToModi = true;*/
  let input = document.getElementById("inputText").value.trim();
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

