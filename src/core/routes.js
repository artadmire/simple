import JavaScript from '../pages/JavaScript'
import Html from '../pages/Html';
import Module from '../pages/Module';
import Detail from '../pages/Detail';
import NotFind from '../pages/NotFind'

const routes = [
  {
    path: '/',
    exact: true,
    component: JavaScript,
  },
  {
    path: '/html',
    component: Html,
  },
  {
    path: '/module',
    component: Module,
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '',
    component: NotFind,
  }
]

export default routes;