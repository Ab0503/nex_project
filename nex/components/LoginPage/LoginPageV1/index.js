import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { string } from 'prop-types';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';

function LoginPageV1(props) {
  const {push} = useRouter();

  const [user, setuser] = useState({
    email: '',
    password: '',
  });

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setuser({ ...user, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const getById = (id) => {
    return  document.getElementById("email").value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {...user};
    const url = get(props, 'loginUrl', '');
    if(url == ''){
      alert("Login endpont is missing, please configure it and try again")
    }
    axios.post(url, data)
    // .then(res => res.json())
    .then((response) => {
      if(get(response, 'data.responseCode', '') == 'success'){
        // sessionStorage.setItem('user', JSON.stringify(get(response, 'data.data[0]', '')));
        sessionStorage.setItem('accessToken', JSON.stringify(get(response, 'data.data.accessToken', '')));
        sessionStorage.setItem('user', JSON.stringify(get(response, 'data.data.userDetails', '')));
        push(get(props, 'landingPageUrl', ''));
      } else {
        alert("Email id or password is incorrect");
      }
    });
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" style={{...get(props, 'style.container', {})}}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm p-5" style={{...get(props, 'style.box', {})}}>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <NexImage
                alt="Your Company"
                src={get(props, 'logoPath')}
                className="mx-auto !relative !h-10 !w-auto"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                {get(props, 'title')}
            </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900" style={{...get(props, 'style.label', {})}}>
                      Email address
                  </label>
                  <div className="mt-2">
                      <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      onChange={handleChange('email')}
                      value={user.email}
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      style={{...get(props, 'style.textbox', {})}}
                      />
                  </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900" style={{...get(props, 'style.label', {})}}>
                    Password
                    </label>
                    <div className="text-sm">
                    <a href={get(props, 'forgot_password_link')} className="font-semibold text-indigo-600 hover:text-indigo-500" style={{...get(props, 'style.link', {})}}>
                        {get(props, 'forgot_password_text')}
                    </a>
                    </div>
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    onChange={handleChange('password')}
                    value={user.password}
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    style={{...get(props, 'style.textbox', {})}}
                    />
                </div>
                </div>

                <div>
                <button
                    type="submit"
                    className="flex w-full justify-center text-white rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    style={{...get(props, 'style.button', {})}}
                >
                    Sign in
                </button>
                </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500" >
                Not a member?{' '}
                <a href={get(props, 'create_account_link')} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" style={{...get(props, 'style.link', {})}}>
                {get(props, 'create_account_text')}
                </a>
            </p>
            </div>

        </div>
        

        
      </div>
  );
}
LoginPageV1.propTypes = {
  logoPath: string,
  title: string,
  create_account_link: string,
  create_account_text: string,
  login_remember: string,
  forgot_password_text: string,
  forgot_password_link: string,
  login_btn_text: string,
  landingPageUrl: string,
}
LoginPageV1.defaultProps = {
  logoPath: "https://dev.nexnnova.com/nexcoder_app/assets/inline_logo.png",
  title: "Login",
  create_account_link: '/register',
  create_account_text: "Create Account",
  forgot_password_text: "Forgot Password",
  forgot_password_link: "/forgot-password",
  login_btn_text: "Login",
  loginUrl: "https://solutions.nexnnova.com/nexcoder/nexcoder_admin/public/api/login",
  landingPageUrl: "/editor/projects",
}
export default LoginPageV1;
