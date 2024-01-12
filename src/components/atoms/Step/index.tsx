/**
 * Atoms > Step
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';

// css
import './step.css';

interface StepData {
  name: string;
}

interface Step {
  activeIndex?: number;
  data?: StepData[];
}

export default function Step(props: Step) {
  const { activeIndex = 0, data = [] } = props;

  if (!data) {
    return <></>;
  }

  return (
    <div className='step'>
      <ol>
        {data?.map((item, index) => {
          return (
            <li
              key={uuidv4()}
              className={`${activeIndex >= index ? 'active' : ''} ${
                activeIndex === index ? 'current' : ''
              }`}>
              {activeIndex > index ? (
                <img src='/svg/ico-step-done.svg' alt='완료' />
              ) : (
                <div className='circle'>{index + 1}</div>
              )}
              <strong>{item?.name}</strong>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
