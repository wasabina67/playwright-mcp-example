import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0)

  return (
    <>
      <div>
        <a href="#" target="_blank">
          <img src="/assets/logo-1.svg" className="logo" alt="Logo 1" />
        </a>
        <a href="#" target="_blank">
          <img src="/assets/logo-2.svg" className="logo react" alt="Logo 2" />
        </a>
      </div>
      <h1>Welcome to Our Pasta House</h1>
      <div className="card">
        <button onClick={() => setLikes((likes) => likes + 1)}>
          Likes: {likes}
        </button>
        <p>
        Discover our delicious pasta recipes and visit us for an unforgettable dining experience.
        </p>
      </div>
      <p className="read-the-docs">
        We look forward to your visit.
      </p>
    </>
  )
}

export default App
