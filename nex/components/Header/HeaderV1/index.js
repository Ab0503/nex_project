'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { arrayOf, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { Helmet } from 'react-helmet';

const HeaderV1 = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  return (
    <header>
      <Helmet>
        <link rel="icon" href={get(props, 'faviconUrl')}></link>
      </Helmet>
      <nav aria-label="Global" className={`mx-auto flex items-center justify-between py-5 px-5 max-sm:!pl-5 max-sm:!pr-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
        <div className={`flex lg:flex-1}`} style={get(style, 'logo')}>
          <PrimaryLink href="/home" className={`-m-1.5 p-1.5 ${get(tailwindClasses, 'logo')}`} >
            <span className="sr-only">Your Company</span>
            <NexImage src={get(props, 'logoPath')} className={`!relative !h-16 !w-auto ${get(tailwindClasses, 'logo', '')}`} style={{ ...get(style, 'logo') }}></NexImage>
          </PrimaryLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {get(props, 'navigation', []).map((item) => (
            <PrimaryLink key={item.text} href={item.link} className={`text-sm font-semibold leading-6 text-gray-900 ${get(tailwindClasses, 'text')}`} style={{ ...get(style, 'text') }}>
              {item.text}
            </PrimaryLink>
          ))}
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div style={get(style, 'container')} className="max-sm:!pl-5 max-sm:!pr-5  py-5 flex items-center justify-between" >
            <PrimaryLink href="/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <NexImage className={`!relative !h-16 !w-auto ${get(tailwindClasses, 'logo', '')}`} src={get(props, 'logoPath')}></NexImage>
            </PrimaryLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="px-6 py-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {get(props, 'navigation', []).map((item) => (
                  <PrimaryLink
                    key={item.text}
                    href={item.link}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    style={{ ...get(style, 'text') }}
                  >
                    {item.text}
                  </PrimaryLink>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

HeaderV1.propTypes = {
  style: object,
  logoPath: string,
  navigation: arrayOf(object)
}

HeaderV1.defaultProps = {
  style: {
    container: {},
    text: {},
    logo: {}
  },
  faviconUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1740660049.favicon.ico",
  logoPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735324249.200x100.png",
  navigation: [
    {
      text: 'About',
      link: '/about'
    },
    {
      text: 'Services',
      link: '/services'
    }
  ]
}

export default HeaderV1;