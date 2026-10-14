import PrimaryLink from '@nex-core-ui/PrimaryLink';
import get from 'lodash.get';
import { object, string } from 'prop-types';
import React from 'react';

const OrderSuccessV1 = (props) => {
  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  return (
    <section className={`px-5 py-20 ${get(tailwindClasses, 'container')}`} style={{backgroundImage:`url(${get(props,'bgImage')})`,backgroundSize:"cover",...get(style, 'container')}}>
      <div className='max-w-4xl mx-auto'>
        {get(props, 'subTitle', '').length !== 0 && <h1 className={`text-center uppercase font-semibold mb-3 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
        {get(props, 'orderId', '').length !== 0 && (
          <p className={`text-lg text-center font-semibold mb-3 ${get(tailwindClasses,'orderId')}`} style={get(style,'orderId')}>
            Order ID: <span className='nx-text-primary'>{get(props, 'orderId')}</span>
          </p>
        )}
        {get(props, 'title', '').length !== 0 && <h4 className={`nx-text-primary max-w-md mx-auto text-4xl text-center mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h4>}
        {get(props, 'description', '').length !== 0 && <p className={`text-center max-w-sm mx-auto mb-5 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
        {get(props, 'ctaText', '').length !== 0 &&<div className='flex justify-center'><button className={`uppercase font-semibold pb-1 hover:border-b-2 nx-border-primary ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>
          <PrimaryLink href={get(props, 'ctaLink')}>{get(props, 'ctaText')}</PrimaryLink>
        </button>
        </div>}
      </div>
    </section>
  )
}

OrderSuccessV1.propTypes={
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

OrderSuccessV1.defaultProps = {
  style: {
    container:{},
    subTitle:{},
    orderId:{},
    title:{},
    description:{},
    cta:{}
  },
  tailwindClasses: {
    container:"",
    subTitle:"",
    orderId:"",
    title:"",
    description:"",
    cta:""
  },
  bgImage:"",
  subTitle: "Thank YOU!!",
  orderId:"#12345",
  title: "Your Order Has Been Placed Successfully!",
  description: "We've received your order and will start processing it shortly. You will receive a confirmation email with your order details.",
  ctaLink: "#",
  ctaText: "Back To Homepage"
}
export default OrderSuccessV1