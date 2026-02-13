import { Outlet } from "react-router";
import Bar from "../components/Bar";

function MLayout(){
    return (
         <div>
            <Bar />
            <Outlet />
         </div>
    )
    
}
export default MLayout;