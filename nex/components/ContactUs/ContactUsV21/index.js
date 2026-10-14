import NexAnimation from '@nex-components/NexAnimation';
import parse from 'html-react-parser';
import get from 'lodash.get';
import React from 'react';

const ContactUsV21 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {})
    const style = get(props, 'style', {})
    return (
        <section className={`py-8 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="mx-auto px-6 text-center">
                <NexAnimation type={get(props,'topContentAnimation')}>
                {get(props,'subTitle',"").length !==0 &&<h3 className={`text-lg nx-text-primary font-semibold ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props,'subTitle')}</h3>}
                {get(props,'title',"").length !==0 &&<h1 className={`text-4xl font-bold nx-section-heading-font ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h1>}
                <div className="mt-6 space-y-4">
                {get(props,'text1',"").length !==0 &&<div className="flex justify-center gap-1">
                        {get(props, 'icon1',"").length !==0 &&<span className={`nx-text-primary mt-1 ${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'icon1'))}</span>}
                        <span className={`text-lg text-gray-700 font-medium ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props,'text1')}</span>
                    </div>}
                    {get(props,'text2',"").length !==0 &&<div className="flex  justify-center gap-1">
                        {get(props, 'icon2',"").length !==0 &&<span className={`nx-text-primary mt-1 ${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'icon2'))}</span>}
                        <span className={`text-lg text-gray-700 font-medium ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props,'text2')}</span>
                    </div>}
                    {get(props,'text3',"").length !==0 &&<div className="flex justify-center gap-1">
                        {get(props, 'icon3',"").length !==0 &&<span className={`nx-text-primary mt-1 ${get(tailwindClasses,'icon')}`} style={get(style,'icon')}>{parse(get(props, 'icon3'))}</span>}
                        <span className={`text-lg text-gray-700 font-medium ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props,'text3')}</span>
                    </div>}
                </div>
                </NexAnimation>
                {get(props,'mapLink',"").length !==0 && <NexAnimation type={get(props,'bottomContentAnimation')}>
                    <div className="mt-10 flex justify-center">
                    <iframe
                        className={`w-full h-96 rounded-lg shadow-lg ${get(tailwindClasses,'map')}`}
                        style={get(style,'map')}
                        src={get(props,'mapLink')}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
                </NexAnimation>}
            </div>
        </section>

    )
}

ContactUsV21.defaultProps={
    style:{
        container:{},
        subTitle:{},
        title:{},
        icon:{},
        text:{},
        map:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        icon:"",
        text:"",
        map:""
    },
    subTitle:"Visit Our Centre",
    title:"We're Here to Help You Learn",
    icon1:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>
`,
    text1:"123 Learning Street, Education City, 560001",
    icon2:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
</svg>
`,
    text2:"+91 98765 43210",
    icon3:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
</svg>
`,
    text3:"contact@ourcentre.com",
    mapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509423!2d-122.41941548468207!3d37.77492977975933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e24b0c8e2f1%3A0x953d74340f4b0c2e!2s123%20Learning%20Street%2C%20Education%20City!5e0!3m2!1sen!2sus!4v1640999114813!5m2!1sen!2sus",
    topContentAnimation:"",
    bottomContentAnimation:""
}
export default ContactUsV21
