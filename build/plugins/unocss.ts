import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

const iconsPreset = presetIcons()
const unoPreset = presetUno()
const attributifyPreset = presetAttributify()

export default () =>
  Unocss({
    presets: [unoPreset, attributifyPreset, iconsPreset],
  })
