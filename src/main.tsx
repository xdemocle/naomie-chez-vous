import React from 'react';
import { ViteReactSSG } from 'vite-react-ssg';
import './index.css';
import { routes } from './routes';

// Configure vite-react-ssg with the simplest possible setup
export const createRoot = ViteReactSSG({ routes });
