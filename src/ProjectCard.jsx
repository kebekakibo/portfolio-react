
import { useState } from 'react'

function ProjectCard({ title, description, status }) {
  const [showDescription, setShowDescription] = useState(true)

  return (
    <div className="project-card">
      <h2>{title}</h2>

      <button
        className="project-button"
        onClick={() => setShowDescription(!showDescription)}
      >
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>

      {showDescription && <p>{description}</p>}

     
<p className={`status-badge ${
  status === "Completed"
    ? "status-completed"
    : status === "In Progress"
    ? "status-progress"
    : "status-upcoming"
}`}>
  {status}
</p>

    </div>
  )
}

export default ProjectCard

