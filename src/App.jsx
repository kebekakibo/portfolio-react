import ProjectCard from './ProjectCard'
import { useState } from 'react'


import './App.css'

function App() {
  
  const [searchTerm, setSearchTerm] = useState("")


 
const projects = [
  {
    title: "Trading Lot Size Calculator",
    description: "Calculate trading position sizes.",
    status: "Completed"
  },
  {
    title: "To-Do List",
    description: "Manage daily tasks and stay organized.",
    status: "In Progress"
  },
  {
    title: "Personal Portfolio",
    description: "Showcase my skills and projects.",
    status: "Coming Soon"
  }
  
];


const filteredProjects = projects.filter((project) => {
  const searchText = searchTerm.toLowerCase()

  return (
    project.title.toLowerCase().includes(searchText) ||
    project.description.toLowerCase().includes(searchText) ||
    project.status.toLowerCase().includes(searchText)
  )
})


 

  return (
    <>
    
<nav className="navbar">
  <a className="nav-logo" href="#home">
    MyPortfolio<span>.</span>
  </a>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>
</nav>

      <section id="center">
      
        <div>
   
   <header className="hero-section" id="home">      

  <p className="hero-label">SOFTWARE ENGINEERING STUDENT</p>

  <h1>
    Building for the <span>web.</span>
  </h1>

  <p className="hero-description">
    I'm learning to build modern websites and useful web applications.
    Explore my projects and follow my journey as a developer.
  </p>
</header>

          <input
  type="text"
  placeholder="Search projects..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>

<div className="projects-heading" id="projects">
  <div>
    <p className="section-label">MY WORK</p>
    <h2>Featured Projects</h2>
  </div>

  <p className="projects-count">
   {filteredProjects.length} {
  filteredProjects.length === 1 ? 'project' : 'projects'
}
  </p>
</div>

<div className="projects-container">
  {filteredProjects.length > 0 ? (
    filteredProjects.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        status={project.status}
      />
    ))
  ) : (
    <p className="no-results">
      No projects found. Try another search.
    </p>
  )}
</div>


          
        </div>
       
<section className="contact-section" id="contact">
  <p className="section-label">GET IN TOUCH</p>
  <h2>Let's connect.</h2>
  <p>
    Interested in my work? Visit my GitHub profile to see my projects.
  </p>
  <a
    className="contact-link"
    href="https://github.com/kebekakibo"
    target="_blank"
    rel="noreferrer"
  >
    Visit my GitHub
  </a>
</section>

      </section>

      

      
      <div className="ticks"></div>
      <section id="spacer"></section>

      
<footer className="site-footer">
  <p>© {new Date().getFullYear()} MyPortfolio. Built with React.</p>

  <div className="footer-links">
    <a
      href="https://github.com/kebekakibo"
      target="_blank"
      rel="noreferrer"
    >
      GitHub
    </a>
    <a href="#home">Back to top ↑</a>
  </div>
</footer>

    </>
  )
}

export default App
