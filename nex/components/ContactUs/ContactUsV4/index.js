'use client'
import { useState } from 'react'
import { object, string } from 'prop-types';
import get from 'lodash.get';
import axios from 'axios';
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import NexImage from '@nex-core-ui/NexImage';


const ContactUsV4 = (props) => {
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
    <div className={`relative isolate }`}>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div  className={`relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-24 ${get(tailwindClasses, 'leftContainer')}`}  style={{...get(style, 'leftContainer')}}>
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
        <div className="lg:absolute lg:inset-0 lg:left-1/2">
          <NexImage
            src={get(props, 'imagePath')}
            className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"></NexImage>
        </div>
        
      </div>
    </div>
  )
}

ContactUsV4.propTypes = {
    style: object,
    themeColor: "",
    title: string,
    description: string,
}

ContactUsV4.defaultProps = {
    style: {
        leftContainer: {},
        image: {},
        title: {},
        description: {},
        text: {},
        label: {},
        input: {},
        button: {},
    },
    tailwindClasses: {
      leftContainer: "",
      image: "",
      title: "",
      description: "",
      text: "",
      label: "",
      input: "",
      button: "",
  },
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735306482.720x720.png",
    title: "Conatct Us",
    description: "Aute magna irure deserunt veniam aliqua magna enim voluptate.",
    address: "545 Mavis Island,Chicago, IL 99191",
    mobileNumber: "+91 9930661883",
    email: "sales@nexnnova.com",
    apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz"
}

export default ContactUsV4;