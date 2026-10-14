import React from 'react'
import { string } from 'prop-types';
import parse from 'html-react-parser';
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { withRouter } from "next/router";
import HttpService from "@/utils/HttpService";
import { useState } from 'react';

const SignUpV2 = (props) => {
  const http = new HttpService();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  const [payload, setPayload] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e, name) => {
    payload[name] = e.target.value;
    setPayload({ ...payload });
    // setPayload(payload);
  };
  const onSubmit = (data) => {
    console.log(data);
    http.post(get(props, 'apiEndpoint'), data, {})
      .then(response => {
        console.log(response)
        if (response.status == 200) {
          if (response.data.responseCode == "success") {
            toast.success(response.data.responseMessage, { position: 'top-right', });
            sessionStorage.setItem("customer_id", get(response, 'data.data.customer_id'));
            props.router.push(get(props, "successPageUrl"));
          } else {
            toast.error(response.data.responseMessage, { position: 'top-right', });
          }
        } else {
          toast.error('Something went wrong', { position: 'top-right', });
        }
      });
    console.log("sdfs")
  };
  return (
    <div>
      <div className={`flex flex-col items-center justify-center py-16 p-4 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <Toaster />
        {/* Breadcrumbs */}
        <nav className="inline-flex text-sm text-gray-600 mb-4">
          {get(props, 'breadcrum1','').length !==0 &&<PrimaryLink className={`inline-flex gap-2 mx-2 ${get(tailwindClasses, 'breadcrum1')}`} style={get(style, 'breadcrum1')}>{parse(get(props, 'icon'))} {get(props, 'breadcrum1')} &gt;</PrimaryLink>}
          {get(props, 'breadcrum2','').length !==0 &&<PrimaryLink className={`text-gray-800 ${get(tailwindClasses, 'breadcrum2')}`} style={get(style, 'breadcrum2')}>{get(props, 'breadcrum2')}</PrimaryLink>}
        </nav>
        <div className="w-full max-w-md bg-gray-50 p-6 rounded-2xl shadow-lg">
          <h2 className={`text-2xl font-semibold text-center text-gray-800 mb-6 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder={get(props, 'InputText1')}
              {...register("first_name", { required: true })}
              onChange={(e) => handleInputChange(e, "first_name")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.first_name && <p className="text-red-500 text-sm">First name is required</p>}
            <input
              type="text"
              placeholder={get(props, 'InputText2')}
              {...register("last_name", { required: true })}
              onChange={(e) => handleInputChange(e, "last_name")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.last_name && <p className="text-red-500 text-sm">Last name is required</p>}
            <input
              type="email"
              placeholder={get(props, 'InputText3')}
              {...register("email", { required: true })}
              onChange={(e) => handleInputChange(e, "email")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
            <input
              type="password"
              placeholder={get(props, 'InputText4')}
              {...register("password", { required: true })}
              onChange={(e) => handleInputChange(e, "password")}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.password && <p className="text-red-500 text-sm">Password is required</p>}

            <p className={`text-xs text-gray-500 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>
              {get(props, 'text')}
            </p>

            <button className={`w-full p-3 nx-btn-primary nx-btn-primary:hover rounded-lg font-semibold hover:-translate-y-[0.15rem] hover:shadow-lg ${get(tailwindClasses, 'btn1')}`} style={get(style, 'btn1')}>
              {get(props, 'btn1')}
            </button>
            <button className={`w-full p-3 text-center text-black bg-gray-50 border rounded-lg font-semibold nx-btn-primary:hover ${get(tailwindClasses, 'btn2')}`} style={get(style, 'btn2')}><PrimaryLink href={get(props, 'btn2Link')}>
              {get(props, 'btn2')}</PrimaryLink>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
SignUpV2.propTypes = {
  title: string,
}
SignUpV2.defaultProps = {
  style: {
    container: {},
    icon: {},
    breadcrum1: {},
    breadcrumLink1: {},
    breadcrum2: {},
    breadcrumLink2: {},
    title: {},
    InputText1: {},
    InputText2: {},
    InputText3: {},
    InputText4: {},
    text: {},
    btn1: {},
    btn2: {}
  },
  tailwindClasses: {
    container: "",
    icon: "",
    breadcrum1: "",
    breadcrumLink1: "",
    breadcrum2: "",
    breadcrumLink2: "",
    title: "",
    InputText1: "",
    InputText2: "",
    InputText3: "",
    InputText4: "",
    text: "",
    btn1: "",
    btn2: ""
  },
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>`,
  breadcrum1: "HOME",
  breadcrumLink1: "#",
  breadcrum2: "CREATE ACCOUNT",
  breadcrumLink2: "#",
  title: "Register",
  InputText1: "First Name",
  InputText2: "Last Name",
  InputText3: "Email",
  InputText4: "Password",
  text: "Sign up for early Sale access plus tailored new arrivals, trends and promotions. To opt out, click unsubscribe in our emails.",
  btn1: "Register",
  btn2: "Log In",
  btn2Link: "#",
  apiEndpoint:
    "http://localhost/nexnnova/ecommerce_app/admin/public/api/customer/login",
  successPageUrl: "/development"
}
export default withRouter(SignUpV2);