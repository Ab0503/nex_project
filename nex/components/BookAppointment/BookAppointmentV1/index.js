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
import parse from "html-react-parser";
import Datepicker from "react-tailwindcss-datepicker";

const BookAppointmentV1 = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null
  });

  const payload = {};
  const formFields = get(props, "formFields", []);
  for (let i = 0; i < formFields.length; i++) {
    payload[get(formFields[i], "name", "")] = "";
  }
  const [requestPayload, setRequestPayload] = useState(payload);
  const updateDataInPayload = (event, name) => {
    requestPayload[name] = event.target.value;
    setRequestPayload(requestPayload);
  };
  const submitHandler = () => {
    console.log(requestPayload);
    if (get(props, "apiEndPoint", "") != "") {
      axios
        .post(get(props, "apiEndPoint", ""), payload)
        .then((response) => {
          if (get(response, "data.responseCode", "") == "success") {
            alert(get(response, "data.responseMessage", ""));
          } else {
            alert(get(response, "data.responseMessage", ""));
          }
        })
        .catch(function (error) {
          alert("Something went wrong");
        });
    } else {
      alert("Apiendpoint is not set");
    }
  };

  const getInputField = (formField) => {
    return (
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          {get(formField, "label", "")}
        </label>
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="text"
            required=""
            placeholder={get(formField, "label", "")}
            autocomplete="email"
            onChange={(e) => updateDataInPayload(e, get(formField, "name", ""))}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    );
  };
  const getTextareaField = (formField) => {
    return (
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          {get(formField, "label", "")}
        </label>
        <div class="mt-2">
          <textarea
            id="email"
            name="email"
            type="text"
            required=""
            placeholder={get(formField, "label", "")}
            autocomplete="email"
            onChange={(e) => updateDataInPayload(e, get(formField, "name", ""))}
            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    );
  };
  const getDropdownField = (formField) => {
    const options = get(formField, 'value', '').split(",");
    return (
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          {get(formField, "label", "")}
        </label>
        <div class="mt-2">
          <select
          id="email"
          name="email"
          type="text"
          required=""
          placeholder={get(formField, "label", "")}
          autocomplete="email"
          onChange={(e) => updateDataInPayload(e, get(formField, "name", ""))}
          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option>Please select</option>
            {
              options.map((option) => (
                <option>{option}</option>
              ))
            }
          </select>
        </div>
      </div>
    );
  };
  const getDateField = (formField) => {
    const options = get(formField, 'value', '').split(",");
    return (
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          {get(formField, "label", "")}
        </label>
        <div class="mt-2">
        <Datepicker value={value} asSingle={true} useRange={false} onChange={newValue => setValue(newValue)} />
        </div>
      </div>
    );
  };
  return (
    <>
      <button
        type="button"
        className={`flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 text-white px-8 py-3 text-base font-medium  focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(props, 'className1')}`} style={{...get(props, 'style1', '')}}
        onClick={() => setOpen(true)}
      >
        {get(props, "text")}
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
                {get(props, "icon", "") != "" && (
                  <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-100">
                    {parse(get(props, "icon", ""))}
                  </div>
                )}

                <div className="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    className="text-base font-semibold text-gray-900"
                  >
                    {get(props, "title", "")}
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {get(props, "description", "")}
                    </p>
                  </div>
                </div>
                <div className="mt-5">
                  <div class="grid grid-cols-2 gap-4">
                    {get(props, "formFields", []).map((formField) => {
                      if (get(formField, "type", "") == "text") {
                        return getInputField(formField);
                      } else if (get(formField, "type", "") == "textarea") {
                        return getTextareaField(formField);
                      } else if (get(formField, "type", "") == "date") {
                        return getDateField(formField);
                      } else if (get(formField, "type", "") == "dropdown") {
                        return getDropdownField(formField);
                      }
                    })}
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
                  className={`inline-flex w-full justify-center rounded-md text-white bg-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(props, 'className1')}`} style={{...get(props, 'style1', {})}}
                >
                  {get(props, "btnText", "")}
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

BookAppointmentV1.propTypes = {
  icon: string,
  title: string,
  description: string,
  formFields: arrayOf(object),
  btnText: string,
};

BookAppointmentV1.defaultProps = {
  text: "Book Appointment",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
      </svg>`,
  title: "Book Appointment",
  description:
    "Please provide following details to book an appointment with us",
  btnText: "Submit",
  apiEndPoint: "",
  formFields: [
    {
      type: "text",
      label: "First Name",
      name: "first_name",
      value: "",
    },
    {
      type: "text",
      label: "Last Name",
      name: "last_name",
      value: "",
    },
    {
      type: "dropdown",
      label: "Service",
      name: "service",
      value: "Service 1,Service 2",
    },
    {
      type: "date",
      label: "Appointment Date",
      name: "appointment_date",
      value: "",
    },
    {
      type: "textarea",
      label: "message",
      name: "message",
      value: "",
    },
  ],
};

export default BookAppointmentV1;
