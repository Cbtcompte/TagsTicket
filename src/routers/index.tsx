import { createBrowserRouter } from "react-router-dom";
//import ProjetView from "../pages/main/ProjetView";
import LayoutView from "@/pages/main/LayoutView";
import StartView from "@/pages/main/StartView";
import MainDashboard from "@/pages/dashboard/Main";
import { KambanView } from "@/pages/dashboard/contents/kamban/KambanTable";

const router = createBrowserRouter([
    {
        path : '/',
        element : <LayoutView></LayoutView> ,
        children : [
            {
                path : '',
                element : <StartView></StartView>
            }
        ]
    }, 
    {
        path : '/dashboard/:id',
        element : <MainDashboard></MainDashboard>,
        children : [
            {
                path : '',
                element : <KambanView></KambanView>
            }
        ]
    }
])

export default router;