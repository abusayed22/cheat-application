import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuthcheck } from "./hooks/useAuthcheck";
import Cheat from "./pages&components/pages/Cheat";
import Login from "./pages&components/pages/Login";
import Message from "./pages&components/pages/Message";
import Register from "./pages&components/pages/Register";
import PrivateRouter from "./routers/PrivateRouter";
import PublicRouter from "./routers/PublicRouter";

function App() {
  return !useAuthcheck ? (
    <h1>authrization checking..</h1>
  ) : (
    <BrowserRouter>
      <Routes>
        {/* <PublicRouter> */}
          <Route path="/" element={<PublicRouter><Login /></PublicRouter>}/>
          <Route path="/register" element={<Register />}/>
        {/* </PublicRouter> */}
        {/* <PrivateRouter> */}
          <Route path="/cheat" element={<PrivateRouter><Cheat /></PrivateRouter>}/>
          <Route path="/cheat/:id" element={<PrivateRouter><Message /></PrivateRouter>}/>
        {/* </PrivateRouter> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
