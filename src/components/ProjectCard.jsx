/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from "../utils/motion"
import { Tilt } from "react-tilt"
import { github,link2 } from "../assets"



const ProjectCard = ({index,name,description,tags,image,source_code_github,urllink}) => {
    return (
        <motion.div variants={fadeIn("up", "spring" , 0.5 * index, 0.75)}>
            <Tilt options={{
                        max: 45,
                        scale:1,
                        speed:450
            }}
            className="w-full bg-tertiary p-5 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-2xl sm:w-[360px]"
            >
                <div className="relative w-full h-[230px]">
                    <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-3'>
                        <div
                            onClick={() => window.open(urllink, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={link2} alt="link"
                                className="w-1/2 h-1/2 object-contain" />
                        </div>
                        <div
                            onClick={() => window.open(source_code_github, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={github} alt="github"
                                className="w-1/2 h-1/2 object-contain" />
                        </div>
                        
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{ name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">{ description}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => 
                
                        <div
                            key={tag.name}
                            className="white-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img src={tag.image} alt={tag.name}
                                className="w-1/2 h-1/2 object-contain" />
                        </div>
                    )}
                </div>
            </Tilt>
        </motion.div>
    )
}

export default ProjectCard