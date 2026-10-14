import NexAnimation from '@nex-components/NexAnimation';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react'

const FeatureSectionV36 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div >
                <div className="flex flex-wrap mx-[15px] mt-5">
                    <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-8/12 lg:!ml-[16.66666667%] xl:w-8/12 xl:!ml-[16.66666667%] w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center">
                        {get(props, 'subTitle', "").length !== 0 && <h2 className={`nx-text-primary text-[.9rem] uppercase mb-3 tracking-[0.02rem] leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                        {get(props, 'title', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2rem] !leading-[1.3] mb-10 xl:!px-10 xxl:!px-2 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                    </div>
                </div>
                <ul className="flex justify-between xl:flex-row lg:flex-row flex-col text-left">
                    {get(props,'items',[]).map((item)=>
                    <NexAnimation type={get(props, 'boxContentAnimation', '')}>
                        <li className={`mb-[30px] px-5 py-6 border rounded-xl !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] xl:mr-9 lg:mr-9 mx-5 hover:translate-y-[-0.15rem] ${get(item,'sectionBgColor')} ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}> 
                        <PrimaryLink className="flex flex-row" href={get(item,'sectionLink')}>
                        {get(item,'icon',"").length !==0 &&<div className={`${get(item,'iconColor')} !mr-4 inline-flex ${get(tailwindClasses,'sectionIcon')}`} style={get(style,'sectionIcon')}>
                            {parse(get(item,'icon'))}
                        </div>}
                        <div>
                            {get(item,'title',"").length !==0 &&<h4 className={`nx-text-primary text-xl font-semibold mb-2 ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(item,'title')}</h4>}
                            {get(item,'text',"").length !==0 &&<p className={`mb-3 text-[1.125rem] text-gray-600 ${get(tailwindClasses,'sectionText')}`} style={get(style,'sectionText')}>{get(item,'text')}</p>}
                        </div>
                        </PrimaryLink> 
                        </li>
                    </NexAnimation>)}
                </ul>
            </div>
        </section>
    )
}

FeatureSectionV36.propTypes={
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title: string,
    items: arrayOf(object)
}

FeatureSectionV36.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        sectionIcon:{},
        sectionTitle:{},
        sectionText:{},
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        sectionIcon:"",
        sectionTitle:"",
        sectionText:"",
    },
    subTitle: "Why Choose Sandbox?",
    title: "Here are a few reasons why our customers choose Sandbox.",
    items:[
        {
            sectionBgColor:"bg-gray-50",
            iconColor:"text-[#fab758]",
            sectionLink:"#",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75 6.75 6.75 0 0 1 7.815-6.666ZM15 6.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" clip-rule="evenodd" /><path d="M5.26 17.242a.75.75 0 1 0-.897-1.203 5.243 5.243 0 0 0-2.05 5.022.75.75 0 0 0 .625.627 5.243 5.243 0 0 0 5.022-2.051.75.75 0 1 0-1.202-.897 3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008Z" /></svg>`,
            title:"Easy Usage",
            text:"Duis mollis commodo luctus cursus commodo tortor mauris.",
        },
        {
            sectionBgColor:"bg-gray-50",
            iconColor:"text-[#45c4a0]",
            sectionLink:"#",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" /></svg>`,
            title:"Fast Transactions",
            text:"Vivamus sagittis lacus augue fusce dapibus tellus nibh.",
        },
        {
            sectionBgColor:"bg-gray-50",
            iconColor:"text-[#e2626b]",
            sectionLink:"#",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
            title:"Secure Payments",
            text:"Vestibulum ligula porta felis maecenas faucibus mollis.",
        },
    ],
    boxContentAnimation: ""
}

export default FeatureSectionV36
