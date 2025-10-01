const fs = require("fs");

// Date de naissance
const birthYear = 2002;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;

// On lit le README
let readme = fs.readFileSync("README.md", "utf8");

// On remplace le texte entre balises <!--AGE--> ... <!--/AGE-->
readme = readme.replace(/<!--AGE-->.*<!--\/AGE-->/, `<!--AGE-->${age}<!--/AGE-->`);

// On écrit le README mis à jour
fs.writeFileSync("README.md", readme);
