import { Outlet } from "react-router";
import Bar from "../components/Bar";

function MLayout(){
    return (
         <div>
            <Bar />
            <Outlet />
         </div>
    )
    //a oaisjgiadsg
}
export default MLayout;