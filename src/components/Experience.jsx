/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { VerticalTimeline} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import ExperienceCard from './ExperienceCard'



const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className="mt-20 flex flex-col ">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}
export default SectionWrapper(Experience, "experience")

