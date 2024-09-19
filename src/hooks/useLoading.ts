import { useContext } from 'react';
import { LoadingContext } from '../context/LoadingContext';

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a AppProvider');
  }
  return context;
};
