import { ImageModal } from 'components/Modal/Modal';
import React, { useState } from 'react';
import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({webformatURL, tags, largeImageURL }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  const openModal = () => {
  setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Item onClick={openModal}>
        <Image src={webformatURL} alt={tags} />
      </Item>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        largeImageURL={largeImageURL}
        tags={tags}
      />
    </>
  );
};
