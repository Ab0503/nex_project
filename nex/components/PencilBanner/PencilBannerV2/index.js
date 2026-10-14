import React from 'react';
import get from 'lodash.get';
import PropTypes, { object } from 'prop-types';
import Marquee from 'react-fast-marquee';


const PencilBannerV2 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});


    return (
        <div className={`p-2 px-16 font-light nx-bg-primary-light text-sm overflow-hidden ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Marquee speed={70} pauseOnHover={true}>
                <div className={`flex flex-col md:flex-row ${get(tailwindClasses, "contentContainer")}`} style={get(style, 'contentContainer')}>
                   <div className={`mr-10 flex flex-row gap-2 ${get(tailwindClasses, 'text1Container')}`} style={get(style, 'text1Container')}>
                        <p className={`nx-text-primary ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text')}</p>
                    </div>
                </div>
            </Marquee>
        </div>
    )
}

PencilBannerV2.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        text:{},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        text:"",
    },
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti officiis impedit iusto facilis.njnjwnjkwnjkndjkwnjdn" ,

}
PencilBannerV2.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    icon1: PropTypes.string,
    text1: PropTypes.string,
    icon2: PropTypes.string,
    text2: PropTypes.string,
    socials: PropTypes.arrayOf(object)
}
export default PencilBannerV2
