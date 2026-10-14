import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const PageNotFoundV1 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  return (
    <section className={`px-5 py-24 ${get(tailwindClasses, 'container')}`} style={{backgroundImage:`url(${get(props,'bgImage')})`,backgroundSize:"cover",...get(style, 'container')}}>
      <div className='max-w-4xl mx-auto'>
        {get(props, 'logo', '').length !== 0 && <NexImage src={get(props, 'logo')} className={`!relative !h-12 !w-auto mx-auto mb-3 ${get(tailwindClasses, 'logo')}`} style={get(style, 'logo')} />}
        {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center uppercase font-semibold mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
        {get(props, 'title', '').length !== 0 && <h4 className={`nx-text-primary text-4xl text-center mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
        {get(props, 'description', '').length !== 0 && <p className={`text-center max-w-sm mx-auto mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
        {get(props, 'ctaText', '').length !== 0 &&<div className='flex justify-center'><button className={`uppercase font-semibold pb-1 hover:border-b-2 nx-border-primary ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
          <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink>
        </button>
        </div>}
      </div>
    </section>
  )
}

PageNotFoundV1.propTypes={
  style: object,
  tailwindClasses: object,
  bgImage: string,
  logo: string,
  subTitle: string,
  title: string,
  description: string,
  ctaLink: string,
  ctaText: string
}

PageNotFoundV1.defaultProps = {
  style: {
    container:{},
    logo:{},
    subTitle:{},
    title:{},
    description:{},
    cta:{}
  },
  tailwindClasses: {
    container:"",
    logo:"",
    subTitle:"",
    title:"",
    description:"",
    cta:""
  },
  bgImage:"",
  logo: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
  subTitle: "Sorry!!",
  title: "404 Error Page Not Found",
  description: "You may have mis-typed the URL, Or the page has been removed, click on the link below",
  ctaLink: "#",
  ctaText: "Back To Homepage"
}
export default PageNotFoundV1
