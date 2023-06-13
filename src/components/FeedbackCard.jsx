/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const FeedbackCard = ({index,testimonial,name,designation,company,image}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
            className="w-full bg-black-200 rounded-3xl xs:w-[320px] p-10"
        >
            <p className="text-white font-black text-[48px]">&quot;</p>
            <div className="mt-1">
                <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>
                <div className='mt-7 flex justify-between items-center gap-1'>
                    <div className='flex-1 flex flex-col'>
                        <p className='text-white font-medium text-[16px]'>
                            <span className='blue-text-gradient'>@</span>{name}
                        </p>
                        <p className='text-secondary mt-1 text-[12px] '>{designation} of  { company}</p>
                    </div>
                    <img src={image} alt={`feedback-by-${name}`} className='w-10 h-10 rounded-full object-cover'/>
                </div>
            </div>
        </motion.div>
    )
}

export default FeedbackCard