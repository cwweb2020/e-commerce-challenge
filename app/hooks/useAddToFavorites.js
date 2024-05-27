/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {toast} from 'sonner';
import {addProductToFavorite} from '~/api/service';

const useAddToFavorites = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addToFavorites = async (productId) => {
    /* const userId = localStorage.getItem('userId'); */
    setIsLoading(true);
    const response = await addProductToFavorite({userId: 'user1', productId});
    setIsLoading(false);
    if (response) toast.success('Added successfully.');
    return response;
  };

  return {isLoading, addToFavorites};
};

export default useAddToFavorites;
