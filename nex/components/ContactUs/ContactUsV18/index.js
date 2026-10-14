import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get'
import { useState,React } from 'react'
import { object, string } from 'prop-types'
import NexAnimation from '@nex-components/NexAnimation';
import axios from 'axios';

const ContactUsV18 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});

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
        <section className={`overflow-hidden py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap mx-[15px] xl:mx-32 lg:mx-[20px] mt-[-50px] items-center ${get(tailwindClasses, 'contentContainer')}`}>
                <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:px-[20px] md:px-[20px] px-[15px] max-w-full !relative hidden  xl:block lg:block mt-[50px]">
                    <NexAnimation type={get(props, 'imageAnimation', '')}>
                        <div className={`shape rounded-[50%] nx-bg-primary-light rellax !w-[12.5rem] !h-[12.5rem] absolute z-[1] ${get(tailwindClasses, 'shape')}`} data-rellax-speed="1" style={{ top: "8rem", left: "2rem", ...get(style, 'shape')}}></div>
                        {get(props, 'image', "").length !== 0 && <figure className="xxl:pl-10 relative z-[2]"><NexImage className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} src={get(props, 'image')} alt="image" /></figure>}
                    </NexAnimation>
                </div>
                <div className="lg:w-6/12 xl:w-5/12 w-full flex-[0_0_auto] xl:px-0 lg:px-[20px] md:px-[20px] px-[15px] max-w-full xl:!ml-[8.33333333%]">
                    <NexAnimation type={get(props, 'formAnimation', '')}>
                        {get(props, 'title', "").length !== 0 && <h2 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        {get(props, 'description', "").length !== 0 && <p className={`lead text-[0.9rem] text-gray-600 font-medium !leading-[1.65] !mb-8 xl:pr-10 ${get(tailwindClasses, 'description')}`} style={get(style, "description")}>{get(props, 'description')}</p>}
                        <form className="contact-form needs-validation" action="#" method="POST" onSubmit={submitHandler}>
                            {get(props, 'input1Placeholder', "").length !== 0 && <div className="form-floating relative !mb-4">
                                <input id="form_first_name" type="text" name="first_name" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.first_name} onChange={((e) => setPayload({ ...payload, first_name: e.target.value }))} />
                                <label for="form_name" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input1Placeholder')}</label>
                            </div>}
                            {get(props, 'input2Placeholder', "").length !== 0 && <div className="form-floating relative !mb-4">
                                <input id="form_first_name" type="text" name="last_name" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.last_name} onChange={((e) => setPayload({ ...payload, last_name: e.target.value }))} />
                                <label for="form_name" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input2Placeholder')}</label>
                            </div>}
                            {get(props, 'input3Placeholder', "").length !== 0 && <div className="form-floating relative !mb-4">
                                <input id="phone-number" name="phone-number" type="tel" autoComplete="tel" minlength={10} maxlength={10} className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.mobile_number} onChange={((e) => setPayload({ ...payload, mobile_number: e.target.value }))} />
                                <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input3Placeholder')}</label>
                            </div>}
                            {get(props, 'input4Placeholder', "").length !== 0 && <div className="form-floating relative !mb-4">
                                <input id="form_email" type="email" name="email" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.email} onChange={((e) => setPayload({ ...payload, email: e.target.value }))} />
                                <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input4Placeholder')}</label>
                            </div>}
                            {get(props, 'textAreaPlaceholder', "").length !== 0 && <div className="form-floating relative !mb-4">
                                <textarea id="form_message" name="message" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'textAreaBox')}`} placeholder="" style={{ height: "150px", ...get(style, 'textAreaBox') }} required value={payload.message} onChange={((e) => setPayload({ ...payload, message: e.target.value }))}></textarea>
                                <label for="form_message" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'textAreaPlaceholder')}`} style={get(style, 'textAreaPlaceholder')}>{get(props, 'textAreaPlaceholder')}</label>
                            </div>}
                            {get(props, 'ctaText', "").length !== 0 && 
                                <input type="submit" className={`nx-btn-primary nx-btn-primary:hover rounded-[50rem] btn-send !mb-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')} value={get(props, 'ctaText')} />}
                            {get(props, 'fieldRequiredText', "").length !== 0 && <p className={`text-[#aab0bc] ${get(tailwindClasses, "fieldRequiredText")}`} style={get(style, "fieldRequiredText")}><strong>*</strong> {get(props, 'fieldRequiredText')}</p>}
                        </form>
                    </NexAnimation>
                </div>
            </div>
        </section>
    )
}

ContactUsV18.propTypes = {
    style: object,
    tailwindClasses: object,
    image: string,
    title: string,
    description: string,
    input1Placeholder: string,
    input2Placeholder: string,
    textAreaPlaceholder: string,
    ctaLink: string,
    ctaText: string,
    fieldRequiredText: string
}
ContactUsV18.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        shape: {},
        image: {},
        title: {},
        description: {},
        inputBox: {},
        inputPlaceholder: {},
        textAreaBox: {},
        textAreaPlaceholder: {},
        cta: {},
        fieldRequiredText: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        shape: "",
        image: "",
        title: "",
        description: "",
        inputBox: "",
        inputPlaceholder: "",
        textAreaBox: "",
        textAreaPlaceholder: "",
        cta: "",
        fieldRequiredText: ""
    },
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735643445.woman.png",
    title: "Get in Touch",
    description: "Have any questions? Reach out to us from our contact form and we will get back to you shortly.",
    input1Placeholder: "First Name *",
    input2Placeholder: "Last Name *",
    input3Placeholder: "Phone Number *",
    input4Placeholder: "Email *",
    textAreaPlaceholder: "Message *",
    ctaLink: "#",
    ctaText: "Send message",
    apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz",
    fieldRequiredText: "These fields are required.",
    imageAnimation: "",
    formAnimation: ""
}
export default ContactUsV18
