import { RouterProvider } from "react-router-dom";
import router from "@/routers";
import SimpleModal from "./components/modals/SimpleModal";
import './App.css'

function App() {
  return <>
    <SimpleModal></SimpleModal>
    <RouterProvider router={router} />
  </>
}

export default App;
