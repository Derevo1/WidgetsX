import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai'
import { Route, Routes } from "react-router-dom";
import { Authorization } from '../Authorization/Authorization';

export const routesDefinition = [
  {
    path: "/",
    name: "Home",
    hidden: false,
    icon: <AiOutlineHome />,
    element: <div>Home</div>
  },
  {
    path: "/login",
    name: "Home",
    hidden: true,
    icon: null,
    element: <Authorization />
  },
  {
    path: "/applications",
    name: "Applications",
    hidden: false,
    icon: <AiOutlineAppstore />,
    element: <div style={{ width: '100%' }}>Applications</div>
  },
]


export function AppRoutes(){
  return (
    <Routes>
      {routesDefinition.map((def) => <Route path={def.path} element={def.element} />)}
    </Routes>
  )
}