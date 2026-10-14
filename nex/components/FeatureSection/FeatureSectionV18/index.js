import React from "react";
import get from "lodash.get";
import parse from "html-react-parser/lib/index";
import { PropTypes, object } from 'prop-types';


const FeatureSectionV18 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});

    return (
        <div className={`bg-green-700 bg-cover bg-no-repeat ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, 'bgImage')})`, ...get(style, 'container') }}>
            <div className={`mx-40 max-lg:mx-10 max-md:mx-10 max-sm:mx-0 p-5`} >
                <div className={`grid grid-cols-6 max-md:grid-cols-1 gap-4 `} >
                    <div className={`col-span-3 flex flex-col justify-between text-gray-50 m-2 ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                        {get(props, 'subTitle').length !== 0 && <h1 className={`text-xs font-semibold m-2 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                        {get(props, 'title').length !==0 && <h1 className={`text-4xl font-bold m-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                        <div className="">
                            {get(props, 'socialText').length !== 0 && <h1 className={`text-sm font-bold m-2 ${get(tailwindClasses, 'socialText')}`} style={get(style, 'socialText')}>{get(props, 'socialText')}</h1>}
                            <div className={`flex gap-3 m-2`}>
                                {props.icons.map((item) =>
                                    <a
                                        href={get(item, "url")}
                                        className={`text-gray-50 hover:text-yellow-400 ${get(tailwindClasses, 'socialIcons')}`}
                                        style={{ ...get(style, 'socialIcons') }}
                                    >
                                        <span className="sr-only">Facebook</span>
                                        {get(item, 'icon').length !== 0 && <div aria-hidden="true" className="h-6 w-6" >
                                            {parse(get(item, 'icon'))}
                                        </div>}
                                    </a>)}
                            </div>
                        </div>
                        <p className={`font-light text-md m-2 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                            {get(props, 'description')}
                        </p>
                        {(get(props, 'boxValue1').length !== 0 || get(props, 'boxValue2').length !== 0 || get(props, 'boxValue3').length !== 0 || get(props, 'boxTitle1').length !== 0 || get(props, 'boxTitle2').length !== 0 || get(props, 'boxTitle3').length !== 0)&&<div className={`flex justify-around border rounded-xl m-2 p-3`}>
                            {(get(props, 'boxValue1').length !==0 ||  get(props, 'boxTitle1').length !== 0)&& (<div>
                                {get(props, 'boxTitle1').length !== 0 &&<p className={`text-yellow-400 font-bold ${get(tailwindClasses, 'boxTitle')}`} style={get(style, 'boxTitle')}>{get(props, 'boxTitle1')}</p>}
                                {get(props, 'boxValue1').length !== 0 && <p className={`text-lg font-bold ${get(tailwindClasses, 'boxValue')}`} style={get(style, 'boxValue')}>{get(props, 'boxValue1')}</p>}
                            </div>)}
                            {(get(props, 'boxValue2').length !== 0 || get(props, 'boxTitle2').length !== 0) && (<div>
                                {get(props, 'boxTitle2').length !== 0 && <p className={`text-yellow-400 font-bold ${get(tailwindClasses, 'boxTitle')}`} style={get(style, 'boxTitle')}>{get(props, 'boxTitle2')}</p>}
                                {get(props, 'boxValue2').length !== 0 && <p className={`text-lg font-bold ${get(tailwindClasses, 'boxValue')}`} style={get(style, 'boxValue')}>{get(props, 'boxValue2')}</p>}
                            </div>)}
                            {(get(props, 'boxValue3').length !== 0 || get(props, 'boxTitle3').length !== 0) && (<div>
                                {get(props, 'boxTitle3').length !== 0 && <p className={`text-yellow-400 font-bold ${get(tailwindClasses, 'boxTitle')}`} style={get(style, 'boxTitle')}>{get(props, 'boxTitle3')}</p>}
                                {get(props, 'boxValue3').length !== 0 && <p className={`text-lg font-bold ${get(tailwindClasses, 'boxValue')}`} style={get(style, 'boxValue')}>{get(props, 'boxValue3')}</p>}
                            </div>)}
                        </div>}
                    </div>
                    {(get(props, 'sectionTitle').length !== 0 || get(props, 'sectionDescription').length !==0 || get(props,'inputPlaceholderText').length !==0 || get(props, 'ctaText').length !== 0) && <div className={`bg-gray-50 col-span-2 flex flex-col justify-center text-black rounded-xl border-b-8 border-b-yellow-400 p-5 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                        {get(props, 'sectionTitle').length !== 0 && <h1 className={`text-center font-bold text-lg ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'sectionTitle')}</h1>}
                        {get(props, 'sectionDescription').length !==0 && <p className={`text-center font-light text-sm ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>
                            {get(props, 'sectionDescription')}
                        </p>}
                        {props.items.map((item, index) => get(item,'menuText').length !==0 &&(
                            <div key={index}>
                            <div className="my-3 grid grid-cols-1">
                              <select
                                id="location"
                                name="location"
                                defaultValue={get(item,'menuText')}
                                className={`text-center text-sm rounded-full col-start-1 row-start-1 w-full appearance-none bg-gray-300 py-1.5 pl-3 pr-8 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 sm:text-sm/6 text-gray-500 ${get(tailwindClasses,'menuText')}`} style={get(style,'menuText')}>
                                <option>{get(item,'menuText')}</option>
                                <option>{get(item,'text1')}</option>
                                <option>{get(item,'text2')}</option>
                                <option>{get(item,'text3')}</option>
                              </select>
                            </div>
                          </div>
                        ))}
                        {get(props,'inputPlaceholderText').length !==0 &&<input className={`text-center text-sm rounded-full my-3 px-4 py-2 border-none bg-gray-300 ${get(tailwindClasses, 'inputBox')}`} style={get(style, 'inputBox')} type="text" name="" id="" placeholder={get(props,'inputPlaceholderText')} />}
                        {get(props, 'ctaText').length !== 0 && <button className={`bg-green-700 hover:bg-green-900 text-white rounded-full p-3 my-2 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}><a href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</a></button>}
                    </div>}
                </div>
            </div>
        </div>
    );
};

