import classNames from 'classnames';
import { numToMs } from 'utils/style';
import './index.css';

const Divider = ({
  lineWidth = '100%',
  lineHeight = '2px',
  notchWidth = '90px',
  notchHeight = '10px',
  collapseDelay = 0,
  collapsed = false,
  className,
  style,
}) => (
  <div
    className={classNames('divider', className)}
    style={{
      '--lineWidth': lineWidth,
      '--lineHeight': lineHeight,
      '--notchWidth': notchWidth,
      '--notchHeight': notchHeight,
      '--collapseDelay': numToMs(collapseDelay),
      ...style,
    }}
  >
    <div
      className={classNames('divider__line', { 'divider__line--collapsed': collapsed })}
    />
    <div
      className={classNames('divider__notch', { 'divider__notch--collapsed': collapsed })}
      style={{ '--collapseDelay': numToMs(collapseDelay + 160) }}
    />
  </div>
);

export default Divider;
