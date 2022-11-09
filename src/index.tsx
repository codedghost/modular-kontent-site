import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createDeliveryClient } from '@kontent-ai/delivery-sdk';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const deliveryClient = createDeliveryClient({
  projectId: '8ca55ed2-9550-01a6-f9c9-fdc458538e74',
  linkedItemsReferenceHandler: 'map'
});

root.render(
  <React.StrictMode>
    <App KontentClient={deliveryClient} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
