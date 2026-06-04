import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cadastrar() {
  const [form, setForm] = useState({
    title: '',
    creator: '',
    description: '',
    views: '',
    likes: '',
    hashtag: '',
    url: '',
    thumbnail: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch('/api/videos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        views: Number(form.views),
        likes: Number(form.likes)
      })
    })

    if (response.ok) {
      navigate('/videos')
      return
    }

    const data = await response.json()
    setError(data.error || 'Erro ao cadastrar o vídeo.')
  }

  return (
    <section className="cadastrar-page">
      <h2>Cadastrar vídeo</h2>
      <form className="video-form" onSubmit={handleSubmit}>
        <label>
          Título
          <input name="title" value={form.title} onChange={handleChange} required />
        </label>

        <label>
          Criador
          <input name="creator" value={form.creator} onChange={handleChange} required />
        </label>

        <label>
          Descrição
          <textarea name="description" value={form.description} onChange={handleChange} required />
        </label>

        <label>
          Visualizações
          <input
            name="views"
            type="number"
            min="0"
            value={form.views}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Curtidas
          <input
            name="likes"
            type="number"
            min="0"
            value={form.likes}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Hashtag
          <input name="hashtag" value={form.hashtag} onChange={handleChange} required />
        </label>

        <label>
          URL do vídeo
          <input name="url" value={form.url} onChange={handleChange} required />
        </label>

        <label>
          URL da thumbnail
          <input name="thumbnail" value={form.thumbnail} onChange={handleChange} required />
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Cadastrar vídeo</button>
      </form>
    </section>
  )
}
