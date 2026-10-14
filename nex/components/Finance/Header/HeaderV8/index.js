import NexImage from '@nex-core-ui/NexImage';
import get from 'lodash.get';
import React from 'react';
import parse from 'html-react-parser';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { arrayOf, bool, object, string } from 'prop-types';

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
const HeaderV8 = (props) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);

    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    useEffect(() => {
        setLoading(true);
        if (get(props, "apiEndpoint").length != "") {
            axios({
                method: get(props, "method"),
                url: get(props, "apiEndpoint"),
                withCredentials: false,
                // mode: 'cors',
                data: {},
                headers: {
                    // Authorization: 'Bearer ' + token
                    // 'clientId': 1,
                    // mode: 'cors',
                },
            }).then((response) => {
                // TODO: success or failure need to handle
                setItems(get(response, "data.data"));
                setLoading(false);
            });
        }

    }, [props.apiEndpoint, props.method]);
    const renderMenu = (menuText, menuLink, menuSubMenu) => {
        if (menuText.length == 0) {
            return null;
        }
        return (
            <>
                {get(menuSubMenu, "[0].text", "").length == 0 && (
                    <PrimaryLink href={menuLink} className={`py-6 px-5 text-base font-medium nx-text-hover-primary ${get(tailwindClasses, "level1Menu", "")}`} style={get(style, "level1Menu")}>
                        {menuText}
                    </PrimaryLink>
                )}
                {get(menuSubMenu, "[0].text", "").length != 0 && (
                    <div className={`relative menu`}>
                        <button
                            type="button"
                            className={`px-5 py-6 group inline-flex items-center rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 nx-text-hover-primary ${get(tailwindClasses, "level1Menu")}`}
                            aria-expanded="false"
                            style={get(style, "level1Menu", {})}
                        >
                            <span>{menuText}</span>
                            <svg
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </button>
                        <div className="absolute left-1/2 z-[100] -mt-1 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
                            <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                                {menuSubMenu.map((menu) => (
                                    <PrimaryLink href={get(menu, "link")}
                                        className={`block mb-2 p-2 cursor-pointer nx-text-hover-primary hover:bg-gray-100 nx-text-hover-primary ${get(
                                            tailwindClasses,
                                            "level2Menu"
                                        )}`}
                                        style={get(style, "level2Menu")}>
                                        {get(menu, "text")}
                                    </PrimaryLink>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    };
    const renderMobileMenu = (menuText, menuLink, menuSubMenu) => {
        if (menuText.length == 0) {
            return null;
        }
        return (
            <>
                {get(menuSubMenu, "[0].text", "").length == 0 && (
                    <PrimaryLink href={menuLink}
                        className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 nx-text-hover-primary
              ${get(tailwindClasses, "mobileMenu")}`} style={get(style, "mobileMenu")}>
                        {menuText}
                    </PrimaryLink>
                )}
                {get(menuSubMenu, "[0].text", "").length != 0 && (
                    <Disclosure as="div">
                        <DisclosureButton
                            className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
                                tailwindClasses,
                                "mobileMenu"
                            )}`}
                            style={get(style, "mobileMenu")}
                        >
                            <ChevronRightIcon
                                aria-hidden="true"
                                className="h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                            />
                            {menuText}
                        </DisclosureButton>
                        <DisclosurePanel as="ul" className="mt-1 px-2">
                            {menuSubMenu.map((menu) => (
                                <li key={get(menu, "text")}>
                                    <PrimaryLink href={get(menu, "link")}
                                        className={classNames(
                                            `block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700 nx-text-hover-primary  ${get(tailwindClasses, 'level2Menu')}`
                                        )}
                                        style={get(style, 'level2Menu')}
                                    >
                                        {get(menu, "text")}
                                    </PrimaryLink>
                                </li>

                            ))}
                        </DisclosurePanel>
                    </Disclosure>
                )}
            </>
        );
    };
    const renderDynamicMobileMenu = (level1) => {
        return (
            <>
                {get(level1, "children", "").length == 0 && (
                    <PrimaryLink
                        href={get(level1, 'link')}
                        className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
                            tailwindClasses,
                            "level1MobileMenu"
                        )}`}
                        style={get(style, "level1MobileMenu")}>
                        {get(level1, 'category_name')}
                    </PrimaryLink>
                )}
                {get(level1, 'children', []).length != 0 && (
                    <Disclosure as="div">
                        <DisclosureButton
                            className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
                                tailwindClasses,
                                "level1MobileMenu"
                            )}`}
                            style={get(style, "level1MobileMenu")}
                        >
                            <ChevronRightIcon
                                aria-hidden="true"
                                className="h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                            />
                            {get(level1, 'category_name')}
                        </DisclosureButton>
                        <DisclosurePanel as="ul" className="mt-1 px-2">
                            {get(level1, 'children', []).map((level2) => (
                                <>
                                    {get(level2, "children", "").length == 0 && (
                                        <PrimaryLink
                                            href={get(level2, 'link')}
                                            className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
                                                tailwindClasses,
                                                "level2Menu"
                                            )}`}
                                            style={get(style, "level2Menu")}>
                                            {get(level2, 'category_name')}
                                        </PrimaryLink>
                                    )}
                                    {get(level2, "children", "").length != 0 && (
                                        <Disclosure as="div">
                                            <DisclosureButton
                                                className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
                                                    tailwindClasses,
                                                    "level2Menu"
                                                )}`}
                                                style={get(style, "level2Menu")}
                                            >
                                                <ChevronRightIcon
                                                    aria-hidden="true"
                                                    className="h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                                                />
                                                {get(level2, 'category_name')}
                                            </DisclosureButton>
                                            <DisclosurePanel as="ul" className="mt-1 px-2">
                                                {get(level2, 'children', []).map((level3) => (
                                                    <li key={get(level3, 'category_name')}>
                                                        <PrimaryLink
                                                            href={get(level3, 'link')}
                                                            className={classNames(
                                                                `block rounded-md py-2 pl-9 pr-2 text-sm/6 ${get(tailwindClasses, 'level3Menu')}`
                                                            )}
                                                            style={get(style, 'level3Menu')}
                                                        >
                                                            {get(level3, 'category_name')}
                                                        </PrimaryLink>
                                                    </li>
                                                ))}
                                            </DisclosurePanel>
                                        </Disclosure>
                                    )}
                                </>
                            ))}
                        </DisclosurePanel>
                    </Disclosure>
                )}
            </>
        );
    };
    const renderDynamicMenu = (item) => {
        return (<>
            {get(item, "children", "").length == 0 && (
                <PrimaryLink
                    href={get(item, "link")}
                    className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold nx-text-hover-primary ${get(
                        tailwindClasses,
                        "level1Menu"
                    )}`}
                    style={get(style, "level1Menu")}>
                    {get(item, "category_name")}
                </PrimaryLink>
            )}
            {
                get(item, "children", "").length != 0 && <div className={`relative menu`}>
                    <button
                        type="button"
                        className={`px-5 py-6 group inline-flex items-center rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 nx-text-hover-primary ${get(
                            tailwindClasses,
                            "level1Menu"
                        )}`}
                        aria-expanded="false"
                        style={get(style, "level1Menu")}
                    >
                        <span>{get(item, "category_name")}</span>
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </button>
                    <div className="absolute left-1/2 z-[100] -mt-1 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
                        <div className=" shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                            <div >
                                <div className="flex text-sm flex-wrap" style={{ width: get(item, 'children', []).length * 192, maxWidth: 768 }}>
                                    {
                                        get(item, 'children', []).map((level2) => {
                                            return (
                                                <div className="w-48">
                                                    <p id="Clothing-heading" className={`font-medium nx-text-hover-primary hover:bg-gray-100 p-2 ${get(tailwindClasses, 'level2Menu')}}`} style={get(style, 'level2Menu')}>
                                                        {get(level2, 'children', []).length != 0 && get(level2, 'category_name')}
                                                        {get(level2, 'children', []).length == 0 && <PrimaryLink href={get(level2, 'link')}>{get(level2, 'category_name')}</PrimaryLink>}
                                                    </p>
                                                    <ul
                                                        role="list"
                                                        aria-labelledby="Clothing-heading"
                                                        className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                    >
                                                        {
                                                            get(level2, 'children', []).map((level3) => (
                                                                <li className="flex w-48">
                                                                    <PrimaryLink href={get(level3, 'link')} className={`focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 nx-text-hover-primary hover:bg-gray-100 ${get(tailwindClasses, 'level3Menu')}`} style={get(style, 'level3Menu')}>
                                                                        {get(level3, 'category_name')}
                                                                    </PrimaryLink>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
        );
    };
    const transparentCss = get(props, "isTransparent", false)
        ? "absolute bg-transparent w-full z-50"
        : "relative";

    return (
        <header className={`${transparentCss} ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className='max-w-6xl mx-auto'>
                <div className={`hidden lg:flex justify-between py-6 ${get(tailwindClasses, 'topContainer')}`} style={get(style, 'topContainer')}>
                    {get(props, 'logo', '').length !== 0 && <PrimaryLink href={get(props, 'logoLink')}><NexImage src={get(props, 'logo')} className={`!relative !h-16 !w-auto ${get(tailwindClasses, 'logo')}`} style={get(style, 'logo')} /></PrimaryLink>}
                    <div className='flex items-center gap-3'>
                        {get(props, 'icon1', '').length !== 0 && <span className={`text-yellow-600 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon1'))}</span>}
                        <div>
                            {get(props, 'text1', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text1')}</p>}
                            {get(props, 'text2', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text2')}</p>}
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        {get(props, 'icon2', '').length !== 0 && <span className={`text-yellow-600 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon2'))}</span>}
                        <div>
                            {get(props, 'text3', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text3')}</p>}
                            {get(props, 'text4', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text4')}</p>}
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        {get(props, 'icon3', '').length !== 0 && <span className={`text-yellow-600 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon3'))}</span>}
                        <div>
                            {get(props, 'text5', '').length !== 0 && <p className={`font-bold ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text5')}</p>}
                            {get(props, 'text6', '').length !== 0 && <p className={`text-sm ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(props, 'text6')}</p>}
                        </div>
                    </div>
                </div>
                <div className={`bg-yellow-600 lg:bg-yellow-600/65  text-white px-6 max-lg:py-2 ${get(tailwindClasses, "menuContainer")}`} style={get(style, "menuContainer")} >
                    <Helmet>
                        <link rel="icon" href={get(props, 'faviconUrl')}></link>
                    </Helmet>
                    <div className="">
                        <div className="flex items-center justify-between md:space-x-5">
                            <nav className="space-x-2 hidden lg:flex lg:items-center">
                                <span>
                                    {renderMenu(
                                        get(props, "menu1Text"),
                                        get(props, "menu1Link"),
                                        get(props, "menu1SubMenu")
                                    )}
                                </span>
                                <span>
                                    {renderMenu(
                                        get(props, "menu2Text"),
                                        get(props, "menu2Link"),
                                        get(props, "menu2SubMenu")
                                    )}
                                </span>
                                <span>
                                    {renderMenu(
                                        get(props, "menu3Text"),
                                        get(props, "menu3Link"),
                                        get(props, "menu3SubMenu")
                                    )}
                                </span>
                                <span>
                                    {renderMenu(
                                        get(props, "menu4Text"),
                                        get(props, "menu4Link"),
                                        get(props, "menu4SubMenu")
                                    )}
                                </span>
                                <span>
                                    {renderMenu(
                                        get(props, "menu5Text"),
                                        get(props, "menu5Link"),
                                        get(props, "menu5SubMenu")
                                    )}
                                </span>
                                {items.map((item) =>
                                    renderDynamicMenu(item)
                                )}
                                <span>
                                    {renderMenu(
                                        get(props, "menu6Text"),
                                        get(props, "menu6Link"),
                                        get(props, "menu6SubMenu")
                                    )}
                                </span>
                            </nav>
                            <div className='lg:hidden'>
                                <PrimaryLink href={get(props, 'logoLink')}>
                                    <span className="sr-only">Your Company</span>
                                    <NexImage
                                        src={get(props, "logo")}
                                        className={`!relative !h-16 !w-auto ${get(tailwindClasses, "logo")}`}
                                        style={{ ...get(style, "logo") }}
                                    ></NexImage>
                                </PrimaryLink>
                            </div>
                            <div className='hidden lg:flex gap-2'>
                                {get(props, 'socials', []).map((social) => <PrimaryLink className={`text-white hover:text-gray-300 transition-all duration-300 rounded-full size-6 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')} href={get(social, 'url')}>
                                    {parse(get(social, 'icon'))}
                                </PrimaryLink>)}
                            </div>
                            <div className="-my-2 -mr-2 w-full lg:hidden">
                                <button
                                    onClick={() => setMobileMenuOpen(true)}
                                    type="button"
                                    className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 float-right"
                                    aria-expanded="false"
                                >
                                    <span className="absolute -inset-0.5"></span>
                                    <span className="sr-only">Open menu</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        data-slot="icon"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {mobileMenuOpen && (
                        <div className="absolute inset-x-0 top-0 z-[100] origin-top-right transform p-2 transition lg:hidden">
                            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                                <div className="px-5 pb-6 pt-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <PrimaryLink href={get(props, 'logoLink')}>
                                                <NexImage
                                                    src={get(props, "logo")}
                                                    className={`!relative !h-16 !w-auto ${get(tailwindClasses, "logo")}`}
                                                    style={{ ...get(style, "logo") }}
                                                ></NexImage>
                                            </PrimaryLink>
                                        </div>
                                        <div className="-mr-2">
                                            <button
                                                onClick={() => setMobileMenuOpen(false)}
                                                type="button"
                                                className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                            >
                                                <span className="absolute -inset-0.5"></span>
                                                <span className="sr-only">Close menu</span>
                                                <svg
                                                    className="h-6 w-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="1.5"
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    data-slot="icon"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M6 18 18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-1">
                                                        {renderMobileMenu(
                                                            get(props, "menu1Text"),
                                                            get(props, "menu1Link"),
                                                            get(props, "menu1SubMenu")
                                                        )}
                                                        {renderMobileMenu(
                                                            get(props, "menu2Text"),
                                                            get(props, "menu2Link"),
                                                            get(props, "menu2SubMenu")
                                                        )}
                                                        {renderMobileMenu(
                                                            get(props, "menu3Text"),
                                                            get(props, "menu3Link"),
                                                            get(props, "menu3SubMenu")
                                                        )}
                                                        {items.map((item) => {
                                                            return renderDynamicMobileMenu(item);
                                                        })}
                                                        {renderMobileMenu(
                                                            get(props, "menu4Text"),
                                                            get(props, "menu4Link"),
                                                            get(props, "menu4SubMenu")
                                                        )}
                                                        {renderMobileMenu(
                                                            get(props, "menu5Text"),
                                                            get(props, "menu5Link"),
                                                            get(props, "menu5SubMenu")
                                                        )}
                                                        {renderMobileMenu(
                                                            get(props, "menu6Text"),
                                                            get(props, "menu6Link"),
                                                            get(props, "menu6SubMenu")
                                                        )}
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className='flex gap-2 mt-4'>
                                        {get(props, 'socials', []).map((social) => <PrimaryLink className={`text-gray-950 hover:text-gray-300 transition-all duration-300 rounded-full p-1 size-7 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')} href={get(social, 'url')}>
                                            {parse(get(social, 'icon'))}
                                        </PrimaryLink>)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    )
}

HeaderV8.propTypes = {
    style: object,
    tailwindClasses: object,
    icon1: string,
    text1: string,
    text2: string,
    icon2: string,
    text4: string,
    icon3: string,
    text5: string,
    text6: string,
    isTransparent: bool,
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
}

HeaderV8.defaultProps = {
    style: {
        container: {},
        topContainer: {},
        logo: {},
        icon: {},
        text: {},
        menuContainer: {},
        level1Menu: {},
        level2Menu: {},
        level3Menu: {},
        subMenu: {},
        mobileMenu: {}
    },
    tailwindClasses: {
        container: "",
        topContainer: "",
        logo: "",
        icon: "",
        text: "",
        menuContainer: "",
        level1Menu: "",
        level2Menu: "",
        level3Menu: "",
        subMenu: "",
        mobileMenu: ""
    },
    logoLink: "#",
    logo: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,
    text1: "1010 Avenue of the Moon",
    text2: "New York, NY 10018 US.",
    icon2: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>`,
    text3: "Mon - Sat 8.00 - 18.00",
    text4: "Sunday CLOSED",
    icon3: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-7"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,
    text5: "212 386 5575",
    text6: "Free call",
    faviconUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1740660049.favicon.ico",
    isTransparent: false,
    menu1Text: "Solutions",
    menu1Link: "",
    menu1SubMenu: [
        {
            text: "Solution 1",
            link: "/solution1",
        },
        {
            text: "Solution 2",
            link: "/solution2",
        },
    ],
    menu2Text: "About",
    menu2Link: "/about",
    menu2SubMenu: [
        {
            text: "",
            link: "",
        },
    ],
    menu3Text: "More",
    menu3Link: "",
    menu3SubMenu: [
        {
            text: "More 1",
            link: "/more1",
        },
        {
            text: "More 2",
            link: "/more2",
        },
    ],
    menu4Text: "Solutions",
    menu4Link: "",
    menu4SubMenu: [
        {
            text: "Solution 1",
            link: "/solution1",
        },
        {
            text: "Solution 2",
            link: "/solution2",
        },
    ],
    menu5Text: "About",
    menu5Link: "/about",
    menu5SubMenu: [
        {
            text: "",
            link: "",
        },
    ],
    menu6Text: "More",
    menu6Link: "",
    menu6SubMenu: [
        {
            text: "More 1",
            link: "/more1",
        },
        {
            text: "More 2",
            link: "/more2",
        },
    ],
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
    apiEndpoint:
        "http://localhost/nexnnova/category_with_link/admin/public/api/category/treeview",
    method: "get",
}
export default HeaderV8
