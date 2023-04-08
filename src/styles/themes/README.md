# 主题变量名说明文档

## 变量名用途

```scss
// 背景色
--pa-background-color: #caf0f8;
// 与背景色有一定对比度的展示层颜色
--pa-layer-color: #ace8f4;
// 文本颜色
--pa-text-color: #04181c;
// primary color
--pa-primary-color: #1aaac7;
// 当 primary color 作为背景色时的文本颜色
--pa-primary-text-color: #caf0f8;
// hover 时的 primary color
--pa-primary-hover-color: #1692aa;
// 当 primary color 作为背景色，且 hover 时的文本颜色
--pa-primary-hover-text-color: #caf0f8;
```

## 模板

```scss
html[data-theme='theme-name']:root {
  // light mode
  --pa-background-color: #caf0f8;
  --pa-layer-color: #ace8f4;
  --pa-text-color: #04181c;
  --pa-primary-color: #1aaac7;
  --pa-primary-text-color: #caf0f8;
  --pa-primary-hover-color: #1692aa;
  --pa-primary-hover-text-color: #caf0f8;

  // dark mode
  --pa-dark-background-color: #0b4955;
  --pa-dark-layer-color: #0f6171;
  --pa-dark-text-color: #caf0f8;
  --pa-dark-primary-color: #1692aa;
  --pa-dark-primary-text-color: #e8f9fc;
  --pa-dark-primary-hover-color: #1aaac7;
  --pa-dark-primary-hover-text-color: #e8f9fc;
}
```
