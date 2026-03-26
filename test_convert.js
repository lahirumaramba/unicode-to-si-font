const fs = require('fs');

// Extract mapping from script.js
const scriptContent = fs.readFileSync('script.js', 'utf8');
const mappingMatch = scriptContent.match(/const mapping = (\[[\s\S]*?\]);/);
eval(mappingMatch[0]);

function convert(unicodeText) {
    return mapping.reduce((result, { p, r }) => result.replace(p, r), unicodeText);
}

const input1 = "ද්‍රෝ";
const input2 = "දෙවන";

console.log("ද්‍රෝ ->", convert(input1));
console.log("දෙවන ->", convert(input2));
