const fs = require("fs");
const path = require("path");

const inputPath = process.argv[2];

if (!inputPath) {
  console.log("Usage: node directory.js <directory-path>");
  process.exit(1);
}

const absolutePath = path.resolve(inputPath);
const exists = fs.existsSync(absolutePath);

console.log("Resolved absolute path:", absolutePath);
console.log("Exists:", exists ? "Yes" : "No");
