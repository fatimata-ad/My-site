const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/download-cv", (req, res) => {
  const key = req.query.key;
  const password = "Jemila140899@";

  if (key === password) {
    const file = path.join(__dirname, "public", "assets", "FatimaCV.pdf.pdf");
    res.download(file);
  } else {
    res.status(401).send("Mot de passe incorrect !");
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
