// Dependency
import { useLocation, useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { keywordAtom, themeKeywordsAtom } from '@jotai/strategies';
import { useInput } from '@kbam-frontend/hooks';

// Components
import Tabs from '@components/molecules/Tabs';
import Search from '@components/molecules/Search';

const data = [
  {
    name: '테마 전략',
    id: 'THEME',
    path: '',
  },
  {
    name: '업종 전략',
    id: 'SECTOR',
    path: '',
  },
  {
    name: '대가들의 전략',
    id: 'MASTER',
    path: '',
  },
  {
    name: '나만의 전략',
    id: 'DIY',
    path: '',
  },
];

export default function Tab() {
  // const [tab] = useState<'THEME' | 'SECTOR' | 'MASTER' | 'DIY'>('THEME');
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useInput('');

  const [, setKeyword] = useAtom(keywordAtom);
  const [, setThemeKeywords] = useAtom(themeKeywordsAtom);
  const handleClick = (id: string) => {
    setInputValue('');
    setKeyword('');
    setThemeKeywords([]);
    navigate(`/strategies/${id.toLocaleLowerCase()}/`);
  };

  const handleUpdate = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleSearchKeywordDelete = () => {
    setInputValue('');
  };

  return (
    <div>
      <Tabs
        data={data}
        activeId={pathname.split('/')[2].toLocaleUpperCase()}
        onClick={handleClick}
        contents={
          <div className='tab-contents'>
            <Search
              onChange={inputValue.onChange}
              onSearch={handleUpdate}
              onSearchKeywordDelete={handleSearchKeywordDelete}
              value={inputValue.value.toString()}
            />
          </div>
        }
      />
    </div>
  );
}
