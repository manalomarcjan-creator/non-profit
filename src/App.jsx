import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const highlights = [
  'Community outreach and volunteer programs',
  'Storytelling through impactful design and content',
  'Digital solutions that make support easier to give',
]

const values = [
  {
    title: 'Compassion',
    text: 'I believe every person deserves dignity, access, and support when they need it most.',
  },
  {
    title: 'Action',
    text: 'Good ideas become real change when people are willing to serve with purpose and consistency.',
  },
  {
    title: 'Trust',
    text: 'Strong relationships are built on transparency, honesty, and a real commitment to people.',
  },
]

function Layout({ children }) {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand">Marc Jan</div>
        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <button type="button" className="donate-btn">
          Donate
        </button>
      </header>
      {children}
    </div>
  )
}

function HomePage() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Welcome</p>
          <h1>Helping people and building brighter communities.</h1>
          <p className="lead">
            I’m Marc Jan, a passionate and purpose-driven person who believes in
            making a difference through service, creativity, and compassion. I care
            deeply about helping communities grow stronger, more inclusive, and more
            hopeful.
          </p>

          <div className="hero-actions">
            <NavLink to="/about" className="primary-btn">
              Learn More
            </NavLink>
          </div>

          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="profile-card" aria-label="Profile information">
          <img
            src="/unnamed.jpg"
            alt="Marc Jan profile"
            className="portrait"
          />
          <div className="card-content">
            <p className="label">Profile</p>
            <h2>Marc Jan</h2>
            <p>Community advocate • Designer • Volunteer</p>
          </div>
          <div className="stats-row">
            <div>
              <strong>5+</strong>
              <span>Years of service</span>
            </div>
            <div>
              <strong>120+</strong>
              <span>People helped</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <main className="about-page">
      <section className="page-intro">
        <p className="eyebrow">About Me</p>
        <h1>My story, mission, and purpose.</h1>
        <p>
          I believe real change starts with empathy, dedication, and a sincere desire
          to help others thrive. Through my work and community involvement, I strive
          to create a world where kindness and opportunity are accessible to everyone.
        </p>
      </section>

      <section className="values" id="mission">
        <div className="section-heading">
          <p className="eyebrow">Values</p>
          <h2>The principles I live by</h2>
        </div>

        <div className="value-grid">
          {values.map((item) => (
            <article className="value-card" key={item.title}>
              <span className="value-icon">✦</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
