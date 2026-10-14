import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { object, string } from 'prop-types'
import get from 'lodash.get'

const HeroSectionV1 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  
  return (
    <div className={`bg-white ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className={`relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>
            {get(props, 'subTitle')}
            </div>
          </div>
          <div className="text-center">
            <h1 className={`text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl ${get(tailwindClasses, 'title')}`}  style={{...get(style, 'title')}}>
              {get(props, 'title')}
            </h1>
            <p className={`mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
              {get(props, 'description')}
            </p>
            {
              get(props, 'ctaText').length != 0 && <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href={get(props, 'ctaLink')}
                  className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${get(tailwindClasses, 'cta')}`}
                  style={{...get(style, 'cta')}}
                >
                  {get(props, 'ctaText')}
                </a>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

HeroSectionV1.propTypes = {
  style: object,
  title: string,
  subTitle: string,
  description: string,
  ctaText: string,
  ctaLink: string,
}

HeroSectionV1.defaultProps = {
  style: {
    container: {},
    title: {},
    subTitle: {},
    description: {},
    cta: {}
  },
  title: "Data to enrich your online business",
  subTitle: "Announcing our next round of funding.",
  description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  ctaText: "Get Started",
  ctaLink: "#"

}

export default HeroSectionV1;