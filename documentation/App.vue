<template>
  <div id="app">
    <section class="hero is-info">
      <div class="container">
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
          <aside class="sidebar column is-3">
            <affix class="menu sidebar-menu">
              <div class="menu-label">
                <h2>导航栏</h2>
              </div>
              <div
                :offset="0"
                class="menu-list"
              >
                <a
                  class="scrollactive-item"
                  href="#intro"
                  title="Intro"
                >介绍</a>
                <a
                  class="scrollactive-item"
                  href="#standard-affix"
                  title="Standard Affix"
                >参数</a>
                <a
                  class="scrollactive-item"
                  href="#scroll-affix"
                  title="Scroll Affix"
                >时间</a>
                <a
                  class="scrollactive-item"
                  href="#markup-1"
                  title="Markup 1"
                >Markup 1</a>
                <a
                  class="scrollactive-item"
                  href="#markup-2"
                  title="Markup 2"
                >Markup 2</a>
                <a
                  class="scrollactive-item"
                  href="#markup-3"
                  title="Markup 3"
                >Markup 3</a>
              </div>
            </affix>
          </aside>

          <div class="column">
            <div
              class="hero is-info"
              id="example-content"
            >
              <section
                class="hero-body"
                id="intro"
              >
                <h1 class="title is-2">Intro</h1>
                <p>
                  In this demo of easy-affix, I'll demonstrate how you can implement both the standard affix and the scroll affix that this component provides. I'll also use
                  <a
                    href="http://github.com/eddiemf/vue-scrollactive"
                  >vue-scrollactive</a>, which is another vue component made by
                  <a href="http://github.com/eddiemf">me</a>, to highlight the sidebar menu items as you scroll.
                </p>
              </section>

              <section
                class="hero-body"
                id="standard-affix"
              >
                <h1 class="title is-2">Standard Affix</h1>
                <p>To the left side, is a standard affix being used in a sidebar. That is probably the case where it will be mostly used, and it's ridiculously easy to implement. You see that the sidebar is simply moving relatively to this content section, when you scroll past the section, the sidebar will be affixed, when it reaches the end of the section, it will stay still, and this relative section is all you need to set basically.</p>
                <br>
                <p>One thing to be aware of is that you'll probably want to set a width value to the affixed element, because when it receives the fixed position, it will lose its container width since its container now will be the window. If you don't set one, it will probably break depending on its content and your style.</p>
              </section>

              <section
                class="hero-body"
                id="scroll-affix"
              >
                <h1 class="title is-2">Scroll Affix</h1>
                <p>To the right side, is the scroll affix option being used in an aside div. The scroll affix works almost like the standard affix, but it will always be taller than the viewport height, that way if you scroll to the bottom, instead of being affixed to the top of the screen like the standard affix, you will be able to scroll until you reach the end of the scroll affix, then it will be fixed to the bottom. The same happens when you scroll up.</p>
                <br>
                <p>Remember that you need to set the scroll-affix prop to true for this behavior, otherwise it will always stay fixed to the top, and if it is taller than the viewport height, you'll only be able to see its end when it reaches the end of the relative section.</p>
              </section>

              <section
                class="hero-body"
                id="markup-1"
              >
                <h1 class="title is-2">Markup Text 1</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellendus, omnis quidem ad dolorem aliquid. Fugit dolorem dolor ea odit omnis deleniti rerum vel, deserunt et, eius labore placeat rem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quis in voluptatem optio labore exercitationem ab porro unde dolorum, distinctio itaque doloribus quas maxime? Dolor, assumenda veritatis reiciendis fuga perspiciatis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic neque nesciunt incidunt nemo fugit dolorum inventore nam illo tempora voluptate architecto, aspernatur ducimus, iusto doloribus quos doloremque. Beatae, deserunt.</p>
              </section>

              <section
                class="hero-body"
                id="markup-2"
              >
                <h1 class="title is-2">Markup Text 2</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellendus, omnis quidem ad dolorem aliquid. Fugit dolorem dolor ea odit omnis deleniti rerum vel, deserunt et, eius labore placeat rem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quis in voluptatem optio labore exercitationem ab porro unde dolorum, distinctio itaque doloribus quas maxime? Dolor, assumenda veritatis reiciendis fuga perspiciatis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic neque nesciunt incidunt nemo fugit dolorum inventore nam illo tempora voluptate architecto, aspernatur ducimus, iusto doloribus quos doloremque. Beatae, deserunt.</p>
              </section>

              <section
                class="hero-body"
                id="markup-3"
              >
                <h1 class="title is-2">Markup Text 3</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellendus, omnis quidem ad dolorem aliquid. Fugit dolorem dolor ea odit omnis deleniti rerum vel, deserunt et, eius labore placeat rem.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi quis in voluptatem optio labore exercitationem ab porro unde dolorum, distinctio itaque doloribus quas maxime? Dolor, assumenda veritatis reiciendis fuga perspiciatis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse hic neque nesciunt incidunt nemo fugit dolorum inventore nam illo tempora voluptate architecto, aspernatur ducimus, iusto doloribus quos doloremque. Beatae, deserunt.</p>
              </section>
            </div>
          </div>

          <aside class="column is-2">
            <affix
              :offset="100"
              class="scrollaffix-sidebar"
            >
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title heading">Scroll Affix sidebar</p>
                </header>
                <div class="card-content">
                  <div class="content">
                    <p>This is the scroll affix aside with some markup text to make it taller than the viewport height.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic deleniti laudantium qui repudiandae ad, et excepturi voluptate illo ea quibusdam, temporibus, cupiditate dolore adipisci aliquid itaque incidunt odio minus quaerat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. ?</p>
                  </div>
                </div>
              </div>
            </affix>
          </aside>
        </div>
      </div>
    </main>
    <section class="section">
      <div class="container">
        <h1
          class="title is-1"
        >Some more markup text so that the affix can reach the end of the content section.</h1>
      </div>
    </section>
    <hr>
    <footer class="footer">
      <p class="has-text-centered">
        Made with love by
        <a
          href="http://github.com/eddiemf"
          title="<3"
        >eddie</a>.
      </p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
body {
  overflow-x: hidden;
}
.hero.is-info {
  background-color: #409eff;
}
.hero a {
  color: #00d1b2 !important;
}

.logo-heading a {
  color: #fff !important;
}

.sidebar-menu {
  width: 318px;
}

@media screen and (max-width: 1383px) {
  .sidebar-menu {
    width: 270px;
  }
}

@media screen and (max-width: 1191px) {
  .sidebar-menu {
    width: 222px;
  }
}

.scrollaffix-sidebar {
  width: 204px;
  font-size: 14px;
}

@media screen and (max-width: 1383px) {
  .scrollaffix-sidebar {
    width: 170px;
  }
}

@media screen and (max-width: 1191px) {
  .scrollaffix-sidebar {
    width: 140px;
    font-size: 12px;
  }
}

.scrollaffix-sidebar .card-content {
  padding: 15px;
}
</style>
