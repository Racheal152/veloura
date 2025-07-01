import { FaClipboardCheck, FaLaptopHouse, FaUserShield } from "react-icons/fa";
import { FaClock, FaLightbulb, FaPersonCircleQuestion } from "react-icons/fa6";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationVariants";
export const FAQs = () => {
  return (
    <div id='faqs' className='bg-heroBg flex items-center justify-center py-28 px-8'>
      <div className="container mx-auto">
        <motion.div 
        variants={fadeIn ('down', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.2}}
        className=" mx-auto items-center md:gap-12 gap-8">
          
          <div className="space-y-8">
             <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Frequently Asked Questions</h2>
             <div className="grid grid-cols-1 gap-8 text-white">
              <div className='flex items-start gap-4'>
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaPersonCircleQuestion className="text-primary" />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium'> What services does Veloura offer?</h3>
                  <p>We offer individual therapy, couple counseling, parenting guidance, and support for emotional growth and self-confidence.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaLaptopHouse className="text-primary" />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium'>Is everything online or in person?</h3>
                  <p>Veloura provides both in-person and online sessions. You can choose what works best for your comfort and schedule.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaClipboardCheck className="text-primary" />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium'>Do I need a referral to book a session?</h3>
                  <p>No referral is needed. You can book your session directly through our website.</p>
               </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaClock className="text-primary" />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium'>How long is a typical session?</h3>
                  <p>Most sessions last between 45–60 minutes, depending on the type of support you're receiving.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaUserShield className="text-primary" />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium'> Are sessions confidential?</h3>
                  <p>Absolutely. Your privacy and confidentiality are a top priority at Veloura.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                <FaLightbulb className="text-primary" />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-lg font-medium'>How do I know which service is right for me?</h3>
                  <p>We offer a brief consultation to help guide you to the support that best fits your needs.</p>
                </div>
              </div>

              <div className='md:w-1/2 w-full'>
              <button className='bg-primary text-white py-3.5 px-6 font-medium rounded hover:bg-primary/90'>
              <a href='/' className='flex gap-1 items-center '>
                <span>Go back to Homepage</span>
                <IoArrowForwardCircleSharp />
              </a>
              </button>
              </div>
          </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQs