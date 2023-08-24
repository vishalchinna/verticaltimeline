import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = prop => {
  const {timelineItemsList} = prop
  return (
    <div className="">
      <h1>MY JOURNEY OF CCBP 4.0"</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(each =>
          each.categoryId === 'COURSE' ? (
            <CourseTimelineCard key={each.id} informationCourse={each} />
          ) : (
            <ProjectTimelineCard key={each.id} informationProject={each} />
          ),
        )}
      </Chrono>
    </div>
  )
}

export default TimelineView
