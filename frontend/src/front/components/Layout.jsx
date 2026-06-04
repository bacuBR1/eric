import { Link } from 'react-router-dom'

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <h1>TikTok React</h1>
          <p>Sistema de vídeos com cadastro e listagem em React.</p>
        </div>
        <nav className="app-nav">
          <Link to="/">Início</Link>
          <Link to="/videos">Vídeos</Link>
          <Link to="/videos/cadastrar">Cadastrar</Link>
        </nav>
      </header>

      <main className="app-content">{children}</main>
    </div>
  )
}
