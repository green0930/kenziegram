import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { uploadPhoto } from "../../../api.js";
export const API_BASE_URL = "http://localhost:4000";
export const Home = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = (event) => {
    event.preventDefault();

    uploadPhoto(selectedFile);
  };

  const onSelectFile = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <selection>
      <form className="form" onSubmit={submitForm}>
        <input
          type="file"
          accept="image/*"
          name="photo"
          onChange={onSelectFile}
        />
        <Button size="sm" variant="outline-success" type="submit">
          Upload All The Photos
        </Button>
      </form>
    </selection>
  );
};
export default Home;
