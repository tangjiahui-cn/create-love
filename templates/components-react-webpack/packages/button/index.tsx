/**
 * Button
 * 
 * @author tangjiahui
 * @default 2024/3/28
 */
import React, { DOMAttributes, useEffect, useRef } from 'react'
import classNames from 'classnames';
import { omit } from "lodash-es";
import { useComponent } from '@/_hooks/useComponent';
import './index.less'

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text';
export interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
  /**
   * @description 按钮类型
   */
  type?: ButtonType;
  /**
   * @description 样式
   */
  className?: string;
  /**
   * @description 子元素
   */
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { prefix, locale } = useComponent('btn')

  const domAttributes: DOMAttributes<HTMLButtonElement> = omit(props, ['type', 'children'])
  const type = props?.type || 'default';

  const classes: string = classNames(
    props?.className,
    `${prefix}`,
    `${prefix}-${type}`,
  )

  return (
    <button
      {...domAttributes}
      className={classes}
    >{props?.children || locale?.buttonText}</button>
  )
}

export default Button