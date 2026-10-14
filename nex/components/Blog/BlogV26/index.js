import get from 'lodash.get'
import React from 'react'
import PropTypes from 'prop-types'

const BlogV26 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <div className={`py-10 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`lg:mx-32 max-sm:mx-5 md:mx-10`}>
                <div className={`h-[500px] w-auto flex max-sm:flex-col gap-8 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                    <div className='container grid grid-rows-6 gap-5'>
                        {(get(props,'title1',"").length !== 0 || get(props,'title2',"").length !==0) && <div className={`row-span-1 ${get(tailwindClasses, 'titleBox')}`} style={get(style, 'titleBox')}>
                            <div>
                                {get(props,'title1',"").length !== 0 && <h1 className={`text-4xl font-bold ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,'title1')}</h1>}
                                {get(props,'title2',"").length !==0 && <h1 className={`text-4xl font-bold ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(props,'title2')}</h1>}
                            </div>
                        </div>}
                        {(get(props,'section1Title',"").length !== 0 || get(props,'section1SubTitle',"").length !==0 || get(props,'section1Cta',"").length !== 0) && <div className={`row-span-3 border bg-indigo-900 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat ${get(tailwindClasses, 'sectionBox1')}`} style={{backgroundImage:`url(${get(props,"section1BgImg")})`,...get(style, 'sectionBox1')}}>
                             <div className='p-5'>
                                {get(props,'section1Title',"").length !== 0 && <h1 className={`text-3xl font-bold text-gray-50 mb-1 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props,'section1Title')}</h1>}
                                {get(props,'section1SubTitle',"").length !==0 && <h1 className={`text-gray-50 mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props,'section1SubTitle')}</h1>}
                                {get(props,'section1Cta',"").length !== 0 && <button className={`text-gray-50 bg-transparent border rounded-full px-6 py-1 hover:border-black hover:text-black ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}><a href={get(props,'section1CtaLink')}>{get(props,'section1Cta')}</a></button>}
                            </div>
                        </div>}
                        <div className='row-span-2 grid grid-cols-2 gap-5'>
                            {(get(props,'section2Title',"").length !== 0 || get(props,'section2SubTitle',"").length !== 0 || get(props,'section2Cta',"").length !==0) && <div className={`border bg-sky-600 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat ${get(tailwindClasses, 'sectionBox2')}`} style={{backgroundImage:`url(${get(props,"section2BgImg")})`,...get(style, 'sectionBox2')}}>
                                <div className='p-5'>
                                    {get(props,'section2Title',"").length !== 0 && <h1 className={`text-3xl font-bold text-gray-50 mb-1${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props,'section2Title')}</h1>}
                                    {get(props,'section2SubTitle',"").length !== 0 && <h1 className={`text-gray-50 mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props,'section2SubTitle')}</h1>}
                                    {get(props,'section2Cta',"").length !==0 && <button className={`text-gray-50 bg-transparent border rounded-full px-6 py-1 hover:border-black hover:text-black ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}><a href={get(props,'section2CtaLink')}>{get(props,'section2Cta')}</a></button>}
                                </div>
                            </div>}
                            {(get(props,'section3Title',"").length !==0 || get(props,'section3SubTitle',"").length !==0 || get(props,'section3Cta',"").length !==0) &&<div className={`border bg-green-600 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat ${get(tailwindClasses, 'sectionBox3')}`} style={{backgroundImage:`url(${get(props,"section3BgImg")})`,...get(style, 'sectionBox3')}}>
                                <div className='p-5'>
                                    {get(props,'section3Title',"").length !==0 && <h1 className={`text-3xl font-bold text-gray-50 mb-1${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props,'section3Title')}</h1>}
                                    {get(props,'section3SubTitle',"").length !==0 && <h1 className={`text-gray-50 mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props,'section3SubTitle')}</h1>}
                                    {get(props,'section3Cta',"").length !==0 && <button className={`text-gray-50 bg-transparent border rounded-full px-6 py-1 hover:border-black hover:text-black ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}><a href={get(props,'section3CtaLink')}>{get(props,'section3Cta')}</a></button>}
                                </div>
                            </div>}
                        </div>
                    </div>
                    <div className='container grid grid-rows-6 gap-5'>
                        <div className='row-span-2 grid grid-cols-2 gap-5'>
                            {(get(props,'section4Title',"").length !== 0 || get(props,'section4SubTitle',"").length !== 0 || get(props,'section4Cta',"").length !==0) && <div className={`border bg-yellow-600 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat ${get(tailwindClasses, 'sectionBox4')}`} style={{backgroundImage:`url(${get(props,"section4BgImg")})`,...get(style, 'sectionBox4')}}>
                                <div className='p-5'>
                                    {get(props,'section4Title',"").length !== 0 && <h1 className={`text-3xl font-bold text-gray-50 mb-1${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props,'section4Title')}</h1>}
                                    {get(props,'section4SubTitle',"").length !== 0 && <h1 className={`text-gray-50 mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props,'section4SubTitle')}</h1>}
                                    {get(props,'section4Cta',"").length !==0 && <button className={`text-gray-50 bg-transparent border rounded-full px-6 py-1 hover:border-black hover:text-black ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}><a href={get(props,'section4CtaLink')}>{get(props,'section4Cta')}</a></button>}
                                </div>
                            </div>}
                            {(get(props,'section5Title',"").length !== 0 || get(props,'section5SubTitle',"").length !== 0 || get(props,'section5Cta',"").length !== 0 ) && <div className={`border bg-pink-600 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat ${get(tailwindClasses, 'sectionBox5')}`} style={{backgroundImage:`url(${get(props,"section5BgImg")})`,...get(style, 'sectionBox5')}}>
                                <div className='p-5'>
                                    {get(props,'section5Title',"").length !== 0 && <h1 className={`text-3xl font-bold text-gray-50 mb-1 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props,'section5Title')}</h1>}
                                    {get(props,'section5SubTitle',"").length !== 0 && <h1 className={`text-gray-50 mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props,'section5SubTitle')}</h1>}
                                    {get(props,'section5Cta',"").length !== 0 && <button className={`text-gray-50 bg-transparent border rounded-full px-6 py-1 hover:border-black hover:text-black ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}><a href={get(props,'section5CtaLink')}>{get(props,'section5Cta')}</a></button>}
                                </div>
                            </div>}
                        </div>
                        {(get(props,'section6Title',"").length !== 0 || get(props,'section6SubTitle',"").length !== 0 || get(props,'section6Cta',"").length !== 0 ) && <div className={`row-span-4 border bg-red-600 flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat ${get(tailwindClasses, 'sectionBox6')}`} style={{backgroundImage:`url(${get(props,"section6BgImg")})`,...get(style, 'sectionBox6')}}>
                            <div className='p-5'>
                                {get(props,'section6Title',"").length !== 0 && <h1 className={`text-3xl font-bold text-gray-50 mb-1${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props,'section6Title')}</h1>}
                                {get(props,'section6SubTitle',"").length !== 0 && <h1 className={`text-gray-50 mb-2 ${get(tailwindClasses, 'sectionSubTitle')}`} style={get(style, 'sectionSubTitle')}>{get(props,'section6SubTitle')}</h1>}
                                {get(props,'section6Cta',"").length !== 0 && <button className={`text-gray-50 bg-transparent border rounded-full px-6 py-1 hover:border-black hover:text-black ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}><a href={get(props,'section6CtaLink')}>{get(props,'section6Cta')}</a></button>}
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div >
    )
}

BlogV26.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    title1: PropTypes.string,
    title2:PropTypes.string,
    section1BgImg:PropTypes.string,
    section2BgImg:PropTypes.string,
    section3BgImg:PropTypes.string,
    section4BgImg:PropTypes.string,
    section5BgImg:PropTypes.string,
    section6BgImg:PropTypes.string,
    section1Title: PropTypes.string,
    section1SubTitle: PropTypes.string,
    section1CtaLink:PropTypes.string,
    section1Cta:PropTypes.string,
    section2Title: PropTypes.string,
    section2SubTitle: PropTypes.string,
    section2CtaLink:PropTypes.string,
    section2Cta:PropTypes.string,
    section3Title: PropTypes.string,
    section3SubTitle: PropTypes.string,
    section3CtaLink:PropTypes.string,
    section3Cta:PropTypes.string,
    section4Title: PropTypes.string,
    section4SubTitle: PropTypes.string,
    section4CtaLink:PropTypes.string,
    section4Cta:PropTypes.string,
    section5Title: PropTypes.string,
    section5SubTitle: PropTypes.string,
    section5CtaLink:PropTypes.string,
    section5Cta:PropTypes.string,
    section6Title: PropTypes.string,
    section6SubTitle: PropTypes.string,
    section6CtaLink:PropTypes.string,
    section6Cta:PropTypes.string,
}
BlogV26.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        title: {},
        title1: {},
        title2: {},
        sectionBox1: {},
        sectionBox2: {},
        sectionBox3: {},
        sectionBox4: {},
        sectionBox5: {},
        sectionBox6: {},
        sectionTitle:{},
        sectionSubTitle:{},
        sectionCta:{}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        titleBox: "row-start-6",
        title1: "",
        title2: "",
        sectionBox1: "",
        sectionBox2: "",
        sectionBox3: "",
        sectionBox4: "",
        sectionBox5: "",
        sectionBox6: "",
        sectionTitle:"",
        sectionSubTitle:"",
        sectionCta:""
    },
    title1:"Top",
    title2:"Categories",
    section1BgImg:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292989.750x382.png",
    section2BgImg:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292976.586x470.png",
    section3BgImg:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292976.586x470.png",
    section4BgImg:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292976.586x470.png",
    section5BgImg:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735292976.586x470.png",
    section6BgImg:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735306482.720x720.png",
    section1Title: "Action1",
    section1SubTitle: "24 Items1",
    section1CtaLink:"#",
    section1Cta:"Explore1",
    section2Title: "Action2",
    section2SubTitle: "24 Items2",
    section2CtaLink:"#",
    section2Cta:"Explore2",
    section3Title: "Action3",
    section3SubTitle: "24 Items3",
    section3CtaLink:"#",
    section3Cta:"Explore3",
    section4Title: "Action4",
    section4SubTitle: "24 Items4",
    section4CtaLink:"#",
    section4Cta:"Explore4",
    section5Title: "Action5",
    section5SubTitle: "24 Items5",
    section5CtaLink:"#",
    section5Cta:"Explore5",
    section6Title: "Action6",
    section6SubTitle: "24 Items6",
    section6CtaLink:"#",
    section6Cta:"Explore6",
}
export default BlogV26
