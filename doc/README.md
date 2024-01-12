## 목차

[1. 컴포넌트 (Components)](##1._컴포넌트_(Components))  
[2. 명명 규칙 (Naming Rule)](##2._명명_규칙_(Naming_Rule))


## 1. 컴포넌트 (Components)
- Pascal Case를 사용한다.
- 기명함수를 사용한다.
- 인터페이스는 Pascal Case를 사용하며 I를 앞에 붙이지 않는다.
- props정의는 인터페이스로 한다.

```

// BAD
const CircleIcon(props: ICircleIcon) = () =>  {
  const { bgColor } = props;

  return (
    <div
      className='circle-icon'
      style={{
        backgroundColor: bgColor,
      }}
    />
  );
}

export default CircleIcon;

// BAD
export default function CircleIcon({ bgColor }) {
  return (
    <div
      className='circle-icon'
      style={{
        backgroundColor: bgColor,
      }}FvF
    />
  );
}


// GOOD
interface CircleIcon {
  bgColor: string;
}

export default function CircleIcon(props: CircleIcon) {
  const { bgColor = '#fff' } = props;

  return (
    <div
      className='circle-icon'
      style={{
        backgroundColor: bgColor,
      }}
    />
  );
}

```

## 2. 명명 규칙 (Naming Rule)

### 변수
CamelCase를 사용한다.

### 컴포넌트 (Component) 

Pascal Case를 사용한다.


### 이벤트 함수

- 이벤트 함수 네이밍 시 handle+{매게체}+이벤트(Click, Change...)의 이름으로 정의한다.  
- 컴포넌트의 내부에서 외부로 넘겨주는 함수명은 on으로 시작한다. on+이벤트(Click, Change...)

```
// 예시
function Button(props: ButtonProps) {
  const { onClick } = props;

  return (
    <button type="button" onClick={onClick}>테스트</button>
  );
};

// 예시1 기본형
const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
  ...
};


<Button
  onClick={handleClick}>
</Button>

// 예시2 handle + 매개체 + 이벤트

const handleFilterChange = (e?: React.ChangeEvent<HTMLInputElement>) => {
  ...
};


<Button
  onClick={handleFilterChange}>
</Button>
```


### 인터페이스(interface) 

Pascal Case를 사용하며 I를 앞에 붙이지 않는다.

### 훅(Hooks)

- Api와 통신하는 Hook의 경우 useFetch+(관심사/카테고리)로 명명한다.
- event와 관련된 Hook의 경우 use + event(Scroll, Click등등) + (관심사/카테고리)로 명명한다.
- 예) useFetchProFactors, useScrollUp
