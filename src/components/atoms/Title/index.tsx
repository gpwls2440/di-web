/**
 * Atoms > Title
 */

// css
import './title.css';

/**
 * title : 본문 타이틀
 * page-title: 페이지 타이틀
 * box: 박스 안 타이틀
 */

interface Title {
  title?: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  titleWrapClass?: string;
  titleClass?: string;
  subTitleClass?: string;
  imgSrc?: string;
  subTitleWrapClass?: string;
}

export default function Title(props: Title) {
  const {
    title,
    subTitle,
    titleWrapClass = '',
    titleClass = '',
    subTitleClass = '',
    imgSrc = '',
    subTitleWrapClass = '',
  } = props;

  return (
    <div className={`title-wrap ${titleWrapClass}`}>
      {title && <h5 className={`title ${titleClass}`}>{title}</h5>}
      <div className={`${subTitleWrapClass}`}>
        {subTitle && (
          <h6 className={`sub-title ${subTitleClass}`}>{subTitle}</h6>
        )}
        {imgSrc && <img className='sub-title-img' src={imgSrc} alt='이미지' />}
      </div>
    </div>
  );
}
