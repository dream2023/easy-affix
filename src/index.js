import Affix from './Affix'

const Plugin = {}

Plugin.install = Vue => {
  if (Plugin.install.installed) return

  Vue.component('affix', Affix)
}

if (typeof window !== 'undefined' && window.Vue) {
  Plugin.install(window.Vue)
}

export { Affix }
export default Plugin
