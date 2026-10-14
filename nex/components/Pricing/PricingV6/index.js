import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';

const PricingV6 = (props) => {
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const style = get(props, 'style', {})
  return (
    <div className={`overflow-hidden py-8 ${get(tailwindClasses,'container')}`} style={get(style,'container')}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <NexAnimation type={get(props,'topContentAnimation')}>
          <h2 className={`nx-text-primary text-base/7 font-semibold ${get(tailwindClasses,'subTitle')}`} style={{...get(style,'subTitle')}}>{get(props, 'subTitle')}</h2>
          <p className={`mt-2 text-pretty text-5xl font-semibold tracking-tight sm:text-balance sm:text-6xl nx-section-heading-font ${get(tailwindClasses,'title')}`} style={get(style,'title')}>
            {get(props, 'title')}
          </p>
          </NexAnimation>
        </div>
        <p className={`mx-auto mt-6 max-w-2xl text-pretty text-lg font-medium sm:text-center sm:text-xl/8 ${get(tailwindClasses,'description')}`} style={get(style,"description")}>
          {get(props, 'description')}
        </p>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {get(props, 'tires').map((tier) => (
              <NexAnimation type={get(props,'bottomContentAnimation')}>
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className={`text-base/7 font-semibold ${get(tailwindClasses,'tierName')}`} style={get(style,'tierName')}>
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className={`text-5xl font-semibold tracking-tight ${get(tailwindClasses,'tirePriceMonthly')}`} style={get(style,'tirePriceMonthly')}>{tier.priceMonthly}</span>
                  <span className={`text-sm/6 font-semibold ${get(tailwindClasses,'priceMonthlyText')}`} style={get(style,'priceMonthlyText')}>/month</span>
                </p>
                <p className={`mt-3 text-sm/6 ${get(tailwindClasses,'priceAnnuallyText')}`} style={get(style,'priceAnnuallyText')}>{tier.priceAnnually} per month if paid annually</p>
                {get(props, 'buttonText',"").length !==0 &&<PrimaryLink
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={`mt-10 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold shadow-sm nx-btn-primary nx-btn-primary:hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses,'cta')}`}
                  style={{...get(style,'cta')}}
                >
                  {get(props, 'buttonText')}
                </PrimaryLink>}
                <p className={`mt-10 text-sm/6 font-semibold ${get(tailwindClasses,'tierDescription')}`} style={get(style,'tierDescription')}>{tier.description}</p>
                <ul role="list" className={`mt-6 space-y-3 text-sm/6 ${get(tailwindClasses,'tierFeature')}`} style={get(style,'tierFeature')}>
                  {tier.features.split(",").map((feature) => (
                    <li key={feature} className={`flex gap-x-3`}>
                      <CheckCircleIcon aria-hidden="true" className={`h-6 w-5 flex-none nx-text-primary ${get(tailwindClasses,'checkIcon')}`} style={{...get(style,'checkIcon')}} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              </NexAnimation>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

PricingV6.propTypes = {
    style: object,
    tiers: arrayOf(object),
    subTitle: string,
    title: string,
    description: string,
    buttonText: string,
    themeColor: string,
}

PricingV6.defaultProps = {
    style:{
      container:{},
      subTitle:{},
      title:{},
      description:{},
      tierName:{},
      tirePriceMonthly:{},
      priceMonthlyText:{},
      priceAnnuallyText:{},
      cta:{},
      tierDescription:{},
      tierFeature:{},
      chekIcon:{},
    },
    tailwindClasses:{
      container:"",
      subTitle:"",
      title:"",
      description:"",
      tierName:"",
      tirePriceMonthly:"",
      priceMonthlyText:"",
      priceAnnuallyText:"",
      cta:"",
      tierDescription:"",
      tierFeature:"",
      chekIcon:"",
    },
    subTitle: "Pricing",
    title: "Choose the right plan for you",
    description: "Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
    buttonText: "Get Started Today",
    topContentAnimation:"",
    bottomContentAnimation:"",
    tires: [
        {
          name: 'Freelancer',
          id: 'tier-freelancer',
          href: '#',
          priceMonthly: '$19',
          priceAnnually: '$1099',
          description: 'The essentials to provide your best work for clients.',
          features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time",
          mostPopular: false,
        },
        {
          name: 'Startup',
          id: 'tier-startup',
          href: '#',
          priceMonthly: '$19',
          priceAnnually: '$1099',
          description: 'A plan that scales with your rapidly growing business.',
          features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time",
          mostPopular: true,
        },
        {
          name: 'Enterprise',
          id: 'tier-enterprise',
          href: '#',
          priceMonthly: '$19',
          priceAnnually: '$1099',
          description: 'Dedicated support and infrastructure for your company.',
          features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time",
          mostPopular: false,
        },
      ]
}

export default PricingV6;