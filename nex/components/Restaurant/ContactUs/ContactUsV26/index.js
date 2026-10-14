import NexAnimation from '@nex-components/NexAnimation';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React,{useState} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

const ContactUsV26 = (props) => {
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const style = get(props, 'style', {})

  const [payload, setPayload] = useState({
          first_name: '',
          last_name: '',
          email: '',
          mobile_number: '',
          message: ''
      });
      const submitHandler = (e) => {
          e.preventDefault();
          axios.post(get(props, 'apiEndPoint'), payload)
              .then((response) => {
                  if (get(response, 'data.responseCode', '') == 'success') {
                      toast.success("Message sent successfully", { position: "top-right" })
                      setPayload({
                        first_name: '',
                        last_name: '',
                        email: '',
                        mobile_number: '',
                        message: ''
                    })
                  } else {
                      toast.error("Something went wrong", { position: "top-right" });
                  }
              });
      }

  return (
    <div className={`overflow-hidden py-20 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
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
      <div className="xl:mx-32 lg:mx-24 md:mx-20 max-sm:mx-5">
        <div className="flex flex-wrap">
          <div className="w-full flex-[0_0_auto] max-w-full mx-auto">
            <div className={`flex flex-wrap ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full">
                <NexAnimation type={get(props, 'formAnimation', '')}>
                <form method="POST" onSubmit={submitHandler}>
                  <div className="flex flex-wrap">
                    {get(props, 'input1Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input id="form_name1" type="text" name="name" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-400 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder={get(props, 'input1Placeholder')} value={payload.first_name} onChange={((e) => setPayload({ ...payload, first_name: e.target.value }))} required />
                      </div>
                    </div>}
                    {get(props, 'input2Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input id="form_lastname" type="text" name="surname" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-400 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder={get(props, 'input2Placeholder')} value={payload.last_name} onChange={((e) => setPayload({ ...payload, last_name: e.target.value }))} required />
                      </div>
                    </div>}
                    {get(props, 'input3Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input id="form_email1" type="email" name="email" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-400 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder={get(props, 'input3Placeholder')} value={payload.email} onChange={((e) => setPayload({ ...payload, email: e.target.value }))} required />
                      </div>
                    </div>}
                    {get(props, 'input4Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input id="form_email1" type="text" name="email" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-400 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder={get(props, 'input4Placeholder')} value={payload.mobile_number} onChange={((e) => setPayload({ ...payload, mobile_number: e.target.value }))} required />
                      </div>
                    </div>}
                    {get(props, 'textAreaPlaceholder', "").length !== 0 && <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <textarea id="form_message1" name="message" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-400 placeholder:font-semibold    ${get(tailwindClasses, 'textAreaBox')}`} placeholder={get(props, 'textAreaPlaceholder')} style={{ height: "150px", ...get(style, 'textAreaBox') }} value={payload.message} onChange={((e) => setPayload({ ...payload, message: e.target.value }))} required></textarea>
                      </div>
                    </div>}
                    <div className="w-full flex justify-end px-[15px]">
                      {get(props, 'ctaText', "").length !== 0 && <button type='submit' className={`nx-btn-primary nx-btn-primary:hover py-3 px-6 text-sm font-bold rounded mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(props, 'ctaText')}</button>}
                    </div>
                  </div>
                </form>
                </NexAnimation>
              </div>
              <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full">
                <NexAnimation type={get(props, 'contentAnimation', '')}>
                {get(props, 'items', []).map((item) => <div className={`flex flex-row ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                  <div>
                    {get(item, 'icon', '').length !== 0 && <div className={`nx-text-primary xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] mr-6 mt-1 ${get(tailwindClasses, 'sectionIcon')}`} style={get(style, 'sectionIcon')}>{parse(get(item, 'icon'))}
                    </div>}
                  </div>
                  <div>
                    {get(item, 'title', '').length !== 0 && <h5 className={`nx-text-primary mb-1 text-xl font-medium nx-section-heading-font ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h5>}
                    {get(item, 'description1', '').length !== 0 && <p className={`not-italic leading-[inherit] mb-2 font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description1')}</p>}
                    {get(item, 'description2', '').length !== 0 && <p className={`not-italic leading-[inherit] mb-4 font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description2')}</p>}
                  </div>
                </div>)}
                </NexAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactUsV26.propTypes = {
  style: object,
  tailwindClasses: object,
  input1Placeholder: string,
  input2Placeholder:string,
  input3Placeholder: string,
  dropdownText: string,
  dropdownMenu1: string,
  dropdownMenu2: string,
  dropdownMenu3: string,
  textAreaPlaceholder: string,
  checkBoxText1: string,
  checkBoxText2: string,
  ctaLink: string,
  ctaText: string,
  fieldRequiredText: string,
  items: arrayOf(object)
}

ContactUsV26.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    inputBox: {},
    inputPlaceholder: {},
    dropdownBox: {},
    dropdownText: {},
    textAreaBox: {},
    textAreaPlaceholder: {},
    cta: {},
    sectionBox: {},
    sectionIcon: {},
    sectionTitle: {},
    sectionDescription: {}
  },
  tailwindClasses: {
    container: "",
    contentContainer: "",
    inputBox: "",
    inputPlaceholder: "",
    dropdownBox: "",
    dropdownText: "",
    textAreaBox: "",
    textAreaPlaceholder: "",
    cta: "",
    sectionBox: "",
    sectionIcon: "",
    sectionTitle: "",
    sectionDescription: ""
  },
  input1Placeholder: "First Name *",
  input2Placeholder: "Last Name *",
  input3Placeholder: "Email *",
  input4Placeholder: "Mobile Number *",
  textAreaPlaceholder: "Message *",
  ctaText: "Submit",
  apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz",
  items: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>`,
      title: "Address",
      description1: "Moonshine St. 14/05 Light City, London, United Kingdom",
      description2: ""
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>`,
      title: "Phone",
      description1: "00 (123) 456 78 90",
      description2: "00 (123) 456 78 90"
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>`,
      title: "E-mail",
      description1: "sandbox@email.com",
      description2: "sandbox@email.com",
    },
  ],
  contentAnimation: "",
  formAnimation: "",
}
export default ContactUsV26
