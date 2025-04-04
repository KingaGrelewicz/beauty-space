import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GalleryTitle, GalleryWrapper } from "./Gallery.styled";

const totalImages = 25;
const images = Array.from(
  { length: totalImages },
  (_, i) => `/images/${i + 1}.jpg`
);

const lightboxImages = images.map((img) => ({ src: img }));

const Gallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <GalleryTitle>Galeria zdjęć</GalleryTitle>
      <GalleryWrapper>
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery Image ${i + 1}`}
            onClick={() => {
              setIndex(i);
            }}
          />
        ))}
      </GalleryWrapper>

      <Lightbox
        slides={lightboxImages}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default Gallery;
