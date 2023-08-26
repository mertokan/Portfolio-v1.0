import {useCallback} from 'react'
import Particles from 'react-particles'
import {loadFull} from 'tsparticles' // if you are going to use `loadFull`, install the "tsparticles" package too.

const BgParticle = () => {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine)
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container)
  }, [])
  return (
    <Particles
      className='h-full'
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        detectRetina: true,
        fullScreen: {
          enable: false,
          zIndex: 1,
        },

        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          detect_on: 'canvas',
          modes: {
            bubble: {
              distance: 83.91608391608392,
              size: 1,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 0.4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 200,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: 'circle',
          },

          size: {
            value: {min: 1, max: 3},
          },
        },
      }}
    />
  )
}

export default BgParticle
