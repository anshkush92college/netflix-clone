import React from 'react';
import { Box, Modal, Typography } from '@mui/material';
import useModal from '../../hooks/useModal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const MovieModal = () => {
  const { movie, isModalOpen, openModal, closeModal } = useModal();

  return (
    <Modal open={isModalOpen} onClose={closeModal}>
      <>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </>
    </Modal>
  );
};

export default MovieModal;