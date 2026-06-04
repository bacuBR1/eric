import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-page">
      <h2>Bem-vindo ao TikTok React</h2>
      <p>Use o formulário para cadastrar vídeos e consulte a lista de vídeos disponíveis.</p>
      <div className="home-actions">
        <Link to="/videos" className="button">
          Ver vídeos
        </Link>
        <Link to="/videos/cadastrar" className="button secondary">
          Cadastrar vídeo
        </Link>
      </div>
    </section>
  )
}
