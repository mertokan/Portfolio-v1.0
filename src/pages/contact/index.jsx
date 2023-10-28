import BigTitle from '@/components/BigTitle'
import emailjs from '@emailjs/browser'
import {useRef, useState} from 'react'

const Contact = () => {
  const formRef = useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(import.meta.env.VITE_YOUR_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, formRef.current, import.meta.env.VITE_YOUR_PUBLIC_KEY)
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
          setError(true)
        }
      )
  }
  return (
    <section id='contact' className='h-max bg-site-darkcolor3 py-24'>
      <BigTitle title='contact' />
      <div>
        <form ref={formRef} onSubmit={sendEmail}>
          <label>Name</label>
          <input type='text' name='name' />
          <label>Email</label>
          <input type='email' name='email' />
          <textarea name='message' />
          <button>Message</button>
          {error && <p className='text-red-500'>Something went wrong, please try again</p>}
          {success && <p className='text-green-500'>Thanks, I will get back to you ASAP</p>}
        </form>
      </div>
    </section>
  )
}

export default Contact
