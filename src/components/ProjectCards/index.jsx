import React from 'react'
import Button from '../button'
import {FaExternalLinkAlt, FaGithub} from 'react-icons/fa'
import classNames from 'classnames'
import {Skeleton} from '@nextui-org/react'
import {useEffect} from 'react'

const ProjectCards = ({
  pName,
  desc,
  use = [],
  siteURL,
  github,
  imageSRC = '/uc.png',
  idev = false,
}) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  const toggleLoad = () => {
    setInterval(() => {
      setIsLoaded(true)
    }, 300)
  }

  useEffect(() => {
    toggleLoad()
  }, [])
  return (
    <div
      className={classNames(
        'text-white border rounded-md p-5 flex group xl:even:flex-row-reverse xl:flex-row flex-col gap-6 w-[62.5%] h-max xl:h-80 relative overflow-hidden',
        {'border-state-yellow': idev === true, 'border-state-green': idev === false}
      )}
    >
      {idev && (
        <div
          className='absolute bg-state-yellow text-neutral-8 font-semibold w-64 text-center py-1 select-none z-10
        group-odd:rotate-45 group-odd:-right-20 group-odd:top-10
        group-even:-rotate-45 group-even:-left-20 group-even:top-7'
        >
          <p>In Development</p>
        </div>
      )}
      <Skeleton
        isLoaded={isLoaded}
        className='rounded-2xl overflow-hidden select-none h-52 lg:h-72 md:h-36 xl:h-auto xl:w-2/4 grid'
      >
        <a href={siteURL} target='_blank' className='w-full h-full'>
          <img src={imageSRC} alt={imageSRC} className='w-full h-full object-cover object-top' />
        </a>
      </Skeleton>
      <div className='flex flex-col gap-4 xl:gap-0 xl:w-2/4'>
        <div className='mt-auto'>
          <h1 className='text-center mb-2 font-medium text-lg'>{pName}</h1>
          <p>{desc}</p>
        </div>
        <div className='flex justify-evenly mt-auto flex-wrap gap-y-3'>
          {use.map((item, index) => (
            <Skeleton
              isLoaded={isLoaded}
              key={index}
              className='px-3 py-1 border rounded-md border-state-yellow shadow-md shadow-state-yellow/30 !bg-transparent'
            >
              <p className='text-state-yellow font-medium'>{item}</p>
            </Skeleton>
          ))}
        </div>
        <div className='flex gap-5 mt-auto justify-around'>
          <Button as='a' href={github} target='_blank' variant='projectButton' size='xsmall'>
            <FaGithub className='hidden xs:block' />
            Github
          </Button>
          <Button as='a' href={siteURL} target='_blank' variant='projectButton' size='xsmall'>
            Live Demo
            <FaExternalLinkAlt className='hidden xs:block' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCards
