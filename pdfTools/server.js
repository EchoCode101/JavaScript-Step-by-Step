const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

app.use("/static", express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res, next) => {
  console.log(req.files);
  const { MergePDF } = await import("./mergepdf.mjs"); // Use dynamic import
  await MergePDF(
    path.join(__dirname, req.files[0].path), // Remove unnecessary quotes
    path.join(__dirname, req.files[1].path) // Remove unnecessary quotes
    );
    // let rand = Math.floor(Math.random() * 1000);
  res.redirect(`http://localhost:3000/static/merged.pdf`);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
