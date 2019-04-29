# easy-affix | Vue 图钉组件

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg)](https://opensource.org/licenses/mit-license.php)
[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/easy-affix.svg)](https://www.npmjs.com/package/easy-affix)
[![size](https://img.shields.io/bundlephobia/minzip/easy-affix.svg)](https://www.npmjs.com/package/easy-affix)
[![download](https://img.shields.io/npm/dw/easy-affix.svg)](https://npmcharts.com/compare/easy-affix?minimal=true)

## 介绍

使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。

## 创作原因

<p>
  其实在
  <code>iview</code>和
  <code>ant-design</code>框架中已有
  affix组件, 但如果在小项目或者使用element之类的框架, 就没办法引入了(虽然可以同时安装两个框架,也可以按需引入, 但是不建议)。
</p>
<p>
  另外, 网上虽然已有
  <code>vue-affix</code>, 但是其必须指定相对元素, 而不可以默认跟随window, 所以和我的需求略微不同, 就动手做了一个。
</p>

## 安装

```bash
npm install easy-affix --save
```

## 文档和示例

[https://dream2023.github.io/easy-affix/](https://dream2023.github.io/easy-affix/)

## Props 参数

```js
props: {
  // 类型(仅能为bottom 和 top)
  type: {
    type: String,
    default: 'top',
    validator (value) {
      return value === 'top' || value === 'bottom'
    }
  },
  // 偏移距离
  offset: {
    type: Number,
    default: 0
  },
  // 监听间隔毫秒数 (事件节流)
  delay: {
    type: Number,
    default: 100
  },
  // z-index值(当绝对定位时, z-index值)
  zIndex: {
    type: Number,
    default: 10
  }
}
```

## 待做事项

- 增加 typescript 提示
- 增加单元测试
- 增加 e2e 测试
- 增加指定相对元素偏移 target
- 兼容性检查
- 增加英文文档
