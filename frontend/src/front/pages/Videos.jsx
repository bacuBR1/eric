import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Videos() {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/videos')
      .then((response) => response.json())
      .then((data) => {
        setVideos(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Não foi possível carregar os vídeos.')
        setLoading(false)
      })
  }, [])

  return (
    <section className="videos-page">
      <div className="videos-header">
        <div>
          <h2>Lista de vídeos</h2>
          <p>Veja todos os vídeos cadastrados no sistema.</p>
        </div>
        <Link to="/videos/cadastrar" className="button secondary">
          Cadastrar novo vídeo
        </Link>
      </div>

      {loading && <p>Carregando vídeos...</p>}
      {error && <p className="error">{error}</p>}

      <div className="video-list">
        {videos.map((video) => (
          <article key={video.id} className="video-card">
            <img src={video.thumbnail} alt={`Thumbnail de ${video.title}`} />
            <div className="video-details">
              <h3>{video.title}</h3>
              <p className="video-creator">Criador: {video.creator}</p>
              <p>{video.description}</p>
              <div className="video-stats">
                <span>Visualizações: {video.views}</span>
                <span>Curtidas: {video.likes}</span>
              </div>
              <p className="video-hashtag">Hashtag: {video.hashtag}</p>
              <a href={video.url} target="_blank" rel="noreferrer">
                Abrir vídeo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
