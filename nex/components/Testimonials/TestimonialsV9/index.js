import get from 'lodash.get';
import React from 'react';
import { PropTypes } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";

const TestimonialsV9 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <div className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'subTitle').length !== 0 && <h1 className={`text-center text-xs font-light ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
            {get(props, 'title').length !==0 && <h1 className={`text-center text-4xl font-bold mb-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
            <div className='mx-56 max-md:mx-0 max-lg:mx-16 max-xl:mx-16 max-sm:mx-10 grid grid-cols-4 max-sm:grid-cols-1 gap-4'>
                {(get(props, "section1Description").length !==0 || get(props, "section2Description").length !==0) && <div className='grid grid-rows-8 max-sm:grid-rows-2 gap-4'>
                    {get(props, "section1Description").length !== 0 && <div className={`row-start-2 max-sm:row-auto row-span-3 border rounded-xl shadow-lg p-3 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        <p className={`text-sm font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section1Description")}</p>
                        <div className={`flex items-center my-2 gap-2`}>
                            {get(props, "section1Image").length !== 0 && <NexImage className={`!relative !h-12 !w-12 rounded-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, "section1Image")} alt="" />}
                            {get(props, "section1Name").length !== 0 && <h1 className={`font-bold ${get(tailwindClasses, "sectionName")}`} style={get(style, "sectionName")}>{get(props, "section1Name")}</h1>}
                        </div>
                    </div>}
                    {get(props, "section2Description").length !==0 && <div className={`row-start-5 max-sm:row-auto row-span-3 border rounded-xl shadow-lg p-3 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        <p className={`text-sm font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section2Description")}</p>
                        <div className={`flex items-center my-2 gap-2`}>
                            {get(props, "section2Image").length !== 0 && <NexImage className={`!relative !h-12 !w-12 rounded-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, "section2Image")} alt="" />}
                            {get(props, "section2Name").length !==0 && <h1 className={`font-bold ${get(tailwindClasses, "sectionName")}`} style={get(style, "sectionName")}>{get(props, "section2Name")}</h1>}
                        </div>
                    </div>}
                </div>}
                {(get(props, "section3Description").length !==0 || get(props, "section4Description").length !==0) && <div className='grid grid-rows-8 max-sm:grid-rows-2 gap-4'>
                {get(props, "section3Description").length !==0 &&<div className={`row-start-1 row-span-3 max-sm:row-auto border rounded-xl shadow-lg p-3 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        <p className={`text-sm font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section3Description")}</p>
                        <div className={`flex items-center my-2 gap-2`}>
                            {get(props, "section3Image").length !== 0 && <NexImage className={`!relative !h-12 !w-12 rounded-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, "section3Image")} alt="" />}
                            {get(props, "section3Name").length !==0 && <h1 className={`font-bold ${get(tailwindClasses, "sectionName")}`} style={get(style, "sectionName")}>{get(props, "section3Name")}</h1>}
                        </div>
                    </div>}
                    {get(props, "section4Description").length !==0 && <div className={`row-start-4 row-span-3 max-sm:row-auto border rounded-xl shadow-lg p-3 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        <p className={`text-sm font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section4Description")}</p>
                        <div className={`flex items-center my-2 gap-2`}>
                            {get(props, "section4Image").length !== 0 && <NexImage className={`!relative !h-12 !w-12 rounded-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, "section4Image")} alt="" />}
                            {get(props, "section4Name").length !==0 && <h1 className={`font-bold ${get(tailwindClasses, "sectionName")}`} style={get(style, "sectionName")}>{get(props, "section4Name")}</h1>}
                        </div>
                    </div>}
                </div>}
               {get(props, "section5Description").length !==0 && <div className='grid grid-rows-8 max-sm:grid-rows-1 gap-4'>
                    <div className={`row-start-3 max-sm:row-auto row-span-3 border rounded-xl shadow-lg p-3 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                         <p className={`text-sm font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section5Description")}</p>
                        <div className={`flex items-center my-2 gap-2`}>
                            {get(props, "section5Image").length !== 0 && <NexImage className={`!relative !h-12 !w-12 rounded-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, "section5Image")} alt="" />}
                            {get(props, "section5Name").length !==0 && <h1 className={`font-bold ${get(tailwindClasses, "sectionName")}`} style={get(style, "sectionName")}>{get(props, "section5Name")}</h1>}
                        </div>
                    </div>
                </div>}
                {get(props, "section6Description").length !== 0 && <div className='grid grid-rows-8 max-sm:grid-rows-1 gap-4'>
                    <div className={`row-start-4 max-sm:row-auto row-span-3 border rounded-xl shadow-lg p-3 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                         <p className={`text-sm font-light ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, "section6Description")}</p>
                        <div className={`flex items-center my-2 gap-2`}>
                            {get(props, "section6Image").length !== 0 && <NexImage className={`!relative !h-12 !w-12 rounded-full ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} src={get(props, "section6Image")} alt="" />}
                            {get(props, "section6Name").length !== 0 && <h1 className={`font-bold ${get(tailwindClasses, "sectionName")}`} style={get(style, "sectionName")}>{get(props, "section6Name")}</h1>}
                        </div>
                    </div>
                </div>}
            </div>
        </div>
    )
}


TestimonialsV9.defaultProps = {
    style: {
        container: {},
        subTitle: {},
        title: {},
        sectionBox: {},
        sectionDescription: {},
        sectionImage: {},
        sectionName: {}
    },
    tailwindClasses: {
        container: "",
        subTitle: "",
        title: "",
        sectionBox: "",
        sectionDescription: "",
        sectionImage: "",
        sectionName: ""
    },
    subTitle: "Testimonals",
    title: "What Our Donor Say",
    section1Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus delectus inventore sequi laudantium officiis praesentium, unde similique nemo voluptates dolor odio expedita totam nulla. Quidem unde explicabo ad deserunt corporis possimus quis, voluptates magni.1",
    section1Name: "Ralph Edwards1",
    section1Image: "https://picsum.photos/id/237/200/300",
    section2Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus delectus inventore sequi laudantium officiis praesentium, unde similique nemo voluptates dolor odio expedita totam nulla. Quidem unde explicabo ad deserunt corporis possimus quis, voluptates magni.2",
    section2Name: "Ralph Edwards2",
    section2Image: "https://picsum.photos/id/237/200/300",
    section3Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus delectus inventore sequi laudantium officiis praesentium, unde similique nemo voluptates dolor odio expedita totam nulla. Quidem unde explicabo ad deserunt corporis possimus quis, voluptates magni.3",
    section3Name: "Ralph Edwards3",
    section3Image: "https://picsum.photos/id/237/200/300",
    section4Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus delectus inventore sequi laudantium officiis praesentium, unde similique nemo voluptates dolor odio expedita totam nulla. Quidem unde explicabo ad deserunt corporis possimus quis, voluptates magni.4",
    section4Name: "Ralph Edwards4",
    section4Image: "https://picsum.photos/id/237/200/300",
    section5Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus delectus inventore sequi laudantium officiis praesentium, unde similique nemo voluptates dolor odio expedita totam nulla. Quidem unde explicabo ad deserunt corporis possimus quis, voluptates magni.5",
    section5Name: "Ralph Edwards5",
    section5Image: "https://picsum.photos/id/237/200/300",
    section6Description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus delectus inventore sequi laudantium officiis praesentium, unde similique nemo voluptates dolor odio expedita totam nulla. Quidem unde explicabo ad deserunt corporis possimus quis, voluptates magni.6",
    section6Name: "Ralph Edwards6",
    section6Image: "https://picsum.photos/id/237/200/300",
}

TestimonialsV9.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    section1Description: PropTypes.string,
    section1Name: PropTypes.string,
    section1Image: PropTypes.string,
    section2Description: PropTypes.string,
    section2Name: PropTypes.string,
    section2Image: PropTypes.string,
    section3Description: PropTypes.string,
    section3Name: PropTypes.string,
    section3Image: PropTypes.string,
    section4Description: PropTypes.string,
    section4Name: PropTypes.string,
    section4Image: PropTypes.string,
    section5Description: PropTypes.string,
    section5Name: PropTypes.string,
    section5Image: PropTypes.string,
    section6Description: PropTypes.string,
    section6Name: PropTypes.string,
    section6Image: PropTypes.string,
}
export default withData(TestimonialsV9);
