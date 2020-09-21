import Dashboard from '../components/Dashboard'
import Portafolio from '../components/Portafolio/Portafolio.vue'
import Stocks from '../components/Stocks/Stocks'

export const routes = [
    { path: '', component: Dashboard },
    { path: '/stocks', component: Stocks },
    { path: '/portafolio', component: Portafolio }
]