import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { arrayOf, number, object, string } from 'prop-types';

const FeatureSectionV43 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`py-32 px-5 bg-no-repeat bg-[center_center] bg-cover relative z-0 !bg-fixed before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(30,34,40,.4)] ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(props, 'bgImage')})`, ...get(style, 'container') }}>
            <div className='relative z-10 text-white'>
                {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center nx-section-heading-font text-lg mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                {get(props, 'title', '').length !== 0 && <h4 className={`text-center text-4xl font-bold mb-16 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
                <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${get(props,'sectionKeyNo')} gap-5`}>
                    {get(props, 'items', []).map((item) =>
                        <div className={`flex flex-col items-center ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                            {get(item, 'icon', '').length !== 0 && <span className={`inline-flex mb-3 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(item, 'icon'))}</span>}
                            {get(item, 'title', '').length !== 0 && <h4 className={`text-center uppercase font-medium max-w-[6rem] ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h4>}
                        </div>)}
                </div>
            </div>
        </section>
    )
}

FeatureSectionV43.propTypes = {
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    bgImage: string,
    subTitle: string,
    title: string,
    items: arrayOf(object)
}

FeatureSectionV43.defaultProps = {
    style: {
        container: {},
        subTitle:{},
        title:{},
        sectionBox:{},
        icon:{},
        sectionTitle:{}
    },
    tailwindClasses: {
        container: "",
        subTitle:"",
        title:"",
        sectionBox:"",
        icon:"",
        sectionTitle:""
    },
    sectionKeyNo:4,
    bgImage: "https://images.pexels.com/photos/5480159/pexels-photo-5480159.jpeg?auto=compress&cs=tinysrgb&w=2100&h=1400&fit=crop&dpr=1",
    subTitle: "About Our Services",
    title: "Why Choose",
    items: [
        {
            icon: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="size-24" stroke-width="1.5">
  <path d="M12 20a8 8 0 0 0 8-8 8 8 0 0 0-16 0 8 8 0 0 0 8 8Z" />
  <path d="M9 10c1 2-1 2 0 4s3-1 4-2 1 3 2 4" />
  <circle cx="12" cy="8" r="2" />
</svg>`,
            title: "we are professional"
        },
        {
            icon: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="size-24" stroke-width="1.5">
  <path d="M8 12V6a1 1 0 0 1 2 0v6M16 12V4a1 1 0 0 1 2 0v8M4 22h16M4 18h16M4 14h16M14 18a2 2 0 0 1 4 0" />
</svg>`,
            title: "medical education"
        },
        {
            icon: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="size-24" stroke-width="1.5">
  <path d="M4 14h16a6 6 0 0 1-12 0Z" />
  <path d="M16 14h4a6 6 0 0 1-12 0h4M12 8s2-4 4-2-2 4-2 4M14 8s2-4 4-2-2 4-2 4" />
</svg>`,
            title: "lux cosmetic"
        },
        {
            icon: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" class="size-24" stroke-width="1.5">
  <path d="M6 12h12M6 16h12M6 20h12M10 12V8a2 2 0 0 1 4 0v4" />
  <path d="M8 8c2-2 4 0 4 2s-2 4-4 2" />
</svg>`,
            title: "the newest equipment"
        },
    ]
}
export default FeatureSectionV43
