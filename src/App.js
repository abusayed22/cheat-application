import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cheat from "./pages&components/pages/Cheat";
import Login from "./pages&components/pages/Login";
import Register from "./pages&components/pages/Register";
import PrivateRouter from "./routers/PrivateRouter";
import PublicRouter from "./routers/PublicRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <PublicRouter>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </PublicRouter>
        <PrivateRouter> */}
          <Route path="/" element={<Cheat />} />
        {/* </PrivateRouter> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
