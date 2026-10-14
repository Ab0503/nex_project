import React from 'react';
import get from 'lodash.get';
import { object, string } from 'prop-types';

const AboutV23 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`px-5 sm:px-20 py-10 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
            <div className={`relative max-w-6xl mx-auto py-20 px-5 md:px-20 ${get(tailwindClasses, 'imageContainer')}`} style={{ backgroundImage: `url(${get(props, 'image')})`, backgroundSize: "cover", ...get(style, 'imageContainer') }}>
                <div className={`max-w-md px-5 sm:px-10 py-14 bg-yellow-600/75 text-white ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    {get(props, 'title','').length !==0 &&<h1 className={`text-2xl nx-section-heading-font sm:text-3xl font-bold mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                    {get(props, 'text1','').length !==0 &&<p className={`text-lg sm:text-xl font-semibold ${get(tailwindClasses, 'text1')}`} style={get(style,'text1')}>{get(props, 'text1')}</p>}
                    {get(props, 'text2','').length !==0 &&<p className={`${get(tailwindClasses,'text2')}`} style={get(style,'text2')}>{get(props, 'text2')}</p>}
                </div>
            </div>
        </section>
    )
}

AboutV23.propTypes = {
    style: object,
    tailwindClasses: object,
    image: string,
    title: string,
    text1: string,
    text2: string
},

AboutV23.defaultProps = {
    style: {
        container:{},
        imageContainer:{},
        sectionBox:{},
        title:{},
        text1:{},
        text2:{}
    },
    tailwindClasses: {
        container:"",
        imageContainer:"",
        sectionBox:"",
        title:"",
        text1:"",
        text2:""
    },
    image: "https://images.pexels.com/photos/5862378/pexels-photo-5862378.jpeg?auto=compress&cs=tinysrgb&w=2100&h=700&fit=crop&crop=faces&dpr=1",
    title: `“We have the capabilities and experience to deliver the answers you need to move forward.”`,
    text1: "Simon Northampton",
    text2: "Managing Director, New York Office"
}
export default AboutV23
