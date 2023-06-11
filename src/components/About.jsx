/* eslint-disable react-refresh/only-export-components */


import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import {SectionWrapper} from '../hoc'
import ServiceCard from './ServiceCard'


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I&apos;m a skilled software engineer with a demonstrated history of working in the computer software industry.
        I&apos;m a strong engineering professional with a Bachelor&apos;s degree focused in Computer Science from the University of The Gambia.
        I&apos;m passionate about building software that makes life easier. Let&apos;s build something amazing together.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={ service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about")