<template>
  <div>
    <a
      :href="githubUrl"
      v-if="githubUrl"
    >
      <img
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png"
        style="position: absolute; top: 0; right: 0; border: 0"
      >
    </a>

    <div class="doc-container">
      <header class="header">
        {{title}}
        <slot name="title"/>
      </header>
      <aside class="sidebar">
        <affix>
          <div class="sidebar-menu">
            <div class="menu-label">导航栏</div>
            <ul class="menu-list">
              <a
                :href="'#'+item.href"
                :key="index"
                class="menu-item"
                v-for="(item, index) of menus"
              >{{index + 1}}. {{item.title}}</a>
            </ul>
          </div>
          <slot name="menu"/>
        </affix>
      </aside>
      <div class="content">
        <slot/>
      </div>
      <footer
        class="footer"
        v-if="author"
      >
        Made with love by
        <a :href="githubUrl">{{author}}</a>.
      </footer>
    </div>
  </div>
</template>

<script>
import Affix from 'easy-affix'
import 'prismjs'

export default {
  name: 'EasyDoc',
  components: {
    Affix
  },
  props: {
    githubUrl: String,
    title: String,
    author: String,
    menus: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {}
}
</script>

<style>
@import "./style.css";
</style>
