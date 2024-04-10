---
nav: 组件
---

## 一、基本使用

```jsx
import { Space, Button } from "my-ui";

export default () => {
  return (
    <Space>
      按钮：
      <Button>Button</Button>
    </Space>
  );
};
```

## 二、排列方向

```jsx
import { Button, Space } from "my-ui";

export default () => {
  return (
    <Space direction='vertical'>
      按钮组
      {["primary", "default", "dashed", "text"].map((type) => {
        return (
          <Button key={type} type={type}>
            {type}
          </Button>
        );
      })}
    </Space>
  );
};
```

## API

<API id="Space"></API>
