import ProjetView from "./content/projects/ProjetView";
import UserView from "./content/users/UserView";

interface PageNumber {
    currentPage : number
}


function ContentHandler({currentPage} : PageNumber) {
    let page = <ProjetView></ProjetView>;

    switch (currentPage) {
        case 0:
            page = <ProjetView></ProjetView>;
            break;
        case 1:
            page = <UserView></UserView>;
            break;
        case 2:
            page = <ProjetView></ProjetView>;
            break;
    
        default:
            page = <ProjetView></ProjetView>;
            break;
    }
    return page;
}

export default ContentHandler;