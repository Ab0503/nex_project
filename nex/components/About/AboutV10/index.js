import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import CountUp from 'react-countup';
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';
import NexAnimation from '@nex-components/NexAnimation';

const AboutV10 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div>
    <section className={`overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="pt-20 xl:pt-24 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
        <div className={`flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[30px] mt-[-30px] items-center ${get(tailwindClasses, 'contentcontainer')}`} style={get(style, 'contentcontainer')}>
          <div className="md:w-8/12 lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mx-auto mt-[30px]">
            <div className={`img-mask mask-1`}>
              {
                get(props, 'imagePath',"").length != 0 &&
              <NexAnimation  type={get(props, 'ImageContentAnimation', '')}>
                <ImageOrVedio 
                  className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} 
                  src={get(props, "imagePath")}
                  vedioSrc={get(props, "vedioPath")}
                  />
             </NexAnimation>
             }
            </div>
          </div>
          <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] max-w-full mt-[30px]">
          <NexAnimation  type={get(props, 'TopRightContentAnimation', '')}>
          {
            get(props, 'title',"").length != 0 &&
            <h2 className={`nx-section-heading-font text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[2.1rem] leading-[1.3] mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, "title")}</h2>
          }
          {
            get(props, 'description',"").length != 0 &&
            <p className={`mb-6 xl:text-[1.1rem] ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, "description")}</p>
          }
            <div className="flex flex-wrap mx-[-15px] counter-wrapper mt-[-30px]">
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
              {
                get(props, 'num1Text1',"").length != 0 &&
                <h3 className={`nx-text-primary counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold tracking-[normal] leading-none mb-2 ${get(tailwindClasses, 'num1Text1')}`} style={get(style, 'num1Text1')}><CountUp end={get(props, "num1Text1")} enableScrollSpy/>K+</h3>
              }
              {
                get(props, 'text1',"").length != 0 &&
                <p className={`text-[1.1rem] font-medium mb-0 ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props, "text1")}</p>
              }
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
              {
                get(props, 'num1Text2',"").length != 0 &&
                <h3 className={`nx-text-primary counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold tracking-[normal] leading-none mb-2 ${get(tailwindClasses, 'num1Text2')}`} style={get(style, 'num1Text2')}><CountUp end={get(props, "num1Text2")} enableScrollSpy/>+</h3>
              }
              {
                get(props, 'text2',"").length != 0 &&
                <p className={`text-[1.1rem] font-medium mb-0 ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props, "text2")}</p>
              }
              </div>
              <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
              {
                get(props, 'num1Text3',"").length != 0 &&
                <h3 className={`nx-text-primary counter xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-bold tracking-[normal] leading-none mb-2 ${get(tailwindClasses, 'num1Text3')}`} style={get(style, 'num1Text3')}><CountUp end={get(props, "num1Text3")} enableScrollSpy/></h3>
              }
              {
                get(props, 'text3',"").length != 0 &&
                <p className={`text-[1.1rem] font-medium mb-0 ${get(tailwindClasses, 'text3')}`} style={get(style, 'text3')}>{get(props, "text3")}</p>
              }
              </div>
            </div>
          </NexAnimation>
          </div>
        </div>
        <NexAnimation  type={get(props, 'BottomContentAnimation', '')}>
        <div className="flex flex-wrap mx-[15px] md:mx-[20px] lg:mx-[20px] xl:mx-[35px] mt-8">
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
          {
            get(props, 'subTitle1',"").length != 0 &&
            <h3 className={`nx-text-primary xl:text-[1.5rem] mb-3 ${get(tailwindClasses, 'subTitle1')}`} style={get(style, 'subTitle1')}>{get(props, "subTitle1")}</h3>
          }
          {
            get(props, 'description1',"").length != 0 &&
            <p className={`xl:text-[1.02rem] ${get(tailwindClasses, 'description1')}`} style={get(style, 'description1')}>{get(props, "description1")}</p>
          }
            <div className="px-4 md:px-20 grid justify-center gap-6 p-4 mb-2">
                    <div>
                        {get(props, "items", []).map((item) => (
                                            <div className="px-4 md:px-20 grid justify-center gap-6 p-4">
                                              <div>
                                                <div key={get(item, "text", "")}>
                                                  <span> </span>
                                                  <div className="flex justify-between mb-2">
                                                    <p
                                                      className={get(tailwindClasses, "text", "")}
                                                      style={get(style, "text", {})}
                                                    >
                                                      {get(item, "text", "")}
                                                    </p>
                                                    <span></span>
                                                    <p
                                                      className={get(tailwindClasses, "stat", "")}
                                                      style={get(style, "stat", {})}
                                                    >
                                                      {get(item, "stat", "")}
                                                    </p>
                                                  </div>
                                                  <div className="w-80 bg-gray-200 rounded-full h-2">
                                                    <span>
                                                      {" "}
                                                      <div
                                                        className="bg-blue-500 h-2 rounded-full"
                                                        style={{
                                                          background: get(item, "color", "whitesmoke"),
                                                          width: `${get(item, "percentage", "")}%`,
                                                        }}
                                                      />{" "}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                    </div>
                </div>
          </div>
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
          {
            get(props, 'subTitle2',"").length != 0 &&
            <h3 className={`nx-text-primary xl:text-[1.5rem] mb-3 ${get(tailwindClasses, 'subTitle2')}`} style={get(style, 'subTitle2')}>{get(props, "subTitle2")}</h3>
          }
          {
            get(props, 'description2',"").length != 0 &&
            <p className={`xl:text-[1.03rem] ${get(tailwindClasses, 'description2')}`} style={get(style, 'description2')}>{get(props, "description2")}</p>
          }
            <ul className="pl-0 list-none bullet-bg bullet-soft-primary mt-6 mb-0">
            {
                get(props, 'items1', []).map((item) =>
                <li className="relative pl-6 mt-[0.45rem]">
                  {
                    get(item, 'col2Icon',"").length != 0 &&
                    <span className={`absolute nx-text-primary left-0 w-5 h-5 text-[0.8rem] leading-none tracking-[normal] text-center flex items-center justify-center bg-[#dce7f9] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell ${get(tailwindClasses, 'col2Icon')}`} style={get(style, 'col2Icon')}>{parse(get(item, "col2Icon"))}</span>
                  }
                  {
                    get(item, 'col2Text',"").length != 0 &&
                    <h2 className={`text-[1.08rem] ml-2 ${get(tailwindClasses, 'col2Text')}`} style={get(style, 'col2Text')}>{get(item, "col2Text")}</h2>
                  }
                </li>
            )}
            </ul>
          </div>
          <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[30px]">
          {
            get(props, 'subTitle3',"").length != 0 &&
            <h3 className={`nx-text-primary xl:text-[1.5rem] ${get(tailwindClasses, 'subTitle3')}`} style={get(style, 'subTitle3')}>{get(props, "subTitle3")}</h3>
          }
            {
                get(props, 'items2', []).map((item) =>
                <div className="flex flex-row mt-3 mb-5">
                  <div className="text-gray-50 focus:shadow-[rgba(92,140,229,1)] active:text-gray-50 active:bg-[#3f78e0] active:border-[#3f78e0] mr-4 mt-1">
                  {
                    get(item, 'col3Text',"").length != 0 &&
                    <span className={`nx-bg-primary w-[2.2rem] h-[2.2rem] inline-flex items-center justify-center number text-[0.9rem] text-center font-bold p-4 mx-auto my-0 rounded-full ${get(tailwindClasses, 'col3Text')}`} style={get(style, 'col3Text')}>{get(item,"col3Text")}</span>
                  }
                  </div>
                  <div>
                  {
                    get(item, 'col3Text1',"").length != 0 &&
                    <h5 className={`mb-1 text-[1.2rem] font-bold ${get(tailwindClasses, 'col3Text1')}`} style={get(style, 'col3Text1')}>{get(item, "col3Text1")}</h5>
                  }
                  {
                    get(item, 'col3Text2',"").length != 0 &&
                    <p className={`mb-0 text-[1.09rem]${get(tailwindClasses, 'col3Text2')}`} style={get(style, 'col3Text2')}>{get(item, "col3Text2")}</p>
                  }
                  </div>
                </div>
                )
            }
          </div>
        </div>
        </NexAnimation>
      </div>
    </section>
    </div>
  )
}
AboutV10.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    subTitle: string,
  }
  AboutV10.defaultProps = {
    style: {
        container: {},
        contentcontainer: {},
        image: {},
        title: {},
        description: {},
        num1Text1: {},
        num1Text2: {},
        num1Text3: {},
        text1: {},
        text2: {},
        text3: {},
        subTitle1: {},
        description1: {},
        col1Text1:{},
        col1Text2: {},
        col1Text3: {},
        col1Text4: {},
        subTitle2: {},
        description2: {},
        col2Icon: {},
        col2Text: {},
        subTitle3: {},
        col3Icon:{},
        col3Text: {},
        col3Text1: {},
        col3Text2: {}
    },
    tailwindClasses: {
        container: "",
        contentcontainer: "",
        image: "",
        title: "",
        description: "",
        numText1: "",
        numText2: "",
        subTitle1: "",
        description1: "",
        subTitle2: "",
        description2: "",
        col2Icon: "",
        col2Text: "",
        subTitle3: "",
        col3Icon:"",
        col3Text: "",
        col3Text1: "",
        col3Text2: ""
    },
    ImageContentAnimation: "",
    TopRightContentAnimation:"",
    BottomContentAnimation: "",
    title: "Hi, I'm Julia, a documentary wedding and couples photographer currently working from and based in London.",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio. Sed posuere consectetur est at lobortis facilisis in.",
    num1Text1: 500,
    text1: "Shots Taken",
    num1Text2: 500,
    text2: "Happy Clients",
    num1Text3: 25,
    text3: "Awards Won",
    subTitle1: "My Skills",
    description1: "Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna vel consectetur purus sit amet fermentum.",
    subTitle2: "Why Choose Me?",
    description2: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Nullam id dolor id nibh ultricies. Cras mattis consectetur purus amet fermentum.",
    subTitle3: "My Process",
    imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735276283.620x620.png",
    vedioPath: "https://cdn.pixabay.com/video/2022/11/18/139550-772542748_tiny.mp4",
    items: [
      {
        text: "PhotoShop",
        stat: "100%",
        percentage: "100",
        color: "sky blue"
      },
      {
        text: "Final Cut",
        stat: "90%",
        percentage: "90",
        color: "sky blue"
      },
      {
        text: "Motion Video",
        stat: "80%",
        percentage: "80",
        color: "sky blue"
      },
      {
        text: "Manipulation",
        stat: "70%",
        percentage: "70",
        color: "sky blue"
      }
    ],
    items1:[
        {
            col2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            col2Text: "Aenean eu leo quam pellentesque."
        },
        {
            col2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            col2Text: "Nullam quis risus eget urna mollis."
        },
        {
            col2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            col2Text: "Donec id elit non mi porta gravida."
        },
        {
            col2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            col2Text: "Fusce dapibus tellus ac commodo."
        },
        {
            col2Icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>`,
            col2Text: "Cras justo odio dapibus ac facilisis in."
        }
    ],
    items2:[
        {
            col3Text: "1",
            col3Text1: "Collect Ideas",
            col3Text2: "Nulla vitae elit libero pharetra augue dapibus. Praesent commodo cursus."
        },
        {
            col3Text: "2",
            col3Text1: "Data Analysis",
            col3Text2: "Vivamus sagittis lacus vel augue laoreet. Etiam porta sem malesuada magna."
        },
        {
            col3Text: "3",
            col3Text1: "Finalize Product",
            col3Text2: "Cras mattis consectetur purus sit amet. Aenean lacinia bibendum nulla sed."
        }
    ]
}
export default AboutV10;