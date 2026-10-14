import NexAnimation from '@nex-components/NexAnimation';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { arrayOf, object, string } from 'prop-types';
import React from 'react'

const FeatureSectionV31 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                <div className={`flex flex-wrap mx-[15px] xl:mx-16 items-start mt-[-50px] ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
                    <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!sticky lg:!sticky mt-[50px]" style={{ top: "8rem" }}>
                    <NexAnimation type={get(props,'leftContentAnimation')}>
                        {get(props, 'title',"").length !==0 &&<h3 className={`text-[calc(1.345rem_+_1.14vw)] font-bold !leading-[1.25] xl:text-[2.4rem] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h3>}
                        {get(props, 'description',"").length !==0 &&<p className={`!mb-7 text-gray-600 text-[1.2rem] ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                        {get(props,'ctaText',"").length !==0 &&<button className={`px-5 py-4 text-gray-50 bg-[#3f78e0] border-[#3f78e0] hover:text-gray-50 hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(82,92,108,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] rounded-lg mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] font-bold ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                            <PrimaryLink href={get(props,'ctaLink')} className='flex items-center gap-1'>
                                <span>{get(props,'ctaText')}</span>
                                <span>{parse(get(props, 'ctaIcon'))}</span>
                            </PrimaryLink>
                        </button>}
                        </NexAnimation>
                    </div>
                    <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full ml-auto mt-[50px]">
                        {get(props,'items',[]).map((item)=><NexAnimation type={get(props,'rightContentAnimation')}><div className={`rounded-lg  ${get(item,'bgColor')} !mb-6 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                            <div className="flex flex-row p-[40px]">
                                <div>
                                    {get(item,'icon',"").length !==0 &&<span className={`${get(item,'iconColor')} inline-flex mr-5 ${get(tailwindClasses,'sectionIcon')}`} style={get(style,'sectionIcon')}>{parse(get(item,'icon'))}</span>}
                                </div>
                                <div>
                                    {get(item,'title',"").length !==0 &&<h3 className={`text-lg mb-2 font-bold ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(item,'title')}</h3>}
                                    {get(item,'description',"").length !==0 &&<p className={`!mb-0 text-gray-600 ${get(tailwindClasses,'sectionDescription')}`} style={get(style,'sectionDescription')}>{get(item,'description')}</p>}
                                </div>
                            </div>
                        </div>
                        </NexAnimation>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

FeatureSectionV31.propTypes={
    style: object,
    tailwindClasses: object,
    title: string,
    description: string,
    ctaLink: string,
    ctaText: string,
    ctaIcon: string,
    items: arrayOf(object)
}
FeatureSectionV31.defaultProps = {
    style:{
        container:{},
        contentContainer:{},
        title:{},
        description:{},
        cta:{},
        sectionBox:{},
        sectionIcon:{},
        sectionTitle:{},
        sectionDescription:{}
    },
    tailwindClasses:{
        container:"",
        contentContainer:"",
        title:"",
        description:"",
        cta:"",
        sectionBox:"",
        sectionIcon:"",
        sectionTitle:"",
        sectionDescription:""
    },
    title: "The service I offer is specifically designed to meet your needs.",
    description: "Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    ctaLink: "#",
    ctaText: "More Details",
    ctaIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="size-4"><path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>`,
    leftContentAnimation:"",
    rightContentAnimation:"",
    items:[
        {
            bgColor:"bg-[#fdf1f8]",
            iconColor:"text-[#e668b3]",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>`,
            title:"User Research",
            description:"Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit."
        },
        {
            bgColor:"bg-[#eff7fa]",
            iconColor:"text-[#54a8c7]",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" /></svg>`,
            title:"Strategy & Planning",
            description:"Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit."
        },
        {
            bgColor:"bg-[#fdf1f8]",
            iconColor:"text-[#e668b3]",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>`,
            title:"App Design",
            description:"Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit."
        },
        {
            bgColor:"bg-[#eff7fa]",
            iconColor:"text-[#54a8c7]",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" /></svg>`,
            title:"Brand Design",
            description:"Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit."
        },
        {
            bgColor:"bg-[#fdf1f8]",
            iconColor:"text-[#e668b3]",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>`,
            title:"Motion Graphic",
            description:"Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit."
        },
        {
            bgColor:"bg-[#eff7fa]",
            iconColor:"text-[#54a8c7]",
            icon:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" /></svg>`,
            title:"Web Design",
            description:"Duis mollis gravida commodo id luctus erat porttitor ligula, nulla non metus auctor eget lacinia odio sem aget elit."
        },
    ]
}
export default FeatureSectionV31
