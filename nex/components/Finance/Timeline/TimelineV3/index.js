import React from "react";
import get from "lodash.get";
import NexImage from "@nex-core-ui/NexImage";
import { arrayOf, object } from "prop-types";

const TimelineV3 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const reverse = "flex-row-reverse"

    return (
        <section className={`py-16 px-5 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
            <div className="max-w-6xl mx-auto">
                {get(props, 'items', []).map((item, index) => (
                    <div key={index} className={`relative flex flex-wrap items-center pb-10 ${index % 2 === 0 && reverse}`} >
                        <div className={`absolute left-1/2 w-[0.7px] bg-gray-300 h-full transform -translate-x-1/2 -z-10 ${get(tailwindClasses,'timelineLine')}`} style={get(style,'timelineLine')} />
                        <div className="md:w-1/2 max-sm:mb-5 md:p-6 xl:p-0">
                            <div className={`p-8 max-w-md mx-auto bg-white shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                                {get(item,'year','').length !==0 &&<h3 className={`text-2xl nx-section-heading-font text-yellow-600 font-bold mb-3 ${get(tailwindClasses,'year')}`} style={get(style,'year')}>{get(item,'year')}</h3>}
                                {get(item,'title','').length !==0 &&<h2 className={`text-2xl font-bold mb-3 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(item,'title')}</h2>}
                                {get(item,'description','').length !==0 &&<p className={`text-gray-500 ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(item,'description')}</p>}
                            </div>
                        </div>
                        <div className="md:w-1/2 max-w-lg mx-auto md:p-6 xl:p-0">
                            {get(item,"image",'').length !==0 &&<NexImage src={get(item,"image")} className={`!relative ${get(tailwindClasses,'image')}`} style={get(style,'image')} />}
                        </div>
                        <div className={`w-3 h-3 bg-yellow-600 rounded-full absolute max-sm:top-0 left-1/2 transform -translate-x-1/2 ${get(tailwindClasses,'timelineDots')}`} style={get(style,'timelineDots')}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

TimelineV3.propTypes = {
    style: object,
    tailwindClasses: object,
    items:arrayOf(object)
}

TimelineV3.defaultProps = {
    style: {
        container:{},
        sectionBox:{},
        year:{},
        title:{},
        description:{},
        image:{},
        timelineLine:{},
        timelineDots:{}
    },
    tailwindClasses: {
        container:"",
        sectionBox:"",
        year:"",
        title:"",
        description:"",
        image:"",
        timelineLine:"",
        timelineDots:""
    },
    items: [
        {
            year: "1985",
            title: "Start with a small service",
            description:
                "This was the time when we started our company. We had no idea how far we would go, we weren’t even sure that we would be able to survive for a few years. What drove us to start the company was the understanding that we could provide a service no one else was providing.",
            image: "https://images.pexels.com/photos/7698746/pexels-photo-7698746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
        },
        {
            year: "1990",
            title: "First employees",
            description:
                "This was the first period when Consulting WP actually felt like it would stick around for a while. We realized we were growing more stable and expanding at the same time. We needed a new office and bigger team.",
            image: "https://images.pexels.com/photos/7698746/pexels-photo-7698746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
        },
        {
            year: "1990",
            title: "First employees",
            description:
                "This was the first period when Consulting WP actually felt like it would stick around for a while. We realized we were growing more stable and expanding at the same time. We needed a new office and bigger team.",
            image: "https://images.pexels.com/photos/7698746/pexels-photo-7698746.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop&dpr=1",
        },
    ]
}
export default TimelineV3;

