import BigTitle from '@/components/BigTitle'
import ProjectCards from '@/components/ProjectCards'
import {PROJECTS_LİST} from '@/utils/consts/projects'
import React from 'react'

const Projects = () => {
  return (
    <section className='pt-24 bg-site-darkcolor2 h-max' id='projects'>
      <BigTitle title='Projects' />
      <div className='container mx-auto grid justify-items-center gap-8'>
        {PROJECTS_LİST.map((project, index) => (
          <ProjectCards
            key={index}
            pName={project.pName}
            desc={project.desc}
            use={project.use}
            siteURL={project.siteURL}
            github={project.github}
            imageSRC={project.imageSRC}
            idev={project.idev}
          />
        ))}
        {/* <ProjectCards
          list={['Proje 1', 'Proje 2']}
          siteURL='https://www.armaturkbirlikleri.me/'
          github='https://github.com/Elitesmert/atb'
          imageSRC='/armaturkbirlikleri.png'
        />
        <ProjectCards />
        <ProjectCards /> */}
      </div>
    </section>
  )
}

export default Projects
