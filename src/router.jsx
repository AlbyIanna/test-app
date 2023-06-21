import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Example from "./pages/Example";
import Flights from "./pages/Flights";
import TabsPage from "./pages/TabsPage";
import TicTacToePage from "./pages/TicTacToePage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

export const router = createBrowserRouter([
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
