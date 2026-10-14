import { arrayOf, object, string } from 'prop-types';
import { Fragment } from 'react'
import { CheckIcon, MinusIcon, PlusIcon } from '@heroicons/react/16/solid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const PricingV2 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
  
  return (
    <div className={`bg-white py-24 sm:py-32`}>
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
      <h2 className="text-base/7 font-semibold" style={{color: get(props, 'themeColor')}}>{get(props, 'subTitle')}</h2>
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl lg:text-pretty">
          {get(props, 'title')}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg font-medium text-gray-600 max-lg:mx-auto sm:text-xl/8">
          {get(props, 'description')}
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 bottom-0 top-48 bg-[radial-gradient(circle_at_center_var(--gradient-position),#7775D6,#592E71,#030712_70%)] [--gradient-position:center] lg:[--gradient-position:150%]" />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {get(props, 'tires', []).map((tier) => (
              <div
                key={tier.name}
                className="-m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-sm font-semibold" style={{color: get(props, 'themeColor')}}>
                      {tier.name} <span className="sr-only">plan</span>
                    </h2>
                    <p className="mt-2 text-pretty text-sm/6 text-gray-600">{tier.description}</p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-5xl font-semibold text-gray-950">{tier.priceMonthly}</div>
                      <div className="text-sm text-gray-600">
                        <p>USD</p>
                        <p>per month</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <a
                        href={tier.href}
                        aria-label={`Start a free trial on the ${tier.name} plan`}
                        className="inline-block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                        style={{background: get(props, 'themeColor')}}
                      >
                        Start a free trial
                      </a>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-gray-950">Start selling with:</h3>
                      <ul className="mt-3 space-y-3">
                        {tier.highlights.split(",").map((highlight) => (
                          <li
                            key={highlight}
                            className="group flex items-start gap-4 text-sm/6 text-gray-600 data-[disabled]:text-gray-400"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-gray-400"
                              />
                            </span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between py-16 opacity-60 max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4 sm:py-24">
            {
              get(props, 'images', []).map((img) => (
                <NexImage src={get(img, 'imagePath')} className="!relative h-9 max-sm:mx-auto sm:h-8 lg:h-12"></NexImage>
              ))
            }
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-6 pt-16 sm:pt-24 lg:max-w-7xl lg:px-8">
        <table className="w-full text-left max-sm:hidden">
          <caption className="sr-only">Pricing plan comparison</caption>
          <colgroup>
            <col className="w-2/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>
          <thead>
            <tr>
              <td className="p-0" />
              {get(props, 'tires', []).map((tier) => (
                <th key={tier.name} scope="col" className="p-0">
                  <div className="text-sm font-semibold" style={{color: get(props, 'themeColor')}}>
                    {tier.name} <span className="sr-only">plan</span>
                  </div>
                </th>
              ))}
            </tr>
            <tr>
              <th className="p-0" />
              {get(props, 'tires', []).map((tier) => (
                <td key={tier.name} className="px-0 pb-0 pt-3">
                  <a
                    href={tier.href}
                    aria-label={`Get started with the ${tier.name} plan`}
                    className="inline-block rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  >
                    Get started
                  </a>
                </td>
              ))}
            </tr>
          </thead>

          <tbody key={get(props, 'section1Name')} className="group">
              <tr>
                <th scope="colgroup" colSpan={4} className="px-0 pb-0 pt-10 group-first-of-type:pt-5">
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {get(props, 'section1Name')}
                  </div>
                </th>
              </tr>
              {
                get(props,'section1Data', []).map((section, index) => (
                  <tr key={get(props, 'section1Name') + section.name + index} className="border-b border-gray-100 last:border-none">
                    <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600">
                      {section.name}
                    </th>
                    <td className="p-4 max-sm:text-center">
                      {section.tire1}
                    </td>
                    <td className="p-4 max-sm:text-center">
                      {section.tire2}
                    </td>
                    <td className="p-4 max-sm:text-center">
                      {section.tire3}
                    </td>
                  </tr>
                ))
              }
          </tbody>

          <tbody key={get(props, 'section2Name')} className="group">
              <tr>
                <th scope="colgroup" colSpan={4} className="px-0 pb-0 pt-10 group-first-of-type:pt-5">
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {get(props, 'section2Name')}
                  </div>
                </th>
              </tr>
              {
                get(props,'section2Data', []).map((section, index) => (
                  <tr key={get(props, 'section2Name') + section.name + index} className="border-b border-gray-100 last:border-none">
                    <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600">
                      {section.name}
                    </th>
                    <td className="p-4 max-sm:text-center">
                      {section.tire1}
                    </td>
                    <td className="p-4 max-sm:text-center">
                      {section.tire2}
                    </td>
                    <td className="p-4 max-sm:text-center">
                      {section.tire3}
                    </td>
                  </tr>
                ))
              }
          </tbody>
          <tbody key={get(props, 'section3Name')} className="group">
              <tr>
                <th scope="colgroup" colSpan={4} className="px-0 pb-0 pt-10 group-first-of-type:pt-5">
                  <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                    {get(props, 'section3Name')}
                  </div>
                </th>
              </tr>
              {
                get(props,'section3Data', []).map((section, index) => (
                  <tr key={get(props, 'section3Name') + section.name + index} className="border-b border-gray-100 last:border-none">
                    <th scope="row" className="px-0 py-4 text-sm/6 font-normal text-gray-600">
                      {section.name}
                    </th>
                    <td className="p-4 max-sm:text-center">
                      {section.tire1}
                    </td>
                    <td className="p-4 max-sm:text-center">
                      {section.tire2}
                    </td>
                    <td className="p-4 max-sm:text-center">
                      {section.tire3}
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
        <TabGroup className="sm:hidden">
          <TabList className="flex">
            {get(props, 'tires', []).map((tier) => (
              <Tab
                key={tier.name}
                className="w-1/3 border-b border-gray-100 py-4 text-base/8 font-medium text-indigo-600 data-[selected]:border-indigo-600 [&:not([data-focus])]:focus:outline-none"
              >
                {tier.name}
              </Tab>
            ))}
          </TabList>
          <TabPanels as={Fragment}>

            <TabPanel key={get(props, 'tires[0]')}>
                <a
                  href={get(props, 'tires[0].href')}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Get started
                </a>
                <Fragment key={get(props, 'section1Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section1Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section1Data', []).map((section, index) => (
                          <div
                            
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire1}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                  <Fragment key={get(props, 'section2Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section2Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section2Data', []).map((section, index) => (
                          <div
                            
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire1}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                  <Fragment key={get(props, 'section3Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section3Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section3Data', []).map((section, index) => (
                          <div
                            
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire1}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                
            </TabPanel>
            <TabPanel key={get(props, 'tires[1]')}>
                <a
                  href={get(props, 'tires[1].href')}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Get started
                </a>
                <Fragment key={get(props, 'section1Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section1Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section1Data', []).map((section, index) => (
                          <div
                            
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire2}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                  <Fragment key={get(props, 'section2Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section2Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section2Data', []).map((section, index) => (
                          <div
                            
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire2}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                  <Fragment key={get(props, 'section3Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section3Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section3Data', []).map((section, index) => (
                          <div
                            
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire2}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                
            </TabPanel>
            <TabPanel key={get(props, 'tires[2]')}>
                <a
                  href={get(props, 'tires[2].href')}
                  className="mt-8 block rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Get started
                </a>
                <Fragment key={get(props, 'section1Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section1Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section1Data', []).map((section, index) => (
                          <div
                            key={section.name}
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire3}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                  <Fragment key={get(props, 'section2Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section2Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section2Data', []).map((section, index) => (
                          <div
                            key={section.name}
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire3}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                  <Fragment key={get(props, 'section3Name')}>
                    <div className="-mx-6 mt-10 rounded-lg bg-gray-50 px-6 py-3 text-sm/6 font-semibold text-gray-950 group-first-of-type:mt-5">
                      {get(props, 'section3Name')}
                    </div>
                    <dl>
                      {
                        get(props, 'section3Data', []).map((section, index) => (
                          <div
                            key={section.name}
                            className="grid grid-cols-2 border-b border-gray-100 py-4 last:border-none"
                          >
                            <dt className="text-sm/6 font-normal text-gray-600">{section.name}</dt>
                            <dd className="text-center">
                              {section.tire3}
                            </dd>
                          </div>
                        ))
                      }
                    </dl>
                  </Fragment>
                
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  )
}

PricingV2.propTypes = {
    style: object,
    tiers: arrayOf(object),
    images: arrayOf(object),
    subTitle: string,
    title: string,
    description: string,
    buttonText: string,
    themeColor: string,
}


PricingV2.defaultProps = {
    style: {
    },
    themeColor: "#3949AB",
    subTitle: "Pricing",
    title: "Choose the right plan for you",
    description: "Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.",
    buttonText: "Get Started Today",
    tires: [
      {
        name: 'Starter',
        description: 'Everything you need to get started.',
        priceMonthly: '$19',
        href: '#',
        highlights: "Custom domains,Edge content delivery,Advanced analytics",
      },
      {
        name: 'Growth',
        description: 'All the extras for your growing team.',
        priceMonthly: '$49',
        href: '#',
        highlights: "Custom domains,Edge content delivery,Advanced analytics,Quarterly workshops,Single sign-on (SSO)",
      },
      {
        name: 'Scale',
        description: 'Added flexibility at scale.',
        priceMonthly: '$99',
        href: '#',
        highlights: "Custom domains,Edge content delivery,Advanced analytics,Quarterly workshops,Single sign-on (SSO),Priority phone support",
      },
    ],

    section1Name: "Features",
    section1Data: [
      {
        name: "Edge content delivery", tire1: "NNNN", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Edge content delivery", tire1: "Yes", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Team members", tire1: "No", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Single sign-on (SSO)", tire1: "No", tire2: "No", tire3: "Yes"
      }
    ],

    section2Name: "Features 2",
    section2Data: [
      {
        name: "Edge content delivery", tire1: "Yes", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Edge content delivery", tire1: "Yes", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Team members", tire1: "No", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Single sign-on (SSO)", tire1: "No", tire2: "No", tire3: "Yes"
      }
    ],
    section3Name: "Features 3",
    section3Data: [
      {
        name: "Edge content delivery", tire1: "Yes", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Edge content delivery", tire1: "Yes", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Team members", tire1: "No", tire2: "Yes", tire3: "Yes"
      },
      {
        name: "Single sign-on (SSO)", tire1: "No", tire2: "No", tire3: "Yes"
      }
    ],
    images: [
      {
        imagePath: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-white.svg"
      },
      {
        imagePath: "https://tailwindui.com/plus/img/logos/158x48/laravel-logo-white.svg"
      },
      {
        imagePath: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-white.svg"
      },
      {
        imagePath: "https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-white.svg"
      },
      {
        imagePath: "https://tailwindui.com/plus/img/logos/158x48/statamic-logo-white.svg"
      }
    ]
}

export default PricingV2;