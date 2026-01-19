import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import { PublicLayout } from "./layouts/public-layout";

import AuthLayout from "./layouts/auth-layout";
import ProtectedRoutes from "./layouts/protected-layout";

import SignInPage from "./routes/signin";
import SignUpPage from "./routes/signup";
import HomePage from "./routes/home";
import MainLayout from "./layouts/main-layout";

function App() {

  return (
    <>
    <Router>
      <Routes>
        {/* public routes */}
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<HomePage />} />
        </Route>
        {/* auth routes */}
        <Route element={<AuthLayout/>}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
        {/* protected routes */}
        <Route element={<ProtectedRoutes />}><MainLayout /></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
