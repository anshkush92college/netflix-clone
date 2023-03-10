import { DocumentData } from 'firebase/firestore';
import { useState } from 'react';

import Movie from '../../types/Movie';
import ModalContext from '../../contexts/modal/index';

type ModalProviderProps = {
  children: React.ReactNode;
};

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [movie, setMovie] = useState<Movie | DocumentData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (movie: Movie | DocumentData) => {
    setMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setMovie(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ movie, isModalOpen, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
