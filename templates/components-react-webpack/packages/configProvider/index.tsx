/**
 * Config Provider
 * 
 * @author tangjiahui
 * @date 2024/4/1
 */

import { createContext, useContext } from "react";
import type { Theme } from '../_theme/theme';
import type { ComponentProps } from './propTypes';
import en_US from "../_locales/en_US";
import type { Locale } from '../_locales'

interface ContextValue {
  theme?: Partial<Theme>;
  locale?: Partial<Locale>;
  component?: ComponentProps;
}

type ConfigProviderProps = ContextValue & {
  children?: any;
};

const INIT_CONTEXT: ContextValue = {
  theme: {},
  locale: en_US,
  component: {}
}

const context = createContext<ContextValue>(INIT_CONTEXT)

function ConfigProvider(props: ConfigProviderProps) {  
  return (
    <context.Provider
      value={{
        theme: props?.theme || INIT_CONTEXT.theme,
        locale: props?.locale || INIT_CONTEXT.locale,
        component: props?.component || INIT_CONTEXT.component
      }}
    >
      {props?.children}
    </context.Provider>
  )
}

export const useConfig = () => useContext(context)
export default ConfigProvider;