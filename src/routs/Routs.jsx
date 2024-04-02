import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesRead from "../pages/PagesRead";
import SingleBook from "../pages/SingleBook";
import ErrorPage from "../pages/ErrorPage";
import ListWishlist from "../componets/ListWishlist";
import ListBooks from "../componets/ListBooks";
import About from "../pages/About";
import Contact from "../pages/Contact";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('/data.json')

        },
        {
          path: '/single/:id',
          element: <SingleBook></SingleBook>,

        },
        {
          path: '/ListedBooks',
          element: <ListedBooks></ListedBooks>,
          children: [
            {
              index: true,
              element: <ListBooks></ListBooks>
            },
            {
              path: 'ListWishlist',
              element: <ListWishlist></ListWishlist>
            }
          ]
        },
        {
          path: '/PagesRead',
          element: <PagesRead></PagesRead>
        },
        {
          path: '/About',
          element: <About></About>
        },
        {
          path:'/Contact',
          element: <Contact></Contact>
        }
      ]
    },
  ]);
  