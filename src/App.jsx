import "./components/Home";
import { Routes, Route } from "react-router";

const App = () => {
  return (
    <Routes>
      <Route to="/" element={<Home />} />
    </Routes>
  )
}

export default App
