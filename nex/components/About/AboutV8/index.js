import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV8 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
  return (
    <div>
    <section id="snippet-8" className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-28 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] xsm:mt-[-50px] mt-[-80px] md:mx-[20px] xl:mx-[35px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[80px]">
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-12.5px] lg:mx-[-12.5px] md:mx-[-12.5px] mt-[-25px]">
              <div className="w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                <NexAnimation  type={get(props, 'Image1ContentAnimation', '')}>
                <figure className="rounded-[.4rem] xl:mx-5 lg:mx-5 md:mx-5">
                {
                    get(props, 'imagePath1', "").length != 0 &&
                    <NexImage className={`rounded-[.4rem] !relative ${get(tailwindClasses, 'image1')}`} style={get(style, 'image1')} src={get(props, "imagePath1")}/>
                }
                </figure>
                </NexAnimation>
              </div>
            
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                <NexAnimation  type={get(props, 'Image2ContentAnimation', '')}>
                <figure className="rounded-[0.4rem]">
                {
                    get(props, 'imagePath2', "").length != 0 &&
                    <NexImage className={`rounded-[0.4rem] !relative ${get(tailwindClasses, 'image2')}`} style={get(style, 'image2')} src={get(props, "imagePath2")}/>
                }
                </figure>
                </NexAnimation>
              </div>
            
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] xl:px-[12.5px] lg:px-[12.5px] md:px-[12.5px] px-[15px] max-w-full mt-[25px]">
                <NexAnimation  type={get(props, 'Image3ContentAnimation', '')}>
                <figure className="rounded-[0.4rem]">
                {
                    get(props, 'imagePath3', "").length != 0 &&
                    <NexImage className={`rounded-[0.4rem] !relative ${get(tailwindClasses, 'image3')}`} style={get(style, 'image3')} src={get(props, "imagePath3")}/>
                }
                </figure>
                </NexAnimation>
              </div>
            </div>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[80px]">
          <NexAnimation  type={get(props, 'TextContentAnimation', '')}>
            {
                get(props, 'subtitle', "").length != 0 &&
                <h2 className={`nx-text-primary text-[1.06rem] tracking-[0.02rem] uppercase mb-3 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, "subTitle")}</h2>
            }
            {
                get(props, 'title', "").length != 0 &&
                <h3 className={`nx-section-heading-font text-[calc(1.325rem_+_0.9vw)] font-bold leading-[1.25] xl:text-[2.6rem] mb-10 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")} 
                <span className={`nx-section-heading-font relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4  style-2 yellow ${get(tailwindClasses, 'span')}`} style={get(style, 'span')}>{get(props, "span")}</span>
                {get(props, "titles")}
                </h3>
            }
            <div className="flex flex-wrap mx-[15px] mt-[-40px]">
            {
              get(props, 'items', []).map((item) =>  
              <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                <div className="flex flex-row">
                  <div>
                    {
                        get(item, 'icon1', "").length != 0 &&
                        <span className={`nx-text-primary w-[1.8rem] h-[1.8rem] solid-mono text-fuchsia mr-10 ${get(tailwindClasses, 'icon1')}`} style={get(style, 'icon1')}>{parse(get(item, "icon1"))}</span>
                    }
                    </div>
                  <div>
                    {
                        get(item, 'title1', "").length != 0 &&
                        <h4 className={`mb-1 xl:text-[1.4rem] font-bold ${get(tailwindClasses, 'title1')}`} style={get(style, 'title1')}>{get(item, "title1")}</h4>
                    }
                    {
                        get(item, 'description1', "").length != 0 &&
                        <p className={`mb-0 ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(item, "description1")}</p>
                    }
                    </div>
                </div>
              </div>
            )}
            </div>
          </NexAnimation>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
AboutV8.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string
  }
  AboutV8.defaultProps = {
    style: {
        container: {},
        contentcontainer: {},
        image1: {},
        image2: {},
        image3: {},
        subTitle: {},
        title: {},
        span: {},
        icon1: {},
        title1: {},
        description1: {}
    },
    tailwindClasses: {
        container: "",
        contentcontainer: "",
        image1: "",
        image2: "",
        image3: "",
        subTitle: "",
        title: "",
        span: "",
        icon1: "",
        title1: "",
        description1: ""
    },
    Image1ContentAnimation: "",
    Image2ContentAnimation: "",
    Image3ContentAnimation: "",
    TextContentAnimation: "",
    subTitle: "What Makes Us Different?",
    title: "We bring", 
    span: " solutions",
    titles: " to make life easier for our customers.",
    imagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735237982.575x300.png",
    imagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735238065.300x260.png",
    imagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735238121.300x240.png",
    items:[
        {
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="pink" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>`,
            title1: "Creativity",
            description1: "Curabitur blandit lacus porttitor ridiculus mus."
        },
        {
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="purple" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>`,
            title1: "Innovative Thinking",
            description1: "Curabitur blandit lacus porttitor ridiculus mus."
        },
        {
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                </svg>`,
            title1: "Rapid Solutions",
            description1: "Curabitur blandit lacus porttitor ridiculus mus."
        },
        {
            icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>`,
            title1: "Top-Notch Support",
            description1: "Curabitur blandit lacus porttitor ridiculus mus."
        }
    ],
}
export default AboutV8;