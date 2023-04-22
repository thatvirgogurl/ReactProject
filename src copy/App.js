import ReactDOM from "react-dom";
import { Header } from "./component/Header";
import Body from "./component/Body"
import Footer from  "./component/Footer";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom"
import About from "./component/About";
import Error from "./component/Error";
import Contact from "./component/Contact";
import Cart from "./component/Cart";
import Home from "./component/Home";
import RestroMenu from "./component/RestroMenu";


const  AppLayOut=()=>{
        return (
                <div className="AppLayOut">
                <Header/>
                <Outlet/>
                <Footer/>
                </div>
        )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },
      {
        path: "/home",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/restro/:id",
        element: <RestroMenu />,
        errorElement: <Error />,
      },
    ],
  },
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


/**
                 * header
                 *   -logo
                 *   -navItems(right side)
                 *   -cart
                 * body
                 *   -search bar
                 *   -restrauntlist
                 *      -restroaCart
                 *         -Images
                 *          -name
                 *           -rating
                 *           -cusines
                 * footer
                 * -links
                 * -copyrightss
* */











































// const heading=React.createElement("h1",{},"namste javascript");
// const head1=React.createElement('h1',{},"heading1")
// const head2=React.createElement('h2',{},"hedading2")
// <div>
//       <h1>logo</h1>
//       <ul>
//          <li>
//             about
//          </li>
//          <li>home</li>
//          <li>contact</li>
//       </ul>
//     </div>
// const head1=React.createElement("h1",{},"logo")
// // const head2=React.createElement('ul',{},[React.createElement("li",{},"about"),React.createElement('li',{},"support"),React.createElement('li',{},"home")])    //its look like messy thats why we use jsx
// const container=React.createElement('div',{
//         id:'container'},[head1,head2])
//         console.log(container)