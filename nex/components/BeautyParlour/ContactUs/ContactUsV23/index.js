import React from 'react';
import get from 'lodash.get';
import { useState } from 'react';
import { object, string } from 'prop-types';

const ContactUsV23 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const [payload, setPayload] = useState({
            first_name: '',
            last_name: '',
            mobile_number: '',
            email: '',
            date: '',
            time: '',
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
        <section className={`py-20 ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(props, 'bgImage')})`,backgroundSize:"cover", ...get(style, 'container') }}>
            <div className="relative flex justify-end p-5 md:p-10">
                <div className={`w-full bg-white shadow-lg lg:w-5/12 p-8 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                    {get(props, 'subTitle', '').length !== 0 && <h2 className={`text-lg font-semibold nx-text-primary italic text-center ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                    {get(props, 'title', '').length !== 0 && <h1 className={`text-4xl font-bold text-center mt-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                    <form method='POST' onSubmit={submitHandler} className="mt-6 space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className={`w-full p-2 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} value={payload.first_name} onChange={((e) => setPayload({ ...payload, first_name: e.target.value }))} required />
                            <input type="email" placeholder="Last Name" className={`w-full p-2 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} value={payload.last_name} onChange={((e) => setPayload({ ...payload, last_name: e.target.value }))} required />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Phone Number" className={`w-full p-2 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} value={payload.mobile_number} onChange={((e) => setPayload({ ...payload, mobile_number: e.target.value }))} required/>
                            <input type="email" placeholder="Your Email Id" className={`w-full p-2 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} value={payload.email} onChange={((e) => setPayload({ ...payload, email: e.target.value }))} required/>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <input type="time" className={`w-full p-2 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} placeholder='Time' value={payload.time} onChange={((e) => setPayload({ ...payload, time: e.target.value }))} required />
                            <input type="date" className={`w-full p-2 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} value={payload.date} onChange={((e) => setPayload({ ...payload, date: e.target.value }))} required/>
                        </div>
                        <textarea placeholder="Your Message..." className={`w-full p-2 border rounded text-sm font-medium text-gray-800 focus:border-2 focus:border-rose-800 focus:outline-none focus:ring-0 h-24 ${get(tailwindClasses,'inputBox')}`} style={get(style,'inputBox')} value={payload.message} onChange={((e) => setPayload({ ...payload, message: e.target.value }))} required />
                        {get(props,'ctaText','').length !==0 &&<button type="submit" className={`w-full p-2 nx-btn-primary nx-btn-primary:hover font-bold rounded hover:-translate-y-[.15rem] hover:shadow-xl ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>{get(props,'ctaText')}</button>}
                    </form>
                </div>
            </div>
        </section>
    )
}

ContactUsV23.propTypes={
    style: object,
    tailwindClasses: object,
    bgImage: string,
    subTitle: string,
    title: string,
    ctaText: string,
    apiEndpoint: string,
}

ContactUsV23.defaultProps = {
    style: {
        container:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        inputBox:{},
        cta:{}
    },
    tailwindClasses: {
        container:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        inputBox:"",
        cta:""
    },
    bgImage: "https://images.pexels.com/photos/5368626/pexels-photo-5368626.jpeg?auto=compress&cs=tinysrgb&w=2100&h=950&fit=crop&dpr=1",
    subTitle: "Need a appointment?",
    title: "Appointment",
    ctaText:"Submit",
    apiEndpoint:"https://dev.nexnnova.com/nexnnova/nexcoder_admin/public/api/xyz",
}
export default ContactUsV23
