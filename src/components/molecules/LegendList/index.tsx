/**
 * Molecules > LegendList
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';

// Components
import CircleIcon from '@components/atoms/CircleIcon';

// types
import { LegendListItem } from '@interface/common';

// css
import './legend-list.css';

interface LegendList {
  data: LegendListItem[];
}

export default function LegendList(props: LegendList) {
  const { data } = props;

  return (
    <ul className='legend-list'>
      {data.map((entry) => {
        return (
          <li key={uuidv4()}>
            <CircleIcon bgColor={`${entry.color}`} />
            <div className='text'>{entry.value}</div>
          </li>
        );
      })}
    </ul>
  );
}
