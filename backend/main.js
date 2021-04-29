import express from "express";
import cors from "cors";
import {
  uploader,
  UPLOAD_DIRECTORY,
  getUploadedFiles,
  findUploadedFile,
} from "./utils.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(UPLOAD_DIRECTORY));

app.get("/photos", async (req, res) => {
  try {
    const data = await getUploadedFiles();

    let photoArray = [];
    const allPhotos = data.map((photo) => ({
      src: `${photo}`,
    }));

    for (let i = 0; i < allPhotos.length; i++) {
      const { size } = await findUploadedFile(data[i]);
      photoArray.push({ ...allPhotos[i], size: size });
    }
    res.json(photoArray);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.get("/photos/:filename", async (req, res) => {
  try {
    const { birthtime, size } = await findUploadedFile(req.params.filename);
    res.json({ birthtime, size });
  } catch (err) {
    res.status(404).json({ message: "Unable to find file." });
  }
});

app.post("/photos", uploader.single("photo"), (req, res) => {
  res.json({
    photo: req.file.path,
  });
});

app.listen(4000, () => {
  console.log("express server is now running on port 4000");
});
