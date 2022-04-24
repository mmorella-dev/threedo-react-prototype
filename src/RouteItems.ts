import Assemble from 'routes/Assemble';
import Clean from 'routes/Clean';
import Dashboard from 'routes/Dashboard';
import Print from 'routes/Print';
import NotFound from 'routes/NotFound';
import Ship from 'routes/Ship';

const RouteItems = [
  {
    title: 'Dashboard',
    icon: '',
    index: true,
    route: '/',
    element: Dashboard,
  },
  {
    title: 'Print a Part',
    icon: '🖨',
    route: '/print',
    element: Print,
  },
  {
    title: 'Clean a Part',
    icon: '🧼',
    route: '/clean',
    element: NotFound,
  },
  {
    title: 'Assemble Parts',
    icon: '🛠',
    route: '/assemble',
    element: NotFound,
  },
  {
    title: 'Print and Ship',
    icon: '📦',
    route: '/ship',
    element: NotFound,
  },
];

export default RouteItems;
