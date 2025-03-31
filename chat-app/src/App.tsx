import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, ChatWindow } from "@components/index";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<ChatWindow/>} />
      <Route path="*" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
