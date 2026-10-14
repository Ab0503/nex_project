import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { useState } from 'react';
import axios from 'axios';
import { validateEmail } from '@/utils/common';

const NewsLetterV4 = (props) => {
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
      <div className={`bg-white py-16 sm:py-24 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className={`mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
              {get(props, 'title')}
            </h2>
            <p className={`mx-auto mt-6 max-w-lg text-center text-lg text-gray-300 ${get(tailwindClasses, 'description')}`}  style={get(style, 'description')}>
              {get(props, 'description')}
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                className={`min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm/6 ${get(tailwindClasses, 'input')}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={get(style, 'input')}
              />
              <button
                type="submit"
                className={`flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white  ${get(tailwindClasses, 'button')}`}
                style={get(style, 'button')}
                onClick={submit}
              >
                {get(props, 'buttonText')}
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
  )
}

NewsLetterV4.propTypes = {
    style: object,
    title: string,
    description: string,
    input: string,
    button: string,
    items: arrayOf(object)
}

NewsLetterV4.defaultProps = {
    style: {
        container: {},
        title: {},
        input: {},
        button: {},
        description: {},
        privacyPolicyText: {}
    },
    title: "Subscribe to our newsletter",
    description: "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
    buttonText: "Subscribe",
    apiEndPoint: "#",
    privacyPolicyLink: "#"

}

export default NewsLetterV4;