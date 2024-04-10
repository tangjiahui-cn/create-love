---
nav: 组件
---

## 一、修改主题色

```jsx
import { ConfigProvider, Button, Space, setTheme } from "my-ui";
import { useState } from "react";

export default () => {
  const [primary, setPrimary] = useState("red");

  return (
    <Space direction="vertical">
      <Space>
        修改全局 primary：
        <input
          type="color"
          onChange={(e) => {
            setTheme("primary", e.target.value);
          }}
        />
      </Space>
      <div>
        <Button type="primary">全局</Button>
      </div>
      <Space>
        修改局域 primary：
        <input
          type="color"
          onChange={(e) => {
            setPrimary(e.target.value);
          }}
        />
      </Space>
      <ConfigProvider
        theme={{
          primary,
        }}
      >
        <Space>
          <Button type="primary">按钮</Button>
        </Space>
      </ConfigProvider>
    </Space>
  );
};
```

## API

<API id="ConfigProvider"></API>
