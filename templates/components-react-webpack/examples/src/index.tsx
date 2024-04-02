import { Space, Button, ConfigProvider, ButtonProps, setTheme } from '@'
import { Locale } from '@/_locales'
import zh_CN from '@/_locales/zh_CN'
import en_US from '@/_locales/en_US'
import { useState } from 'react'

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>()
  const [primary, setPrimary] = useState<string>('red');

  function renderComponent() {
    return (
      <Space>
        {['default', 'primary', 'dashed', 'text'].map(type => {
          return (
            <Button key={type} type={type as any} />
          )
        })}
      </Space>
    )
  }

  return (
    <Space direction='vertical'>
      <Space>
        <Button onClick={() => setLocale(zh_CN)}>中文</Button>
        <Button onClick={() => setLocale(en_US)}>英文</Button>

      </Space>
      <Space>
        {renderComponent()}
        <Space>
          全局：
          <input type='color' onChange={e => {
            setTheme('primary', e.target.value)
          }} />
        </Space>
      </Space>
      <div>
        <ConfigProvider
          theme={{
            primary,
            primaryLight: '#da7272'
          }}
          locale={locale}
          component={{
            type: 'primary'
          } as ButtonProps}
        >
          <Space direction='vertical'>
            <Space>
              {renderComponent()}
              <Space>
                局域：
                <input type='color' onChange={e => {
                  setPrimary(e.target.value)
                }} />
              </Space>
            </Space>
            <ConfigProvider
              theme={{
                primaryLight: '#da7272'
              }}
              locale={locale}
              component={{
                type: 'primary'
              } as ButtonProps}
            >
              {renderComponent()}
            </ConfigProvider>
          </Space>
        </ConfigProvider>
      </div>
      <div>
        {renderComponent()}
      </div>
    </Space>
  )
}

export default App;