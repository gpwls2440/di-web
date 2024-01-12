// Dependency
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from 'jotai';
import { themeKeywordsAtom, themeVariablesAtom } from '@jotai/strategies';

// Components
import Button from '@components/atoms/Button';

// Types

export default memo(function ThemeKeywordList() {
  const [themeVariables, setThemeVariables] = useAtom(themeVariablesAtom);
  const [themeKeyword, setThemeKeywords] = useAtom(themeKeywordsAtom);

  const handleTabClick = (index: number) => {
    const newArr = themeKeyword.filter((_, idx) => idx !== index);
    const themeGroup = newArr.map((item) => item.id);

    setThemeKeywords(newArr);
    setThemeVariables({
      ...themeVariables,
      themeGroup,
    });
  };

  return (
    <div className='theme-keyword-list-wrap'>
      <div className='theme-keyword-list'>
        {themeKeyword.map((item, index) => {
          return (
            <div className='keyword' key={uuidv4()}>
              {item.name}
              <Button onClick={() => handleTabClick(index)}>
                <img src='/svg/ico-keyword-close.svg' alt='삭제' />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
});
