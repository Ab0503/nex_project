import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';
import get from 'lodash.get'
import { object,string } from 'prop-types';
import React from 'react'

const PortfolioV2 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <section className={`${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`md:mx-[20px] xl:mx-[25px]`}>
                {(get(props, 'title', "").length !== 0 || get(props, 'subTitle', "").length !== 0 || get(props,'ctaText',"").length !==0) &&<div className="flex flex-wrap mx-[15px] items-center mb-10">
                    <div className="md:w-8/12 lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:pr-40">
                        {get(props, 'title', "").length !== 0 && <h2 className={`text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[2.4rem] leading-[1.3] !mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h2>}
                        {get(props, 'subTitle', "").length !== 0 && <p className={`lead text-[1.4rem] !leading-[1.6] font-medium mb-0 text-gray-600 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>}
                    </div>
                    <div className="md:w-4/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!ml-auto lg:!ml-auto md:!ml-auto xl:!text-right lg:!text-right md:!text-right mt-5 xl:!mt-0 lg:!mt-0 md:!mt-0">
                        {get(props,'ctaText',"").length !==0 &&<button className={`text-gray-50 bg-[#3f78e0] border-[#3f78e0] hover:text-gray-50 hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-gray-50 disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] !mb-0 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-5 py-3 font-semibold ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}>
                            <PrimaryLink href={get(props,'ctaLink')}>{get(props,'ctaText')}</PrimaryLink>
                        </button>}
                    </div>
                </div>}
                <div className={`rounded-xl mx-[15px] bg-[#edf2fc] mb-10 ${get(tailwindClasses,'sectionBox')}`} style={get(style,'sectionBox')}>
                    <div className="p-14 max-sm:p-5">
                        <div className={`flex flex-wrap mx-[15px] mt-[-50px] items-center ${get(tailwindClasses,'sectionContainer')}`} style={get(style,'sectionContainer')}>
                            <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:!order-2 lg:!order-2 mt-[50px]">
                            {get(props,'sectionSubTitle',"").length!==0 &&<div className={`uppercase tracking-[0.02rem] text-[0.9rem] font-bold mb-3 text-[#3f78e0] ${get(tailwindClasses,'sectionSubTitle')}`} style={get(style,'sectionSubTitle')}>{get(props,'sectionSubTitle')}</div>}
                                {get(props,'sectionTitle',"").length !==0 &&<h3 className={`text-3xl !mb-3 !leading-[1.3] font-bold ${get(tailwindClasses,'sectionTitle')}`} style={get(style,'sectionTitle')}>{get(props,'sectionTitle')}</h3>}
                                {get(props,'sectionDescription',"").length !==0 &&<p className={`mb-3 text-lg text-gray-600 ${get(tailwindClasses,'sectionDescription')}`} style={get(style,'sectionDescription')}>{get(props,'sectionDescription')}</p>}
                                {get(props,'sectionCtaText',"").length !==0 &&<button className={`text-[#3f78e0] focus:text-[#3f78e0] hover:text-[#3f78e0] hover:underline font-bold text-lg ${get(tailwindClasses,'sectionCta')}`} style={get(style,'sectionCta')}>
                                <PrimaryLink className='flex items-center gap-1' href={get(props,'sectionCtaLink')} >
                                    <span>{get(props,'sectionCtaText')}</span>
                                    <span>{parse(get(props,'sectionCtaIcon'))}</span>
                                    </PrimaryLink>
                                </button>}
                            </div>
                            <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[50px]">
                                {get(props,'sectionImage',"").length !==0 &&<figure className="m-0 p-0"><NexImage className={`!relative !max-w-full !h-auto ${get(tailwindClasses,'sectionImage')}`} style={get(style,'sectionImage')} src={get(props,'sectionImage')} /></figure>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

PortfolioV2.propTypes={
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
    ctaLink: string,
    ctaText: string,
    sectionImage: string,
    sectionSubTitle: string,
    sectionTitle: string,
    sectionDescription: string,
    sectionCtaLink: string,
    sectionCtaText: string,
    sectionCtaIcon: string,
}

PortfolioV2.defaultProps = {
    style:{
        container:{},
        title:{},
        subTitle:{},
        cta:{},
        sectionBox:{},
        sectionContainer:{},
        sectionSubTitle:{},
        sectionTitle:{},
        sectionDescription:{},
        sectionCta:{},
        sectionImage:{}
    },
    tailwindClasses:{
        container:"",
        title:"",
        subTitle:"",
        cta:"",
        sectionBox:"",
        sectionContainer:"",
        sectionSubTitle:"",
        sectionTitle:"",
        sectionDescription:"",
        sectionCta:"",
        sectionImage:""
    },
    title: "Latest Projects",
    subTitle: "Check out some of my latest projects with creative ideas.",
    ctaLink:"#",
    ctaText:"See All Projects",
    sectionImage:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736489517.f2.png",
    sectionSubTitle:"Mobile Design",
    sectionTitle:"Budget App",
    sectionDescription:"Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.",
    sectionCtaLink:"#",
    sectionCtaText:"See Project",
    sectionCtaIcon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
  <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
</svg>
`,
}

export default PortfolioV2