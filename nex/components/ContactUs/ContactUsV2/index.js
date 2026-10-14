'use client'
import { useState } from 'react'
import { object, string } from 'prop-types';
import get from 'lodash.get';
import axios from 'axios';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline'


const ContactUsV2 = (props) => {
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
    <div className={`relative isolate`} >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className={`relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48 ${get(tailwindClasses, 'leftContainer')}`} style={{...get(style, 'leftContainer')}}>
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect fill="white" width="100%" height="100%" strokeWidth={0} />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
              </svg>
            </div>
            <h2 className={`text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
              {get(props, 'title')}
            </h2>
            <p className={`mt-6 text-lg/8 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
              {get(props, 'description')}
            </p>
            <dl className={`mt-10 space-y-4 text-base/7 text-gray-600 ${get(tailwindClasses, 'text')}`} style={{...get(style, 'text')}}>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>

                  <BuildingOffice2Icon aria-hidden="true" className={`h-7 w-6 text-gray-400 ${get(tailwindClasses, 'text')}`} style={{...get(style, 'text')}}/>
                </dt>
                <dd>
                  {get(props, 'address')}
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className={`h-7 w-6 text-gray-400 ${get(tailwindClasses, 'text')}`} style={{...get(style, 'text')}} />
                </dt>
                <dd>
                  <a href="tel:+1 (555) 234-5678" >
                    {get(props, 'mobileNumber')}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className={`h-7 w-6 text-gray-400 ${get(tailwindClasses, 'text')}`} style={{...get(style, 'text')}}/>
                </dt>
                <dd>
                  <a href="mailto:hello@example.com" >
                    {get(props, 'email')}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div  className={`px-6 pb-24 pt-20 sm:pb-32 lg:px-16 lg:py-48 ${get(tailwindClasses, 'rightContainer')}`}  style={{...get(style, 'rightContainer')}}>
          <form action="#" method="POST" onSubmit={submitHandler}>
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
                className={`block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${get(tailwindClasses, 'button')}`}
                style={{...get(style, 'input')}}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
  )
}

ContactUsV2.propTypes = {
    style: object,
    themeColor: "",
    title: string,
    description: string,
}

ContactUsV2.defaultProps = {
    style: {
        leftContainer: {},
        rightContainer: {},
        title: {},
        description: {},
        text: {},
        label: {},
        input: {},
        button: {},
    },
    tailwindClasses: {
      leftContainer: "",
      rightContainer: "",
      title: "",
      description: "",
      text: "",
      label: "",
      input: "",
      button: "",
  },
    title: "Conatct Us",
    description: "Aute magna irure deserunt veniam aliqua magna enim voluptate.",
    address: "545 Mavis Island,Chicago, IL 99191",
    mobileNumber: "+91 9930661883",
    email: "sales@nexnnova.com",
    apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz"
}

export default ContactUsV2;