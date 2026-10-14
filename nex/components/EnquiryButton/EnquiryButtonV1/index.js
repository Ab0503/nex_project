"use client";

import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { array, arrayOf, object, string } from "prop-types";
import get from "lodash.get";
import parse from 'html-react-parser';

const EnquiryButtonV1 = (props) => {
  const [open, setOpen] = useState(false);
  const payload = {};
  const formFields = get(props, 'formFields', []);
  for(let i=0; i<formFields.length; i++){
    payload[get(formFields[i], 'name', '')] = "";
  }
  const [requestPayload, setRequestPayload] = useState(payload);
  const updateDataInPayload = (event, name) => {
    requestPayload[name] = event.target.value;
    setRequestPayload(requestPayload);
  }
  const submitHandler = () => {
    console.log(requestPayload);
    if(get(props, 'apiEndPoint', '') != ""){
        axios.post(get(props, 'apiEndPoint', ''), payload)
        .then((response) => {
            if(get(response, 'data.responseCode', '') == 'success'){
              alert(get(response, 'data.responseMessage', ''))
            } else {
              alert(get(response, 'data.responseMessage', ''));
            }
        }).catch(function (error) {
            alert("Something went wrong");
        });
    } else {
        alert("Apiendpoint is not set");
    }
  }
  return (
    <>
      <button
        type="button"
        className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        onClick={() => setOpen(true)}
      >
        Enquiry Now
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div>
                {get(props, 'icon', '') != '' && <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                  {parse(get(props, 'icon', ''))}
                </div>}
                
                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    {get(props, 'title', '')}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    {get(props, 'description', '')}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                    <div class="grid grid-cols-2 gap-4">
                        {
                            get(props, 'formFields', []).map((formField) => (
                                <div>
                                    <label
                                    for="email"
                                    class="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                    {get(formField, 'label', '')}
                                    </label>
                                    <div class="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        required=""
                                        placeholder={get(formField, 'label', '')}
                                        autocomplete="email"
                                        onChange={(e)=> updateDataInPayload(e, get(formField, 'name', ''))}
                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={submitHandler}
                  className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2"
                >
                  {get(props, 'btnText', '')}
                </button>
                
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

EnquiryButtonV1.propTypes = {
    icon: string,
    title: string,
    description: string,
    formFields: arrayOf(object),
    btnText: string,
};

EnquiryButtonV1.defaultProps = {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            `,
    title: "Enquiry Form",
    description: "Please provide following details, we will shortly connect with you.",
    btnText: "Submit",
    apiEndPoint: "",
    formFields: [
        {
            type: "text",
            label: "first name",
            name: "first_name",
            value: ""
        },
        {
            type: "text",
            label: "last name",
            name: "last_name",
            value: ""
        },
        {
            type: "dropdown",
            label: "Service",
            name: "service",
            value: "Service 1,Service 2"
        },
        {
            type: "text",
            label: "message",
            name: "message",
            value: ""
        }
    ]
};

export default EnquiryButtonV1;
