import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import ProductModal from '../ProductModal/ProductModal';
import { IModalProps } from '../../interfaces/interfaces';
import { ModalContent, style } from './styles';

const TransitionsModal: React.FC<IModalProps> = ({
  openModal,
  setOpenModal,
  product,
}) => {
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <ModalContent
            p={3}
            bgcolor={'background.paper'}
            boxShadow={24}
          >
            <ProductModal
              setOpenModal={setOpenModal}
              product={product}
            />
          </ModalContent>
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
