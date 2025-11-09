import fs from "fs";
import path from "path";

const distDir = path.resolve("dist");
const source404 = path.resolve("404.html");
const target404 = path.join(distDir, "404.html");

// copy 404.html into dist/
fs.copyFileSync(source404, target404);
console.log("✅ 404.html copied to dist/");