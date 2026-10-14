import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { useState } from 'react';
import axios from 'axios';
import { validateEmail } from '@/utils/common';

const NewsLetterV3 = (props) => {
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
      <div className={`bg-white py-16 sm:py-24 lg:py-32 ${get(tailwindClasses, 'container')}`}  style={get(style, 'container')}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className={`max-w-2xl text-balance text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl  ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
          {get(props, 'title')}
          </h2>
          <form className="mt-10 max-w-md">
            <div className="flex gap-x-4">
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
                className={`min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 ${get(tailwindClasses, 'input')}`}
                style={get(style, 'input')}
              />
              <button
                type="submit"
                className={`flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${get(tailwindClasses, 'button')}`}
                style={get(style, 'button')}
                onClick={submit}
              >
                {get(props, 'buttonText')}
              </button>
            </div>
            <p className={`mt-4 text-sm/6 text-gray-900 ${get(tailwindClasses, 'privacyPolicyText')}`} style={get(style, 'privacyPolicyText')}>
              We care about your data. Read our{' '}
              <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                privacy&nbsp;policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
  )
}

NewsLetterV3.propTypes = {
    style: object,
    title: string,
    description: string,
    input: string,
    button: string,
    items: arrayOf(object)
}

NewsLetterV3.defaultProps = {
    style: {
        container: {},
        title: {},
        input: {},
        button: {},
        privacyPolicyText: {}
    },
    title: "Subscribe to our newsletter",
    description: "Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.",
    buttonText: "Subscribe",
    apiEndPoint: "#",
    privacyPolicyLink: "#"

}

export default NewsLetterV3;