import get from 'lodash.get';
import React from 'react';
import parse from 'html-react-parser';
import { arrayOf, number, object, string } from 'prop-types';

const FeatureSectionV47 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'title', '').length !== 0 &&<h1 className={`text-center text-4xl font-bold relative nx-section-heading-font after:block after:w-10 after:h-[6px] after:bg-yellow-600 after:mt-2 after:mx-auto mb-12 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className={`max-w-6xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-${get(props, 'sectionKeyNo')}`}>
                {get(props,'items',[]).map((item)=><div className='flex gap-4 items-start'>
                    {get(item, 'icon','').length !==0 &&<div className={`text-white bg-gray-950 rounded-full p-3 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                        <span>{parse(get(item, 'icon'))}</span>
                    </div>}
                    <div>
                    {get(item, 'title', '').length !== 0 && <h1 className={`text-xl font-semibold nx-section-heading-font max-w-64 relative after:block after:w-12 after:h-[5px] after:bg-yellow-600 after:mt-3 mb-5 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(item, 'title')}</h1>}
                    {get(item, 'description', '').length !== 0 && <p className={`text-sm text-gray-500 ${get(tailwindClasses, 'descripiton')}`} style={get(style, 'description')}>{get(item, 'description')}</p>}
                    </div>
                </div>)}
            </div>
        </section>
    )
}

FeatureSectionV47.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    title: string,
    items: arrayOf(object)
}

FeatureSectionV47.defaultProps = {
    style: {
        container:{},
        title:{},
        icon:{},
        sectionTitle:{},
        description:{}
    },
    tailwindClasses: {
        container:"",
        title:"",
        icon:"",
        sectionTitle:"",
        description:""
    },
    sectionKeyNo: 3,
    title: "Industries",
    items: [
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
`,
            title: "Travel and Aviation Consulting",
            description: "We are a company that offers design and build services for you from initial sketches to the final construction."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
</svg>
`,
            title: "Business Services Consulting",
            description: "We are a company that offers design and build services for you from initial sketches to the final construction."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
`,
            title: "Consumer Products Consulting",
            description: "We are a company that offers design and build services for you from initial sketches to the final construction."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
</svg>
`,
            title: "Financial Services Consulting",
            description: "We are a company that offers design and build services for you from initial sketches to the final construction."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>
`,
            title: "Energy and Environment Consulting",
            description: "We are a company that offers design and build services for you from initial sketches to the final construction."
        },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>
`,
            title: "Surface Transport & Logistics Consulting",
            description: "We are a company that offers design and build services for you from initial sketches to the final construction."
        },
    ]
}
export default FeatureSectionV47