import * as Style from './ButtonStyle';

export default ({ txt, className, children }) => {
  return (
    <Style.Button className={`${className}`}>
      {txt}
      {children ? children : ''}
    </Style.Button>
  );
}
