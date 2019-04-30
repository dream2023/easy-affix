<template>
  <div>
    <!-- 为了正确获取到宽度, 所以嵌套了一层 -->
    <div
      :style="styles"
      ref="wrapper"
    >
      <slot/>
    </div>
  </div>
</template>

<script>
import { throttle } from 'throttle-debounce'

export default {
  name: 'Affix',
  props: {
    // 是否开启
    enabled: {
      type: Boolean,
      default: true
    },
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
  },
  data () {
    return {
      throttled: null,
      isAffix: false,
      scrollDistance: 0,
      winHeight: 0,
      styles: {},
      elOffsetPageTop: 0
    }
  },
  computed: {
    // 距离顶部的偏移
    offsetTop () {
      return this.type === 'top' ? this.offset : 0
    },
    // 距离底部的偏移
    offsetBottom () {
      return this.type === 'bottom' ? this.offset : 0
    },
    // 元素自身的信息
    elRect () {
      const wrapper = this.$refs.wrapper
      if (wrapper) {
        return wrapper.getBoundingClientRect()
      } else {
        return {}
      }
    },
    // 元素距离窗口底部的距离
    elOffsetWinBottom () {
      if (this.type === 'bottom') {
        // 滚动距离 - 元素距离窗口底部(元素距离顶部的距离 + 元素自身的高度 + 元素距离底部的偏移 - 窗口的高度)
        return this.scrollDistance - (this.elOffsetPageTop + this.elRect.height + this.offsetBottom - this.winHeight)
      } else {
        return null
      }
    }
  },
  mounted () {
    if (this.enabled) {
      // 确保页面已渲染, 能获取到$refs能获取到节点
      this.$nextTick(() => {
        // 获取元素的初始位置
        this.elOffsetPageTop = this.getElOffsetPageTop()

        // 事件节流(因为不需要页面响应式, 所以没有在data中设置)
        this.throttled = throttle(this.delay, () => {
          this.handleChange()
        })

        // 初始化时需要执行一次
        this.handleChange()

        // 开启事件监听
        this.startListen()
      })
    }
  },
  beforeDestroy () {
    this.stopListen()
  },
  watch: {
    enabled (value) {
      if (value === false) {
        this.stopListen()
      }
    }
  },
  methods: {
    // 元素距离顶部的距离
    getElOffsetPageTop () {
      // 1.元素本身相对于窗口的高度(可能正或者负)
      const selfTop = this.elRect.top
      // 2.页面的滚动高度(进入页面的瞬间)
      const scrollDistance = window.pageYOffset || document.documentElement.scrollTop
      // 3.在IE中文档会相对左上角偏移几个像素，需要去掉它，减去clientTop和clientLeft
      const clientTop = document.documentElement.clientTop || document.body.clientTop || 0
      // 4.减去设置的偏移距离(其实相当于元素的高度增加了offsetTop的px)
      return selfTop + scrollDistance - this.offsetTop - clientTop
    },

    // 检测变化
    handleChange () {
      this.winHeight = window.innerHeight
      this.scrollDistance = window.pageYOffset || document.documentElement.scrollTop

      const isAffix = this.isAffix
      if (this.type === 'top') {
        if (!isAffix && this.scrollDistance >= this.elOffsetPageTop) {
          // 当不是affix状态时 且 滚动距离 > 元素原位置, 状态置为 true
          this.isAffix = true
        } else if (isAffix && this.scrollDistance < this.elOffsetPageTop) {
          // 当是affix状态时 且 滚动距离 < 元素原位置, 状态置为 false
          this.isAffix = false
        }
      }

      if (this.type === 'bottom') {
        if (!isAffix && this.elOffsetWinBottom <= 0) {
          // 当不是affix状态时, 滚动距离 - 元素距离窗口底部 <= 0时, 状态置为 true
          this.isAffix = true
        } else if (isAffix && this.elOffsetWinBottom > 0) {
          // 当是affix状态时, 滚动距离 - 元素距离窗口底部 > 0, 状态置为 false
          this.isAffix = false
        }
      }

      // 设置样式
      this.setStyles()
    },

    // 设置样式
    setStyles () {
      let styles = {}
      if (this.isAffix && this.enabled) {
        const elRect = this.elRect
        styles = {
          position: 'fixed',
          zIndex: this.zIndex,
          left: elRect.left + 'px',
          width: this.$el.offsetWidth + 'px',
          [this.type]: this.offset + 'px'
        }
      }
      this.styles = styles
    },

    // 开启事件监听
    startListen () {
      window.addEventListener('scroll', this.throttled, false)
      window.addEventListener('resize', this.throttled, false)
    },

    // 删除事件监听
    stopListen () {
      window.removeEventListener('scroll', this.throttled, false)
      window.removeEventListener('resize', this.throttled, false)
    }
  }
}
</script>
