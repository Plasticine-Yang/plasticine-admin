import type { Plugin } from 'vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolvePath } from '../utils'

const unpluginPlugins: Plugin[] = [
  Components({
    dts: resolvePath('types', 'components.d.ts'),
    resolvers: [NaiveUiResolver()],
  }),
]

export default unpluginPlugins
