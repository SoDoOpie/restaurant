import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'http://localhost:8000/api'

function App() {
  const [menuItems, setMenuItems] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMenuItems()
    fetchCategories()
  }, [])

  const fetchMenuItems = async () => {
    try {
      const response = await fetch(`${API_URL}/menu-items/`)
      const data = await response.json()
      setMenuItems(data)
    } catch (error) {
      console.error('Error fetching menu items:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/categories/`)
      const data = await response.json()
      setCategories(data)
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  if (loading) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🍽️ Restaurant Menu</h1>
      </header>
      
      <main className="main">
        <section className="categories">
          <h2>Categories ({categories.length})</h2>
          <div className="category-list">
            {categories.map(category => (
              <div key={category.id} className="category-card">
                {category.name}
              </div>
            ))}
          </div>
        </section>

        <section className="menu">
          <h2>Menu Items ({menuItems.length})</h2>
          <div className="menu-grid">
            {menuItems.map(item => (
              <div key={item.id} className="menu-card">
                <h3>{item.name}</h3>
                <p className="description">{item.description}</p>
                <p className="price">${item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
