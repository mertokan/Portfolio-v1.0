import React from 'react'
import Button from '../button'
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'

const ProjectCards = ({
  pName,
  desc,
  use = [],
  siteURL,
  github,
  imageSRC = '/uc.png',
  idev = false,
}) => {
  return (
    <div className='text-white border rounded-md p-5 flex group even:flex-row-reverse gap-6 w-[62.5%] h-80 relative overflow-hidden'>
      {idev && (
        <div
          className='absolute bg-state-yellow text-neutral-8 font-semibold w-64 text-center py-1 select-none
        group-odd:rotate-45 group-odd:-right-20 group-odd:top-10
        group-even:-rotate-45 group-even:-left-20 group-even:top-7'
        >
          <p>In Development</p>
        </div>
      )}
      <div className='rounded-2xl overflow-hidden w-[850px] select-none'>
        <a href={siteURL} target='_blank'>
          <img src={imageSRC} alt={imageSRC} />
        </a>
      </div>
      <div className='flex flex-col'>
        <div className='mt-auto'>
          <h1 className='text-center mb-2 font-medium text-lg'>{pName}</h1>
          <p>{desc}</p>
        </div>
        <div className='flex justify-evenly mt-auto'>
          {use.map((item, index) => (
            <div
              key={index}
              className='px-3 py-1 border rounded-md border-state-yellow shadow-md shadow-state-yellow/30'
            >
              <p className='text-state-yellow font-medium'>{item}</p>
            </div>
          ))}
        </div>
        <div className='flex gap-5 mt-auto justify-around'>
          <Button as='a' href={github} target='_blank' variant='projectButton' size='xsmall'>
            <FaGithub />
            Github
          </Button>
          <Button as='a' href={siteURL} target='_blank' variant='projectButton' size='xsmall'>
            Live Demo
            <FaExternalLinkAlt />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
