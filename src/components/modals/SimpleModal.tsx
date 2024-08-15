import { gettersState } from '@/stores/modalStore';
import { Modal } from 'antd';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export type ModalElement = {
  isModalOpen: boolean,
  children: ReactNode,
  title: string,
  footer: ReactNode,
  closeIcon: ReactNode,
}

const SimpleModal = () => {

  const element = document.getElementById('modal') as HTMLElement

  const storeModal = useSelector(gettersState)

  const dispacth = useDispatch()

  const cancelModal = () => {
    dispacth({
      type: "modals/closeModal",
      payload: false
    })
  }

  return createPortal(
    <>
      {storeModal.footer != null ? <Modal title={storeModal.title} open={storeModal.isModalOpen} onCancel={() => cancelModal()}>
        {storeModal.children}
      </Modal> : <Modal closeIcon={storeModal.closeIcon} footer={storeModal.footer} title={storeModal.title} open={storeModal.isModalOpen} onCancel={() => cancelModal()}>
        {storeModal.children}
      </Modal>}
    </>, element
  );
};

export default SimpleModal;