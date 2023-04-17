import ReactDOM from "react-dom";
import { Header } from "./component/Header";
import Body from "./component/Body"
import Footer from "./component/Footer";


const  AppLayOut=()=>{
        return (
                <div className="AppLayOut">
                <Header/>
                <Body/>
                <Footer/>
                </div>
        )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut/>);
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