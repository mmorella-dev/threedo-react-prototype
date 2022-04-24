import Assemble from 'routes/Assemble';
import Clean from 'routes/Clean';
import Dashboard from 'routes/Dashboard';
import Print from 'routes/Print';
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
    element: Clean,
  },
  {
    title: 'Assemble Parts',
    icon: '🛠',
    route: '/assemble',
    element: Assemble,
  },
  {
    title: 'Print and Ship',
    icon: '📦',
    route: '/ship',
    element: Ship,
  },
];

export default RouteItems;
