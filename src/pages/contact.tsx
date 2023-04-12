import Layout from '@/components/Layout'
import { useState } from 'react'

import BackgroundGradientOrange from '@/components/BackgroundGradientOrange'

export default () => {
  const [btnLeft, setBtnLeft] = useState(true)
  const [formDirty, setFormDirty] = useState(true)

  const [formSent, setFormSent] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleButtonHover = () => {
    setBtnLeft(!btnLeft)
  }

  // create a function that handles the form submission with a prevent default
  const handleForm = (e: any) => {
    e.preventDefault()

    if (formValidation()) {
      console.log('Errors in form')
    } else {
      console.log('form submitted')
      // set all form fields to empty string
      setFirstName('')
      setLastName('')
      setEmail('')
      setPhone('')
      setMessage('')

      setFormSent(true)

      // send form data to backend

      // show success message

      // reset form errors
    }
  }

  // create a function that handles the form validation
  const formValidation = () => {
    let error = false

    let errors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    }
    // check if all fields in form are filled out and are correct format, if not add error message to state
    if (!firstName) {
      errors.firstName = 'Please enter your first name'
      error = true
    } else if (firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters'
      error = true
    }

    if (!lastName) {
      errors.lastName = 'Please enter your last name'
      error = true
    } else if (lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters'
      error = true
    }

    // check if email is an email format with regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      errors.email = 'Please enter a valid email address'
      error = true
    }

    // if phone is filled in check if phone is a phone format with regex /^\+(?:[0-9] ?){6,14}[0-9]$/
    if (phone.length > 0 && !phone.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)) {
      errors.phone = 'Please enter a valid phone number'
      error = true
    }

    if (message.length < 10) {
      errors.message = 'Message must be at least 10 characters'
      error = true
    }
    setFormErrors(errors)
    return error
  }

  return (
    <Layout>
      {/* <BackgroundGradientOrange /> */}
      <div className="m-auto max-w-screen-lg">
        <h1 className="mb-20 font-ilyas text-8xl uppercase">
          Let's work <br /> together
        </h1>
        <form
          className="m-auto mb-64 flex flex-col gap-12"
          onSubmit={handleForm}
        >
          <div className="flex w-full flex-row gap-6">
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="first-name">
                First Name
              </label>
              <label className="color ml-2 h-4 text-xs text-red-500">
                {formErrors.firstName}
              </label>
              <input
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
                placeholder="First Name *"
                type="text"
                id="first-name"
                value={firstName}
                onChange={e => {
                  setFirstName(e.target.value)
                }}
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="last-name">
                Last Name
              </label>
              <label className="color ml-2 h-4 text-xs text-red-500">
                {formErrors.lastName}
              </label>
              <input
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
                placeholder="Last Name *"
                type="text"
                id="last-name"
                value={lastName}
                onChange={e => {
                  setLastName(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="flex w-full flex-row gap-6">
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="email">
                Email
              </label>
              <label className="color ml-2 h-4 text-xs text-red-500">
                {formErrors.email}
              </label>
              <input
                typeof="email"
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
                placeholder="Email *"
                type="text"
                id="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />
            </div>
            <div className="flex w-full flex-col">
              <label className="sr-only" htmlFor="telephone">
                Telephone
              </label>
              <label className="color ml-2 h-4 text-xs text-red-500">
                {formErrors.phone}
              </label>
              <input
                className="border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black focus:border-transparent focus:ring-0 active:divide-emerald-900"
                placeholder="Telephone"
                type="text"
                id="telephone"
                value={phone}
                onChange={e => {
                  setPhone(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="flex w-full flex-col">
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <label className="color ml-2 h-4 text-xs text-red-500">
              {formErrors.message}
            </label>
            <textarea
              className="resize-none border-b border-b-black bg-transparent bg-white bg-opacity-0 p-2 text-xl font-light leading-none placeholder:text-black"
              placeholder="Message *"
              rows={6}
              id="message"
              value={message}
              onChange={e => {
                setMessage(e.target.value)
              }}
            ></textarea>
          </div>
          {/* TODO: Add a checkbox for GDPR  */}
          {/* TODO: fix button animation bug */}
          <div className="relative w-full">
            <button
              className={`absolute box-content w-28 rounded-full border border-solid border-black px-5 py-2.5 text-center font-light transition-all ${
                btnLeft
                  ? 'left-0 -translate-x-0'
                  : 'left-full -translate-x-full'
              } ${formDirty ? '' : 'hover:bg-black hover:text-white'}`}
              // onMouseEnter={() => handleButtonHover()}
              type="submit"
            >
              {formSent ? (
                // checkmark svg
                <svg
                  className="m-auto h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
