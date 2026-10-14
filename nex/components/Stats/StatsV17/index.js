import NexProgressBar from '@nex-core-ui/NexProgressBar';
import get from 'lodash.get';
import { arrayOf, object, string } from 'prop-types';
import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const StatsV17 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`overflow-hidden bg-[#edf2fc] ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="py-28">
                <div className="flex flex-wrap mx-[-15px] !text-center">
                    <div className="xl:w-11/12 xxl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                        {get(props, 'subTitle',"").length !==0 &&<h2 className={`text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35] ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props, 'subTitle')}</h2>}
                        {get(props, 'title',"").length !==0 &&<h3 className={`text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] mb-10 lg:!px-40 xl:!px-40 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props, 'title')}</h3>}
                        <div className="flex flex-wrap mx-[15px] mt-[-30px] !text-center">
                            {get(props, 'items',[]).map((item) => <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] mt-[30px] max-w-full">
                                {/*  <CircularProgressbar className={`font-bold h-32 ${get(tailwindClasses, "progress")}`} style={get(style, "progress")} value={get(item, 'progressValue')} text={`${get(item, 'progressValue')}%`} styles={buildStyles({ pathColor: `${get(item, 'progressColor')}`, textColor: `${get(item, 'progressTextColor')}`, rotation: 0.52 })} />} */}
                                {get(item, 'progressValue', "").length !== 0 &&<NexProgressBar percent={get(item, 'progressValue')} strokeColor={get(item, 'progressColor')} strokeWidth={4} trailWidth={4} percentTextStyle={{
                                    fontSize:"26px",
                                    fontWeight:"bold",
                                    color:`${get(item, 'progressColor')}`
                                }}/>}
                                {get(item, 'progressTitle',"").length !==0 &&<h4 className={`font-semibold text-xl ${get(tailwindClasses,'progressTitle')}`} style={get(style,'progressTitle')}>{get(item, 'progressTitle')}</h4>}
                                {get(item, 'progressDesc',"").length !==0 &&<p className={`!mb-0 text-gray-600 ${get(tailwindClasses,'progressDesc')}`} style={get(style,'progressDesc')}>{get(item, 'progressDesc')}</p>}
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

StatsV17.propTypes={
        style: object,
        tailwindClasses: object,
        subTitle: string,
        title: string,
        items: arrayOf(object)
}

StatsV17.defaultProps = {
    style:{
        container:{},
        subTitle:{},
        title:{},
        progressTitle:{},
        progressDesc:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        progressTitle:"",
        progressDesc:""
    },
    subTitle: "Company Facts",
    title: "Save your time and money by choosing our professional team.",
    items: [
        {
            progressValue: 75,
            progressColor: "blue",
            progressTextColor: "black",
            progressTitle: "New Visitors",
            progressDesc: "Maecenas faucibus mollis interdum. Aenean eu leo.",
        },
        {
            progressValue: 80,
            progressColor: "green",
            progressTextColor: "black",
            progressTitle: "Social Media",
            progressDesc: "Maecenas faucibus mollis interdum. Aenean eu leo.",
        },
        {
            progressValue: 60,
            progressColor: "red",
            progressTextColor: "black",
            progressTitle: "Referrals",
            progressDesc: "Maecenas faucibus mollis interdum. Aenean eu leo.",
        },
        {
            progressValue: 90,
            progressColor: "orange",
            progressTextColor: "black",
            progressTitle: "Search Engines",
            progressDesc: "Maecenas faucibus mollis interdum. Aenean eu leo.",
        },
    ]
}

export default StatsV17
