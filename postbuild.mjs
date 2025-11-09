import fs from "fs";

const source = "./dist/index.html";
const dest = "./dist/404.html";

try {
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log("✅ 404.html created successfully!");
  } else {
    console.error("❌ index.html not found — did the build fail?");
  }
} catch (err) {
  console.error("⚠️ Error copying 404.html:", err);
}