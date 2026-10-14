import parse from 'html-react-parser'
import get from 'lodash.get'
import { number, object, string } from 'prop-types'
import React from 'react'
import CountUp from 'react-countup'

const StatsV13 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
  return (
    <section className={`nx-bg-primary-light ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
                  <div className="pt-20 xl:pt-24 lg:pt-28 md:pt-28 pb-16 xl:pb-20 lg:pb-20 md:pb-20">
                    <div className="flex flex-wrap mx-[15px]">
                      <div className="xl:w-10/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        <div className="flex flex-wrap mx-[15px] items-center justify-center counter-wrapper mt-[-30px]">
                          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            <div className={`!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-lg border p-2 ${get(tailwindClasses,'section1Box')}`} style={get(style,'section1Box')}>
                              <div className="flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                <div className="flex flex-row items-center">
                                  {get(props,'icon1','').length !==0 &&<div>
                                    <div className={`text-red-500 bg-red-200 !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] ${get(tailwindClasses,'icon1')}`} style={get(style,'icon1')}> {parse(get(props,'icon1'))} </div>
                                  </div>}
                                  <div>
                                    {get(props,'value1','').length !==0 &&<h3 className={`mb-1 xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none font-bold ${get(tailwindClasses,'value1')}`} style={get(style,'value1')}><CountUp enableScrollSpy end={get(props,'value1')}/></h3>}
                                    {get(props,'text1','').length !==0 &&<p className={`mb-0 text-sm ${get(tailwindClasses,'text1')}`} style={get(style,'text1')}>{get(props,'text1')}</p>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            <div className={`shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-lg border p-2 ${get(tailwindClasses,'section2Box')}`} style={get(style,'section2Box')}>
                              <div className="flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                <div className="flex flex-row items-center">
                                  {get(props,'icon2',"").length !==0 &&<div>
                                    <div className={`text-emerald-500 bg-emerald-200 !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] ${get(tailwindClasses,'icon2')}`} style={get(style,'icon2')}> {parse(get(props,'icon2'))} </div>
                                  </div>}
                                  <div>
                                    {get(props,'value2','').length !==0 &&<h3 className={`mb-1 xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none font-bold ${get(tailwindClasses,'value2')}`} style={get(style,'value2')}><CountUp enableScrollSpy end={get(props,'value2')}/></h3>}
                                    {get(props,'text2','').length !==0 && <p className={`mb-0 text-sm ${get(tailwindClasses,'text2')}`} style={get(style,'text2')}>{get(props,'text2')}</p>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="md:w-6/12 lg:w-4/12 xl:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            <div className={`!shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)] rounded-lg border p-2 ${get(tailwindClasses,'section3Box')}`} style={get(style,'section3Box')}>
                              <div className="flex-[1_1_auto]  pb-4 xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem]">
                                <div className="flex flex-row items-center">
                                  {get(props,'icon3',"").length!==0 &&<div>
                                    <div className={`text-sky-500 bg-sky-200 !mx-auto !mr-4 lg:!mb-3 xl:!mb-0 xl:text-[1.3rem] w-12 h-12 !text-[calc(1.255rem_+_0.06vw)] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] ${get(tailwindClasses,'icon3')}`} style={get(style,'icon3')}> {parse(get(props,'icon3'))} </div>
                                  </div>}
                                  <div>
                                    {get(props,'value3',"").length !==0 &&<h3 className={`!mb-1 xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] tracking-[normal] !leading-none font-bold ${get(tailwindClasses,'value3')}`} style={get(style,'value3')}><CountUp enableScrollSpy end={get(props,'value3')}/></h3>}
                                    {get(props,'text3',"").length !==0 &&<p className={`!mb-0 text-sm ${get(tailwindClasses,'text3')}`} style={get(style,'text3')}>{get(props,'text3')}</p>}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
</section>
  )
}

StatsV13.propTypes={
        style: object,
        tailwindClasses: object,
        icon1: string,
        value1: number,
        text1: string,
        icon2: string,
        value2: number,
        text2: string,
        icon3: string,
        value3: number,
        text3: string,
}
StatsV13.defaultProps={
    style:{
        container:{},
        section1Box:{},
        section2Box:{},
        section3Box:{},
        icon1:{},
        value1:{},
        text1:{},
        icon2:{},
        value2:{},
        text2:{},
        icon3:{},
        value3:{},
        text3:{}
    },
    tailwindClasses:{
        container:"",
        section1Box:"",
        section2Box:"",
        section3Box:"",
        icon1:"",
        value1:"",
        text1:"",
        icon2:"",
        value2:"",
        text2:"",
        icon3:"",
        value3:"",
        text3:""
    },
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>`,
    value1: 3472,
    text1: "Happy Customers",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" /></svg>`,
    value2: 4537,
    text2: "Expert Employees",
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>`,
    value3: 2654,
    text3: "Awards Won",
}
export default StatsV13
