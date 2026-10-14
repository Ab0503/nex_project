import NexProgressBar from "@nex-core-ui/NexProgressBar";
import get from "lodash.get";
import { number, object, string } from "prop-types";
import React from "react";

const StatsV16 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {})
    return (
        <section className={`py-8 overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-wrap xl:mx-20 mx-[15px] items-center mt-[-40px] ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                <div className="xl:w-7/12 lg:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left mt-[40px]">
                    {get(props, 'subTitle', "").length !== 0 && <h2 className={`text-[0.8rem] tracking-[0.02rem] uppercase nx-text-primary mb-3 leading-[1.35] ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h2>}
                    {get(props, 'title1', "").length !== 0 && <h3 className={`nx-section-heading-font text-[calc(1.325rem_+_0.9vw)] font-bold !leading-[1.25] xl:text-[2rem] !mb-0 xl:pr-10 xxl:!pr-20 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title1')} <span className={`!relative z-[2] after:content-[''] after:absolute after:z-[-1] after:block after:bg-no-repeat after:bg-bottom after:bottom-[-0.1em] after:w-[110%] after:h-[0.3em] after:-translate-x-2/4 after:left-2/4  style-2 yellow ${get(tailwindClasses, 'title2')}`} style={get(style, 'title2')}>{get(props, 'title2')}</span> {get(props, 'title3')}</h3>}
                </div>
                <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[40px]">
                    <div className="flex flex-wrap mx-[15px] mt-[-30px] !text-center">
                        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            {get(props, 'progress1Value', "").length !== 0 && <NexProgressBar percent={get(props, 'progress1Value')} strokeWidth={4} trailWidth={4} strokeColor={get(props, 'progress1Color')} percentTextStyle={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                color: `${get(props, 'progress1Color')}`
                            }} />}
                            {get(props, 'progress1Text', "").length !== 0 && <h4 className={`!mb-0 ${get(tailwindClasses, 'progress1Text')}`} style={get(style, 'progress1Text')}>{get(props, 'progress1Text')}</h4>}
                        </div>
                        <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                            {get(props, 'progress2Value', "").length !== 0 && <NexProgressBar percent={get(props, 'progress2Value')} strokeWidth={4} trailWidth={4} strokeColor={get(props, 'progress2Color')} percentTextStyle={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                color: `${get(props, 'progress2Color')}`
                            }} />}
                            {get(props, 'progress2Text', "").length !== 0 && <h4 className={`!mb-0 ${get(tailwindClasses, 'progress2Text')}`} style={get(style, 'progress2Text')}>{get(props, 'progress2Text')}</h4>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

StatsV16.propTypes = {
    style: object,
    tailwindClasses: object,
    subTitle: string,
    title1: string,
    title2: string,
    title3: string,
    progress1Value: number,
    progress1Text: string,
    progress1Color: string,
    progress1TextColor: string,
    progress2Value: number,
    progress2Text: string,
    progress2Color: string,
    progress2TextColor: string,
}

StatsV16.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        subTitle: {},
        title: {},
        title2: {},
        progress1Text: {},
        progress2Text: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        subTitle: "",
        title: "",
        title2: "",
        progress1Text: "",
        progress2Text: "",
    },
    subTitle: "Save Time and Money",
    title1: "Save your time and money by choosing our",
    title2: "professional",
    title3: "team.",
    progress1Value: 95,
    progress1Text: "Customer Satisfaction",
    progress1Color: "fuchsia",
    progress1TextColor: "black",
    progress2Value: 80,
    progress2Text: "Increased Revenue",
    progress2Color: "orange",
    progress2TextColor: "black",
}
export default StatsV16;
