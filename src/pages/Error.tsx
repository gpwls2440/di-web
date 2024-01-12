export default function Error() {
  return (
    <>
      <div
        className='pd20'
        style={{
          marginTop: '100px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <img src='starfriends.jpg' alt='페이지를 찾을 수 없습니다.' />
      </div>
      <div
        className='pd20'
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <p className='mgt10'>404 페이지를 찾을 수 없습니다.</p>
      </div>
    </>
  );
}
