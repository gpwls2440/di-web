// dependency
import { useCallback, useEffect } from 'react';
import { useAtom } from 'jotai';
import { ModalInfo } from '@interface/common';
import { modalListAtom } from '@jotai/common';

/**
 * useModal
 * @description (레이어 / 모달) 관리용 훅
 * @return {Object}
 */
export function useModal(): {
  modalList: ModalInfo[]; // popup 컴포넌트 리스트
  openModal: (componentInfo: ModalInfo) => void; // popup 컴포넌트 add 후 open
  closeModal: (modalName: string) => void; // popup 컴포넌트 pop 함수 후 close
} {
  const [modalList, setModalList] = useAtom(modalListAtom);

  const openModal = useCallback(
    (componentInfo: ModalInfo) => {
      const isOpen = !!modalList.filter(
        (value) => value.name === componentInfo.name,
      ).length;

      !isOpen && setModalList((prev) => [...prev, componentInfo]);
      document.body.style.overflow = 'hidden';
    },
    [setModalList, modalList],
  );

  const closeModal = useCallback(
    (modalName: string) => {
      setModalList((prevList) =>
        prevList.filter((popupInfo) => popupInfo.name !== modalName),
      );
    },
    [setModalList],
  );

  useEffect(() => {
    if (!modalList.length) {
      document.body.style.overflow = 'unset';
    }
  }, [modalList]);

  return {
    modalList,
    openModal,
    closeModal,
  };
}
