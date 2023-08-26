import BigTitle from '@/components/BigTitle'
import Button from '@/components/button'
import React from 'react'

const About = () => {
  return (
    //<!-- Start About Seciton -->
    <section id='about' className='h-max bg-site-darkcolor3 py-24'>
      <BigTitle title='about me' />
      <div className='container mx-auto mb-9'>
        <div className='flex flex-wrap justify-center gap-8'>
          <div className='max-w-[50%] hidden'>
            <div className='max-w-[570px] min-h-[514px]'>
              <img
                src='https://dummyimage.com/570x514/808080/fff'
                alt=''
                className='object-cover w-full h-full'
              />
            </div>
          </div>
          <div className='max-w-[50%] text-neutral-3'>
            <h2 className='text-white text-4xl mb-3'>Hi There! I'm Mert Okan</h2>
            <h4 className='text-state-yellow text-2xl font-light mb-3'>Front-End Developer</h4>
            <div className=''>
              <p className='leading-6'>
                Hello,
                <br />
                I have been developing as a Front-End Web Developer for about a year. While I have
                written code in areas like Back-End and Unity in the past, Front-End has been the
                area that captivated me the most. I realized that my visual expression makes me
                happy to create impressive and user-friendly impressions. By focusing on React Web,
                I aim to further enhance my skills in combining user experience and interactive
                features.
                <br />
                <br />
                When I decided to focus on the Front-End field, I met Acun Medya Akademi. Thanks to
                this academy, I found opportunities to prepare myself for the industry, learn
                collaboration within a team, and adapt to remote work. At the same time, I had the
                opportunity to learn about the subjects that I was missing. I am grateful to my
                teacher Orhan Ekici, who has always been by my side and supported me throughout this
                process.
                <br />
                <br />
                After solidifying my web development knowledge even more, I plan to move towards
                React Native in the future. This step will allow me to advance myself in mobile
                application development, bringing me one step closer to my goal of becoming a
                versatile Front-End developer.
                <br />
                <br />
                I'm eagerly looking forward to creating amazing things together in the web world.
                <br />
                Best regards,
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='text-white container mx-auto text-center'>
        <Button size='medium' as='a' download href='/Resume-Mert-OKAN.pdf'>
          Download CV
        </Button>
      </div>
    </section>
    //<!-- End About Seciton -->
  )
}

export default About
