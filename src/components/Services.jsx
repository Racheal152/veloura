import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from '../assets/service1.webp'
import serviceImg2 from '../assets/service2.webp'
import serviceImg3 from '../assets/service3.webp'
import serviceImg4 from '../assets/service4.webp'
import {motion} from "framer-motion"
import { fadeIn } from '../utils/animationVariants';


const Services = () => {
  return (
    <div id='services' className='bg-[#fcf7fa]'>
      <div className='pt-28 px-4 container mx-auto'>
        <motion.div 
        variants={fadeIn ('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-heroBg'>What Can We Do Together</h2>
          <p className='md:w-1/2 mx-auto'>At Veloura, we walk with you on your journey to mental clarity and emotional well-being. Whether it's through one-on-one therapy, wellness coaching, guided meditations, or supportive group sessions — we’re here to help you heal, grow, and thrive.</p>
        </motion.div>
        
        {/* service category */}
        <div className='py-12 md:w-4/5 mx-auto'>
          <Tabs>
            <motion.TabList 
             variants={fadeIn ('up', 0.2)}
             initial="hidden"
             whileInView={"show"}
             viewport={{once: false, amount: 0.7}}
             className='flex flex-wrap justify-between items-center md:gap-8 gap-4'>
              <Tab>Couple Counselling</Tab>
              <Tab>Parenting Skills</Tab>
              <Tab>Feeling Stuck</Tab>
              <Tab>Self-confidence</Tab>
            </motion.TabList>
            
            <TabPanel>
              <motion.div 
              variants={fadeIn ('up', 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{once: false, amount: 0.2}}
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Couple Counselling</h3>
                <p className='mb-8'>Strengthen your bond through open communication and shared understanding. We help couples navigate challenges, rebuild trust, and rediscover connection in a safe, supportive space.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Improved communication and emotional intimacy</li>
                  <li>Conflict resolution and mutual respect</li>
                  <li>Stronger partnership and long-term relationship satisfaction</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg1} alt='' className='w-full md:h-[446px] h-auto rounded-2xl object-cover' />
              </div>  
              </motion.div>              
            </TabPanel>
            
            <TabPanel>
              <motion.div 
                variants={fadeIn ('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.2}}
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Parenting Skills</h3>
                <p className='mb-8'>Empower your parenting journey with tools and strategies that foster healthy relationships with your children. Learn how to manage stress, set boundaries, and nurture emotional growth at home.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>More confident and effective parenting</li>
                  <li>Stronger parent-child relationships</li>
                  <li>Healthier emotional development in children</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg2} alt='' className='w-full md:h-[446px] h-auto rounded-2xl object-cover' />
              </div>  
              </motion.div> 
            </TabPanel>

            <TabPanel>
              <motion.div 
               variants={fadeIn ('up', 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.2}}
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Feeling Stuck</h3>
                <p className='mb-8'>When life feels heavy or directionless, we're here to guide you forward. Together, we’ll explore what’s holding you back and create a path to renewed clarity and purpose.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Greater self-awareness and clarity</li>
                  <li>Renewed motivation and focus</li>
                  <li>Personalized strategies for moving forward</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg3} alt='' className='w-full md:h-[446px] h-auto rounded-2xl object-cover' />
              </div>  
              </motion.div> 
            </TabPanel>

            <TabPanel>
              <motion.div 
               variants={fadeIn ('up', 0.2)}
               initial="hidden"
               whileInView={"show"}
               viewport={{once: false, amount: 0.2}}
              className='flex flex-col md:flex-row gap-8 mt-8'>
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
                <h3 className='text-3xl font-semibold text-primary mb-4'>Self-Confidence</h3>
                <p className='mb-8'>Reclaim your inner strength and belief in yourself. Through tailored support and self-discovery, we’ll help you overcome self-doubt and build lasting confidence from within.</p>
                <h4 className='text-xl font-medium text-black mb-4'>Benefits</h4>
                <ul className='list-disc list-inside space-y-3'>
                  <li>Stronger sense of self-worth</li>
                  <li>More assertiveness in personal and professional life</li>
                  <li>Reduced anxiety and fear of judgment</li>
                </ul>
              </div>
              <div className='md:w-1/2'>
                <img src={serviceImg4} alt='' className='w-full md:h-[446px] h-auto rounded-2xl object-cover' />
              </div>  
              </motion.div> 
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default Services