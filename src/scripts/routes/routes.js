import ListResto from '../views/pages/list-resto';
import favorite from '../views/pages/favorite';
import detail from '../views/pages/detail';

const routes = {
  '/': ListResto, // default page
  '/list-resto': ListResto,
  '/favorite': favorite,
  '/detail/:id': detail,
};

export default routes;