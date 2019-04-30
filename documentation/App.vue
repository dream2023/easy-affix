<template>
  <div id="app">
    <easy-doc
      :menus="menuList"
      author="zhangchaojie"
      githubUrl="https://github.com/dream2023/easy-affix/"
      title="easy-affix | vue图钉组件"
    >
      <section id="intro">
        <h2>介绍</h2>
        <p>使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。</p>
      </section>
      <section id="reason">
        <h2>创作原因</h2>
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
      </section>
      <section id="install">
        <h2>安装</h2>
        <blockquote>npm install easy-affix --save</blockquote>
      </section>
      <section id="usage">
        <h2>使用</h2>
        <blockquote>
          <pre class="language-js"><code class="language-js">// 局部引入
import Affix from 'easy-affix'
export default {
  components: {
    Affix
  }
}</code></pre>
        </blockquote>
        <blockquote>
          <pre class="language-js"><code class="language-js">// 全局引入
import Affix from 'easy-affix'
Vue.component('affix', Affix)
</code></pre>
        </blockquote>
      </section>

      <section id="props">
        <h2>Props参数</h2>

        <p>左侧导航栏使用了最基本的形式:</p>
        <blockquote>
          <pre class="language-html"><code class="language-html">&lt;affix&gt;导航栏...&lt;/affix&gt;</code></pre>
        </blockquote>
        <p>还可以指定偏移距离:</p>
        <blockquote>
          <pre class="language-html"><code class="language-html">&lt;affix&nbsp;:offset="50"&gt;当距离顶部50px时, 开始绝对定位...&lt;/affix></code></pre>
        </blockquote>
        <p>相对于窗口底部偏移:</p>
        <blockquote>
          <pre class="language-html"><code class="language-html">&lt;affix&nbsp;type="bottom"&gt;相对于底部而言&lt;/affix></code></pre>
        </blockquote>
        <blockquote>
          <pre class="language-js">
                <code class="language-js">
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
</code></pre>
        </blockquote>
      </section>
      <section id="todo">
        <h2>待做事项</h2>
        <blockquote>
          <ul>
            <li>增加 typescript 提示</li>
            <li>增加单元测试</li>
            <li>增加e2e测试</li>
            <li>增加指定相对元素偏移target</li>
            <li>增加英文文档</li>
          </ul>
        </blockquote>
      </section>
      <section id="reference">
        <h2>参考链接</h2>
        <ul>
          <li>
            <a
              href="https://www.iviewui.com/components/affix"
              rel="noopener noreferrer"
              target="_blank"
            >iview affix组件</a>
          </li>
          <li>
            <a
              href="https://vue.ant.design/components/affix-cn/"
              target="_blank"
            >ant design affix组件</a>
          </li>
          <li>
            <a
              href="https://github.com/eddiemf/vue-affix"
              target="_blank"
            >vue-affix组件</a>
          </li>
          <li>
            <a
              href="https://www.zhangxinxu.com/wordpress/2019/01/dom-quiz-27-window-scroll/"
              target="_blank"
            >张鑫旭-窗体滚动二三事</a>
          </li>
        </ul>
      </section>
    </easy-doc>
  </div>
</template>

<script>
import EasyDoc from './EasyDoc'
export default {
  name: 'app',
  components: {
    EasyDoc
  },
  data () {
    return {
      menuList: [
        {
          title: '介绍',
          href: 'intro'
        },
        {
          title: '创作原因',
          href: 'reason'
        },
        {
          title: '安装',
          href: 'install'
        },
        {
          title: '使用',
          href: 'usage'
        },
        {
          title: 'Props参数',
          href: 'props'
        },
        {
          title: '待做事项',
          href: 'todo'
        },
        {
          title: '参考链接',
          href: 'reference'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// @import "./styles/variable.scss";
// @import "bulma/bulma.sass";
// @import "./styles/main.scss";
// @import "./styles/prism.css";

/* html,

.page-title {
  color: #000000;
  font-weight: 500;
  letter-spacing: -0.03em;
  border-bottom: 1px solid #d3d3d3;
}

blockquote {
  background-color: #f5f2f0;
  padding: 1em;
  margin: 2em 0;
  border-radius: 1em;
  font-family: Consolas, Monaco, "Andale Mono", monospace;
  border-width: 0.3em;
  border-color: #e0dfcc;
  border-style: solid;
  text-shadow: 0 1px white;
  overflow: auto;
}
.token {
  background: none !important;
}
.token.tag {
  padding-right: 0;
  font-size: 1em;
}
.token.attr-name {
  padding-left: 0.5em;
}
.number {
  font-size: 1rem;
  height: 1.5em;
  min-width: 1em;
  padding: 0;
}
pre {
  padding: 0 !important;
}

.hero {
  background: none;
  color: #111;
}

.hero-body {
  padding: 1rem 1.5rem;
}

.logo-heading a {
  color: #000000 !important;
}

.sidebar-menu {
  width: 196px;
}

.menu-list a {
  cursor: pointer;
}
.menu-list a:hover {
  color: #3273dc;
  background: none;
}

ul {
  list-style-type: disc;
}

footer {
  padding: 3rem 1.5rem 4rem !important;
} */
</style>
