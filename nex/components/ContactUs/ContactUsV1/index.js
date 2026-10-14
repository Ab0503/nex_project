'use client'
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { object, string } from 'prop-types';
import get from 'lodash.get';
import axios from 'axios';

const ContactUsV1 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const [payload, setPayload] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile_number: '',
    message: ''
  });
  const submitHandler = (e) => {
    event.preventDefault();
    axios.post(get(props, 'apiEndPoint'), payload)
      .then((response) => {
          if(get(response, 'data.responseCode', '') == 'success'){
            alert("Email id save successfully")
          } else {
            alert("Something went wrong");
          }
      });
  }
  return (
    <div className={`isolate overflow-hidden py-10 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      {/* <div
        aria-hidden="true"
        className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl "
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div> */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className={`nx-section-heading-font text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(props, 'title')}</h2>
        <p className={`mt-2 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>{get(props, 'description')}</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20" onSubmit={submitHandler}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={`block text-sm/6 font-semibold text-gray-900 ${get(tailwindClasses, 'label')}`} style={{...get(style, 'label')}}>
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                autoComplete="given-name"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 ${get(tailwindClasses, 'input')}`}
                style={{...get(style, 'input')}}
                value={payload.first_name}
                onChange={((e) => setPayload({...payload, first_name: e.target.value}))}
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className={`block text-sm/6 font-semibold text-gray-900 ${get(tailwindClasses, 'label')}`} style={{...get(style, 'label')}}>
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                autoComplete="family-name"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 ${get(tailwindClasses, 'input')}`}
                style={{...get(style, 'input')}}
                value={payload.last_name}
                onChange={((e) => setPayload({...payload, last_name: e.target.value}))}
              
                />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={`block text-sm/6 font-semibold text-gray-900 ${get(tailwindClasses, 'label')}`} style={{...get(style, 'label')}}>
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 ${get(tailwindClasses, 'input')}`}
                style={{...get(style, 'input')}}
                value={payload.email}
                onChange={((e) => setPayload({...payload, email: e.target.value}))}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className={`block text-sm/6 font-semibold text-gray-900 ${get(tailwindClasses, 'label')}`} style={{...get(style, 'label')}}>
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className={`h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm  ${get(tailwindClasses, 'input')}`}
                  style={{...get(style, 'input')}}
               >
                  <option>IN</option>
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                required
                autoComplete="tel"
                minlength={10}
                maxlength={10}
                className={`block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  ${get(tailwindClasses, 'input')}`}
                style={{...get(style, 'input')}}
                value={payload.mobile_number}
                onChange={((e) => setPayload({...payload, mobile_number: e.target.value}))}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={`block text-sm/6 font-semibold text-gray-900 ${get(tailwindClasses, 'label')}`} style={{...get(style, 'label')}}>
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6  ${get(tailwindClasses, 'input')}`}
                defaultValue={''}
                style={{...get(style, 'input')}}
                value={payload.message}
                onChange={((e) => setPayload({...payload, message: e.target.value}))}
              />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className={`block w-full rounded-md nx-btn-primary nx-btn-primary:hover px-3.5 py-2.5 text-center text-sm font-semibold text-gray-50 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${get(tailwindClasses, 'button')}`}
            style={{...get(style, 'input')}}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

ContactUsV1.propTypes = {
    style: object,
    themeColor: "",
    title: string,
    description: string,
}

ContactUsV1.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        label: {},
        input: {},
        button: {},
    },
    title: "Conatct Us",
    description: "Aute magna irure deserunt veniam aliqua magna enim voluptate.",
    apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz"
}

export default ContactUsV1;