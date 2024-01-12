/**
 * Modal
 * @description createPortal을 이용한 Modal 컴포넌트
 */

// dependency
import React, { useState, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';

import './modal.css';

// interface

interface Modal {
  children: React.ReactNode;
  isDimmed?: boolean;
  isDimmedClickClose?: boolean;
  onClickClose?: (modalName: string) => void;
  handleDimmedClick?: () => void;
}

export default function Modal(props: Modal) {
  const {
    children,
    isDimmed = true,
    isDimmedClickClose = false,
    handleDimmedClick = () => {},
  } = props;
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null,
  );

  useLayoutEffect(() => {
    const element = document.body;

    setWrapperElement(element);
  }, []);

  if (wrapperElement === null) {
    return wrapperElement;
  }

  const modalContainer = (
    <div
      aria-hidden
      className={`modal-wrap ${isDimmed ? 'dimmed' : ''}`}
      onClick={() => isDimmedClickClose && handleDimmedClick()}>
      <div className='modals'>{children}</div>
    </div>
  );
  return createPortal(modalContainer, wrapperElement);
}
