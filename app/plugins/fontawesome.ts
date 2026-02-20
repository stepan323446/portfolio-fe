import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default defineNuxtPlugin(() => {
  config.autoAddCss = false;
})