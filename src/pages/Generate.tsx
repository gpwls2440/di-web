// Dependency
import { useInput } from '@kbam-frontend/hooks';
import Cookies from 'js-cookie';

// Components
import Input from '@components/atoms/Input';
import Button from '@components/atoms/Button';
import { useEffect, useState } from 'react';

export default function Generate() {
  const [uid, setUid] = useState<string>('test');
  const [uidInput] = useInput();

  const handleClick = () => {
    setUid(uidInput?.debouncedValue as string);
  };

  useEffect(() => {
    if (uid) {
      window.location.href = `/my-strategies?uid=${uid}`;
    }
  }, [uid]);

  useEffect(() => {
    Cookies.remove('authorization');
  }, []);

  return (
    <div className='pd20'>
      <h1>Uid Generate</h1>
      <div>
        <Input value={uidInput.value} onChange={uidInput.onChange} id='uid' />
        <Button onClick={handleClick}>UID 변경</Button>
      </div>
    </div>
  );
}
