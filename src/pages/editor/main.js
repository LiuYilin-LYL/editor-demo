import { createApp } from 'vue'
import App from './App.vue'
import Editor from "bin-ace-editor";


require('brace/mode/json')
require('brace/snippets/json')
require('brace/theme/chrome')
const app = createApp(App)
app.component(Editor.name, Editor)
console.log(Editor)
app.mount('#app')