FeatureSectionV18.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        socialText: {},
        socialIcons:{},
        description: {},
        boxTitle: {},
        boxValue: {},
        sectionBox: {},
        sectionTitle: {},
        sectionDescription: {},
        menuText: {},
        inputBox: {},
        cta: {}
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        socialText: "",
        socialIcons:"",
        description: "",
        boxTitle: "",
        boxValue: "",
        sectionBox: "",
        sectionTitle: "",
        sectionDescription: "",
        menuText: "",
        inputBox: "",
        cta: ""
    },
    bgImage: "",
    subTitle: "Worldwide Issues",
    title: "Support Us Through Your Donations",
    socialText: "Share Social Media",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Explicabo inventore numquam adipisci eligendi voluptates, cumque ipsa necessitatibus est corporis rerum nisi porro odit. Sit perferendis alias error, dolor dicta, fugiat quam incidunt officiarepellendus aliquid iure culpa est sunt deserunt.",
    boxTitle1: "Goal",
    boxValue1: "$12,000",
    boxTitle2: "Raised",
    boxValue2: "$9,000",
    boxTitle3: "To Go",
    boxValue3: "$6,000",
    sectionTitle: "Where Would You Like To Give?",
    sectionDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur similique excepturi accusantium provident cumque optio.",
    ctaLink:"#",
    ctaText: "Donate Now",
    inputPlaceholderText:"Custom Amount Pay",
    items: [
        {
            menuText: "Category1",
            text1: "item1",
            text2: "item2",
            text3: "item3",


        },
        {
            menuText: "Category2",
            text1: "item1",
            text2: "item2",
            text3: "item3",
        },
        {
            menuText: "Category3",
            text1: "item1",
            text2: "item2",
            text3: "item3",
        },
    ],
    icons: [
        {
            url: "https://facebook.com",
            icon: `<svg fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>`
        },
        {
            url: "https://facebook.com",
            icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                      <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                    </svg>`
        },
        {
            url: "https://facebook.com",
            icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                      <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                      />
                    </svg>`
        },
        {
            url: "https://facebook.com",
            icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>`
        },
    ],
};
FeatureSectionV18.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    bgImage: PropTypes.string,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    socialText: PropTypes.string,
    description: PropTypes.string,
    boxTitle1: PropTypes.string,
    boxValue1: PropTypes.string,
    boxTitle2: PropTypes.string,
    boxValue2: PropTypes.string,
    boxTitle3: PropTypes.string,
    boxValue3: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    ctaText: PropTypes.string,
    items: PropTypes.arrayOf(object),
    icons: PropTypes.arrayOf(object)
};

export default FeatureSectionV18;
