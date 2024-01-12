// Dependency
import { useMemo, createContext, useRef, useContext, useEffect } from 'react';
import { useMeasure, usePrevious, useBoolean } from '@kbam-frontend/hooks';

// css
import './disclosure.css';

interface Disclosure {
  children: React.ReactNode;
  defaultOpen?: boolean;
  style?: React.CSSProperties;
}

interface DisclosureHead {
  children: React.ReactNode;
}

interface DisclosureContent {
  children: React.ReactNode;
  bgColor?: 'white' | 'gray';
}

type DisclosureState = {
  isOpen: boolean;
  toggle: () => void;
};

const DisclosureContext = createContext<DisclosureState | null>(null);

function Disclosure(props: Disclosure) {
  const { defaultOpen, children, style } = props;
  const { value: isOpen, toggle } = useBoolean(defaultOpen);
  const values = useMemo(() => ({ isOpen, toggle }), [isOpen, toggle]);

  return (
    <DisclosureContext.Provider value={values}>
      <div className='disclosure-wrap' style={style}>
        <div
          aria-hidden
          className='disclosure'
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}>
          <img
            className='arrow'
            src='/svg/page-next.svg'
            alt='다음'
            style={{
              transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
            }}
          />
          {children}
        </div>
      </div>
    </DisclosureContext.Provider>
  );
}

function DisclosureHead(props: DisclosureHead) {
  const { children } = props;

  return <div className='disclosure-head'>{children}</div>;
}

function DisclosureContent(props: DisclosureContent) {
  const wrapRef = useRef<HTMLInputElement>(null);
  const state = useContext(DisclosureContext);
  const { children, bgColor = 'gray' } = props;
  const previous = usePrevious(state?.isOpen);
  const { ref, values } = useMeasure();

  const contentsHeight = useMemo(() => {
    return state?.isOpen ? values.height : 0;
  }, [state?.isOpen, values.height]);

  useEffect(() => {
    if (state?.isOpen && wrapRef?.current) {
      wrapRef?.current.style.setProperty('height', `${values.height}px`);
    }
  }, [state, values, wrapRef]);

  return (
    <div
      ref={wrapRef}
      className={`${state?.isOpen ? 'active' : ''} disclosure-content-wrap`}
      style={{
        height:
          state?.isOpen && previous === state?.isOpen ? 'auto' : contentsHeight,
        opacity: state?.isOpen ? 1 : 0,
        transition: state?.isOpen
          ? 'height 0.25s ease-in, opacity 0.25s ease-in'
          : 'height 0.25s ease-out, opacity 0.25s ease-out',
      }}>
      <div
        className='disclosure-content'
        style={{ backgroundColor: bgColor === 'gray' ? '#f4f4f4' : '#fff' }}
        ref={ref}>
        {children}
      </div>
    </div>
  );
}

Disclosure.Head = DisclosureHead;
Disclosure.Content = DisclosureContent;

export default Disclosure;
