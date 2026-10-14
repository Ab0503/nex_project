import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';

const FeatureSectionV24 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <div>
        <div className={`flex flex-col md:flex-row items-center justify-center min-h-screen ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {/* Donation section */}
            <div className={`container max-w-full bg-gray-100 ${get(tailwindClasses, 'image')}`} style ={{background:`url('${get(props,'bgImage')}')`,"backgroundRepeat":"no-repeat","backgroundSize":"cover",...get(style, 'image')}}>
                <div className="grid lg:grid-cols-7 gap-1 md:grid-col-1">
                    {
                    (get(props, 'title',"").length != 0 || get(props, 'subTitle',"").length != 0 || 
                    get(props, 'icon',"").length != 0 || get(props, 'roundBoxText',"").length != 0 ||
                    get(props, 'text',"").length != 0 || get(props, 'menu',"").length != 0 || 
                    get(props, 'submenu1',"").length != 0 || get(props, 'submenu2',"").length != 0 ||
                    get(props, 'submenu3',"").length != 0 || get(props, 'submenu4',"").length != 0 ||
                    get(props, 'ctaLink',"").length != 0) &&
                    (<div className={`bg-orange-600 text-center mt-4 -mb-4 p-6 h-auto rounded-3xl shadow-md lg:col-start-5 lg:col-end-7 md:col-start-1 ${get(tailwindClasses, 'box')}`} style={get(style, 'box')}>
                        {
                            get(props, 'title',"").length != 0 &&
                            <h2 className={`text-3xl font-semibold text-gray-50 mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
                        }
                        {
                            get(props, 'subTitle',"").length != 0 &&
                            <p className={`text-lg text-gray-50 mb-6 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</p>
                        }

                        {/* Input Amount */}
                        {
                        (get(props, 'icon',"").length != 0 || get(props, 'roundBoxText',"").length != 0) &&
                        (<div className={`flex items-center bg-gray-50 p-2 rounded-full mb-4 m-2 ${get(tailwindClasses, 'roundBox')}`} style={get(style, 'roundBox')} >
                        {
                            get(props, 'icon',"").length != 0 &&
                            <span className={`text-black text-xl font-bold ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                            {parse(get(props, "icon"))}
                            </span>
                        }
                        {
                            get(props, 'roundBoxText',"").length != 0 &&
                            <input id="number" className={`w-full text-2xl font-bold p-4 h-2 outline-0  bg-transparent ${get(tailwindClasses, 'roundBoxText')}`}style={get(style, 'roundBoxText')} placeholder={get(props, "roundBoxText")}>
                            </input>
                        }
                        </div>)
                        }

                        {
                            get(props, 'text',"").length != 0 &&
                            <p className={`${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, "text")}</p>
                        }

                        {
                        (get(props, 'menu',"").length != 0 || get(props, 'submenu1',"").length != 0 || get(props, 'submenu2',"").length != 0 ||
                        get(props, 'submenu3',"").length != 0 || get(props, 'submenu4',"").length != 0 )&&
                        (<div className="flex items-center mb-2 p-4">
                            <label htmlFor="Category" className="block text-sm/6 font-medium text-gray-900"></label>
                                <select id="Category" className={`mt-2 block w-full rounded-full border-0 py-4 pl-4 text-gray-900 sm:text-sm/6 focus:outline-none ${get(tailwindClasses, 'roundBox1')}`} style={get(style, 'roundBox1')}>
                                {
                                    get(props, 'menu',"").length != 0 &&
                                    <option>{get(props, "menu")}</option>
                                }
                                {
                                    get(props, 'submenu1',"").length != 0 &&
                                    <option>{get(props, "submenu1")}</option>
                                }
                                {
                                    get(props, 'submenu2',"").length != 0 &&
                                    <option>{get(props, "submenu2")}</option>
                                }
                                {
                                    get(props, 'submenu3',"").length != 0 &&
                                    <option>{get(props, "submenu3")}</option>
                                }
                                {
                                    get(props, 'submenu4',"").length != 0 &&
                                    <option>{get(props, "submenu4")}</option>
                                }
                                </select>
                        </div>)
                        }
                        <div className="text-sm/6 font-medium mb-2 m-6">
                        {
                            get(props, 'ctaLink',"").length != 0 &&
                            <a href="#" className={`inline-flex gap-1 items-center justify-center w-full bg-gray-50 text-orange-500 font-semibold text-sm p-4 rounded-full hover:bg-orange-600 hover:text-white border-2 transition duration-300 ${get(tailwindClasses, 'ctaLink')}`} style={get(style, 'ctaLink')}>
                                {get(props, "ctaLink")}
                                <span className={` ${get(tailwindClasses, 'ctaIcon')}`} style={get(style, 'ctaIcon')}>
                                {parse(get(props, 'ctaIcon'))}
                                </span>
                            </a>
                        }
                        </div>
                    </div>
                    )}
                </div>
            </div>
            
        </div>
    </div>
  )
}
FeatureSectionV24.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
}
FeatureSectionV24.defaultProps = {
    style: {
        container: {},
        image: {},
        box: {},
        title: {},
        subTitle: {},
        roundBox: {},
        icon: {},
        roundBoxText: {},
        text: {},
        roundBox1: {},
        roundBox1Text: {},
        ctaLink: {},
        ctaIcon: {}
    },
    tailwindClasses: {
        container: "",
        image: "",
        box: "",
        title: "",
        subTitle: "",
        roundBox: "",
        icon: "",
        roundBoxText: "",
        text: "",
        roundBox1: "",
        roundBox1Text: "",
        ctaLink: "", 
        ctaIcon: ""
    },
    bgImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297623.2560x1400 - Background Image.png",
    title: "Countribute for differently abled?",
    subTitle: "Do you want Support?",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-9       rounded-md"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" /></svg>`,
    roundBoxText: "2500",
    text: "Humanitarian Aid",
    menu: "Select A Option",
    submenu1: "Children Education",
    submenu2: "Provide Clean Water",
    submenu3: "Medical Camp",
    submenu4: "Nature",
    ctaLink: "Donate Now",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" /></svg>`

}
export default FeatureSectionV24;