import NexAnimation from '@nex-components/NexAnimation';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react';

const ContactUsV15 = (props) => {
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const style = get(props, 'style', {})
  return (
    <div className={`overflow-hidden py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="xl:mx-32 lg:mx-24 md:mx-20 max-sm:mx-5">
        <div className="flex flex-wrap">
          <div className="w-full flex-[0_0_auto] max-w-full mx-auto">
            <div className={`flex flex-wrap ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
              <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full">
                <NexAnimation type={get(props, 'formAnimation', '')}>
                <form className="contact-form needs-validation" method="post" action="../../assets/php/contact.php" novalidate>
                  <div className="messages"></div>
                  <div className="flex flex-wrap">
                    {get(props, 'input1Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input id="form_name1" type="text" name="name" className={`pt-4 form-control relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder="" required />
                        <label for="form_name1" className={`text-[#959ca9] mb-3 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input1Placeholder')}</label>
                      </div>
                    </div>}
                    {get(props, 'input2Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input id="form_lastname" type="text" name="surname" className={`pt-4 form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder="" required />
                        <label for="form_lastname" className={`text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input2Placeholder')}</label>
                      </div>
                    </div>}
                    {get(props, 'input3Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <input id="form_email1" type="email" name="email" className={`pt-4 form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder="" required />
                        <label for="form_email1" className={`text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input3Placeholder')}</label>
                      </div>
                    </div>}
                    {get(props, 'dropdownText', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-select-wrapper mb-4">
                        <select className={`form-select ${get(tailwindClasses, 'dropdownBox')}`} style={get(style, 'dropdownBox')} id="form-select" name="department" required>
                          <option selected disabled value="" className={`${get(tailwindClasses, 'dropdownText')}`} style={get(style, 'dropdownText')}>{get(props, 'dropdownText')}</option>
                          {get(props, 'dropdownMenu1', "").length !== 0 && <option value="Sales" className={`${get(tailwindClasses, 'dropdownText')}`} style={get(style, 'dropdownText')}>{get(props, 'dropdownMenu1')}</option>}
                          {get(props, 'dropdownMenu2', "").length !== 0 && <option value="Marketing" className={`${get(tailwindClasses, 'dropdownText')}`} style={get(style, 'dropdownText')}>{get(props, 'dropdownMenu2')}</option>}
                          {get(props, 'dropdownMenu3', "").length !== 0 && <option value="Customer Support" className={`${get(tailwindClasses, 'dropdownText')}`} style={get(style, 'dropdownText')}>{get(props, 'dropdownMenu3')}</option>}
                        </select>
                      </div>
                    </div>}
                    {get(props, 'textAreaPlaceholder', "").length !== 0 && <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      <div className="form-floating relative !mb-4">
                        <textarea id="form_message1" name="message" className={`pt-4 form-control  relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding border shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] border-solid border-[rgba(8,60,130,0.07)] transition-[border-color] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25] ${get(tailwindClasses, 'textAreaBox')}`} placeholder="" style={{ height: "150px", ...get(style, 'textAreaBox') }} required></textarea>
                        <label for="form_message1" className={`text-[#959ca9] mb-2 inline-block text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'textAreaPlaceholder')}`} style={get(style, 'textAreaPlaceholder')}>{get(props, 'textAreaPlaceholder')}</label>
                      </div>
                    </div>}
                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      {get(props, 'checkBoxText1', "").length !== 0 && <div className="form-check block min-h-[1.36rem] mb-4">
                        <input className={`form-check-input ${get(tailwindClasses, 'checkBox')}`} style={get(style, 'checkBox')} type="checkbox" value="" id="invalidCheck" required />
                        <label className={`form-check-label text-[#959ca9] ${get(tailwindClasses, 'checkBoxText')}`} style={get(style, 'checkBoxText')} for="invalidCheck">{get(props, 'checkBoxText1')}{get(props, 'checkBoxText2', "").length !== 0 && <a href="#" className="hover nx-text-primary">{get(props, 'checkBoxText2')}</a>}</label>
                      </div>}
                    </div>
                    <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                      {get(props, 'ctaText', "").length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover py-2 px-3 text-sm font-bold rounded-full mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><a href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</a></button>}
                      {get(props, 'fieldRequiredText', '').length !== 0 && <p className={`text-[#aab0bc] ${get(tailwindClasses, 'fieldRequiredText')}`} style={get(style, 'fieldRequiredText')}><strong>*</strong> {get(props, 'fieldRequiredText')}</p>}
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
                    {get(item, 'description1', '').length !== 0 && <p className={`not-italic leading-[inherit] mb-2 text-lg font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description1')}</p>}
                    {get(item, 'description2', '').length !== 0 && <p className={`not-italic leading-[inherit] mb-4 text-lg font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(item, 'description2')}</p>}
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

ContactUsV15.propTypes = {
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

ContactUsV15.defaultProps = {
  style: {
    container: {},
    contentContainer: {},
    inputBox: {},
    inputPlaceholder: {},
    dropdownBox: {},
    dropdownText: {},
    textAreaBox: {},
    textAreaPlaceholder: {},
    checkBox: {},
    checkBoxText: {},
    cta: {},
    fieldRequiredText: {},
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
    checkBox: "",
    checkBoxText: "",
    cta: "",
    fieldRequiredText: "",
    sectionBox: "",
    sectionIcon: "",
    sectionTitle: "",
    sectionDescription: ""
  },
  input1Placeholder: "First Name *",
  input2Placeholder: "Last Name *",
  input3Placeholder: "Email *",
  dropdownText: "Select a department",
  dropdownMenu1: "Sales",
  dropdownMenu2: "Marketing",
  dropdownMenu3: "Customer Support",
  textAreaPlaceholder: "Message *",
  checkBoxText1: " I agree to ",
  checkBoxText2: "terms and policy.",
  ctaLink: "#",
  ctaText: "Send message",
  fieldRequiredText: "These fields are required.",
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
export default ContactUsV15
