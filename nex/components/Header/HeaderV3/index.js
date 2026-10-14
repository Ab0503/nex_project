"use client";

import { Children, useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { arrayOf, bool, object, string } from "prop-types";
import NexImage from "@nex-core-ui/NexImage";
import get from "lodash.get";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import has from "lodash.has";
import axios from "axios";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import { Helmet } from "react-helmet";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderV3 = (props) => {
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
          <PrimaryLink href={menuLink} className={`py-6 px-5 text-base font-medium
            ${get(tailwindClasses, "level1Menu", "")}`} style={get(style, "level1Menu")}>
            {menuText}
          </PrimaryLink>
        )}
        {get(menuSubMenu, "[0].text", "").length != 0 && (
          <div className={`relative menu`}>
            <button
              type="button"
              className={`px-5 py-6 group inline-flex items-center rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 
                ${get(tailwindClasses, "level1Menu")}`}
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
            <div className="absolute left-1/2 z-10 -mt-1 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
              <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                {menuSubMenu.map((menu) => (
                  <PrimaryLink href={get(menu, "link")}
                    className={`block mb-2 p-2 cursor-pointer ${get(
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
            className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 
              ${get(tailwindClasses, "mobileMenu")}`} style={get(style, "mobileMenu")}>
            {menuText}
          </PrimaryLink>
        )}
        {get(menuSubMenu, "[0].text", "").length != 0 && (
          <Disclosure as="div">
            <DisclosureButton
              className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 ${get(
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
                      `block rounded-md py-2 pl-9 pr-2 text-sm/6 ${get(tailwindClasses, 'level2Menu')}`
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
            className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 ${get(
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
              className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 ${get(
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
                      className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 ${get(
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
                        className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 ${get(
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
          className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold ${get(
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
            className={`px-5 py-6 group inline-flex items-center rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${get(
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
          <div className="absolute left-1/2 z-10 -mt-1 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
            <div className=" shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
              <div >
                <div className="flex text-sm flex-wrap" style={{ width: get(item, 'children', []).length * 192, maxWidth: 768 }}>
                  {
                    get(item, 'children', []).map((level2) => {
                      return (
                        <div className="w-48">
                          <p id="Clothing-heading" className={`font-medium ${get(tailwindClasses, 'level2Menu')}}`} style={get(style, 'level2Menu')}>
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
                                  <PrimaryLink href={get(level3, 'link')} className={`focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${get(tailwindClasses, 'level3Menu')}`} style={get(style, 'level3Menu')}>
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
    : "relative bg-white";
  return (
    <header>
      <div
        className={`${transparentCss} ${get(tailwindClasses, "container")}`}
        style={get(style, "container")}
      >
        <Helmet>
          <link rel="icon" href={get(props, 'faviconUrl')}></link>
        </Helmet>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between  md:justify-start md:space-x-10 text-white">
            <div className="flex justify-start lg:w-0 lg:flex-1 py-6">
              <PrimaryLink href={get(props, 'logoLink')}>
                <span className="sr-only">Your Company</span>
                <NexImage
                  src={get(props, "logoPath")}
                  className={`!relative !h-16 !w-auto ${get(tailwindClasses, "logo")}`}
                  style={{ ...get(style, "logo") }}
                ></NexImage>
              </PrimaryLink>
            </div>
            <div className="-my-2 -mr-2 w-full lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 float-right"
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
            <nav className="space-x-2 hidden lg:flex lg:items-center">
              {get(props, "menus", []).map((menu) => (
                <li
                  className={`list-none nx-text-hover-primary py-6 px-5 text-base font-medium ${get(
                    tailwindClasses,
                    "menu"
                  )}`}
                  style={get(style, "menu")}
                ><PrimaryLink href={get(menu, "link")}>
                    {get(menu, "menu")}
                  </PrimaryLink>
                </li>
              ))}
              <li className="list-none">
                {renderMenu(
                  get(props, "menu1Text"),
                  get(props, "menu1Link"),
                  get(props, "menu1SubMenu")
                )}
              </li>
              <li className="list-none">
                {renderMenu(
                  get(props, "menu2Text"),
                  get(props, "menu2Link"),
                  get(props, "menu2SubMenu")
                )}
              </li>
              <li className="list-none">
                {renderMenu(
                  get(props, "menu3Text"),
                  get(props, "menu3Link"),
                  get(props, "menu3SubMenu")
                )}
              </li>
              {items.map((item) => {
                return renderDynamicMenu(item);
              })}
            </nav>
            <div className="hidden lg:flex lg:flex-1 items-center justify-end lg:w-0">
              <PrimaryLink href={get(props, 'cartLink')}>
                <ShoppingCartIcon className={"h-10 w-10 nx-btn-primary rounded-full p-1"} />
              </PrimaryLink>
              {get(props, "cta1Text").length != 0 && <PrimaryLink
                href={get(props, "cta1Link")}
                className={`whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900  ${get(
                  tailwindClasses,
                  "cta"
                )}`}
                style={get(style, "cta")}
              >
                {get(props, "cta1Text")}
              </PrimaryLink>}
              {get(props, "cta2Text").lenght != 0 && <button className={`ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm hover:translate-y-[-0.15rem] nx-btn-primary nx-btn-primary:hover ${get(
                tailwindClasses,
                "highlightCta"
              )}`}
                style={get(style, "highlightCta")}><PrimaryLink
                  href={get(props, "cta2Link")}

                >
                  {get(props, "cta2Text")}
                </PrimaryLink></button>}
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <PrimaryLink href="/">
                      <NexImage
                        src={get(props, "logoPath")}
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
                          {get(props, 'menus', []).map((menu) => <PrimaryLink href={get(menu, 'link')}><li className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold text-gray-700 ${get(tailwindClasses, 'mobileMenu')}`} style={get(style, 'mobileMenu')}>{get(menu, 'menu')}</li></PrimaryLink>)}
                          {items.map((item) => {
                            return renderDynamicMobileMenu(item);
                          })}
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
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="flex items-center justify-between px-5 py-6">
                <PrimaryLink href={get(props, 'cartLink')}>
                  <ShoppingCartIcon className={"h-10 w-10 nx-btn-primary rounded-full p-1"} />
                </PrimaryLink>
                {get(props, "cta2Text", '').length !== 0 && <button className={`rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm hover:translate-y-[-0.15rem] nx-btn-primary nx-btn-primary:hover ${get(
                  tailwindClasses, "highlightCta")}`} style={get(style, "highlightCta")}><PrimaryLink
                    href={get(props, "cta2Link")}>
                    {get(props, "cta2Text")}
                  </PrimaryLink></button>}
                {get(props, "cta1Text", '').length !== 0 && <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?
                  <PrimaryLink
                    href={get(props, "cta1Link")}
                    className={`text-indigo-600 hover:text-indigo-500 ${get(
                      tailwindClasses,
                      "cta"
                    )}`}
                    style={get(style, "cta")}
                  >
                    {get(props, "cta1Text")}
                  </PrimaryLink>
                </p>}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

HeaderV3.propTypes = {
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

};

HeaderV3.defaultProps = {
  style: {
    container: {},
    logo: {},
    level1Menu: {},
    level2Menu: {},
    level3Menu: {},
    subMenu: {},
    mobileMenu: {},
    cta: {},
    highlightCta: {},
  },
  faviconUrl: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1740660049.favicon.ico",
  logoPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735324249.200x100.png",
  logoLink: "/",
  isTransparent: false,
  cta1Text: "Sign in",
  cta1Link: "#",

  cta2Text: "Sign up",
  cta2Link: "#",

  menus: [
    {
      menu: "home",
      link: "#",
    },
    {
      menu: "home",
      link: "#",
    }
  ],
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
  apiEndpoint:
    "http://localhost/nexnnova/category_with_link/admin/public/api/category/treeview",
  method: "get",
};

export default HeaderV3;
