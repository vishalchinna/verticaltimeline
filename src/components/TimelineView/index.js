import {Chrono} from 'react-chrono'
import './index.css'

const TimelineView = prop => {
  const {timelineItemsList} = prop
  console.log(timelineItemsList)
  return (
    <div className="">
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList} />
    </div>
  )
}

export default TimelineView
