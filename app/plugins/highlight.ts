import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'

export default defineNuxtPlugin(() => {
  hljs.registerLanguage('javascript', javascript);
  hljs.registerLanguage('typescript', typescript);
});