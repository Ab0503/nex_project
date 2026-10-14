'use client'
import React from "react";
import get from "lodash.get";
import PropTypes, { arrayOf, object } from "prop-types";
import parse from 'html-react-parser';
import NexImage from "@nex-core-ui/NexImage";
import withData from "@nex-core-ui/HOC/withData";

const TestimonialsV8 = (props) => {
    const style = get(props, 'style', {})
    const taliwindClasses = get(props, 'taliwindClasses', {});
    return (

        <section className={`bg-gray-50 py-12 ${get(taliwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`container mx-auto px-6 lg:px-12 text-left`}>
                {
                    get(props, 'title1', '').length !== 0 && <h2 className={`text-4xl font-bold text-gray-800 mb-4 max-sm:justify-center ${get(taliwindClasses, 'title')} `} style={get(style, 'title')}>{get(props, 'title1', '')}<span> </span>
                        <span className={`text-green-600  ${get(taliwindClasses, 'title2')} `} style={get(style, 'title2')}>{get(props, 'title2', '')}</span>
                    </h2>
                }
                <div className="flex max-lg:flex-col items-center justify-between">
                {
                    get(props, 'description', '').length !== 0 && <p className={`text-gray-600 mb-12 grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-end ${get(taliwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description', '')}</p>
                }
                    <div className="flex items-center gap-8 max-sm:gap-4 mb-3">
                        {get(props, 'ctaIconLeft').length !==0 && <button className={`w-12 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ${get(taliwindClasses,'ctaIconLeft')}`} style={get(style,'ctaIconLeft')}>
                            {parse(get(props, 'ctaIconLeft'))}
                        </button>}
                        {get(props, 'ctaIconRight').length !== 0 && <button className={`w-12 h-10 flex items-center justify-center bg-green-600 text-white rounded-full hover:bg-green-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 ${get(taliwindClasses,'ctaIconRight')}`}style={get(style,'ctaIconRight')}>
                            {parse(get(props, 'ctaIconRight'))}
                        </button>}
                    </div>
                </div>
                <div className="grid grid-cols-2 max-md:grid-cols-1 gap-8 ">
                    {get(props,'items','').map((item)=><div className={`bg-white rounded-lg shadow-md p-6 ${get(taliwindClasses,'itemBox')}`} style={get(style,'itemBox')}>
                        <div className="flex max-xl:flex-col items-center gap-10 max-sm:gap-4">
                            <NexImage src={get(item,'imagePath')} alt="Client 1" className={`!relative !w-auto !h-96 !max-sm:h-24 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 border-green-600 ${get(taliwindClasses,'itemImage')}`} style={get(style,'itemImage')}/>
                            <div>
                                <p className={`mt-4 text-gray-600 ${get(taliwindClasses, 'itemDescription')} `} style={get(style, 'itemDescription')}>{get(item, 'description', '')}
                                </p>
                                <div className="flex justify-between mt-4">
                                    <div>
                                        {
                                            get(item, 'name', '').length !== 0 && <h4 className={`font-bold text-gray-800 ${get(taliwindClasses,'itemName')}`} style={get(style, 'itemName')}>{get(item, 'name', '')}</h4>
                                        }
                                        {
                                            get(item, 'designation', '').length !== 0 && <p className={`text-sm text-gray-500 ${get(taliwindClasses,'itemDesignation')}`} style={get(style, 'itemDesignation')}>{get(item, 'designation', '')}</p>

                                        }
                                    </div>
                                    <div className="">
                                        {
                                            get(item, 'rating', '').length !== 0 && <span className={`flex justify-end text-green-600 ${get(taliwindClasses,'itemRating')}`} style={get(style, 'itemRating')}>{get(item, 'rating', '')}</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </section>
    );
}

TestimonialsV8.defaultProps = {
    style: {
        container: {},
        title: {},
        title2: {},
        description: {},
        ctaIconLeft: {},
        ctaIconRight: {},
        itemBox: {},
        itemImage: {},
        itemDescription: {},
        itemName: {},
        itemDesignation: {},
        itemRating:{}
    },
    taliwindClasses: {
        container: "",
        title: "",
        title2: "",
        description: "",
        ctaIconLeft:"",
        ctaIconRight:"",
        itemBox: "",
        itemImage: "",
        itemDescription: "",
        itemName: "",
        itemDesignation: "",
        itemRating:""
    },
    title1: "What",
    title2: "Clients Saying",
    ctaIconLeft: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /><a href="https://lordicon.com/">Icons by Lordicon.com</a></svg>`,
    ctaIconRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    items: [
        {
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png",
            name: 'ABCD',
            designation: 'Sr. Manager',
            rating: '★★★',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735309911.500x750.png",
            name: 'ABCD',
            designation: 'Sr. Manager',
            rating: '★★★',
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
        }
    ],
}
TestimonialsV8.propTypes = {
    style: PropTypes.object,
    taliwindClasses: PropTypes.object,
    title1: PropTypes.string,
    title2: PropTypes.string,
    ctaIconLeft: PropTypes.string,
    ctaIconRight: PropTypes.string,
    description: PropTypes.string,
    items: arrayOf(object),
}

export default withData(TestimonialsV8);