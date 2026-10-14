import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import get from "lodash.get";
import { object, string } from "prop-types";
import React, { useState } from "react";

const ContactUsV24 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const [payload, setPayload] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        email: '',
        message: ''
    });
    const submitHandler = (e) => {
        e.preventDefault();
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
        <section className={`px-5 py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="flex flex-wrap w-full max-w-5xl mx-auto bg-white shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-8">
                    {get(props, 'subTitle', '').length !== 0 && <h2 className={`text-lg font-semibold nx-text-primary italic text-center mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                    {get(props, 'title', '').length !== 0 && <h1 className={`text-4xl font-bold text-center nx-section-heading-font mb-8 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                    <form method="POST" onSubmit={submitHandler} className="mt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className={`w-full p-3 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} value={payload.first_name} onChange={((e) => setPayload({ ...payload, first_name: e.target.value }))} required />
                            <input type="email" placeholder="Last Name" className={`w-full p-3 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} value={payload.last_name} onChange={((e) => setPayload({ ...payload, last_name: e.target.value }))} required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Phone Number" className={`w-full p-3 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} value={payload.mobile_number} onChange={((e) => setPayload({ ...payload, mobile_number: e.target.value }))} required />
                            <input type="email" placeholder="Your Email Id" className={`w-full p-3 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} value={payload.email} onChange={((e) => setPayload({ ...payload, email: e.target.value }))} required />
                        </div>
                        <textarea placeholder="Your Message..." className={`w-full p-3 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 h-24 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} value={payload.message} onChange={((e) => setPayload({ ...payload, message: e.target.value }))} required />
                        {get(props, 'ctaText', '').length !== 0 && <button type="submit" className={` px-5 py-2 nx-btn-primary nx-btn-primary:hover font-bold rounded hover:-translate-y-[.15rem] hover:shadow-xl ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(props, 'ctaText')}</button>}
                    </form>
                </div>
                <div className="md:flex w-full md:w-1/2 relative before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-rose-800/70 p-8 flex-col justify-center" style={{ background: `url(${get(props, 'image')})` }}>
                    <div className="relative z-10 text-white">
                        {get(props, 'rightTitle', '').length !== 0 && <h2 className={`text-3xl font-semibold mb-4 ${get(tailwindClasses, 'rightTitle')}`} style={get(style, 'rightTitle')}>{get(props, 'rightTitle')}</h2>}
                        {get(props, 'rightDescription', '').length !== 0 && <p className={`text-sm mb-6 ${get(tailwindClasses, 'rightDescription')}`} style={get(style, 'rightDescription')}>{get(props, 'rightDescription')}</p>}
                        <div className="flex gap-2 items-center mb-4">
                            <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}><MapPinIcon className="h-6 w-6" /></span>
                            <div>
                                {get(props, 'label1', '').length !== 0 && <span className={`font-bold mb-2 uppercase ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(props, 'label1')}</span>}
                                {get(props, 'value1', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}>{get(props, 'value1')}</p>}
                            </div>
                        </div>
                        <div className="flex gap-2 items-center mb-4">
                            <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}><EnvelopeIcon className="h-6 w-6" /></span>
                            <div>
                                {get(props, 'label2', '').length !== 0 && <span className={`font-bold mb-2 uppercase ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(props, 'label2')}</span>}
                                {get(props, 'value2', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}>{get(props, 'value2')}</p>}
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}><PhoneIcon className="h-6 w-6" /></span>
                            <div>
                                {get(props, 'label3', '').length !== 0 && <span className={`font-bold mb-2 uppercase ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(props, 'label3')}</span>}
                                {get(props, 'value3', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}>{get(props, 'value3')}</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

ContactUsV24.propTypes={
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    image: string,
    ctaText: string,
    rightTitle: string,
    rightDescription: string,
    label1: string,
    value1: string,
    label2: string,
    value2: string,
    label3: string,
    value3: string,
    apiEndpoint: string
}

ContactUsV24.defaultProps = {
    style: {
        container:{},
        subTitle:{},
        title:{},
        inputBox:{},
        cta:{},
        rightTitle:{},
        rightDescription:{},
        icon:{},
        label:{},
        value:{}
    },
    tailwindClasses: {
        container:"",
        subTitle:"",
        title:"",
        inputBox:"",
        cta:"",
        rightTitle:"",
        rightDescription:"",
        icon:"",
        label:"",
        value:""
    },
    subTitle: "Contact Us",
    title: "Get In Touch",
    image: "https://images.pexels.com/photos/7615453/pexels-photo-7615453.jpeg?auto=compress&cs=tinysrgb&w=600",
    ctaText: "Submit",
    rightTitle: "Quick Contact",
    rightDescription: "If you have any questions, simply use the following contact details.",
    label1: "Address:",
    value1: "123 West Street, Melbourne Victoria 3000 Australia",
    label2: "EMAIL:",
    value2: "info@example.com",
    label3: "PHONE:",
    value3: "+61 3 8376 6284",
    apiEndpoint:"https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz"
}
export default ContactUsV24;
