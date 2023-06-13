/* eslint-disable no-unused-vars */
// import useStae and useRef from react
import { useState, useRef } from "react"
// import { motion } from framer-motion
import { motion } from "framer-motion"
// import { styles } from style
import { styles } from "../style"
// import { SectionWrapper } from hoc
import { SectionWrapper } from "../hoc"
// import emails from @emailjs/browser
import emailjs from "@emailjs/browser"
// import EarthCanvas from canvas
import { EarthCanvas } from "./canvas"
// import slideIn from utils/motion
import { slideIn } from "../utils/motion"

// template_puyc4oy
// service_lwhx8xe
// y2nuL5qfdAEVf7tzx
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const handeChange = (e) => { 
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send("service_lwhx8xe", "template_puyc4oy", {
      from_name: form.name,
      to_name: "Tanimou Cisse",
      from_email: form.email,
      to_email: "tanimoucisse@gmail.com",
      message: form.message,
    }, "y2nuL5qfdAEVf7tzx").then(() => { 
      setLoading(false)
      alert("Message sent successfully")
      setForm({
        name: "",
        email: "",
        message: "",
      }), (error) => { 
        setLoading(false)
        alert("Something went wrong")
        console.log(error)
      }

    })
   }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-opacity-10 backdrop-filter  backdrop-blur-lg rounded-2xl p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              onChange={handeChange}
              value={form.name}
              name="name"
              type="text"
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              onChange={handeChange}
              value={form.email}
              name="email"
              type="email"
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              onChange={handeChange}
              value={form.message}
              name="message"
            
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-full"
          >
            {loading ? "Sending..." : "Send"}
            
              </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")