import classnames from 'classnames';
import React from 'react';
import type { ProTitleProps } from '../../typing';
import { isPresetColor } from '../../typing';
import './index.less';

const ProTitle: React.FC<ProTitleProps> = ({ color = 'default', title, className, ...args }) => {
  const statusStyle: React.CSSProperties = {};
  if (color && !isPresetColor(color)) {
    statusStyle.background = color;
  }
  return (
    <div className={classnames('pro-title', className)} {...args}>
      <div
        className={classnames('pro-title-line', {
          [`pro-title-status-${color}`]: isPresetColor(color),
        })}
        style={statusStyle}
      />
      <div className="pro-title-inner">{title}</div>
    </div>
  );
};

export default ProTitle;
