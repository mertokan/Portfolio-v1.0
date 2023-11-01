import BigTitle from '@/components/BigTitle'
import emailjs from '@emailjs/browser'
import {useRef, useState} from 'react'
import {Textarea, Input} from '@nextui-org/react'
import Button from '@/components/button'
import {MdOutlineEmail} from 'react-icons/md'
import Snackbar from '@/components/Snackbar'
import {Toaster, toast} from 'sonner'
import {BsCheck2Circle} from 'react-icons/bs'
import {BiError} from 'react-icons/bi'
import {useEffect} from 'react'

const Contact = () => {
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [test, setTest] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true)
          // setName('')
          // setEmail('')
          // setMessage('')
          // setSubject('')
          setTimeout(() => {
            setSuccess(false)
          }, 3000)
        },
        (error) => {
          setError(true)
          setTimeout(() => {
            setError(false)
          }, 3000)
        }
      )
  }

  useEffect(() => {
    toast('Thanks, I will get back to you ASAP', {
      icon: <BsCheck2Circle className='text-2xl' />,
      style: {
        borderRadius: '10px',
        background: 'rgb(50, 100, 10)',
        color: '#fff',
        padding: '10px',
        fontSize: '1rem',
      },
    })
  }, [success === true])

  useEffect(() => {
    toast('Something went wrong', {
      icon: <BiError className='text-2xl' />,
      style: {
        borderRadius: '10px',
        background: 'rgb(100, 10, 10)',
        color: '#fff',
        padding: '10px',
        fontSize: '1rem',
      },
    })
  }, [error === true])

  return (
    <section id='contact' className='h-max bg-site-darkcolor3 py-24'>
      <BigTitle title='contact' />

      <div>
        <form ref={formRef} onSubmit={sendEmail} className='w-2/4 mx-auto flex flex-col gap-5'>
          <Input
            type='text'
            classNames={{
              inputWrapper: 'bg-site-darkcolor1',
            }}
            variant='faded'
            label='Name'
            name='name'
            isRequired={true}
            value={name}
            onValueChange={setName}
          />
          <Input
            classNames={{
              inputWrapper: 'bg-site-darkcolor1',
            }}
            type='text'
            variant='faded'
            label='Subject'
            name='subject'
            isRequired={true}
            value={subject}
            onValueChange={setSubject}
          />
          <Input
            classNames={{
              inputWrapper: 'bg-site-darkcolor1',
            }}
            type='email'
            variant='faded'
            label='Email'
            name='email'
            isRequired={true}
            value={email}
            onValueChange={setEmail}
            endContent={
              <MdOutlineEmail className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
            }
          />
          <Textarea
            isRequired={true}
            classNames={{
              inputWrapper: 'bg-site-darkcolor1',
            }}
            value={message}
            onValueChange={setMessage}
            name='message'
            variant='faded'
            label='Message'
            labelPlacement='outside'
            placeholder='Enter your message'
            className=''
          />
          <Button size='medium' variant='projectButton'>
            Send Email
          </Button>
          {error && (
            <Toaster
              position='bottom-left'
              visibleToasts={1}
              closeButton='true'
              theme='dark'
              duration={2000}
            />
          )}
          {success && (
            <Toaster
              position='bottom-left'
              visibleToasts={10}
              closeButton='true'
              theme='dark'
              duration={2000}
            />
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
