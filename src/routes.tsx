import React from 'react';
import { RouteObject } from 'react-router-dom';
import Layout from './components/Layout';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

export const navLinks = [
  { path: '/', label: 'Home' },
];

// Define routes for vite-react-ssg
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
