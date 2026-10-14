import NexAnimation from '@nex-components/NexAnimation';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import React from 'react';
import CountUp from 'react-countup';

const AboutV16 = (props) => {
    const style = get(props, 'style', {})
    const tailwindClasses = get(props, 'tailwindClasses', {})
    return (
        <section className={`overflow-hidden py-16 ${get(tailwindClasses,'container')}`}style={get(style,'container')}>
            <div className="max-sm:px-5 px-10 space-y-10">
                <NexAnimation type={get(props,'topContentAnimation')}>
                <div className="flex flex-col items-center text-center">
                    {get(props,'subTitle',"").length !==0 &&<h3 className={`nx-text-primary text-lg uppercase font-semibold ${get(tailwindClasses,'subTitle')}`} style={get(style,'subTitle')}>{get(props,'subTitle')}</h3>}
                    {get(props,'title',"").length !==0 &&<h1 className={`nx-section-heading-font text-4xl font-bold ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h1>}
                    {get(props,'description',"").length !==0 &&<p className={`mt-4 max-w-2xl ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(props,'description')}</p>}
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-${get(props,'counterBoxKey')} gap-6`}>
                    {get(props,'items').map((item)=>
                    (get(item,'counterNum',"").length !==0 || get(item,'counterText').length !==0) && <div className={`p-6 rounded-lg shadow-md text-center ${get(tailwindClasses,'counterBox')}`} style={get(style,'counterBox')}>
                        {get(item,'counterNum',"").length !==0 &&<h2 className={`nx-text-primary text-2xl font-bold ${get(tailwindClasses,'counterNum')}`} style={get(style,'counterNum')}><CountUp end={get(item,'counterNum')} enableScrollSpy/>+</h2>}
                        {get(item,'counterText').length !==0 &&<p className={`${get(tailwindClasses,'counterText')}`} style={get(style,'counterText')}>{get(item,'counterText')}</p>}
                    </div>)}
                </div>
                </NexAnimation>
                {get(props,'image',"").length !==0 &&
                <NexAnimation type={get(props,'bottomContentAnimation')}>
                <div className="flex justify-center mt-10">
                    <NexImage
                        src={get(props,'image')}
                        alt="About Us"
                        className={`!relative rounded-lg shadow-lg ${get(tailwindClasses,'image')}`}
                        style={get(style,'image')}
                    />
                </div>
                </NexAnimation>}
            </div>
        </section>

    )
}

AboutV16.defaultProps={
    style:{
        container:{},
        subTitle:{},
        title:{},
        description:{},
        counterBox:{},
        counterNum:{},
        counterText:{},
        image:{}
    },
    tailwindClasses:{
        container:"",
        subTitle:"",
        title:"",
        description:"",
        counterBox:"",
        counterNum:"",
        counterText:"",
        image:""
    },
    subTitle:"Who We Are",
    title:"Empowering Education with Excellence",
    description:"We are dedicated to providing quality education that shapes the future of students through innovative and interactive learning experiences.",
    image:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1736746483.bg7.jpg",
    counterBoxKey:3,
    topContentAnimation:"",
    bottomContentAnimation:"",
    items:[
        {
            counterNum:"12",
            counterText:"Years of Excellence",
        },
        {
            counterNum:"5000",
            counterText:"Students Trained",
        },
        {
            counterNum:"100",
            counterText:"Certified Educators",
        },
    ]
}
export default AboutV16
