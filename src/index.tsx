import { registerMicroApps, start } from 'qiankun';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';

const rootDOM = document.getElementById('rootNode');
const root = createRoot(rootDOM as Element);

root.render(<App />);


