/**
 * Button
 * 
 * @author tangjiahui
 * @default 2024/3/28
 */
import React, { DOMAttributes, useEffect, useRef } from 'react'
import styles from './index.less'
import { useConfig } from '../configProvider';
import classNames from 'classnames';
import { omit } from "lodash-es";

export type ButtonType = 'primary' | 'default' | 'dashed' | 'text';
export interface ButtonProps extends DOMAttributes<HTMLButtonElement> {
  type?: ButtonType;
  children?: React.ReactNode;
}

function Button(props: ButtonProps) {
  const context = useConfig();
  const domAttributes: DOMAttributes<HTMLButtonElement> = omit(props, ['type', 'children'])
  const type = context?.component?.type || props?.type || 'default';
  const locale = context?.locale;
  const ref = useRef<any>();

  const classes: string = classNames(
    styles.btn,
    styles[`btn-type-${type}`]
  )

  function setThemeScope(name: string, value: string) {
    ref.current.style.setProperty(`--${name}`, value);
  }

  useEffect(() => {
    if (context?.theme) {
      for (const k in context?.theme) {
        setThemeScope(k as any, context?.theme?.[k as any] as string)
      }
    }
  }, [context.theme])

  return (
    <button
      ref={ref}
      {...domAttributes}
      className={classes}
    >{props?.children || locale?.buttonText}</button>
  )
}

export default Button