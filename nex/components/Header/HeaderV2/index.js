'use client'

import { useState } from 'react'
import { arrayOf, bool, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import BookAppointmentV1 from '@nex-components/BookAppointment/BookAppointmentV1';
import { Helmet } from 'react-helmet';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const HeaderV2 = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const renderMenu = (menuText, menuLink, menuSubMenu) => {
    if(menuText.length == 0){
      return null;
    }
    return (<>
      {
        get(menuSubMenu, '[0].text','').length == 0 && (
          <PrimaryLink href={menuLink} className={`py-6 px-5 text-base font-medium nx-text-hover-primary ${get(tailwindClasses, 'menu')}`} style={get(style, 'menu')}>{menuText}</PrimaryLink>
        )
      }
      {
       get(menuSubMenu, '[0].text','').length != 0 && (
          <div className={`relative menu`} >
            <button type="button" className={`px-5 py-6 group inline-flex items-center rounded-md text-base font-medium nx-text-hover-primary ${get(tailwindClasses, 'menu')}`} aria-expanded="false" style={get(style, 'menu')}>
              <span>{menuText}</span>
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
            <div className="absolute left-1/2 z-10 -mt-1 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
              <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold shadow-lg ring-1 ring-gray-900/5">
                {
                  menuSubMenu.map((menu) => (
                    <div className={`block mb-2 p-2 cursor-pointer nx-text-hover-primary ${get(tailwindClasses, 'subMenu')}`} style={get(style, 'subMenu')}>
                      <PrimaryLink href={get(menu, 'link')} >
                        {get(menu, 'text')}
                      </PrimaryLink>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        )
      }
    </>
    )
  }
  const renderMobileMenu = (menuText, menuLink, menuSubMenu) => {
    if(menuText.length == 0){
      return null;
    }
    return (<>
      {
        get(menuSubMenu, '[0].text','').length == 0 && (
          <PrimaryLink
            href={menuLink}
            className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold nx-text-hover-primary ${get(tailwindClasses, 'mobileMenu')}`}
            style={get(style, 'mobileMenu')}
            >{menuText}
          </PrimaryLink>
        )
      }
      {
      get(menuSubMenu, '[0].text','').length != 0 && (
        <Disclosure as="div">
          <DisclosureButton
            className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold nx-text-hover-primary ${get(tailwindClasses, 'mobileMenu')}`}
            style={get(style, 'mobileMenu')}
          >
            <ChevronRightIcon
              aria-hidden="true"
              className="h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
            />
            {menuText}
          </DisclosureButton>
          <DisclosurePanel as="ul" className="mt-1 px-2">
            {menuSubMenu.map((menu) => (
              <li key={get(menu, 'text')}>
                <DisclosureButton
                  as="a"
                  href={get(menu, 'link')}
                  className={classNames(
                    'block rounded-md py-2 pl-9 pr-2 text-sm/6 nx-text-hover-primary',
                  )}
                >
                  {get(menu, 'text')}
                </DisclosureButton>
              </li>
            ))}
          </DisclosurePanel>
        </Disclosure>
        )
      }
    </>
    )
  }
  const transparentCss = get(props, 'isTransparent', false) ? "absolute bg-transparent w-full z-50" : "relative bg-white";
  return (
    <header className={`sticky top-0 left-0 right-0 z-50 ${transparentCss} ${get(tailwindClasses, 'container')} `} style={get(style, 'container')}>
      <div className={`shadow`}>
        <Helmet>
          <link rel="icon" href={get(props, 'faviconUrl')}></link>
        </Helmet>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between  md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1 py-6">
              <PrimaryLink href={get(props,'logoLink',"/home")}>
                  <span className="sr-only">Your Company</span>
                  <NexImage src={get(props, 'logoPath')} className={`!relative !h-16  ${get(tailwindClasses, 'logo')}`} style={{...get(style, 'logo')}}></NexImage>
              </PrimaryLink>
              </div>
              <div className="-my-2 -mr-2 w-full lg:hidden">
                <button onClick={() => setMobileMenuOpen(true)} type="button" className="relative inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 float-right" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open menu</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
              </div>
              <nav className="space-x-2 hidden lg:flex">
                  {renderMenu(get(props, 'menu1Text'), get(props, 'menu1Link'), get(props, 'menu1SubMenu'))}
                  {renderMenu(get(props, 'menu2Text'), get(props, 'menu2Link'), get(props, 'menu2SubMenu'))}
                  {renderMenu(get(props, 'menu3Text'), get(props, 'menu3Link'), get(props, 'menu3SubMenu'))}
                  {renderMenu(get(props, 'menu4Text'), get(props, 'menu4Link'), get(props, 'menu4SubMenu'))}
                  {renderMenu(get(props, 'menu5Text'), get(props, 'menu5Link'), get(props, 'menu5SubMenu'))}
                  {renderMenu(get(props, 'menu6Text'), get(props, 'menu6Link'), get(props, 'menu6SubMenu'))}
                  {renderMenu(get(props, 'menu7Text'), get(props, 'menu7Link'), get(props, 'menu7SubMenu'))}
              </nav>
              {
                (get(props, 'cta1Text', '').length != 0 || get(props, 'cta2Text', '').length != 0 || get(props, 'bookAppointmentText').length != 0)  && <div className="hidden lg:flex lg:flex-1 items-center justify-end lg:w-0">
                  {
                    get(props, 'cta1Text').length != 0 && <PrimaryLink href={get(props, 'cta1Link')} className={`whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900  ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(props, 'cta1Text')}</PrimaryLink>
                  }
                  {
                    get(props, 'cta2Text').length != 0 && <PrimaryLink href={get(props, 'cta2Link')} className={`ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md nx-btn-primary px-4 py-2 text-base font-medium nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses, 'highlightCta')}`} style={get(style, 'highlightCta')}>{get(props, 'cta2Text')}</PrimaryLink>
                  }
                  {
                    get(props, 'bookAppointmentText').length  != 0 &&  <BookAppointmentV1 text={get(props, 'bookAppointmentText', '')} className1={`${get(tailwindClasses, 'highlightCta', '')}`} style1={{...get(style, 'highlightCta', {})}}
                    />
                  }
                </div>
              }
                
          </div>
        </div>
        {
          mobileMenuOpen && <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden">
            <div className={`divide-y-2 divide-gray-50 rounded-lg bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                    <div>
                    <PrimaryLink href={get(props,'logoLink')}>
                      <NexImage src={get(props, 'logoPath')} className={`!relative !h-16 !w-36 ${get(tailwindClasses, 'logo')}`} style={{...get(style, 'logo')}}></NexImage>
                    </PrimaryLink>
                    </div>
                    <div className="-mr-2">
                    <button onClick={() => setMobileMenuOpen(false)} type="button" className="relative inline-flex items-center justify-center rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                </div>
                <div className="mt-6">
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                          {renderMobileMenu(get(props, 'menu1Text'), get(props, 'menu1Link'), get(props, 'menu1SubMenu'))}
                          {renderMobileMenu(get(props, 'menu2Text'), get(props, 'menu2Link'), get(props, 'menu2SubMenu'))}
                          {renderMobileMenu(get(props, 'menu3Text'), get(props, 'menu3Link'), get(props, 'menu3SubMenu'))}
                          {renderMobileMenu(get(props, 'menu4Text'), get(props, 'menu4Link'), get(props, 'menu4SubMenu'))}
                          {renderMobileMenu(get(props, 'menu5Text'), get(props, 'menu5Link'), get(props, 'menu5SubMenu'))}
                          {renderMobileMenu(get(props, 'menu6Text'), get(props, 'menu6Link'), get(props, 'menu6SubMenu'))}
                          {renderMobileMenu(get(props, 'menu7Text'), get(props, 'menu7Link'), get(props, 'menu7SubMenu'))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                </div>
                </div>
                <div className="space-y-6 px-5 py-6">
                <div>
                {
                  (get(props, 'cta1Text', '').length != 0 || get(props, 'cta2Text', '').length != 0 || get(props, 'bookAppointmentText').length != 0)  && <>
                    {
                      get(props, 'cta1Text').length != 0 && (<p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?
                      <PrimaryLink href={get(props, 'cta1Link')} className={`text-indigo-600 hover:text-indigo-500 ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(props, 'cta1Text')}</PrimaryLink>
                      </p>)
                    }
                    {
                      get(props, 'cta2Text').length != 0 && <PrimaryLink href={get(props, 'cta2Link')} className={`flex w-full items-center justify-center rounded-md border border-transparent nx-btn-primary px-4 py-2 text-base font-medium nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]  ${get(tailwindClasses, 'highlightCta')}`} style={get(style, 'highlightCta')}>{get(props, 'cta2Text')}</PrimaryLink>
                    }
                    {
                      get(props, 'bookAppointmentText').length  != 0 && <BookAppointmentV1 text={get(props, 'bookAppointmentText', '')} className1={`${get(tailwindClasses, 'highlightCta', '')}`} style1={{...get(style, 'highlightCta', {})}}
                      />
                    }
                  </>
                }
                </div>
                </div>
            </div>
          </div>
        }
        
    </div>
    </header>
  )
}

HeaderV2.propTypes = {
    style: object,
    logoPath: string,
    isTransparent: bool,
    cta1Text: string,
    cta1Link: string,

    cta2Text: string,
    cta2Link: string,
    bookAppointmentText: string,

    menu1Text: string,
    menu1Link: string,
    menu1SubMenu: arrayOf(object),
    menu2Text: string,
    menu2Link: string,
    menu2SubMenu: arrayOf(object),

    menu3Text: string,
    menu3Link: string,
    menu3SubMenu:  arrayOf(object),
    menu4Text: string,
    menu4Link: string,
    menu4SubMenu:  arrayOf(object),
    menu5Text: string,
    menu5Link: string,
    menu5SubMenu: arrayOf(object),

    menu6Text: string,
    menu6Link: string,
    menu6SubMenu:  arrayOf(object),

    menu7Text: string,
    menu7Link: string,
    menu7SubMenu:  arrayOf(object),
}

HeaderV2.defaultProps = {
    style: {
        container: {},
        logo: {},
        menu: {},
        subMenu: {},
        mobileMenu: {},
        cta: {},
        highlightCta: {}
    },
    tailwindClasses: {
        container: "",
        logo: "",
        menu: "",
        subMenu: "",
        mobileMenu: "",
        cta: "",
        highlightCta: "",
    },
    faviconUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1740660049.favicon.ico",
    logoPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735324249.200x100.png",
    logoLink:"/home",
    isTransparent: false,
    cta1Text: "Sign in",
    cta1Link: "#",

    cta2Text: "Sign up",
    cta2Link: "#",

    bookAppointmentText: "Book Appointment",

    menu1Text: "Solutions",
    menu1Link: "",
    menu1SubMenu: [
      {
        text: "Solution 1",
        link: "/solution1"
      },
      {
        text: "Solution 2",
        link: "/solution2"
      }
    ],
    menu2Text: "About",
    menu2Link: "/about",
    menu2SubMenu: [{
      text: "",
      link: ""
    }],

    menu3Text: "More",
    menu3Link: "",
    menu3SubMenu: [
      {
        text: "More 1",
        link: "/more1"
      },
      {
        text: "More 2",
        link: "/more2"
      }
    ],
    menu4Text: "About",
    menu4Link: "/about",
    menu4SubMenu: [{
      text: "",
      link: ""
    }],

    menu5Text: "About",
    menu5Link: "/about",
    menu5SubMenu: [{
      text: "",
      link: ""
    }],

    menu6Text: "About",
    menu6Link: "/about",
    menu6SubMenu: [{
      text: "",
      link: ""
    }],

    menu7Text: "About",
    menu7Link: "/about",
    menu7SubMenu: [{
      text: "",
      link: ""
    }],

}

export default HeaderV2;