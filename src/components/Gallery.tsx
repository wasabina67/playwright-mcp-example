import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const galleryImages = [
  'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1579684947550-22e945225d9a?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1605708896118-957f660c1555?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1625943553852-781c6c70d131?auto=format&fit=crop&q=80&w=1600',
  'https://images.unsplash.com/photo-1602273660127-a0000560a4c1?auto=format&fit=crop&q=80&w=1600',
];

export const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        showStatus={false}
        onClickItem={(index) => {
          setPhotoIndex(index);
          setIsOpen(true);
        }}
        className="cursor-pointer"
      >
        {galleryImages.map((img, index) => (
          <div key={index} className="h-[500px]">
            <img
              src={img}
              alt={`料理写真 ${index + 1}`}
              className="object-cover h-full"
              loading="lazy"
            />
          </div>
        ))}
      </Carousel>

      {isOpen && (
        <Lightbox
          mainSrc={galleryImages[photoIndex]}
          nextSrc={galleryImages[(photoIndex + 1) % galleryImages.length]}
          prevSrc={galleryImages[(photoIndex + galleryImages.length - 1) % galleryImages.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + galleryImages.length - 1) % galleryImages.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleryImages.length)}
        />
      )}
    </>
  );
};
