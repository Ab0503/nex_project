import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { useState } from 'react';
import axios from 'axios';
import { validateEmail } from '@/utils/common';

const NewsLetterV1 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});
    const [email, setEmail] = useState('');
    const submit = () => {
        const payload = {
            email: email,
        };
        if(email.length != 0 && validateEmail(email)){
            axios.post(get(props, 'apiEndPoint'), payload)
            .then((response) => {
                if(get(response, 'data.responseCode', '') == 'success'){
                    alert("Email id save successfully")
                } else {
                    alert("Something went wrong");
                }
            });
        } else {
            alert("Please enter valid email id")
        }
        
    }
    return (
    <div className={`relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className={`text-4xl font-semibold tracking-tight text-white ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>
            <p className={`mt-4 text-lg text-gray-300 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                {get(props, 'description')}
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                autoComplete="email"
                className={`min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm/6 ${get(tailwindClasses, 'input')}`}
                style={get(style, 'input')}
              />
              <button
                type="submit"
                className={`flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${get(tailwindClasses, 'button')}`}
                style={get(style, 'button')}
                onClick={submit}
              >
                {get(props, 'buttonText')}
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            {
                get(props, 'items', []).map((item) => (
                <div className="flex flex-col items-start">
                    <div className={`rounded-md bg-white/5 p-2 ring-1 ring-white/10 text-white  ${get(tailwindClasses, 'itemIcon')} `}  style={get(style, 'itemIcon')}>
                        <span className="size-6 " >
                        {parse(get(item, 'icon', ''))}
                        </span>
                    </div>
                    <dt className={`mt-4 text-base font-semibold text-white ${get(tailwindClasses, 'itemTitle')} `} style={get(style, 'itemTitle')}>{get(item, 'title')}</dt>
                    <dd className={`mt-2 text-base/7 text-gray-400 ${get(tailwindClasses, 'itemDesc')}`} style={get(style, 'itemDesc')}>
                        {get(item, 'description')}
                    </dd>
                </div>
                ))
            }
          </dl>
        </div>
      </div>
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  )
}

NewsLetterV1.propTypes = {
    style: object,
    title: string,
    description: string,
    input: string,
    button: string,
    items: arrayOf(object)
}

NewsLetterV1.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        input: {},
        button: {},
        itemIcon: {},
        itemTitle: {},
        itemDesc: {}
    },
    title: "Subscribe to our newsletter",
    description: "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
    buttonText: "Subscribe",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            `,
            title: "Weekly articles",
            description: "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            `,
            title: "Weekly articles",
            description: "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            `,
            title: "Weekly articles",
            description: "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
            </svg>
            `,
            title: "Weekly articles",
            description: "Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.",
        }
    ],
    apiEndPoint: "#"

}

export default NewsLetterV1;