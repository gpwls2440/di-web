import Radio from '@components/atoms/Radio';

export default function ReadymadesFactor() {
  return (
    <>
      <div>
        <Radio name='universe' id='universe1' value='universe1' />
      </div>
      <div>
        <Radio
          name='universe'
          id='universe2'
          value='universe2'
          label='테스트'
        />
      </div>
    </>
  );
}
