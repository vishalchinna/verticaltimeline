import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = prop => {
  const {informationCourse} = prop
  const {duration, courseTitle, description, tagsList} = informationCourse
  console.log(informationCourse)
  return (
    <div className="">
      <div className="title-box">
        <h1>{courseTitle}</h1>
        <div className="time-box">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>
      <p className="desc">{description}</p>
      <ul className="ul-list">
        {tagsList.map(each => (
          <p className="list">{each.name}</p>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
