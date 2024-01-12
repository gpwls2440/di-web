// Dependency
import { useMemo, useRef, useEffect } from 'react';
import { useMeasure, usePrevious, useBoolean } from '@kbam-frontend/hooks';

// css
import './tree.css';

interface Tree {
  id: string;
  path: string;
  label: string;
  children?: React.ReactNode;
  isChildren?: boolean;
  defaultOpen?: boolean;
  active?: boolean;
  style?: React.CSSProperties;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

interface TreeContent {
  children: React.ReactNode;
  isOpen: boolean;
}

export type TreeState = {
  isOpen: boolean;
  toggle: () => void;
};

function Tree(props: Tree) {
  const {
    id,
    path,
    label,
    defaultOpen,
    children,
    isChildren = false,
    style,
    active = false,
    onClick,
  } = props;
  const { value: isOpen, toggle } = useBoolean(defaultOpen);
  const handleClick = (e?: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
  };

  return (
    <div aria-hidden className='tree-wrap' data-id={id} style={style}>
      <div aria-hidden className='tree' onClick={() => toggle()}>
        {!isChildren && (
          <img
            className='arrow'
            src='/svg/aside-arrow.svg'
            alt='다음'
            style={{
              transform: children && isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
              marginTop: children && isOpen ? '-12px' : '-10px',
            }}
          />
        )}
        <div
          data-id={id}
          data-path={path}
          data-is-children={isChildren}
          aria-hidden
          onClick={handleClick}
          className={`tree-item ${active ? 'active' : ''}`}>
          {label}
        </div>
      </div>
      {children && <TreeContent isOpen={isOpen}>{children}</TreeContent>}
    </div>
  );
}

function TreeContent(props: TreeContent) {
  const { isOpen } = props;

  const wrapRef = useRef<HTMLInputElement>(null);
  const { children } = props;
  const previous = usePrevious(isOpen);
  const { ref, values } = useMeasure();

  const contentsHeight = useMemo(() => {
    return isOpen ? values.height : 0;
  }, [isOpen, values.height]);

  useEffect(() => {
    if (isOpen && wrapRef?.current) {
      wrapRef?.current.style.setProperty('height', `${values.height}px`);
    }
  }, [isOpen, values, wrapRef]);

  return (
    <div
      ref={wrapRef}
      className={`${isOpen ? 'active' : ''} tree-content-wrap`}
      style={{
        height: isOpen && previous === isOpen ? 'auto' : contentsHeight,
        opacity: isOpen ? 1 : 0,
        transition: isOpen
          ? 'height 0.25s ease-in, opacity 0.25s ease-in'
          : 'height 0.25s ease-out, opacity 0.25s ease-out',
      }}>
      <div className='tree-content' ref={ref}>
        <span>{children}</span>
      </div>
    </div>
  );
}

export default Tree;
