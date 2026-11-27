import classNames from 'classnames';

import ErrorIcon from 'assets/icons/error.svg?react';
import MenuIcon from 'assets/icons/menu.svg?react';
import CloseIcon from 'assets/icons/close.svg?react';
import PlayIcon from 'assets/icons/play.svg?react';
import PauseIcon from 'assets/icons/pause.svg?react';

import ArrowDownIcon from 'assets/icons/arrow-down.svg?react';
import ArrowRightIcon from 'assets/icons/arrow-right.svg?react';
import ChevronRightIcon from 'assets/icons/chevron-right.svg?react';

import GithubIcon from 'assets/icons/github.svg?react';
import LinkedinIcon from 'assets/icons/linkedin.svg?react';

import './index.css';

export const icons = {
  error: ErrorIcon,
  menu: MenuIcon,
  close: CloseIcon,
  play: PlayIcon,
  pause: PauseIcon,
  arrowDown: ArrowDownIcon,
  arrowRight: ArrowRightIcon,
  chevronRight: ChevronRightIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
};

const Icon = ({ icon, style, className, ...rest }) => {
  const IconComponent = icons[icon];

  return (
    <IconComponent aria-hidden className={classNames('icon', className)} {...rest} />
  );
};

export default Icon;
