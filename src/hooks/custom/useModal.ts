import { useRecoilState } from 'recoil';
import { modalState } from '../../recoil/atom/utilState';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};
