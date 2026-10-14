import get from 'lodash.get'
import { object, string } from 'prop-types';
import { useState,React } from 'react'
import axios from 'axios';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const ContactUsV19 = (props) => {
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
    event.preventDefault();
    axios.post(get(props, 'apiEndPoint'), payload)
      .then((response) => {
          if(get(response, 'data.responseCode', '') == 'success'){
            alert("Email id save successfully")
          } else {
            alert("Something went wrong");
          }
      });
  }
  return (

    <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="wrapper image-wrapper bg-image bg-overlay bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.5)]" style={{ backgroundImage: `url(${get(props, 'bgImage')})` }}>
        <div className="!relative z-[2] py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
          <div className="flex flex-wrap mx-[15px]">
            <div className="xl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
              <div className={`shadow-xl rounded-lg border-0 nx-bg-primary-light opacity-900 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                <div className="xl:py-16 xl:px-24 lg:py-16 lg:px-24 p-[40px]">
                  {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] leading-[1.3] mb-3 !text-center ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                  {get(props, 'description', "").length !== 0 && <p className={`text-[1rem] text-center mb-10 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                  <form className="contact-form needs-validation" action="#" method="POST" onSubmit={submitHandler}>
                    <div className="messages"></div>
                    <div className="flex flex-wrap mx-[-10px]">
                      {get(props, 'input1Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input id="form_first_name" type="text" name="first_name" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.first_name} onChange={((e) => setPayload({...payload, first_name: e.target.value}))}/>
                          <label for="form_name" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input1Placeholder')}</label>
                        </div>
                      </div>}
                      {get(props, 'input2Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input id="form_last_name" type="text" name="last_name" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.last_name} onChange={((e) => setPayload({...payload, last_name: e.target.value}))}/>
                          <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input2Placeholder')}</label>
                        </div>
                      </div>}
                      {get(props, 'input3Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input id="phone-number" name="phone-number" type="tel" autoComplete="tel" minlength={10} maxlength={10} className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.mobile_number} onChange={((e) => setPayload({...payload, mobile_number: e.target.value}))}/>
                          <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input3Placeholder')}</label>
                        </div>
                      </div>}
                      {get(props, 'input4Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <input id="form_email" type="email" name="email" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.email} onChange={((e) => setPayload({...payload, email: e.target.value}))}/>
                          <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input4Placeholder')}</label>
                        </div>
                      </div>}
                      {get(props, 'textAreaPlaceholder', "").length !== 0 && <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                        <div className="form-floating relative !mb-4">
                          <textarea id="form_message" name="message" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'textAreaBox')}`} placeholder="" style={{ height: "150px", ...get(style, 'textAreaBox') }} required value={payload.message} onChange={((e) => setPayload({...payload, message: e.target.value}))}></textarea>
                          <label for="form_message" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'textAreaPlaceholder')}`} style={get(style, 'textAreaPlaceholder')}>{get(props, 'textAreaPlaceholder')}</label>
                        </div>
                      </div>}
                      <div className="w-full flex-[0_0_auto] px-[15px] max-w-full !text-center">
                        {get(props, 'ctaText', "").length !== 0 && 
                          <button type="submit" className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                            <PrimaryLink href={get(props, 'ctaLink')}></PrimaryLink>{get(props, 'ctaText')}</button>}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

ContactUsV19.propTypes={
    style: object,
    tailwindClasses: object,
    bgImage: string,
    title: string,
    description: string,
    input1Placeholder: string,
    input2Placeholder: string,
    textAreaPlaceholder: string,
    ctaLink: string,
    ctaText: string
}

ContactUsV19.defaultProps = {
  style: {
    container:{},
    sectionBox:{},
    title:{},
    description:{},
    inputBox:{},
    inputPlaceholder:{},
    textAreaBox:{},
    textAreaPlaceholder:{},
    cta:{}
  },
  tailwindClasses: {
    container:"",
    sectionBox:"",
    title:"",
    description:"",
    inputBox:"",
    inputPlaceholder:"",
    textAreaBox:"",
    textAreaPlaceholder:"",
    cta:""
  },
  bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735708241.bg36.jpg",
  title: "Request Photography Pricing",
  description: "For more information please get in touch using the form below:",
  input1Placeholder: "First Name *",
  input2Placeholder: "Last Name *",
  input3Placeholder: "Phone Number *",
  input4Placeholder: "Email *",
  textAreaPlaceholder: "Message *",
  ctaLink: "#",
  ctaText: "Send message",
  apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz"
}
export default ContactUsV19
