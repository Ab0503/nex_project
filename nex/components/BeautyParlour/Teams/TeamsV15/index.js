import parse from 'html-react-parser';
import get from 'lodash.get';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, number, object, string } from 'prop-types';

const TeamsV15 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const swiperRef = useRef(null);
    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center uppercase font-semibold text-sm mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
            {get(props, 'title1', '').length !== 0 && <h4 className={`text-center text-4xl font-medium nx-section-heading-font mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')} <span className={`nx-text-primary italic`}>{get(props, 'title2')}</span></h4>}
            <div className='relative max-w-6xl mx-auto'>
                <Swiper loop={true} onSwiper={(swiper) => (swiperRef.current = swiper)} breakpoints={{
                    340: {
                        slidesPerView: 1
                    },
                    640: {
                        slidesPerView: 2
                    },
                    1024: {
                        slidesPerView: `${get(props, 'sectionKeyNo')}`
                    }
                }} spaceBetween={30}>
                    {get(props, 'items', []).map((item) => <SwiperSlide>
                        <div className={`group ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            {get(item, 'image', '').length !== 0 && <figure className='border-t-[12px] border-l-[12px] border-r-2 border-b-2 group-hover:border-b-[12px] group-hover:border-r-[12px] group-hover:border-t-2 group-hover:border-l-2 rounded-full border-rose-800 transition-all duration-300 p-2 mb-5'>
                                <div className='relative before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:rounded-full before:transition-all before:duration-700 before:ease-in-out group-hover:before:opacity-90 group-hover:before:bg-rose-800'>
                                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 max-w-xs mx-auto z-20 opacity-0 group-hover:opacity-100'>
                                        {get(props, 'fbIcon', '').length !== 0 && <span className={`size-8 bg-white rounded-full nx-text-primary p-1 hover:animate-jump ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}><PrimaryLink href={get(item, 'fbLink')}>{parse(get(props, 'fbIcon'))}</PrimaryLink></span>}
                                        {get(props, 'twtrIcon', '').length !== 0 && <span className={`size-8 bg-white rounded-full nx-text-primary p-1 hover:animate-jump ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}><PrimaryLink href={get(item, 'twtrLink')}>{parse(get(props, 'twtrIcon'))}</PrimaryLink></span>}
                                        {get(props, 'linkedInIcon', '').length !== 0 && <span className={`size-8 bg-white rounded-full nx-text-primary p-1 hover:animate-jump ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}><PrimaryLink href={get(item, 'linkedInLink')}>{parse(get(props, 'linkedInIcon'))}</PrimaryLink></span>}
                                        {get(props, 'instaIcon', '').length !== 0 && <span className={`size-8 bg-white rounded-full nx-text-primary p-1 hover:animate-jump ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}><PrimaryLink href={get(item, 'instaLink')}>{parse(get(props, 'instaIcon'))}</PrimaryLink></span>}
                                    </div>
                                    <NexImage src={get(item, 'image')} className={`!relative !h-auto !w-full rounded-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} />
                                </div>
                            </figure>}
                            {get(item, 'name', '').length !== 0 && <h4 className={`text-center font-medium text-2xl nx-section-heading-font mb-3 ${get(tailwindClasses, 'sectionName')}`} style={get(style, 'sectionName')}>{get(item, 'name')}</h4>}
                            {get(item, 'designation', '').length !== 0 && <h1 className={`text-center uppercase text-base mb-3 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(item, 'designation')}</h1>}
                        </div>
                    </SwiperSlide>)}
                </Swiper>
                {get(props, 'prevIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`custom-prev absolute xl:-left-20 -left-5 max-sm:-left-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-black ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'prevIcon'))}
                    </button>
                )}
                {get(props, 'nextIcon', "").length !== 0 && (
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`custom-next absolute xl:-right-20 -right-5 max-sm:-right-5 top-1/2 transform -translate-y-1/2 z-10 text-gray-600 hover:text-black ${get(tailwindClasses, 'ctaIcon')}`}
                        style={get(style, 'ctaIcon')}
                    >
                        {parse(get(props, 'nextIcon'))}
                    </button>
                )}
            </div>
        </section>
    )
}

TeamsV15.propTypes = {
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    subTitle: string,
    title1: string,
    title2: string,
    fbIcon: string,
    twtrIcon: string,
    linkedInIcon: string,
    instaIcon: string,
    prevIcon: string,
    nextIcon: string,
    items: arrayOf(object)
}

TeamsV15.defaultProps = {
    style: {
        container:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        socialIcon:{},
        sectionImage:{},
        sectionName:{},
        sectionText:{}
    },
    tailwindClasses: {
        container:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        socialIcon:"",
        sectionImage:"",
        sectionName:"",
        sectionText:""
    },
    sectionKeyNo:4,
    subTitle: "Choose best for you",
    title1: "Our Professional",
    title2: "Team",
    fbIcon: `<svg fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>`,
    twtrIcon: `<svg fill="currentColor" viewBox="0 0 24 24" ><path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" /></svg>`,
    linkedInIcon: `<svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"> <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" /> </svg>`,
    instaIcon: `<svg fill="currentColor" viewBox="0 0 24 24" ><path fillRule="evenodd"d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"clipRule="evenodd"/></svg>`,
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>`,
    items: [
        {
            image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&dpr=1",
            fbLink: "/fb",
            twtrLink: "/twitter",
            instaLink: "/insta",
            linkedInLink: "/linkedIn",
            name: "Nancy Spicer",
            designation: "Hair Stylist"
        },
        {
            image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&dpr=1",
            fbLink: "/fb",
            twtrLink: "/twitter",
            instaLink: "/insta",
            linkedInLink: "/linkedIn",
            name: "Nancy Spicer",
            designation: "Hair Stylist"
        },
        {
            image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&dpr=1",
            fbLink: "/fb",
            twtrLink: "/twitter",
            instaLink: "/insta",
            linkedInLink: "/linkedIn",
            name: "Nancy Spicer",
            designation: "Hair Stylist"
        },
        {
            image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&dpr=1",
            fbLink: "/fb",
            twtrLink: "/twitter",
            instaLink: "/insta",
            linkedInLink: "/linkedIn",
            name: "Nancy Spicer",
            designation: "Hair Stylist"
        },
        {
            image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&dpr=1",
            fbLink: "/fb",
            twtrLink: "/twitter",
            instaLink: "/insta",
            linkedInLink: "/linkedIn",
            name: "Nancy Spicer",
            designation: "Hair Stylist"
        },
        {
            image: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&dpr=1",
            fbLink: "/fb",
            twtrLink: "/twitter",
            instaLink: "/insta",
            linkedInLink: "/linkedIn",
            name: "Nancy Spicer",
            designation: "Hair Stylist"
        },
    ]

}
export default TeamsV15
