/**
 * space
 * 
 * @author tangjiahui
 * @date 2024/4/2
 */

import { DOMAttributes } from "react";
import classNames from "classnames";
import { useComponent } from "@/_hooks/useComponent";
import './index.less';

export interface SpaceProps extends DOMAttributes<HTMLDivElement> {
  /**
   * @description 间距
   */
  size?: number;
  /**
   * @description 方向
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 子元素
   */
  children?: React.ReactNode;
}

function Space(props: SpaceProps) {
  const { prefix } = useComponent('space')
  const classes: string = classNames(
    props?.className,
    `${prefix}`,
    `${prefix}-${props?.direction || 'horizontal'}`
  )
  return <div className={classes} style={{ gap: props?.size || 8 }}>{props?.children}</div>
}

export default Space;