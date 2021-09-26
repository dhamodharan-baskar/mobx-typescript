
import Page from '../pages/page';
import Page1 from '../pages/page1';
import Page2 from '../pages/page2';
import Page3 from '../pages/page3';
import Page4 from '../pages/page4';

interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  component: any;
  props?: any;
}

const routes: IRoute[] = [
  {
    path: '/',
    name: 'Page1',
    component: Page1,
    exact: true
  },
  {
    path: '/Page1',
    name: 'Page1',
    component: Page1,
    exact: true
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: Page2,
    exact: true
  },
  {
    path: '/Page3',
    name: 'Page3',
    component: Page3,
    exact: true
  },
  {
    path: '/Page4',
    name: 'Page4',
    component: Page4,
    exact: true
  },
]

export default routes;