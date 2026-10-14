import { useState } from 'react';
import { arrayOf, bool, object, string } from 'prop-types';
import get from 'lodash.get';
import parse from 'html-react-parser/lib/index';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Helmet } from 'react-helmet';

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import NexImage from '@nex-core-ui/NexImage';
import PrimaryLink from '@nex-core-ui/PrimaryLink';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const HeaderV4 = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const renderMenu = (menuText, menuLink, menuSubMenu) => {
        if (menuText.length === 0) {
            return null;
        }
        return (<>
            {
                get(menuSubMenu, '[0].text', '').length === 0 && (
                    <a href={menuLink} className={`py-6 px-5 text-base font-medium text-gray-500 nx-text-hover-primary ${get(tailwindClasses, 'menu')}`} style={get(style, 'menu')}>{menuText}</a>
                )
            }
            {
                get(menuSubMenu, '[0].text', '').length !== 0 && (
                    <div className={`relative menu`} >
                        <button type="button" className={`px-5 py-6 group inline-flex items-center rounded-md text-base font-medium text-gray-500 nx-text-hover-primary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${get(tailwindClasses, 'menu')}`} aria-expanded="false" style={get(style, 'menu')}>
                            <span>{menuText}</span>
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <div className="absolute left-1/2 z-10 -mt-1 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
                            <div className="w-56 shrink rounded-xl p-4 text-sm/6 font-semibold text-gray-900 nx-text-hover-primary shadow-lg ring-1 ring-gray-900/5">
                                {
                                    menuSubMenu.map((menu) => (
                                        <PrimaryLink href={get(menu, 'link')} className={`block mb-2 p-2 cursor-pointer ${get(tailwindClasses, 'subMenu')}`} style={get(style, 'subMenu')}>{get(menu, 'text')}</PrimaryLink>
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
                get(menuSubMenu, '[0].text', '').length === 0 && (
                    <a
                        href={menuLink}
                        className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 ${get(tailwindClasses, 'mobileMenu')}`}
                        style={get(style, 'mobileMenu')}
                    >{menuText}
                    </a>
                )
            }
            {
                get(menuSubMenu, '[0].text', '').length !== 0 && (
                    <Disclosure as="div">
                        <DisclosureButton
                            className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 ${get(tailwindClasses, 'mobileMenu')}`}
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
                                            'block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700',
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
        <header>
            <div className={`${transparentCss} shadow ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                <Helmet>
                    <link rel="icon" href={get(props, 'faviconUrl')}></link>
                </Helmet>
                <div className="max-w-7xl xl:px-10 md:px-5  max-sm:px-4">
                    <div className="flex items-center justify-between sm-justify-start max-md:space-x-2 xl:space-x-10">
                        <div className="flex items-center gap-4 lg:w-0 lg:flex-1 py-6 shrink-0">
                            <div className="lg:hidden ">
                                <button onClick={() => setMobileMenuOpen(true)} type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 float-right" aria-expanded="false">
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </button>
                            </div>
                            <a href="#">
                                <span className="sr-only">Your Company</span>
                                <NexImage src={get(props, 'logoPath')} className={`!relative !h-16 !w-32 ${get(tailwindClasses, 'logo')}`} style={{ ...get(style, 'logo') }} />
                            </a>
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
                        {props.socials.length !== 0 && (
                            <div className={`flex flex-row gap-1 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}>
                                {props.socials.map((social) =>
                                    <PrimaryLink href={get(social, 'ctalink')}>{get(social, 'svg').length > 0 && parse(get(social, 'svg'))}</PrimaryLink>
                                )}
                            </div>)}
                        {get(props, "ctaText", []).length !== 0 && (
                            <Menu as="div" className={`sm:text-xs relative inline-block text-left max-md:hidden`}>
                                <div>
                                    <MenuButton className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-700 px-2 py-1 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-900`}>
                                        {get(props, 'ctaText')}
                                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-4 text-gray-400" />
                                    </MenuButton>
                                </div>

                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <div className="py-1">
                                        {get(props, 'menuItems', []).map((item) => (
                                            <MenuItem>
                                                <PrimaryLink
                                                    href={get(item, 'ctaLink')}
                                                    className="block px-4 py-2 text-sm text-gray-50 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                >
                                                    {get(item, 'text')}
                                                </PrimaryLink>
                                            </MenuItem>
                                        ))}
                                    </div>
                                </MenuItems>
                            </Menu>
                        )}
                    </div>
                </div>
                {
                    mobileMenuOpen && <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-50 shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <NexImage src={get(props, 'logoPath')} className={`!relative !h-12 !w-24 ${get(tailwindClasses, 'logo')}`} style={{ ...get(style, 'logo') }} />
                                    </div>
                                    <div className="-mr-2">
                                        <button onClick={() => setMobileMenuOpen(false)} type="button" className="relative inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                {get(props, "ctaText", []).length !== 0 && (
                                    <Menu as="div" className={`sm:text-xs relative inline-block text-left ml-5`}>
                                        <div>
                                            <MenuButton className={`inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-700 px-2 py-1 text-sm font-semibold text-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-900`}>
                                                {get(props, 'ctaText')}
                                                <ChevronDownIcon aria-hidden="true" className="-mr-1 size-4 text-gray-400" />
                                            </MenuButton>
                                        </div>

                                        <MenuItems
                                            transition
                                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                        >
                                            <div className="py-1">
                                                {get(props, 'menuItems', []).map((item) => (
                                                    <MenuItem>
                                                        <a
                                                            href={get(item, 'ctaLink')}
                                                            className="block px-4 py-2 text-sm text-gray-50 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                                        >
                                                            {get(item, 'text')}
                                                        </a>
                                                    </MenuItem>
                                                ))}
                                            </div>
                                        </MenuItems>
                                    </Menu>
                                )}
                            </div>
                        </div>
                    </div>
                }

            </div>
        </header>
    )
}

HeaderV4.propTypes = {
    style: object,
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
}

HeaderV4.defaultProps = {
    style: {
        container: {},
        logo: {},
        socialIcon: {},
        menu: {},
        subMenu: {},
        mobileMenu: {},
        cta: {},
        highlightCta: {},
    },
    tailwindClasses: {
        container: "",
        logo: "",
        socialIcon: "",
        menu: "",
        subMenu: "",
        mobileMenu: "",
        cta: "",
        highlightCta: "",
    },
    faviconUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1740660049.favicon.ico",
    logoPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735324249.200x100.png",
    isTransparent: false,
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
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none"><path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#000"/>',
            ctalink: "#"
        },
        {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 -0.5 25 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#fff"/><rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#000" stroke-linecap="round"/></svg>',
            ctalink: "#"
        },
        {
            svg: '<svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24" fill="none"><path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#000"/><path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#000"/><path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#000"/></svg>',
            ctalink: "#"
        },
    ],
    ctaText: "Language",
    menuItems: [
        {
            text: "English",
            ctaLink: "#"
        },
        {
            text: "Hindi",
            ctaLink: "#"
        },
        {
            text: "Marathi",
            ctaLink: "#"
        },
    ]
}

export default HeaderV4