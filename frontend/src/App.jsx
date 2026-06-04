import { Routes, Route } from 'react-router-dom'
import Layout from './front/components/Layout'
import Home from './front/pages/Home'
import Videos from './front/pages/Videos'
import Cadastrar from './front/pages/Cadastrar'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Layout>
  )
}

export default App
