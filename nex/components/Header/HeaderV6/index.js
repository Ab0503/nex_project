'use client'
import { useState } from 'react'
import { arrayOf, bool, object, string } from 'prop-types';
import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import { Helmet } from 'react-helmet';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import parse from 'html-react-parser';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const HeaderV6 = (props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const renderMenu = (menuText, menuLink, menuSubMenu) => {
    if (menuText.length == 0) {
      return null;
    }
    return (<>
      {
        get(menuSubMenu, '[0].text', '').length == 0 && (
          <PrimaryLink href={menuLink} className={`py-6 px-5 text-base font-medium nx-text-hover-primary ${get(tailwindClasses, 'menu')}`} style={get(style, 'menu')}>{menuText}</PrimaryLink>
        )
      }
      {
        get(menuSubMenu, '[0].text', '').length != 0 && (
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
    if (menuText.length == 0) {
      return null;
    }
    return (<>
      {
        get(menuSubMenu, '[0].text', '').length == 0 && (
          <PrimaryLink
            href={menuLink}
            className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold nx-text-hover-primary ${get(tailwindClasses, 'mobileMenu')}`}
            style={get(style, 'mobileMenu')}
          >{menuText}
          </PrimaryLink>
        )
      }
      {
        get(menuSubMenu, '[0].text', '').length != 0 && (
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
                      `block rounded-md py-2 pl-9 pr-2 text-sm/6 nx-text-hover-primary ${get(tailwindClasses, 'mobileMenu')}`,
                    )}
                    style={get(style, 'mobileMenu')}
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
    <header className={`sticky top-0 left-0 right-0 z-50 ${transparentCss} ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <Helmet>
        <link rel="icon" href={get(props, 'faviconUrl')}></link>
      </Helmet>
      <div className={`shadow`}>
        <div className="mx-auto max-w-7xl px-6 max-sm:px-3">
          <div className="flex items-center justify-between  md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 py-3">
              <PrimaryLink href={get(props, 'logoLink')}>
                <span className="sr-only">Your Company</span>
                <NexImage src={get(props, 'logoPath')} className={`!relative !h-16 ${get(tailwindClasses, 'logo')}`} style={{ ...get(style, 'logo') }}></NexImage>
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
            <div className="hidden lg:flex gap-2 lg:flex-1 items-center justify-end lg:w-0">
              {get(props, 'socials', []).map((social) =>
                <PrimaryLink
                  href={get(social, "url")}
                  className={`nx-text-hover-primary ${get(tailwindClasses, 'socialIcons')}`}
                  style={{ ...get(style, 'socialIcons') }}
                >
                  <span className="sr-only">Facebook</span>
                  {get(social, 'icon').length !== 0 && <div aria-hidden="true" className="h-6 w-6" >
                    {parse(get(social, 'icon'))}
                  </div>}
                </PrimaryLink>)}
            </div>

          </div>
        </div>
        {
          mobileMenuOpen && <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden">
            <div className={`divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <NexImage src={get(props, 'logoPath')} className={`!relative !h-16 ${get(tailwindClasses, 'logo')}`} style={{ ...get(style, 'logo') }}></NexImage>
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
              <div className="flex justify-center gap-2 py-4">
                {get(props, 'socials', []).map((social) =>
                  <PrimaryLink
                    href={get(social, "url")}
                    className={`nx-text-hover-primary ${get(tailwindClasses, 'socialIcons')}`}
                    style={{ ...get(style, 'socialIcons') }}
                  >
                    <span className="sr-only">Facebook</span>
                    {get(social, 'icon').length !== 0 && <div aria-hidden="true" className="h-6 w-6" >
                      {parse(get(social, 'icon'))}
                    </div>}
                  </PrimaryLink>)}
              </div>
            </div>
          </div>
        }

      </div>
    </header>
  )
}

HeaderV6.propTypes = {
  style: object,
  tailwindClasses: object,
  logoPath: string,
  isTransparent: bool,
  cta1Text: string,
  cta1Link: string,

  cta2Text: string,
  cta2Link: string,

  menu1Text: string,
  menu1Link: string,
  menu1SubMenu: arrayOf(object),
  menu2Text: string,
  menu2Link: string,
  menu2SubMenu: arrayOf(object),

  menu3Text: string,
  menu3Link: string,
  menu3SubMenu: arrayOf(object),
  menu4Text: string,
  menu4Link: string,
  menu4SubMenu: arrayOf(object),
  menu5Text: string,
  menu5Link: string,
  menu5SubMenu: arrayOf(object),

  menu6Text: string,
  menu6Link: string,
  menu6SubMenu: arrayOf(object),

  menu7Text: string,
  menu7Link: string,
  menu7SubMenu: arrayOf(object),
  social: arrayOf(object)
}

HeaderV6.defaultProps = {
  style: {
    container: {},
    logo: {},
    menu: {},
    subMenu: {},
    mobileMenu: {},
    socialIcons: {}
  },
  tailwindClasses: {
    container: "",
    logo: "",
    menu: "",
    subMenu: "",
    mobileMenu: "",
    socialIcons: "",
  },
  faviconUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1740660049.favicon.ico",
  logoLink: "#",
  logoPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
  isTransparent: false,
  cta1Text: "Sign in",
  cta1Link: "#",

  cta2Text: "Sign up",
  cta2Link: "#",

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
  socials: [
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>`
    },
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                      </svg>`
    },
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        />
                      </svg>`
    },
    {
      url: "https://facebook.com",
      icon: `<svg fill="currentColor" viewBox="0 0 24 24" >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>`
    },
  ],
}

export default HeaderV6;