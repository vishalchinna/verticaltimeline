import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = prop => {
  const {informationProject} = prop
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = informationProject

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-box">
        <h1>{projectTitle}</h1>
        <div className="time-box">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
