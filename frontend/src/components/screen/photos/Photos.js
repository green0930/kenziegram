import React, { useState, useEffect } from "react";
import { getPhotos } from "../../../api.js";
import { BModal } from "../modal/BModal";
export const Photos = (props) => {
  const [pics, setPics] = useState([]);
  const [show, setShow] = useState(false);
  const [source, setSource] = useState("");
  const [photoSize, setPhotoSize] = useState(0);
  useEffect(() => {
    console.log("useEffect is working?");
    async function getThePhotos() {
      let photos = await getPhotos();
      setPics(photos.data);
      return photos;
    }
    getThePhotos();
  }, []);

  function handleShow(event) {
    event.preventDefault();
    const { src } = event.target;
    console.log(event.native)
    const size = event.nativeEvent.path[0].attributes[1].value;
    setSource(src);

    console.log(event);
    setPhotoSize(size);
    console.log(size);
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  };
  console.log(pics);
  return (
    <>
      {pics.map((photo) => {
        return (
          <>
            <span className="pagePhoto">
              <img
                key={photo.src}
                alt=" "
                size={photo.size}
                src={`http://localhost:4000/uploads/${photo.src}`}
                width={"200px"}
                height={"200px"}
                margin={"2px"}
                onClick={handleShow}
              />
            </span>
          </>
        );
      })}
      {show && (
        <BModal
          pic={source}
          imgSize={photoSize}
          show={show}
          handleClose={handleClose}
        />
      )}
    </>
  );
};
export default Photos;
