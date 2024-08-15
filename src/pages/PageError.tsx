import Icons from "@/helpers/Icons"
import { useRouteError } from "react-router-dom"

export function PageError() {
    const error = useRouteError()

    console.log((error))
    return (<>
        <div className="text-center" style={{marginTop : '15%'}}>
            {Icons({name : "CloseCircleOutlined"})}
            <h1>{error?.status} Page Introuvable</h1>
            <h4 className="text-muted">{error?.data}</h4>
        </div>
    </>)
}