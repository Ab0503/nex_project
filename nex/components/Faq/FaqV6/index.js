'use client'
import React from "react";
import { object, string } from "prop-types";
import get from "lodash.get";
import withData from "@nex-core-ui/HOC/withData";
import NexImage from "@nex-core-ui/NexImage";


const FaqV6 = (props) => {
    console.log(props);
    const style = get(props, 'style', {})
    const taliwindClasses = get(props, 'taliwindClasses', {});
    return (
        <section className="py-16 ">
            <div className={` container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-10  ${get(taliwindClasses, 'container')}`} style={get(style, 'container')} >{get(props, 'container', '')}
                {/* Text Content */}
                <div className="flex-1 max-sm:p-2 max-lg:p-2 p-24">

                    {
                        get(props, 'title1', '').length != 0 && <h2 className={`text-4xl font-bold text-gray-800 mb-4 ${get(taliwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props, 'title1', '')}
                            <span className={` ${get(taliwindClasses, 'title2')} text-green-600`} style={get(style, 'title2')}>{get(props, 'title2', '')}</span>
                        </h2>
                    }
                    {
                        get(props, 'description', '').length != 0 && <p className={`  text-gray-600 mb-6 ${get(taliwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description', '')} </p>
                    }
                    {
                        get(props, 'description', '').length != 0 &&  <div className="space-y-4">
                            {/* Question 1 */}
                            <div className="w-full px-4">
                                {
                                    props.items.map((item, index) => {
                                        return (
                                            <div className={`p-4 border bg-green-600 text-gray-50 border-gray-200 rounded-lg cursor-pointer ${get(taliwindClasses, 'itemBox')}`} style={get(style, 'itemBox')}>
                                                <div className="flex justify-between items-center">
                                                    <h3 className={` ${get(taliwindClasses, 'quetion')} text-lg font-semibold`} style={get(style, 'quetion')}>
                                                        {item.quetion}
                                                    </h3>
                                                    <span className="text-xl font-bold"></span>
                                                </div>
                                                <p className="mt-2 text-sm text-white">
                                                    {item.answer}
                                                    {/* {get(item, 'answer', 'defaut')} */}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                                <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="flex-1 ">
                    {
                        get(props, 'imagePath', '').length != 0 &&  <NexImage src={get(props, 'imagePath', '')}  className={`mx-auto lg:mt-32 max-sm:mt-2 md:mt-5 !relative ${get(taliwindClasses, 'imagePath')}`} style={get(style, 'imagePath')} />
                    }
                   
                </div>
            </div>
        </section>

    );



}

FaqV6.propTypes = {
    style: object,
    title: string,
};
FaqV6.defaultProps = {
    style: {
        container: {},
        title1: {},
        title2: {},
        description: {},
        itemBox: {},
        itemIcon: {},
        itemText: {},
        image: {}
    },
    taliwindClasses: {
        container: "",
        title1: "",
        title2: "",
        description: "",
        itemBox: "",
        itemIcon: "",
        itemText: "",
        cta: "",
        image: ""
    },
    title1: "Frequently",
    title2: "Asked Questions",
    description: "Enter Description or Sub title here....",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1732618339.Screenshot 2024-11-26 162208.png",
    items: [
        {
            quetion: '1. Which Plan Is Right For Me?',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque quisque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.'
        },
        {
            quetion: '2. Which Plan Is Right For Me?',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque quisque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.'
        },
        {
            quetion: '3. Which Plan Is Right For Me?',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque quisque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.'
        },
        {
            quetion: '4. Which Plan Is Right For Me?',
            answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer adipiscing erat eget risus sollicitudin pellentesque quisque non erat. Maecenas nibh dolor, malesuada et bibendum a, sagittis accumsan ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere ut.'
        }                    
    ],
};

export default withData(FaqV6);