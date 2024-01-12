/**
 * Atoms > Step
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';

// css
import './step-vertical.css';

interface StepVerticalData {
  name: string;
}

interface StepVertical {
  activeIndex?: number;
  data?: StepVerticalData[];
}

export default function StepVertical(props: StepVertical) {
  const { activeIndex = 1, data = [] } = props;

  if (!data) {
    return <></>;
  }

  return (
    <div className='step-vertical'>
      <ol>
        {data?.map((item, index) => {
          return (
            <li
              key={uuidv4()}
              className={`${activeIndex >= index + 1 ? 'active' : ''} ${
                activeIndex === index + 1 ? 'current' : ''
              }`}>
              <strong>{item?.name}</strong>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
