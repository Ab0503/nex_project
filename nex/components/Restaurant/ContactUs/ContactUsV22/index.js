import React, { useState } from 'react';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import { object, string } from 'prop-types';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ContactUsV22 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const [payload, setPayload] = useState({
        full_name: '',
        mobile_number: '',
        email: '',
        person: '',
        date: '',
        time: '',
        message: ''
    });
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(get(props, 'apiEndPoint'), payload)
            .then((response) => {
                if (get(response, 'data.responseCode', '') == 'success') {
                    toast.success("Table Book successfully", { position: "top-right" })
                    setPayload({
                        full_name: '',
                        mobile_number: '',
                        email: '',
                        person: '',
                        date: '',
                        time: '',
                        message: ''
                    })
                } else {
                    toast.error("Something went wrong", { position: "top-right" });
                }
            });
    }

    return (
        <section className={`px-5 lg:px-20 py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
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
            {get(props, 'logo', '').length !== 0 && <NexImage src={get(props, 'logo')} className={`!relative !h-12 !w-auto mx-auto mb-3 ${get(tailwindClasses, 'logo')}`} style={{ ...get(style, 'logo') }} />}
            {get(props, 'subTitle', '').length !== 0 && <h1 className={`uppercase text-center mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
            {get(props, 'title', '').length !== 0 && <h4 className={`nx-text-primary nx-section-heading-font font-bold text-4xl text-center mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
            {get(props, 'description', '').length !== 0 && <p className={`mx-auto max-w-lg text-center mb-3 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
            <div className="max-w-3xl mx-auto p-6">
                <form method='POST' onSubmit={submitHandler} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input type="text" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-900 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder='Full Name' value={payload.full_name} onChange={((e) => setPayload({ ...payload, full_name: e.target.value }))} required />
                        </div>
                        <div>
                            <input type="text" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-900 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder='Phone Number' value={payload.mobile_number}
                                onChange={((e) => setPayload({ ...payload, mobile_number: e.target.value }))} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input type="email" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-900 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder='Email Address' value={payload.email}
                                onChange={((e) => setPayload({ ...payload, email: e.target.value }))} required />
                        </div>
                        <div>
                            <input type="number" min={1} className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-900 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder='Person' value={payload.person} onChange={((e) => setPayload({ ...payload, person: e.target.value }))} required />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input type="date" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder='Date' value={payload.date} onChange={(e) => {
                                const selectedDate = new Date(e.target.value).toISOString().split("T")[0];
                                setPayload({ ...payload, date: selectedDate })
                            }}
                                required />
                        </div>
                        <div>
                            <input type="time" className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} placeholder='Time' value={payload.time} onChange={((e) => setPayload({ ...payload, time: e.target.value }))} required />
                        </div>
                    </div>
                    <div>
                        <textarea className={`w-full border-t-0 border-l-0 border-r-0 border-b-2 nx-border-primary focus:outline-none focus:ring-0 p-2 pb-4 text-gray-900 font-semibold placeholder:text-gray-900 placeholder:font-semibold ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} rows="3" placeholder='Message' value={payload.message} onChange={((e) => setPayload({ ...payload, message: e.target.value }))}></textarea>
                    </div>
                    {get(props, 'ctaText', '').length !== 0 && <div className="text-center">
                        <button type='submit' className={`nx-btn-primary nx-btn-primary:hover font-semibold px-6 py-2 rounded-md hover:translate-y-[-0.15rem] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                            {get(props, 'ctaText')}
                        </button>
                    </div>}
                </form>
            </div>

        </section>
    )
}

ContactUsV22.propTypes = {
    style: object,
    tailwindClasses: object,
    logo: string,
    subTitle: string,
    title: string,
    description: string,
    ctaText: string,
    apiEndPoint: string
}

ContactUsV22.defaultProps = {
    style: {
        container: {},
        logo: {},
        subTitle: {},
        title: {},
        description: {},
        inputBox: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        logo: "",
        subTitle: "",
        title: "",
        description: "",
        inputBox: "",
        cta: ""
    },
    logo: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
    subTitle: "our menu",
    title: "Make a Reservation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam tenetur iure nemo nulla magnam vero quidem, doloremque mollitia porro, harum minima ipsam incidunt numquam amet!",
    ctaText: "Submit",
    apiEndPoint: "https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz"
}
export default ContactUsV22
