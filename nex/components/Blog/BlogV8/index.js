import React from 'react';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import withData from "@nex-core-ui/HOC/withData";


const BlogV8 = (props) => {
    const style = get(props, "style", {})
    const tailwindClasses = get(props, "tailwindClasses", {})

    return (
        <div className={`p-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props,'subTitle').length !==0 && <h1 className={`text-center text-sm font-bold ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props,'subTitle')}</h1>}
            {get(props,'title').length !==0 && <h1 className={`text-center text-4xl ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h1>}
            <div className='text-gray-50 m-8 grid grid-cols-2 max-lg:grid-cols-1 max-lg:pl-20 max-lg:pr-20 max-md:pr-10 max-md:pl-10 max-sm:pr-5 max-sm:pl-5 gap-5 '>
                <div className='grid grid-cols-1 gap-5'>
                    {(get(props, "section1subTitle").length !==0 || get(props, 'section1Title','').length !== 0 || get(props, 'section1ctaText','').length !== 0 ) && <div className={`p-4 h-64 justify-between flex flex-col rounded-xl border bg-cover bg-center ${get(tailwindClasses, 'sectionBox')}`} style={{ backgroundImage: `url('${get(props, "section1Image")}')`, ...get(style, 'sectionBox') }}>
                        <div>
                            {get(props, "section1subTitle").length !==0 && <h1 className={`text-left font-light text-sm ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, "section1subTitle")}</h1>}
                            {get(props, 'section1Title','').length !== 0 && <p className={`text-left font-bold text-lg ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section1Title")}</p>}
                        </div>
                        <div className={``}>
                            {get(props, 'section1ctaText','').length !== 0 && <a href={get(props, "section1ctaLink")}><button className={`text-left rounded-2xl bg-gray-50 border-gray-600 p-2 px-4 hover:bg-transparent hover:text-gray-50 hover:border hover:border-gray-50 text-black text-xs ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, "section1ctaText")}</button></a>}
                        </div>
                    </div>}
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>
                        {(get(props, "section2subTitle").length !==0 || get(props, 'section2Title').length !== 0 || get(props, 'section2ctaText').length !== 0)&& <div className={`p-4 h-64 flex flex-col rounded-xl justify-between border bg-cover bg-center ${get(tailwindClasses, 'sectionBox')}`} style={{ backgroundImage: `url('${get(props, "section2Image")}')`, ...get(style, 'sectionBox') }}>
                            <div>
                                {get(props, "section2subTitle").length !==0 && <h1 className={`text-left font-light text-sm ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, "section2subTitle")}</h1>}
                                {get(props, 'section2Title').length !== 0 && <p className={`text-left font-bold text-lg ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section2Title")}</p>}
                            </div>
                            <div className={``}>
                               {get(props, 'section2ctaText').length !== 0 && <a href={get(props, "section2ctaLink")}><button className={`text-left rounded-2xl bg-gray-50 border-gray-600 p-2 px-4 hover:bg-transparent hover:text-gray-50 hover:border hover:border-gray-50 text-black text-xs ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, "section2ctaText")}</button></a>} 
                            </div>  
                        </div>}
                        {(get(props, "section3subTitle").length !==0 || get(props, 'section3Title').length !== 0 || get(props, 'section3ctaText').length !== 0) && <div className={`p-4 h-64 flex flex-col rounded-xl justify-between border bg-cover bg-center ${get(tailwindClasses, 'sectionBox')}`} style={{ backgroundImage: `url('${get(props, "section3Image")}')`, ...get(style, 'sectionBox') }}>
                            <div>
                                {get(props, "section3subTitle").length !==0 && <h1 className={`text-left font-light text-sm ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, "section3subTitle")}</h1>}
                                {get(props, 'section3Title').length !== 0 && <p className={`text-left font-bold text-lg ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section3Title")}</p>}
                            </div>
                            <div className={``}>
                               {get(props, 'section3ctaText').length !== 0 && <a href={get(props, "section3ctaLink")}><button className={`text-left rounded-2xl bg-gray-50 border-gray-600 p-2 px-4 hover:bg-transparent hover:text-gray-50 hover:border hover:border-gray-50 text-black text-xs ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, "section3ctaText")}</button></a>} 
                            </div>
                        </div>}
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5'>
                    <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5'>
                        {(get(props, "section4subTitle").length !==0 || get(props, 'section4Title').length !== 0 || get(props, 'section4ctaText').length !== 0)&& <div className={`p-4 h-64 flex flex-col rounded-xl justify-between border bg-cover bg-center ${get(tailwindClasses, 'sectionBox')}`} style={{ backgroundImage: `url('${get(props, "section4Image")}')`, ...get(style, 'sectionBox') }}>
                            <div>
                                {get(props, "section4subTitle").length !==0 && <h1 className={`text-left font-light text-sm ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, "section4subTitle")}</h1>}
                                {get(props, 'section4Title').length !== 0 && <p className={`text-left font-bold text-lg ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section4Title")}</p>}
                            </div>
                            <div className={``}>
                               {get(props, 'section4ctaText').length !== 0 && <a href={get(props, "section4ctaLink")}><button className={`text-left rounded-2xl bg-gray-50 border-gray-600 p-2 px-4 hover:bg-transparent hover:text-gray-50 hover:border hover:border-gray-50 text-black text-xs ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, "section4ctaText")}</button></a>} 
                            </div>
                        </div>}
                        {(get(props, "section5subTitle").length !==0 || get(props, 'section5Title','').length !== 0 || get(props, 'section5ctaText').length !== 0)&& <div className={`p-4 h-64 flex flex-col rounded-xl justify-between border bg-cover bg-center ${get(tailwindClasses, 'sectionBox')}`} style={{ backgroundImage: `url('${get(props, "section5Image")}')`, ...get(style, 'sectionBox') }}>
                            <div>
                                {get(props, "section5subTitle").length !==0 && <h1 className={`text-left font-light text-sm ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, "section5subTitle")}</h1>}
                                {get(props, 'section5Title','').length !== 0 && <p className={`text-left font-bold text-lg ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section5Title")}</p>}
                            </div>
                            <div className={``}>
                               {get(props, 'section5ctaText').length !== 0 && <a href={get(props, "section5ctaLink")}><button className={`text-left rounded-2xl bg-gray-50 border-gray-600 p-2 px-4 hover:bg-transparent hover:text-gray-50 hover:border hover:border-gray-50 text-black text-xs ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, "section5ctaText")}</button></a>} 
                            </div>
                        </div>}
                    </div>
                    {(get(props, "section6subTitle").length !==0 || get(props, 'section6Title','').length !== 0 || get(props, 'section6ctaText').length !== 0)&& <div className={`p-4 h-64 flex flex-col rounded-xl justify-between border bg-cover bg-center ${get(tailwindClasses, 'sectionBox')}`} style={{ backgroundImage: `url('${get(props, "section6Image")}')`, ...get(style, 'sectionBox') }}>
                        <div>
                            {get(props, "section6subTitle").length !==0 && <h1 className={`text-left font-light text-sm ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, "section6subTitle")}</h1>}
                            {get(props, 'section6Title','').length !== 0 && <p className={`text-left font-bold text-lg  ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section6Title")}</p>}
                        </div>
                        <div className={``}>
                            {get(props, 'section6ctaText').length !== 0 && <a href={get(props, "section6ctaLink")}><button className={`text-left rounded-2xl bg-gray-50 border-gray-600 p-2 px-4 hover:bg-transparent hover:text-gray-50 hover:border hover:border-gray-50 text-black text-xs ${get(tailwindClasses, 'sectionCta')}`} style={get(style, 'sectionCta')}>{get(props, "section6ctaText")}</button></a>}
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

BlogV8.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        sectionTitle:{},
        sectionDescription:{},
        sectionCta:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        sectionTitle:"",
        sectionDescription:"",
        sectionCta:""
    },
    subTitle:"NEWS FEEDS",
    title:"Latest News & Articles",
    section1subTitle: "Foods",
    section1Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
    section1Title: "Lorem ipsum dolor sit amet.",
    section1ctaText: "Read more",
    section1ctaLink: "#",
    section2subTitle: "Foods",
    section2Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    section2Title: "Lorem ipsum dolor sit amet.",
    section2ctaText: "Read more",
    section2ctaLink: "#",
    section3subTitle: "Foods",
    section3Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    section3Title: "Lorem ipsum dolor sit amet.",
    section3ctaText: "Read more",
    section3ctaLink: "#",
    section4subTitle: "Foods",
    section4Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    section4Title: "Lorem ipsum dolor sit amet.",
    section4ctaText: "Read more",
    section4ctaLink: "#",
    section5subTitle: "Foods",
    section5Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    section5Title: "Lorem ipsum dolor sit amet.",
    section5ctaText: "Read more",
    section5ctaLink: "#",
    section6subTitle: "Foods",
    section6Image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297592.1280x720 - Hero Image.png",
    section6Title: "Lorem ipsum dolor sit amet.",
    section6ctaText: "Read more",
    section6ctaLink: "#",
}
BlogV8.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    section1subTitle: PropTypes.string,
    section1Image: PropTypes.string,
    section1Title: PropTypes.string,
    section1ctaText: PropTypes.string,
    section1ctaLink: PropTypes.string,
    section2subTitle: PropTypes.string,
    section2Image: PropTypes.string,
    section2Title: PropTypes.string,
    section2ctaText: PropTypes.string,
    section2ctaLink: PropTypes.string,
    section3subTitle: PropTypes.string,
    section3Image: PropTypes.string,
    section3Title: PropTypes.string,
    section3ctaText: PropTypes.string,
    section3ctaLink: PropTypes.string,
    section4subTitle: PropTypes.string,
    section4Image: PropTypes.string,
    section4Title: PropTypes.string,
    section4ctaText: PropTypes.string,
    section4ctaLink: PropTypes.string,
    section5subTitle: PropTypes.string,
    section5Image: PropTypes.string,
    section5Title: PropTypes.string,
    section5ctaText: PropTypes.string,
    section5ctaLink: PropTypes.string,
    section6subTitle: PropTypes.string,
    section6Image: PropTypes.string,
    section6Title: PropTypes.string,
    section6ctaText: PropTypes.string,
    section6ctaLink: PropTypes.string,
}
export default withData(BlogV8);
