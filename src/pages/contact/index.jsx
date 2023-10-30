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

const Contact = () => {
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
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
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          setError(true)
        }
      )
  }
  toast('My toast', {
    description: 'My description',
    duration: 5000,
  })
  return (
    <section id='contact' className='h-max bg-site-darkcolor3 py-24'>
      <BigTitle title='contact' />

      <div>
        <form ref={formRef} onSubmit={sendEmail}>
          <Input
            type='text'
            variant='faded'
            label='Name'
            name='name'
            isRequired={true}
            value={name}
            onValueChange={setName}
          />
          <Input
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
            value={message}
            onValueChange={setMessage}
            name='message'
            variant='faded'
            label='Description'
            labelPlacement='outside'
            placeholder='Enter your message'
            className=''
          />
          <Button size='medium'>Send Email</Button>
          {error && <p className='text-red-500'>Something went wrong, please try again</p>}
          {success && <p className='text-green-500'>Thanks, I will get back to you ASAP</p>}
        </form>
        <div
          onClick={() =>
            toast('Hello World', {
              duration: 2000,
              visibleToasts: 2,
              icon: <BsCheck2Circle />,
              position: 'bottom-left',
              closeButton: true,
            })
          }
        >
          asd
          <Toaster />
        </div>
      </div>
    </section>
  )
}

export default Contact
