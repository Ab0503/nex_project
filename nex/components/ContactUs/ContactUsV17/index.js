import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get'
import { object, string } from 'prop-types';
import { useState, React } from 'react'
import axios from 'axios';
import NexAnimation from '@nex-components/NexAnimation';

const ContactUsV17 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
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
                if (get(response, 'data.responseCode', '') == 'success') {
                    alert("Email id save successfully")
                } else {
                    alert("Something went wrong");
                }
            });
    }

    return (
        <div className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className={`rounded-lg shadow-xl nx-bg-primary-light mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-32 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    <div className="p-14 max-sm:p-3">
                        <div className={`flex flex-wrap ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]">
                                <NexAnimation type={get(props, 'leftContentAnimation')}>
                                    {get(props, 'image', "").length !== 0 && <NexImage src={get(props, 'image')} className={`!relative svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  mb-4 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} alt="image" />}
                                    <h2 className={`nx-text-primary nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] leading-[1.3] mb-3 xl:pr-10 lg:pr-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>
                                    <p className={`lead text-[0.9rem] font-medium !leading-[1.65] xl:pr-14 lg:pr-14 !mb-0 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>
                                </NexAnimation>
                            </div>
                            <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px]">
                                <form className="contact-form needs-validation" action="#" method="POST" onSubmit={submitHandler}>
                                    <div className="messages"></div>
                                    <div className="flex flex-wrap mx-[-10px]">
                                        {get(props, 'input1Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                            <NexAnimation type={get(props, 'rightContentAnimation')}>
                                                <div className="form-floating relative !mb-4">
                                                    <input id="form_first_name" type="text" name="first_name" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.first_name} onChange={((e) => setPayload({ ...payload, first_name: e.target.value }))} />
                                                    <label for="form_name" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input1Placeholder')}</label>
                                                </div>
                                            </NexAnimation>
                                        </div>}
                                        {get(props, 'input2Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                            <NexAnimation type={get(props, 'rightContentAnimation')}>
                                                <div className="form-floating relative !mb-4">
                                                    <input id="form_last_name" type="text" name="last_name" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.last_name} onChange={((e) => setPayload({ ...payload, last_name: e.target.value }))} />
                                                    <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input2Placeholder')}</label>
                                                </div>
                                            </NexAnimation>
                                        </div>}
                                        {get(props, 'input3Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                            <NexAnimation type={get(props, 'rightContentAnimation')}>
                                                <div className="form-floating relative !mb-4">
                                                    <input id="phone-number" name="phone-number" type="tel" autoComplete="tel" minlength={10} maxlength={10} className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.mobile_number} onChange={((e) => setPayload({ ...payload, mobile_number: e.target.value }))} />
                                                    <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input3Placeholder')}</label>
                                                </div>
                                            </NexAnimation>
                                        </div>}
                                        {get(props, 'input4Placeholder', "").length !== 0 && <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full">
                                            <NexAnimation type={get(props, 'rightContentAnimation')}>
                                                <div className="form-floating relative !mb-4">
                                                    <input id="form_email" type="email" name="email" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'inputBox')}`} style={get(style, "inputBox")} placeholder="" required value={payload.email} onChange={((e) => setPayload({ ...payload, email: e.target.value }))} />
                                                    <label for="form_email" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'inputPlaceholder')}`} style={get(style, 'inputPlaceholder')}>{get(props, 'input4Placeholder')}</label>
                                                </div>
                                            </NexAnimation>
                                        </div>}
                                        {get(props, 'textAreaPlaceholder', "").length !== 0 && <div className="w-full flex-[0_0_auto] px-[15px] max-w-full">
                                            <NexAnimation type={get(props, 'rightContentAnimation')}>
                                                <div className="form-floating relative !mb-4">
                                                    <textarea id="form_message" name="message" className={`pt-5 form-control border-0 relative block w-full text-[.75rem] font-medium text-[#60697b] bg-[#fefefe] bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] rounded-[0.4rem] duration-[0.15s] ease-in-out focus:text-[#60697b] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] focus:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0 placeholder:text-[#959ca9] placeholder:opacity-100 m-0 !pr-9 p-[.6rem_1rem] h-[calc(2.5rem_+_2px)] min-h-[calc(2.5rem_+_2px)] leading-[1.25 ${get(tailwindClasses, 'textAreaBox')}`} placeholder="" style={{ height: "150px", ...get(style, 'textAreaBox') }} required value={payload.message} onChange={((e) => setPayload({ ...payload, message: e.target.value }))}></textarea>
                                                    <label for="form_message" className={`inline-block text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none border origin-[0_0] px-4 py-[0.6rem] border-solid border-transparent left-0 top-0 font-Manrope ${get(tailwindClasses, 'textAreaPlaceholder')}`} style={get(style, 'textAreaPlaceholder')}>{get(props, 'textAreaPlaceholder')}</label>
                                                </div>
                                            </NexAnimation>
                                        </div>}
                                        <div className="w-full flex-[0_0_auto] px-[10px] max-w-full">
                                            {get(props, 'ctaText').length !== 0 &&
                                                <NexAnimation type={get(props, 'rightContentAnimation')}>
                                                    <button type="submit" className={`px-5 py-2 nx-btn-primary nx-btn-primary:hover rounded-[50rem] !mb-3 text-sm hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(props, 'ctaText')}</button>
                                                </NexAnimation>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContactUsV17.propTypes = {
    style: object,
    tailwindClasses: object,
    image: string,
    title: string,
    description: string,
    input1Placeholder: string,
    input2Placeholder: string,
    textAreaPlaceholder: string,
    ctaLink: string,
    ctaText: string
}

ContactUsV17.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        sectionBox: {},
        image: {},
        title: {},
        description: {},
        inputBox: {},
        inputPlaceholder: {},
        textAreaBox: {},
        textAreaPlaceholder: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        sectionBox: "",
        image: "",
        title: "",
        description: "",
        inputBox: "",
        inputPlaceholder: "",
        textAreaBox: "",
        textAreaPlaceholder: "",
        cta: ""
    },
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735632563.email.svg",
    title: "If you like what you see, let's work together.",
    description: "I bring rapid solutions to make the life of my clients easier. Have any questions? Reach out to me from this contact form and I will get back to you shortly.",
    input1Placeholder: "First Name *",
    input2Placeholder: "Last Name *",
    input3Placeholder: "Phone Number *",
    input4Placeholder: "Email *",
    textAreaPlaceholder: "Message *",
    ctaLink: "#",
    ctaText: "Send message",
    apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz",
    leftContentAnimation: "",
    rightContentAnimation: ""
}
export default ContactUsV17
