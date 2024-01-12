/**
 * Molecules > CheckButton
 */

// Components
import Button from '@components/atoms/Button';

// css
import './check-button.css';

interface CheckButton {
  name?: string;
  className: string;
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CheckButton(props: CheckButton) {
  const { name, className = '', onClick, children } = props;

  return (
    <Button
      name={name}
      className={`${className} check-button`}
      onClick={onClick}>
      <span />
      <div className='label'>{children}</div>
    </Button>
  );
}
