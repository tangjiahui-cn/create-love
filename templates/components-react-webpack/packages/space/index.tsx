/**
 * space
 * 
 * @author tangjiahui
 * @date 2024/4/2
 */

import { DOMAttributes } from "react";
import styles from './index.less';
import classNames from "classnames";

export interface SpaceProps extends DOMAttributes<HTMLDivElement> {
  size?: number;
  direction?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
}

export default function Space(props: SpaceProps) {
  const classes: string = classNames(
    styles.space,
    props?.direction && styles[`space-${props?.direction || 'horizontal'}`]
  )

  return <div className={classes} style={{ gap: props?.size || 8 }}>{props?.children}</div>
}
