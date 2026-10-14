import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const AboutV19 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});
  return (
    <section className={`px-5 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className={`flex flex-wrap mb-5 ${get(tailwindClasses,'contentContainer')}`} style={get(style,'contentContainer')}>
        <div className='w-full lg:w-6/12 max-lg:mb-5 lg:pl-5'>
          {get(props, 'mainTitle','').length !==0 &&<h4 className={`text-4xl font-bold text-left nx-section-heading-font max-w-md mb-5 ${get(tailwindClasses, 'mainTitle')}`} style={get(style, 'mainTitle')}>{get(props, 'mainTitle')}</h4>}
          {get(props, 'mainDescription1','').length !==0 &&<p className={`mb-8 max-w-xl ${get(tailwindClasses, 'mainDescription')}`} style={get(style, 'mainDescription')}>{get(props, 'mainDescription1')}</p>}
          {get(props, 'mainDescription2','').length !==0 &&<p className={`mb-5 max-w-xl ${get(tailwindClasses, 'mainDescription')}`} style={get(style, 'mainDescription')}>{get(props, 'mainDescription2')}</p>}
          {get(props, 'mainText','').length !==0 &&<span className={`uppercase font-semibold nx-text-primary ${get(tailwindClasses, 'mainText')}`} style={get(style, 'mainText')}>{get(props, 'mainText')}</span>}
        </div>
        <div className='w-full lg:w-6/12'>
          {get(props, 'image','').length !==0 &&<NexImage src={get(props, 'image')} className={`!relative ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
        </div>
      </div>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-6/12 max-lg:mb-5 lg:pl-5'>
          {get(props, 'leftTitle','').length !==0 &&<h4 className={`text-4xl font-bold text-left nx-section-heading-font max-w-md mb-5 ${get(tailwindClasses, 'leftTitle')}`} style={get(style, 'leftTitle')}>{get(props, 'leftTitle')}</h4>}
          {get(props, 'leftDescription1','').length !==0 &&<p className={`mb-5 max-w-xl ${get(tailwindClasses, 'leftDescription')}`} style={get(style, 'leftDescription')}>{get(props, 'leftDescription1')}</p>}
          {get(props, 'leftDescription2','').length !==0 &&<p className={`max-w-xl ${get(tailwindClasses, 'leftDescription')}`} style={get(style, 'leftDescription')}>{get(props, 'leftDescription2')}</p>}
        </div>
        <div className='w-full lg:w-6/12'>
          {get(props, 'rightTitle','').length !==0 &&<h4 className={`text-4xl font-bold text-left nx-section-heading-font max-w-md mb-5 ${get(tailwindClasses, 'rightTitle')}`} style={get(style, 'rightTitle')}>{get(props, 'rightTitle')}</h4>}
          {get(props, 'rightDescription1','').length !==0 &&<p className={`mb-5 max-w-xl ${get(tailwindClasses, 'rightDescription')}`} style={get(style, 'rightDescription')}>{get(props, 'rightDescription1')}</p>}
          {get(props, 'rightDescription2','').length !==0 &&<p className={`max-w-xl ${get(tailwindClasses, 'rightDescription')}`} style={get(style, 'rightDescription')}>{get(props, 'rightDescription2')}</p>}
        </div>
      </div>
    </section>
  )
}

AboutV19.propTypes={
  style: object,
  tailwindClasses: object,
  image: string,
  mainTitle: string,
  mainDescription1: string,
  mainDescription2: string,
  mainText: string,
  leftTitle: string,
  leftDescription1: string,
  leftDescription2: string,
  rightTitle: string,
  rightDescription1: string,
  rightDescription2: string,
}

AboutV19.defaultProps = {
  style: {
    container:{},
    contentContainer:{},
    mainTitle:{},
    mainDescription1:{},
    mainDescription2:{},
    mainText:{},
    leftTitle:{},
    leftDescription1:{},
    leftDescription2:{},
    rightTitle:{},
    rightDescription1:{},
    rightDescription2:{}
  },
  tailwindClasses: {
    container:"",
    contentContainer:"",
    mainTitle:"",
    mainDescription1:"",
    mainDescription2:"",
    mainText:"",
    leftTitle:"",
    leftDescription1:"",
    leftDescription2:"",
    rightTitle:"",
    rightDescription1:"",
    rightDescription2:""
  },
  image:"https://images.pexels.com/photos/239975/pexels-photo-239975.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1168&fit=crop&dpr=1",
  mainTitle:"You deserve a break today... at Retora's",
  mainDescription1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore esse obcaecati consectetur voluptate, vitae ea facilis distinctio dolorum? Explicabo doloribus id error odit cumque pariatur tempore eveniet iure quae illum impedit, rem nesciunt modi earum distinctio ab? Provident, iure inventore deserunt natus, libero pariatur impedit molestiae aut nobis ex aperiam temporibus facilis saepe tempora debitis cupiditate tempore! Laboriosam, praesentium?",
  mainDescription2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore esse obcaecati consectetur voluptate, vitae ea facilis distinctio dolorum? Explicabo doloribus id error odit cumque pariatur tempore eveniet iure quae illum impedit.",
  mainText:"since 1990",
  leftTitle:"Our Mission",
  leftDescription1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore esse obcaecati consectetur voluptate, vitae ea facilis distinctio dolorum?",
  leftDescription2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore esse obcaecati consectetur voluptate, vitae ea facilis distinctio dolorum?,",
  rightTitle:"Our Vision",
  rightDescription1:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore esse obcaecati consectetur voluptate, vitae ea facilis distinctio dolorum?",
  rightDescription2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt tempore esse obcaecati consectetur voluptate, vitae ea facilis distinctio dolorum?",
}
export default AboutV19
