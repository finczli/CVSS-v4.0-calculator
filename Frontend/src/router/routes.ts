import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    // Redirect from the root path to the calculator page
    path: '/',
    redirect: '/calculator',
  },
  {
    // Main layout for the application
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      // Route for the calculator page
      {
        path: 'calculator/:vector?',
        component: () => import('pages/CalculatorPage.vue'),
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
