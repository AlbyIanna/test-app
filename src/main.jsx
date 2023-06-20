import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Example from './pages/Example.jsx';
import Flights from './pages/Flights.jsx';
import TabsPage from './pages/TabsPage.jsx';
import TicTacToePage from './pages/TicTacToePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetailPage from './pages/ProductDetailPage.jsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      scaleTime: Infinity,
      cacheTime: Infinity,
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: "1",
        element: <Example />,
      },
      {
        path: "flights",
        element: <Flights />,
      },
      {
        path: "tabs",
        element: <TabsPage />,
        children: [
          {
            path: ":selectedTabId",
            element: <TabsPage />,
          }
        ]
      },
      {
        path: "tictactoe",
        element: <TicTacToePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:productId",
        element: <ProductDetailPage />,
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
