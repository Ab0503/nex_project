import PrimaryLink from "@nex-core-ui/PrimaryLink";
import React, { useState } from "react";
import { string } from "prop-types";
import parse from "html-react-parser";
import get from "lodash.get";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { withRouter } from "next/router";
import HttpService from "@/utils/HttpService";

const LoginPageV3 = (props) => {
  const http = new HttpService();
  const { register, formState: { errors }, handleSubmit } = useForm();

  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  const [isOpen, setOpen] = useState(true);

  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e, name) => {
    payload[name] = e.target.value;
    setPayload({...payload});
    // setPayload(payload);
  };
  const onSubmit = (data) => {
		console.log(data);
    http.post(get(props, 'apiEndpoint'), data, {})
      .then(response => {
        console.log(response)
        if(response.status == 200){
          if(response.data.responseCode == "success"){
            toast.success(response.data.responseMessage, {position: 'top-right',});
            sessionStorage.setItem("customer_id", get(response, 'data.data.customer_id'));
            props.router.push(get(props, "successPageUrl"));
          } else {
            toast.error(response.data.responseMessage, {position: 'top-right',});
          }
        } else {
          toast.error('Something went wrong', {position: 'top-right',});
        }
      })
      .catch(error => {
        console.error("API Error:", error);
        toast.error('Network error. Please try again later.', { position: 'top-right' });
      });
      console.log("sdfs")
	};
  return (
    <div
      className={`flex flex-col items-center justify-center py-12 bg-gray-100 p-4 ${get(
        tailwindClasses,
        "container"
      )}`}
      style={get(style, "container")}
    >
      <Toaster toastOptions={{
        // success: {
        //   style: {
        //     background: 'green',
        //   },
        // },
        // error: {
        //   style: {
        //     background: 'red',
        //   },
        // },
      }} 
      containerStyle={{
        top: 20,
        
        right: 20,
      }}
      />
      <div className="max-w-md mb-4 text-gray-600 text-sm inline-flex gap-2 mx-auto">
        <PrimaryLink
          href={get(props, "breadcrumLink1")}
          className={`text-gray-500 inline-flex gap-2 ${get(
            tailwindClasses,
            "breadcrum1"
          )}`}
          style={get(style, "breadcrum1")}
        >
          {parse(get(props, "icon"))} {get(props, "breadcrum1")} &gt;{" "}
        </PrimaryLink>
        <PrimaryLink
          href={get(props, "breadcrumLink2")}
          className={`font-semibold ${get(tailwindClasses, "breadcrum2")}`}
          style={get(style, "breadcrum2")}
        >
          {get(props, "breadcrum2")}
        </PrimaryLink>
      </div>
      <div className="bg-gray-200 p-8 rounded-lg shadow-md w-96 max-sm:w-80">
        <h2
          className={`text-2xl font-semibold text-gray-800 mb-6 ${get(
            tailwindClasses,
            "title"
          )}`}
          style={get(style, "title")}
        >
          {get(props, "title")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className={`block text-gray-700 text-sm mb-2 ${get(
                tailwindClasses,
                "label1"
              )}`}
              style={get(style, "label1")}
              htmlFor={get(style, "label1")}
            >
              {get(props, "label1")}
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Email"
              id="email"
              name="email"
              defaultValue={payload.email}
              onChange={(e) => handleInputChange(e, "email")}
              {...register('email', { required: true })}
            />
            {errors.email && <p className="text-red-500 text-xs italic">Email id is required</p>}
          </div>
          <div className="mb-4">
            <label
              className={`block text-gray-700 text-sm mb-2 ${get(
                tailwindClasses,
                "label2"
              )}`}
              style={get(style, "label2")}
              htmlFor={get(style, "label2")}
            >
              {get(props, "label2")}
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Password"
              id="password"
              name="password"
              defaultValue={payload.password}
              onChange={(e) => handleInputChange(e, "password")}
              {...register('password', { required: true })}
            />
            {errors.password && <p className="text-red-500 text-xs italic">Password is required</p>}
          </div>
          <div className="text-left mb-4">
            <PrimaryLink
              href={get(props, "forgotLink")}
              className={`text-gray-700 text-sm hover:underline ${get(
                tailwindClasses,
                "forgotText"
              )}`}
              style={get(style, "forgotText")}
            >
              {get(props, "forgotText")}
            </PrimaryLink>
          </div>
          <div className="space-x-6">
            <button
              type="submit"
              className={`w-24 bg-gray-800 text-gray-50 py-2 rounded-lg hover:bg-gray-900 transition ${get(
                tailwindClasses,
                "ctabtn"
              )}`}
              style={get(style, "ctabtn")}
            >
              {get(props, "ctabtn")}
            </button>
            <button type="button"
              className={`w-24 bg-gray-800 text-gray-50 py-2 rounded-lg hover:bg-gray-900 transition ${get(
                tailwindClasses,
                "ctabtn1"
              )}`}
              style={get(style, "ctabtn1")}
            >
              {" "}
              <PrimaryLink href={get(props, "ctabtn1Link")}>
                {get(props, "ctabtn1")}
              </PrimaryLink>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
LoginPageV3.propTypes = {
  title: string,
};
LoginPageV3.defaultProps = {
  style: {
    container: {},
    icon: {},
    breadcrum1: {},
    breadcrumLink1: {},
    breadcrum2: {},
    breadcrumLink2: {},
    title: {},
    label1: {},
    label2: {},
    ForgotText: {},
    ctabtn: {},
    ctabtn1: {},
  },
  tailwindClasses: {
    container: "",
    icon: "",
    breadcrum1: "",
    breadcrumLink1: "",
    breadcrum2: "",
    breadcrumLink2: "",
    title: "",
    label1: "",
    label2: "",
    ForgotText: "",
    ctabtn: "",
    ctabtn1: "",
  },
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>`,
  breadcrum1: "HOME",
  breadcrumLink1: "#",
  breadcrum2: "LOGIN",
  breadcrumLink2: "#",
  title: "Sign in",
  label1: "Email Address:",
  label2: "Password:",
  forgotText: "Forgot your password?",
  forgotTextLink: "#",
  ctabtn: "Sign in",
  ctabtn1: "Register",
  ctabtn1Link: "#",
  apiEndpoint:
    "http://localhost/nexnnova/ecommerce_app/admin/public/api/customer/login",
    successPageUrl: "/development"
};
export default withRouter(LoginPageV3);
