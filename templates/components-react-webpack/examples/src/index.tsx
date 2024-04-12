import { Space, Button, ConfigProvider, ButtonProps, setTheme } from '@';
import { Locale } from '@/_locales';
import zh_CN from '@/_locales/zh_CN';
import en_US from '@/_locales/en_US';
import React, { useState } from 'react';

class Com extends React.Component<any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={this.props?.className}>
        11
        <div>
          <Button type='primary' />
        </div>
      </div>
    );
  }
}
class ComNull extends React.Component {
  render() {
    return null;
  }
}

const App: React.FC = () => {
  const [locale, setLocale] = useState<Locale>();
  const [primary, setPrimary] = useState<string>('red');
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState<any>(undefined);

  function renderComponent() {
    return (
      <Space>
        {['default', 'primary', 'dashed', 'text'].map((type) => {
          return <Button key={type} type={type as any} />;
        })}
      </Space>
    );
  }

  return (
    <div>
      <Space>
        <Button type='primary' onClick={() => setVisible(true)}>
          显示
        </Button>
        <Button onClick={() => setVisible(false)}>隐藏</Button>
        <Button onClick={() => setTheme({ primary: 'green' })}>设置主题</Button>
        <Button onClick={() => setTheme(undefined)}>隐藏主题</Button>
        <input type='color' onChange={(e) => setPrimary(e.target.value)} />
      </Space>
      <div>
        {visible && (
          <ConfigProvider theme={{ primary }}>
            <Com />
            <ComNull />
            xxx
            <div>{renderComponent()}</div>
            {renderComponent()}
          </ConfigProvider>
        )}
      </div>
      <ConfigProvider theme={theme}>
        <Button type={'primary'}>11</Button>
      </ConfigProvider>
    </div>
  );
};

export default App;
