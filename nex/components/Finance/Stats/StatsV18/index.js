import React from 'react';
import get from 'lodash.get';
import CountUp from 'react-countup';
import NexAnimation from '@nex-components/NexAnimation';
import { arrayOf, object } from 'prop-types';

const StatsV18 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <section className={`py-20 px-5 bg-yellow-600 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="flex flex-wrap mx-[15px]">
                <div className="xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                    <div className="flex flex-wrap mx-[15px] items-center mt-[-30px] !text-center">
                        {get(props, 'items', []).map((item) =>
                            <div className={`xl:w-3/12 lg:w-3/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px] ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                                <NexAnimation type={get(props, 'boxAnimation', '')}>
                                    <div className='flex max-sm:flex-col flex-wrap justify-center items-center gap-3'>
                                        {get(item, 'value', "").length !== 0 && <h3 className={`text-5xl tracking-[normal] !leading-none font-normal ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp end={get(item, 'value')} enableScrollSpy />{item.valueIsPercent && "%"}</h3>}
                                        <div>
                                            {get(item, 'text1', "").length !== 0 && <p className={`!mb-0 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text1')}</p>}
                                            {get(item, 'text2', "").length !== 0 && <p className={`!mb-0 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text2')}</p>}
                                        </div>
                                    </div>
                                </NexAnimation>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

StatsV18.propTypes = {
    style: object,
    tailwindClasses: object,
    items: arrayOf(object)
},

StatsV18.defaultProps = {
    style: {
        container:{},
        sectionBox:{},
        value:{},
        text:{}
    },
    tailwindClasses: {
        container:"",
        sectionBox:"",
        value:"",
        text:""
    },
    style: {
        container: {},
        sectionBox: {},
        icon: {},
        value: {},
        text: {}
    },
    tailwindClasses: {
        container: "",
        sectionBox: "",
        icon: "",
        value: "",
        text: ""
    },
    items: [
        {
            value: 321,
            valueIsPercent: false,
            text1: "Cases",
            text2: "completed"
        },
        {
            value: 400,
            valueIsPercent: false,
            text1: "Consultant",
            text2: "worldwide"
        },
        {
            value: 125,
            valueIsPercent: false,
            text1: "Awards",
            text2: "winning",
        },
        {
            value: 100,
            valueIsPercent: true,
            text1: "Satisfied",
            text2: "clients"
        }
    ],
    boxAnimation: ''
}
export default StatsV18
