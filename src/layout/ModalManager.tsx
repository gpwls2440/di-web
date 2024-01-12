/**
 * PopupManager
 * @description 모달 관리 컴포넌트
 */

// dependency
import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ModalPortal from '@components/atoms/Modal';
import { useModal } from '@hooks/useModal';

// components

interface ModalManager {
  children?: React.ReactNode;
}
export default function ModalManager(props: ModalManager) {
  const { children } = props;
  const { modalList, closeModal } = useModal();

  const renderModalComponents = useMemo(() => {
    return modalList?.map((modal) => {
      return (
        <ModalPortal
          key={uuidv4()}
          isDimmed={modal.isDimmed}
          isDimmedClickClose={modal.isDimmedClickClose}
          handleDimmedClick={() => closeModal(modal.name)}
          onClickClose={() => closeModal(modal.name)}>
          {modal?.children}
        </ModalPortal>
      );
    });
  }, [closeModal, modalList]);

  return (
    <>
      {children}
      {renderModalComponents}
    </>
  );
}
