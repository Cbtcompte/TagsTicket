import { createBrowserRouter } from "react-router-dom";
//import ProjetView from "../pages/main/ProjetView";
import LayoutView from "@/pages/main/LayoutView";
import StartView from "@/pages/main/StartView";
import MainDashboard from "@/pages/dashboard/Main";
import { KambanView } from "@/pages/dashboard/contents/kamban/KambanTable";
import { PageError } from "@/pages/PageError";
import { TagsList } from "@/pages/dashboard/contents/tags/TagsList";
import EquipeCreate from "@/pages/dashboard/contents/equipes/EquipeCreate";
import { EquipeView } from "@/pages/dashboard/contents/equipes/EquipeView";
import { UserCreate } from "@/pages/dashboard/contents/users/UserCreate";

const router = createBrowserRouter([
    {
        path : '/',
        element : <LayoutView></LayoutView> ,
        errorElement : <PageError></PageError>,
        children : [
            {
                path : '',
                element : <StartView></StartView>
            }
        ]
    }, 
    {
        path : '/dashboard',
        element : <MainDashboard></MainDashboard>,
        errorElement : <PageError></PageError>,
        children : [
            {
                path : ':id',
                element : <KambanView></KambanView>
            },
            {
                path : 'configuration',
                children : [
                    {
                        path : 'tags',
                        element : <TagsList></TagsList>
                    },
                    {
                        path : 'equipes',
                        element : <EquipeCreate></EquipeCreate>
                    },
                    {
                        path : 'equipes/:name',
                        element : <EquipeView></EquipeView>
                    },
                    {
                        path : 'users',
                        element : <UserCreate></UserCreate>
                    }
                ]
            }
        ]
    },
])

export default router;