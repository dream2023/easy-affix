<template>
  <div id="app">
    <github/>
    <section class="hero">
      <div class="container page-title">
        <h1 class="title is-1 logo-heading">
          <a
            href="https://github.com/dream10nian/easy-affix"
            title="easy-affix"
          >easy-affix | vue图钉组件</a>
        </h1>
      </div>
    </section>
    <hr>
    <main class="examples-section">
      <div class="container">
        <div class="columns">
          <aside class="sidebar column is-2">
            <affix class="menu sidebar-menu">
              <div class="menu-label">
                <h2>导航栏</h2>
              </div>
              <div
                :offset="0"
                class="menu-list"
              >
                <a
                  href="#intro"
                  title="Intro"
                >介绍</a>
                <a
                  href="#reason"
                  title="Reason"
                >创作原因</a>
                <a
                  href="#install"
                  title="Install"
                >安装</a>
                <a
                  href="#usage"
                  title="Usage"
                >使用</a>
                <a
                  href="#props"
                  title="Props"
                >Props参数</a>
                <a
                  href="#todo"
                  title="Todo"
                >待做事项</a>
              </div>
            </affix>
          </aside>

          <div class="column">
            <div
              class="hero"
              id="example-content"
            >
              <section
                class="hero-body"
                id="intro"
              >
                <h1 class="title is-2">介绍</h1>
                <p>使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。</p>
              </section>
              <section
                class="hero-body"
                id="reason"
              >
                <h1 class="title is-2">创作原因</h1>
                <p>
                  其实在
                  <code>iview</code>和
                  <code>ant-design</code>框架中已有
                  affix组件, 但如果在小项目或者使用element之类的框架, 就没办法引入了(虽然可以同时安装两个框架,也可以按需引入, 但是不建议)。
                </p>
                <br>
                <p>
                  另外, 网上虽然已有
                  <code>vue-affix</code>, 但是其必须指定相对元素, 而不可以默认跟随window, 所以和我的需求略微不同, 就动手做了一个。
                </p>
              </section>

              <section
                class="hero-body"
                id="install"
              >
                <h1 class="title is-2">安装</h1>
                <affix type="bottom">
                  <blockquote>npm install easy-affix --save</blockquote>
                </affix>
              </section>

              <section
                class="hero-body"
                id="usage"
              >
                <h1 class="title is-2">使用</h1>
                <p>左侧导航栏使用了最基本的形式:</p>
                <blockquote>
                  <pre class="language-html"><code class="language-html">&lt;affix&gt;导航栏...&lt;/affix&gt;</code></pre>
                </blockquote>
                <p>右侧相关链接使用了偏移距离:</p>
                <blockquote>
                  <pre class="language-html"><code class="language-html">&lt;affix&nbsp;:offset="50"&gt;相关链接...&lt;/affix></code></pre>
                </blockquote>
                <p>上面的安装提示使用了相对于窗口底部偏移:</p>
                <blockquote>
                  <pre class="language-html"><code class="language-html">&lt;affix&nbsp;type="bottom"&gt;npm install easy-affix --save&lt;/affix></code></pre>
                </blockquote>
              </section>

              <section
                class="hero-body"
                id="props"
              >
                <h1 class="title is-2">Props参数</h1>
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
              <section
                class="hero-body"
                id="todo"
              >
                <h1 class="title is-2">待做事项</h1>
                <blockquote>
                  <ul style="margin-left: 20px;line-height: 2em;">
                    <li>增加单元测试</li>
                    <li>增加e2e测试</li>
                    <li>增加指定相对元素偏移target</li>
                    <li>增加英文文档</li>
                  </ul>
                </blockquote>
              </section>
            </div>
          </div>

          <aside class="column is-3">
            <affix
              :offset="50"
              class="scrollaffix-sidebar"
            >
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title heading">相关链接</p>
                </header>
                <div class="card-content">
                  <div class="content">
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
                  </div>
                </div>
              </div>
            </affix>
          </aside>
        </div>
      </div>
    </main>
    <hr>
    <footer class="footer">
      <p class="has-text-centered">
        Made with love by
        <a
          href="https://github.com/dream2023"
          title="<3"
        >zhangchaojie</a>.
      </p>
    </footer>
  </div>
</template>

<script>
import Github from './Github'
export default {
  name: 'app',
  components: {
    Github
  }
}
</script>

<style>
html,
body {
  background-color: #f5f5d5;
  font-family: "Trebuchet MS", Arial, "Lucida Grande", Verdana, Lucida,
    Helvetica, sans-serif;
}

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
}
</style>
