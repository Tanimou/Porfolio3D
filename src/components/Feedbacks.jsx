/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { styles } from "../style"
import { textVariant, fadeIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { testimonials } from "../constants"
import FeedbackCard from "./FeedbackCard"

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] bg-opacity-10 backdrop-filter backdrop-blur-lg">
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>What others say</p>
        <h2 className={styles.heroHeadText}>Testimonials</h2>
      </motion.div>
    </div>
    <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial,index) => (
      <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
  )
}

export default SectionWrapper(Feedbacks,"")