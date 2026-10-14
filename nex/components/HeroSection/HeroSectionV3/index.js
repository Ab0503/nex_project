import { useState } from 'react'
import { object, string } from 'prop-types'
import get from 'lodash.get'
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';


const HeroSectionV3 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div className={`relative xl:px-32 lg:px-24 md:px-20 max-sm:px-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <main className={`flex flex-wrap items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
        
          <div className="mx-auto w-full lg:w-1/2 pb-20 pt-16 text-center lg:text-left">
          <NexAnimation type={get(props, 'leftContentAnimation')}>
            <div className="px-6 sm:px-8  xl:pr-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className={`block xl:inline nx-section-heading-font ${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props, 'text1')}</span>
                <span className={`block nx-text-primary nx-section-heading-font xl:inline ${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}> {get(props, 'text2')}</span>
              </h1>
              <p className={`mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>
                {get(props, 'description')}
              </p>
              <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                {
                  get(props, 'cta1Text', '').length != 0 && <div className="rounded-md shadow"> 
                    <PrimaryLink href={get(props, 'cta1Link')} className={`nx-btn-primary nx-btn-primary:hover flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 text-base font-medium text-gray-50 md:px-10 md:py-4 md:text-lg ${get(tailwindClasses, 'highlightCta')}`} style={get(style, 'highlightCta')}>{get(props, 'cta1Text')}</PrimaryLink>
                  </div>
                }
                {
                  get(props, 'cta2Text', '').length != 0 && <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                    <PrimaryLink href={get(props, 'cta2Link')} className={`nx-text-primary nx-btn-primary:hover flex w-full items-center justify-center rounded-md border border-transparent bg-gray-50 px-8 py-3 text-base font-medium hover:bg-gray-50 md:px-10 md:py-4 md:text-lg ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(props, 'cta2Text')}</PrimaryLink>
                  </div>
                }
              </div>
            </div>
            </NexAnimation>
          </div>
        
        <div className="relative h-64 w-full sm:h-72 md:h-96  lg:h-full lg:w-1/2">
          <NexAnimation type={get(props, 'rightContentAnimation')}>
            <NexImage src={get(props, 'imagePath')} className={`!relative inset-0 h-full w-full object-cover  ${get(tailwindClasses, 'image')}`} style={get(style, 'image')}></NexImage>
          </NexAnimation>
        </div>
      </main>
    </div>
  )
}

HeroSectionV3.propTypes = {
  style: object,
  title: string,
  subTitle: string,
  description: string,
  ctaText: string,
  ctaLink: string,
}

HeroSectionV3.defaultProps = {
  style: {
    container: {},
    contentContainer:{},
    text1: {},
    text2: {},
    description: {},
    cta: {},
    highlightCta: {},
    image: {},
  },
  text1: "Data to enrich your",
  text2: "online business",
  cta1Text: "Get Started",
  cta1Link: "#",
  cta2Text: "Show Demo",
  cta2Link: "#",
  description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  imagePath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735282708.600x600.png",
  leftContentAnimation: "Left-To-Right",
  rightContentAnimation: "Right-To-Left",
}

export default HeroSectionV3;