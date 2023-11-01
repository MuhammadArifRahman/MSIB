import Upcoming from '../views/pages/list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': Upcoming, // default page
  '/home': Upcoming, // default page
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
