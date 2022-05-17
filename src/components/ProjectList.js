import { Link } from 'react-router-dom';
import Avatar from './Avatar';

//styles
import './ProjectList.css'
import Arrow from '../assets/arrow_right.svg'



export default function ProjectList({projects}) {
  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map(project => (
        <div className='projects-container' key={project.name}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toDateString()}</p>
          <div className="assigned-to">
            <p><strong>Assigned to:</strong></p>
            <ul>
              {project.assignedUsersList.map(user => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
          <div className='details-container'>
          <Link to={`/projects/${project.id}`} key={project.id}>
            <button>
                <span>
                  View Details 
                  <img   src={Arrow} alt="arrow-right" className='arrow-right'/>
                </span>
            </button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  )
}
