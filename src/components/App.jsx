import React, { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from '../services/getImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App =()=>{
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [ more, setMore] = useState(true);
useEffect(()=>{
  if(search === ''){
    return
  };
  setLoading(true)
  async function fetch(){
    
    try {
              const fetchedImages = await fetchImages(search, page);
      
              if (fetchedImages.length === 0) {
                return toast.warn(
                  'Sorry, no images were found for your request. Enter a valid query'
                );
              }
                setImages(prevState =>([...prevState,  ...fetchedImages ]));
                setMore(fetchedImages.length === 12)
              
            } catch (error) {
              toast.error('An error occurred while fetching images.');
            } finally {
              setLoading(false);
            }
  };
  fetch();
  
}, [search, page])
    

  const changeQuery = newQuery => {
    setSearch(newQuery);
    setImages([]);
    setPage(1);
    setMore(true)
  };

 const handleLoadMore = () => {
  setPage(prevState=> prevState + 1)
  };

  return (
    <>
      <Searchbar handleSubmit={changeQuery} />
      {loading && <Loader />}
      <ImageGallery images={images} />
      {images.length > 0 && more && <Button loadMore={handleLoadMore} />}
      <ToastContainer />
    </>
  );
};