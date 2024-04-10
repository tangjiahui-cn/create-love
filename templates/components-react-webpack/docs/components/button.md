---
nav: 组件
---

## 一、基本使用

```jsx
import { Button } from "my-ui";

export default () => {
  return <Button>按钮</Button>;
};
```

## 二、类型

```jsx
import { Button, Space } from "my-ui";

export default () => {
  return (
    <Space>
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
<API id="Button"></API>