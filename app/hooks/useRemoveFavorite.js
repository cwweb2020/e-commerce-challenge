/* eslint-disable prettier/prettier */
import {useState} from 'react';
import {toast} from 'sonner';
import {removeProductToFavorite} from '~/api/service';

const useRemoveToFavorites = () => {
  const [isLoading, setIsLoading] = useState(false);

  const removeToFavorites = async (productId) => {
    /* const userId = localStorage.getItem('userId'); */
    setIsLoading(true);
    const response = await removeProductToFavorite({
      userId: 'user1',
      productId,
    });
    setIsLoading(false);
    if (response) toast.success('Remove successfully.');
    return response;
  };

  return {isLoading, removeToFavorites};
};

export default useRemoveToFavorites;
