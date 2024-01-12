/**
 * Atoms > Step
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';

// Components
import PercentText from '@components/atoms/PercentText';

// css
import './status.css';

interface StatusData {
  title: string;
  status?: number;
}

interface Status {
  data?: StatusData[];
}

export default function Status(props: Status) {
  const { data = [] } = props;

  if (!data) {
    return <></>;
  }

  return (
    <div className='status'>
      <ul>
        {data?.map((item) => {
          return (
            <li key={uuidv4()}>
              {item.status && <PercentText value={item.status ?? 0} />}
              {!item.status && <div className='status-edit'>편집중</div>}
              <div className='status-title'>{item?.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
