import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PricingV8 = (props) => {
  const [frequency, setFrequency] = useState(get(props, "frequencies[0]"));
  return (

    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400" style={{color: get(props, 'themeColor')}}>{get(props, 'subTitle')}</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            {get(props, 'title')}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-400 sm:text-xl/8">
          {get(props, 'description')}
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs/5 font-semibold text-white"
            >
              {get(props, 'frequencies').map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-indigo-500"
                  style={{background: frequency.label == option.label ? get(props, 'themeColor') : null}}             
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {get(props, 'tiers', []).map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-indigo-500' : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10',
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 id={tier.id} className="text-lg/8 font-semibold text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full px-2.5 py-1 text-xs/5 font-semibold text-white"
                    style={{background: get(props, 'themeColor')}}
                  >
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm/6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-white">{frequency.value == "monthly" ? tier.priceMonthly : tier.priceAnnually} </span>
                <span className="text-sm/6 font-semibold text-gray-300">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                )}
                style={{
                  background: tier.featured ? 'whitesmoke' : get(props, 'themeColor'),
                  color: tier.featured ?  get(props, 'themeColor'): 'white',
                }}
              >
                {tier.cta}
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 xl:mt-10">
                {tier.features.split(",").map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

PricingV8.propTypes = {
    style: object,
    tiers: arrayOf(object),
    subTitle: string,
    title: string,
    description: string,
    buttonText: string,
    themeColor: string,
    frequencies: arrayOf(object),
}

PricingV8.defaultProps = {
    themeColor: "#3949AB",
    subTitle: "Pricing",
    title: "Choose the right plan for you",
    description: "Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
    buttonText: "Get Started Today",
    tiers: [
      {
        name: 'Freelancer',
        id: 'tier-freelancer',
        href: '#',
        priceMonthly: '$19',
        priceAnnually: '$199',
        description: 'The essentials to provide your best work for clients.',
        features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time",
        featured: false,
        cta: 'Buy plan',
        mostPopular: false,
      },
      {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$19',
        priceAnnually: '$199',
        description: 'A plan that scales with your rapidly growing business.',
        features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time",
        featured: false,
        cta: 'Buy plan',
        mostPopular: true,
      },
      {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        priceMonthly: '$19',
        priceAnnually: '$199',
        description: 'Dedicated support and infrastructure for your company.',
        features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time",
        featured: true,
        cta: 'Contact sales',
        mostPopular: false,
      },
    ],
    frequencies: [
      { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
      { value: 'annually', label: 'Annually', priceSuffix: '/year' },
    ],
}

export default PricingV8;