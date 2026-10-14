import { useState } from 'react';
import { Radio, RadioGroup } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PricingV10 = (props) => {
  const [frequency, setFrequency] = useState(get(props, "frequencies[0]"));
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold"  style={{color: get(props, 'themeColor')}}>{get(props, 'subTitle')}</h2>
          <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            {get(props, 'title')}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
          {get(props, 'description')}
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="Payment frequency">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold ring-1 ring-inset ring-gray-200"
            >
              {get(props, 'frequencies').map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-indigo-600 data-[checked]:text-white"
                  style={{background: frequency.label == option.label ? get(props, 'themeColor') : null, color: frequency.label == option.label ? 'white' : null}}             
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {get(props, 'tiers', []).map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'border ' : 'ring-1 ring-gray-200',
                'rounded-3xl p-8',
              )}
              style={{borderColor: tier.mostPopular ? get(props, 'themeColor'): '#e5e7eb' }}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.mostPopular ? '' : 'text-gray-900',
                  'text-lg/8 font-semibold',
                )}
                style={{color: tier.mostPopular ? get(props, 'themeColor'): '#111827' }}
              >
                {tier.name}
              </h3>
              <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {frequency.value == "monthly" ? tier.priceMonthly : tier.priceAnnually}
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">{frequency.priceSuffix}</span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'text-white shadow-sm hover:bg-indigo-500'
                    : 'ring-1',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm/6 font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                )}
                style={{
                    background: tier.featured ? 'whitesmoke' : get(props, 'themeColor'),
                    color: tier.featured ?  get(props, 'themeColor'): 'white',
                  }}
              >
                {tier.cta}
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                {tier.features.split(",").map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none" style={{color: get(props, 'themeColor')}} />
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

PricingV10.propTypes = {
    style: object,
    tiers: arrayOf(object),
    subTitle: string,
    title: string,
    description: string,
    buttonText: string,
    themeColor: string,
    frequencies: arrayOf(object),
}

PricingV10.defaultProps = {
    themeColor: "#3949AB",
    subTitle: "Pricing",
    title: "Choose the right plan for you",
    description: "Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
    buttonText: "Get Started Today",
    tiers: [
      {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        price: { monthly: '$19', annually: '$199' },
        priceMonthly: '$19',
        priceAnnually: '$199',
        description: 'The essentials to provide your best work for clients.',
        features: "5 products,Up to 1000 subscribers,Basic analytics",
        mostPopular: false,
        cta: 'Buy plan',
      },
      {
        name: 'Freelancer',
        id: 'tier-freelancer',
        href: '#',
        price: { monthly: '$29', annually: '$299' },
        priceMonthly: '$19',
        priceAnnually: '$199',
        description: 'The essentials to provide your best work for clients.',
        features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time",
        mostPopular: false,
        cta: 'Buy plan',
      },
      {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        price: { monthly: '$59', annually: '$599' },
        priceMonthly: '$19',
        priceAnnually: '$199',
        description: 'A plan that scales with your rapidly growing business.',
        features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time,Marketing automations",
        mostPopular: true,
        cta: 'Buy plan',
      },
      {
        name: 'Enterprise',
        id: 'tier-enterprise',
        href: '#',
        price: { monthly: '$99', annually: '$999' },
        priceMonthly: '$19',
        priceAnnually: '$199',
        description: 'Dedicated support and infrastructure for your company.',
        features: "5 products,Up to 1000 subscribers,Basic analytics,48-hour support response time,Marketing automations",
        mostPopular: false,
        cta: 'Buy plan',
      },
    ],
    frequencies: [
      { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
      { value: 'annually', label: 'Annually', priceSuffix: '/year' },
    ],
}

export default PricingV10;