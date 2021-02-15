import Home from '../components/Home'
import User from '../components/User'
import NotFind from '../components/NotFind'


const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '',
    component: NotFind,
  }
]

export default routes;