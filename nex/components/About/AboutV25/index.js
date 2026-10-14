import React from "react";
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV25 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const items = get(props, 'items', {});

    return (
        <section className={`overflow-hidden px-8 py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {/* Heading & Description */}
            <div className="text-center max-w-3xl mx-auto">
                {get(props,'title',"").length !==0 &&
                <h2 className={`text-3xl font-bold nx-section-heading-font ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>
                    {get(props,'title')}<span className={`nx-text-primary nx-section-heading-font ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(props,'title1')}</span>
                </h2>
                }
                <div className={`w-20 h-1 nx-bg-primary mx-auto mt-2 mb-6 rounded ${get(tailwindClasses, 'underline')}`} style={get(style, 'underline')}></div>
                {get(props,'subTitle',"").length !==0 &&
                <p className={`text-gray-600 mt-3 text-lg italic ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>
                    {get(props,'subTitle')}
                </p>
                }
            </div>

            {/* Main Content Section */}
            <div className={`flex lg:flex-wrap max-sm:flex-col items-center justify-center mt-8 max-sm:mr-4 ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
                {/* Image Section */}
                {get(props,'imagePath',"").length !==0 &&
                <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                    {/* SVG Blob Shape */}
                    <svg viewBox="0 0 150 150" className="absolute inset-0 w-full h-full">
                        {/* Background Blob */}
                        <clipPath id="blobClip">
                        <path
                            d="M40.5,-66.7C52.5,-60,63.4,-52.3,67.9,-41.4C72.3,-30.5,70.3,-16.3,66.5,-4.8C62.7,6.8,57.1,13.6,54,22.5C50.8,31.3,50.1,42.2,43.1,51.8C36.2,61.4,23.1,69.6,10.1,66.5C-2.9,63.4,-16,49.1,-26.3,37.4C-36.5,25.7,-43.9,16.6,-50.5,5.4C-57,-5.8,-62.7,-19,-59.8,-30.2C-56.9,-41.3,-45.4,-50.4,-34.4,-56.9C-23.4,-63.4,-11.7,-67.2,0.5,-67.8C12.7,-68.4,25.5,-65.8,40.5,-66.7Z"
                            transform="translate(170 170) scale(2.5)"
                        />
                        </clipPath>
                    </svg>

                    {/* Image clipped to the Blob Shape */}
                    <NexImage src={get(props,'imagePath')}
                        alt="Student"
                        className={`absolute inset-0 w-full h-full object-cover ${get(tailwindClasses, 'image')}`}
                        style={{ clipPath: "url(#blobClip)", ...get(style, 'image')}}
                    />
                </div>
                }

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left mt-4 md:-mt-14 md:pl-12">
                    {get(props,'description1',"").length !==0 &&
                    <p className={`text-gray-700 mt-4 text-sm leading-relaxed ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>
                        {get(props,'description1')}
                    </p>
                    }
                    {get(props,'description2',"").length !==0 &&
                    <p className={`text-gray-700 mt-4 text-sm leading-relaxed ${get(tailwindClasses, 'description2')}`} style={get(style, 'description2')}>
                        {get(props,'description2')}
                    </p>
                    }

                    {/* Bullet Points */}
                    {
                        get(props, 'items', []).map((item) =>
                        (get(item,'icon1',"").length !==0 || get(item,'text1',"").length !==0) &&
                        <ul className="inline-flex mt-4 text-gray-800 space-y-2">
                            <span className={`mt-2 ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(item,'icon1'))}</span>
                            <li className={`flex items-center ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(item,'text1')}</li>
                        </ul>
                        )}

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col md:flex-row gap-4">
                        {get(props,'btnText1',"").length !==0 &&
                        <button className={`px-6 py-3 bg-blue-600 text-gray-50 rounded-lg shadow-md hover:bg-blue-700 transition ${get(tailwindClasses, 'btnText1')}`} style={get(style, 'btnText1')}>
                            {get(props,'btnText1')}
                        </button>
                        }
                        {get(props,'btnText2',"").length !==0 &&
                        <button className={`px-6 py-3 nx-btn-primary nx-btn-primary:hover text-gray-50 rounded-lg shadow-md transition ${get(tailwindClasses, 'btnText2')}`} style={get(style, 'btnText2')}>
                            {get(props,'btnText2')}
                        </button>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

AboutV25.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string
}
AboutV25.defaultProps = {
    style: {
        container: {},
        title: {},
        title1: {},
        underline: {},
        subTitle: {},
        contentcontainer: {},
        image: {},
        description1: {},
        description2: {},
        icon1: {},
        text1: {},
        btnText1: {},
        btnLink1: {},
        btnText2: {},
        btnLink2: {}
    },
    tailwindClasses: {
        container: "",
        title: "",
        title1: "",
        underline: "",
        subTitle: "",
        contentcontainer: "",
        image: "",
        description1: "",
        description2: "",
        icon1: "",
        text1: "",
        btnText1: "",
        btnLink1: "",
        btnText2: "",
        btnLink2: ""
    },
    title: "WELCOME TO ",
    title1: "EDU BUDDY",
    subTitle: "We provide great education in town for professional courses. Select the best course for you and start increasing your skillset today!",
    imagePath: "https://builder-config.nexnnova.com/builder-config/prod/web/1/1/img/1742554407.image2.jpg",
    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    btnText1: "ABOUT US",
    btnLink1: "#",
    btnText2: "WHY CHOOSE US",
    btnLink2: "#",
    items:[
        {
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>`,
            text1: "Multi-Purpose, Clean and Modern Design"
        },
        {
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>`,
            text1: "Latest trending UI/UX elements"
        },
        {
            icon1:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>`,
            text1: "Available PSD templates"
        },

    ]
}
export default AboutV25;
