import get from 'lodash.get';
import React from 'react';
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

const PlpSidebarCmsBlockV1 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div className={`py-8 px-4 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`border shadow-lg p-4 w-full ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                {get(props, 'title', '').length !== 0 && <h2 className={`font-bold text-lg text-gray-800 border-b pb-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                {get(props, 'image', '').length !== 0 && <div className="mt-4">
                    <NexImage
                        src={get(props, 'image')}
                        alt="AOSP Project Update"
                        className={`!relative !w-full ${get(tailwindClasses, 'image')}`}
                        style={get(style, 'image')}
                    />
                </div>}
                {get(props, 'subTitle', '').length !== 0 && <h3 className={`font-bold text-md text-gray-700 mt-4 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h3>}
                {get(props, 'description', '').length !== 0 && <p className={`text-gray-600 text-sm mt-2 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                {get(props, 'cta', '').length !== 0 && <button className={`mt-4 nx-btn-primary nx-btn-primary:hover py-2 px-4 rounded w-full hover:shadow-lg hover:-translate-y-[0.15rem] ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
                    <PrimaryLink href={get(props,'ctaLink')}>
                        {get(props, 'cta')}
                    </PrimaryLink>
                </button>}
            </div>
        </div>
    )
}


PlpSidebarCmsBlockV1.defaultProps = {
    style:{
        container:{},
        title:{},
        image:{},
        subTitle:{},
        description:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        title:"",
        image:"",
        subTitle:"",
        description:"",
        cta:""
    },
    title: "CUSTOM CMS BLOCK",
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1739451590.dummy_179x121_ffffff_1c6882.png",
    subTitle: "CUSTOM TITLE",
    description: "Custom CMS block displayed at the left sidebar on the Catalog Page. Put your own content here: text, HTML, images, media... whatever you like.",
    ctaLink: "#",
    cta: "Read More",
}
export default PlpSidebarCmsBlockV1
