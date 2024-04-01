import { Button, ConfigProvider, ButtonProps } from '@'
import { Locale } from '@/_locales'
import zh_CN from '@/_locales/zh_CN'
import en_US from '@/_locales/en_US'
import { useEffect, useState } from 'react'

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>()

  function renderComponent() {
    return ['default', 'primary', 'dashed', 'text'].map(type => {
      return (
        <Button key={type} type={type as any} />
      )
    })

  }

  return (
    <div>
      <div>
        <Button onClick={() => setLocale(zh_CN)}>中文</Button>
        <Button onClick={() => setLocale(en_US)}>英文</Button>
      </div>
      <div>
        <ConfigProvider
          theme={{
            primary: 'blue',
          }}
          locale={locale}
          component={{
            type: 'primary'
          } as ButtonProps}
        >
          {renderComponent()}
          <ConfigProvider
            theme={{
              primary: 'red',
            }}
            locale={locale}
            component={{
              type: 'primary'
            } as ButtonProps}
          >
            {renderComponent()}
          </ConfigProvider>
        </ConfigProvider>
      </div>
      <div>
        {renderComponent()}
      </div>
    </div>
  )
}

export default App;