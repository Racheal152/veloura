import React from 'react'
import { BsFillChatQuoteFill } from "react-icons/bs";
import review1 from '../assets/review1.webp'
import review2 from '../assets/review2.webp'
import service1 from '../assets/service1.webp'
import service2 from '../assets/service2.webp'
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animationVariants';

const  testimonials =[
    {
      name: 'Robert M.',
      location: 'Nairobi, Kenya',
      review: 'I came in feeling lost and overwhelmed. Veloura helped me find clarity and confidence again.',
      image: review2,
    },
    {
      name: 'Mike & Alisha',
      location: 'Mombasa, Kenya',
      review: 'Our couple sessions completely transformed how we communicate. We feel closer and more connected.',
      image: service1,
    },
    {
    name: 'Daniel & Rose',
    location: 'Kisumu, Kenya',
    review: 'The parenting support gave us the tools we didn’t know we needed. Home feels calmer now.',
    image: service2,
    },
    {
      name: 'Susan W.',
      location: 'Eldoret, Kenya',
      review: 'I felt stuck for years. After just a few sessions, I began moving forward with purpose.',
      image: review1,
    }

  ]

const Testimonial = () => {
  return (
    <div id='testimonial' className=' bg-[#fcf7fa] p-12'>
      <motion.div 
       variants={fadeIn ('up', 0.2)}
       initial="hidden"
       whileInView={"show"}
       viewport={{once: false, amount: 0.7}}
      className='container mx-auto pb-20'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>What Our Clients Say</h2>
          <p className='text-lg mb-12 md:w-1/2 mx-auto'>Real stories from individuals and families who’ve experienced meaningful change through Veloura. Here’s what they had to share:</p>
        </div>

        <div className='flex flex-row lg:flex-row md:w-4/5 mx-auto md:flex-col md:gap-12 gap-8'>
          {
            testimonials.map((testimonials, index) => (
              <div key={index} className='relative bg-white rounded-lg p-6 flex-1'>
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1.2'>
                  <BsFillChatQuoteFill className='size-12 text-primary'/>
                </div>
                <div>
                  
                  <div>
                    <img src={testimonials.image} alt='reviewer image' className='size-16 rounded-full object-cover mr-4' />
                    <div>
                      <p className='font-semibold'>{testimonials.name}</p>
                      <p className='text-gray-600'>{testimonials.location}</p>
                    </div>
                  </div>
                  <p className='text-lg mb-2'>{testimonials.review}</p>

                </div>
              </div>
            ))
          }
        </div>
      </motion.div>
    </div>
  )
}

export default Testimonial