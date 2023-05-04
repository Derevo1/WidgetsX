import { AiOutlineAppstore, AiOutlineHome } from 'react-icons/ai'
import { Route, Routes } from "react-router-dom";
import { Home } from '../Home/Home';
import { Builder } from '../AppBuilders/Builder';

export const routesDefinition = [
  {
    path: "/",
    name: "Home",
    hidden: false,
    icon: <AiOutlineHome />,
    element: <Home />
  },
  {
    path: "/applications",
    name: "Applications",
    hidden: false,
    icon: <AiOutlineAppstore />,
    element: <div style={{ width: '100%' }}>Applications</div>
  },
  {
    path: "/builder",
    name: "Applications",
    hidden: true,
    icon: null,
    element: <Builder/>
  },
]


export function AppRoutes(){
  return (
    <Routes>
      {routesDefinition.map((def, i) => <Route path={def.path} element={def.element} key={i} />)}
    </Routes>
  )
}