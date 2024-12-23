import { mount } from 'svelte'

import './styles/main.css'

import App from './App.svelte'

//<div id="app"></div>
const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
