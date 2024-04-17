
import { Outlet } from 'react-router-dom'

function LayoutView() {    
    return <div className='row' style={{marginLeft : '0px', marginRight : '0px'}}>
       <Outlet/>
    </div>
}

export default LayoutView;