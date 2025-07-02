import Cadastro from "./pages/Cadastro"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
