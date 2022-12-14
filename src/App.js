import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Container from "./components/Container";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:slug" element={<User />} />
          <Route path="/createUser" element={<CreateUser />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
