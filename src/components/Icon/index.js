import classNames from 'classnames';

import { ReactComponent as Error } from 'assets/icons/error.svg';
import { ReactComponent as Menu } from 'assets/icons/menu.svg';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { ReactComponent as Play } from 'assets/icons/play.svg';
import { ReactComponent as Pause } from 'assets/icons/pause.svg';

import { ReactComponent as ArrowDown } from 'assets/icons/arrow-down.svg';
import { ReactComponent as ArrowRight } from 'assets/icons/arrow-right.svg';
import { ReactComponent as ChevronRight } from 'assets/icons/chevron-right.svg';

import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';

import './index.css';

export const icons = {
  error: Error,
  menu: Menu,
  close: Close,
  play: Play,
  pause: Pause,
  arrowDown: ArrowDown,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  github: Github,
  linkedin: Linkedin,
};

const Icon = ({ icon, style, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classNames('icon', className)} {...rest} />
  );
};

export default Icon;
