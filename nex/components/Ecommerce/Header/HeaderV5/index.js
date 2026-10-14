import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
  PhoneIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { withRouter } from "next/router";
import NexImage from "@nex-core-ui/NexImage";
import { React, useState, useEffect } from "react";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import axios from "axios";
import { Helmet } from "react-helmet";
import toast, { Toaster } from 'react-hot-toast';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderV5 = (props) => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState(get(props, 'router.query.q', ''));
  console.log(props.router, 'sdf');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});

  const handleInputChange = (e) => {
    setSearchText(e.target.value.trim())
  };
  const onSearchClick = () =>{
    if(searchText.length == 0) {
      toast.error("Please enter search keyword", {position: 'top-right',});
    }
    props.router.push("/search?q="+searchText);
  }
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
          <PrimaryLink
            href={menuLink}
            className={`text-base font-medium nx-text-hover-primary 
                ${get(tailwindClasses, "level1Menu", "")}`}
            style={get(style, "level1Menu")}
          >
            <button className="py-2">
            {menuText}
            </button>
            
          </PrimaryLink>
        )}
        {get(menuSubMenu, "[0].text", "").length != 0 && (
          <div className={`relative menu`}>
            <button
              type="button"
              className={`group  py-2 inline-flex items-center rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 nx-text-hover-primary 
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
            <div className="absolute top-10  z-10 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
              <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                {menuSubMenu.map((menu) => (
                  <PrimaryLink
                    href={get(menu, "link")}
                    className={`block mb-2 p-2 cursor-pointer nx-text-hover-primary ${get(
                      tailwindClasses,
                      "level2Menu"
                    )}`}
                    style={get(style, "level2Menu")}
                  >
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
          <PrimaryLink
            href={menuLink}
            className={`block rounded-md pl-10 pr-2 text-sm/6 font-semibold text-gray-700 nx-text-hover-primary
                  ${get(tailwindClasses, "mobileMenu")}`}
            style={get(style, "mobileMenu")}
          >
            {menuText}
          </PrimaryLink>
        )}
        {get(menuSubMenu, "[0].text", "").length != 0 && (
          <Disclosure as="div" >
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
            <DisclosurePanel as="ul" className="px-2 mb-2">
              {menuSubMenu.map((menu) => (
                <li key={get(menu, "text")}>
                  <PrimaryLink
                    href={get(menu, "link")}
                    className={classNames(
                      `block rounded-md  pl-9 pr-2 text-sm/6 nx-text-hover-primary ${get(
                        tailwindClasses,
                        "level2Menu"
                      )}`
                    )}
                    style={get(style, "level2Menu")}
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
            href={get(level1, "link")}
            className={`block rounded-md pl-10 pr-2 text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
              tailwindClasses,
              "level1Menu"
            )}`}
            style={get(style, "level1Menu")}
          >
            {get(level1, "category_name")}
          </PrimaryLink>
        )}
        {get(level1, "children", []).length != 0 && (
          <Disclosure as="div">
            <DisclosureButton
              className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
                tailwindClasses,
                "level1Menu"
              )}`}
              style={get(style, "level1Menu")}
            >
              <ChevronRightIcon
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
              />
              {get(level1, "category_name")}
            </DisclosureButton>
            <DisclosurePanel as="ul" className="px-2">
              {get(level1, "children", []).map((level2) => (
                <>
                  {get(level2, "children", "").length == 0 && (
                    <PrimaryLink
                      href={get(level2, "link")}
                      className={`block rounded-md pl-10 pr-2 text-sm/6 font-semibold text-gray-700 nx-text-hover-primary ${get(
                        tailwindClasses,
                        "level2Menu"
                      )}`}
                      style={get(style, "level2Menu")}
                    >
                      {get(level2, "category_name")}
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
                        {get(level2, "category_name")}
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {get(level2, "children", []).map((level3) => (
                          <li key={get(level3, "category_name")}>
                            <PrimaryLink
                              href={get(level3, "link")}
                              className={classNames(
                                `block rounded-md py-2 pl-9 pr-2 text-sm/6 nx-text-hover-primary ${get(
                                  tailwindClasses,
                                  "level3Menu"
                                )}`
                              )}
                              style={get(style, "level3Menu")}
                            >
                              {get(level3, "category_name")}
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
    return (
      <>
        {get(item, "children", "").length == 0 && (
          <PrimaryLink
            href={get(item, "link")}
            className={`block rounded-md py-2 pl-10 pr-2 text-sm/6 font-semibold nx-text-hover-primary ${get(
              tailwindClasses,
              "level1Menu"
            )}`}
            style={get(style, "level1Menu")}
          >
            {get(item, "category_name")}
          </PrimaryLink>
        )}
        {get(item, "children", "").length != 0 && (
          <div className={`relative menu`}>
            {/* <div
                        className={`px-5 py-4 group inline-flex items-center rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 nx-text-hover-primary ${get(
                            tailwindClasses,
                            "level1Menu"
                        )}`}
                        aria-expanded="false"
                        style={get(style, "level1Menu")}
                    >
                        <span>{get(item, "category_name")}</span>

                        <div className="float-end">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </div>
                    </div> */}

            <div
              className={classNames(
                1 == 0
                  ? "bg-gray-50 text-indigo-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                "group flex gap-x-3 rounded-md p-2 pl-3 text-sm/6 font-semibold"
              )}
            >
              {get(item, "category_name")}
              <span
                aria-hidden="true"
                className="ml-auto w-9 min-w-max whitespace-nowrap px-2.5 py-0.5 text-center text-xs/5 font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
            </div>
            <div className="absolute top-0 -right-[125%] z-10 -mt-1 flex w-screen max-w-min -translate-x-1/2 px-4 sub-menu">
              <div className=" shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-gray-900 shadow-lg ring-1 ring-gray-900/5">
                <div>
                  <div
                    className="flex text-sm flex-wrap"
                    style={{
                      width: get(item, "children", []).length * 192,
                      maxWidth: 768,
                    }}
                  >
                    {get(item, "children", []).map((level2) => {
                      return (
                        <div className="w-48">
                          <p
                            id="Clothing-heading"
                            className={`font-medium nx-text-hover-primary ${get(
                              tailwindClasses,
                              "level2Menu"
                            )}}`}
                            style={get(style, "level2Menu")}
                          >
                            {get(level2, "children", []).length != 0 &&
                              get(level2, "category_name")}
                            {get(level2, "children", []).length == 0 && (
                              <PrimaryLink href={get(level2, "link")}>
                                {get(level2, "category_name")}
                              </PrimaryLink>
                            )}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="Clothing-heading"
                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                          >
                            {get(level2, "children", []).map((level3) => (
                              <li className="flex w-48">
                                <PrimaryLink
                                  href={get(level3, "link")}
                                  className={`focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 nx-text-hover-primary ${get(
                                    tailwindClasses,
                                    "level3Menu"
                                  )}`}
                                  style={get(style, "level3Menu")}
                                >
                                  {get(level3, "category_name")}
                                </PrimaryLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <header
      className={`shadow-md w-full ${get(tailwindClasses, "container")}`}
      style={get(style, "container")}
    >
      <Toaster></Toaster>
      <Helmet>
        <link rel="icon" href={get(props, "faviconUrl")}></link>
      </Helmet>
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {get(props, "logoPath", "").length !== 0 && (
          <PrimaryLink href={get(props, "logoLink")}>
            <NexImage
              src={get(props, "logoPath")}
              className={`!relative !h-12 !w-auto ${get(
                tailwindClasses,
                "logo"
              )}`}
            />
          </PrimaryLink>
        )}
        {get(props, "inputPlaceholder", "").length !== 0 && (
          <div className="hidden lg:flex items-center w-1/2 border-2 nx-border-primary rounded-full overflow-hidden">
            <input
              type="text"
              placeholder={get(props, "inputPlaceholder")}
              className={`w-full px-4 py-2 outline-none border-transparent focus:outline-none focus:border-transparent focus:ring-transparent ${get(
                tailwindClasses,
                "searchBox"
              )}`}
              style={get(style, "searchBox")}
              onChange={(e)=>handleInputChange(e)}
              value={searchText}
            />
            <button
              className={`nx-btn-primary nx-btn-primary:hover px-4 py-2 ${get(
                tailwindClasses,
                "searchButton"
              )}`}
              style={get(style, "searchButton")}
              onClick={onSearchClick}
            >
              <MagnifyingGlassIcon className="w-6 h-7" />
            </button>
          </div>
        )}
        {get(props, "value1", "").length !== 0 && (
          <div className="hidden lg:flex items-center space-x-4">
            <PhoneIcon
              className={`w-6 h-6 nx-text-primary ${get(
                tailwindClasses,
                "phoneIcon"
              )}`}
              style={get(style, "phoneIcon")}
            />
            <div>
              <p
                className={`text-sm ${get(tailwindClasses, "value")}`}
                style={get(style, "value")}
              >
                <span
                  className={`font-bold ${get(tailwindClasses, "text")}`}
                  style={get(style, "text")}
                >
                  {get(props, "text1")}
                </span>{" "}
                {get(props, "value1")}
              </p>
              {get(props, "value2", "").length !== 0 && (
                <p
                  className={`text-sm ${get(tailwindClasses, "value")}`}
                  style={get(style, "value")}
                >
                  <span
                    className={`font-bold ${get(tailwindClasses, "text")}`}
                    style={get(style, "text")}
                  >
                    {get(props, "text2")}
                  </span>{" "}
                  {get(props, "value2")}
                </p>
              )}
            </div>
          </div>
        )}
        <div className="lg:hidden flex items-center space-x-4">
          <PrimaryLink href={get(props, "wishListLink")}>
            <HeartIcon
              className={`w-6 h-6 nx-text-hover-primary ${get(
                tailwindClasses,
                "wishListIcon"
              )}`}
              style={get(style, "wishListIcon")}
            />
          </PrimaryLink>
          <PrimaryLink href={get(props, "cartLink")}>
            <ShoppingCartIcon
              className={`w-6 h-6 nx-text-hover-primary ${get(
                tailwindClasses,
                "cartIcon"
              )}`}
              style={get(style, "cartIcon")}
            />
          </PrimaryLink>
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <div
        className={`lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-white shadow-md p-4`}
      >
        {get(props, "inputPlaceholder", "").length !== 0 && (
          <div className="flex items-center w-full mb-5 border-2 nx-border-primary rounded-full overflow-hidden">
            <input
              type="text"
              placeholder={get(props, "inputPlaceholder")}
              className={`w-full px-4 py-2 outline-none border-transparent focus:outline-none focus:border-transparent focus:ring-transparent ${get(
                tailwindClasses,
                "searchBox"
              )}`}
              style={get(style, "searchBox")}
              onChange={(e)=>handleInputChange(e)}
              value={searchText}
            />
            <button
              className={`nx-btn-primary nx-btn-primary:hover px-4 py-2 ${get(
                tailwindClasses,
                "searchButton"
              )}`}
              style={get(style, "searchButton")}
              onClick={onSearchClick}
            >
              <MagnifyingGlassIcon className="w-6 h-7" />
            </button>
          </div>
        )}
        <ul className="mb-4">
          {get(props, 'menus', []).map((menu) => <PrimaryLink href={get(menu, 'link')}><li className={`pl-10    nx-text-hover-primary mb-1 ${get(tailwindClasses, 'menu')}`} style={get(style, 'menu')}>{get(menu, 'menu')}</li></PrimaryLink>)}
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
        <ul className="">
          {get(props, "dropDownCtaText", "").length !== 0 && (
            <h2
              className={`font-bold ${get(tailwindClasses, "categoryTitle")}`}
              style={get(style, "categoryTitle")}
            >
              {get(props, "dropDownCtaText")}
            </h2>
          )}
          
          {items.map((item) => {
            return renderDynamicMobileMenu(item);
          })}
        </ul>
        {get(props, "cta1Text").length != 0 &&
          get(props, "cta2Text").lenght != 0 && (
            <div className="lg:hidden">
                <div className="grid grid-cols-2">
                    <div className="item text-center">

                        <button
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium nx-btn-primary text-gray-500 hover:text-gray-900 shadow-sm  ${get(
                                tailwindClasses,
                                "cta"
                                )}`}
                                style={get(style, "cta")}
                        >
                            <PrimaryLink href={get(props, "cta1Link")}>
                            {get(props, "cta1Text")}
                            </PrimaryLink>
                        </button>
                    </div>
                    <div className="item text-center">
                        <button
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium nx-btn-primary nx-btn-primary:hover shadow-sm ${get(
                            tailwindClasses,
                            "highlightCta"
                            )}`}
                            style={get(style, "highlightCta")}
                        >
                            <PrimaryLink href={get(props, "cta2Link")}>
                            {get(props, "cta2Text")}
                            </PrimaryLink>
                        </button>
                    </div>
                </div>
            </div>
          )}
      </div>
      <nav
        className={`hidden lg:flex shadow-sm w-full ${get(
          tailwindClasses,
          "bottomSection"
        )}`}
        style={get(style, "bottomSection")}
      >
        <div className="container mx-auto flex justify-between items-center px-6">
          <Popover className="relative">
            {get(props, "dropDownCtaText").length !== 0 && (
              <PopoverButton
                className={`flex items-center nx-btn-primary nx-btn-primary:hover px-4 py-2 rounded gap-x-2 ${get(
                  tailwindClasses,
                  "dropDownCta"
                )}`}
                style={get(style, "dropDownCta")}
              >
                <Bars3Icon className="w-5 h-5" />
                <span>{get(props, "dropDownCtaText")}</span>
                <ChevronDownIcon className="w-4 h-4" />
              </PopoverButton>
            )}
            <PopoverPanel className="absolute left-0 z-10 mt-2 w-80 bg-white shadow-lg border border-gray-200 rounded-xl p-2">
              <ul>
                {items.map((item) => {
                  return renderDynamicMenu(item);
                })}
              </ul>
            </PopoverPanel>
          </Popover>
          <ul className="hidden lg:flex space-x-6 font-semibold">
            
            {get(props, "menus", []).map((menu) => (
              <PrimaryLink href={get(menu, "link")}>
                <li
                  className={`nx-text-hover-primary py-2 ${get(
                    tailwindClasses,
                    "menu"
                  )}`}
                  style={get(style, "menu")}
                >
                  {get(menu, "menu")}
                </li>
              </PrimaryLink>
            ))}

            <li>
            {renderMenu(
              get(props, "menu1Text"),
              get(props, "menu1Link"),
              get(props, "menu1SubMenu")
            )}
            
          </li>
          <li>
            {renderMenu(
              get(props, "menu2Text"),
              get(props, "menu2Link"),
              get(props, "menu2SubMenu")
            )}
          </li>
          <li>
            {renderMenu(
              get(props, "menu3Text"),
              get(props, "menu3Link"),
              get(props, "menu3SubMenu")
            )}
          </li>
          </ul>
          {get(props, "cta1Text").length != 0 &&
            get(props, "cta2Text").lenght != 0 && (
              <div className="hidden lg:flex items-center">
                <PrimaryLink
                  href={get(props, "cta1Link")}
                  className={`whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900  ${get(
                    tailwindClasses,
                    "cta"
                  )}`}
                  style={get(style, "cta")}
                >
                  {get(props, "cta1Text")}
                </PrimaryLink>
                <button
                  className={`ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent px-4 py-2 text-base font-medium nx-btn-primary nx-btn-primary:hover shadow-sm ${get(
                    tailwindClasses,
                    "highlightCta"
                  )}`}
                  style={get(style, "highlightCta")}
                >
                  <PrimaryLink href={get(props, "cta2Link")}>
                    {get(props, "cta2Text")}
                  </PrimaryLink>
                </button>
              </div>
            )}
          <div className="hidden lg:flex items-center space-x-4">
            <PrimaryLink href={get(props, "wishListLink")}>
              <HeartIcon
                className={`w-6 h-6 nx-text-hover-primary ${get(
                  tailwindClasses,
                  "wishListIcon"
                )}`}
                style={get(style, "wishListIcon")}
              />
            </PrimaryLink>
            <PrimaryLink href={get(props, "cartLink")}>
              <ShoppingCartIcon
                className={`w-6 h-6 nx-text-hover-primary ${get(
                  tailwindClasses,
                  "cartIcon"
                )}`}
                style={get(style, "cartIcon")}
              />
            </PrimaryLink>
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

HeaderV5.propTypes = {
  style: object,
  tailwindClasses: object,
  logoPath: string,
  logoLink: string,
  inputPlaceholder: string,
  text1: string,
  value1: string,
  text2: string,
  value2: string,
  dropDownCtaText: string,
  wishListLink: string,
  cartLink: string,
  menus: arrayOf(object),
  categories: arrayOf(object),
};

HeaderV5.defaultProps = {
  style: {
    container: {},
    bottomSection: {},
    logo: {},
    searchBox: {},
    searchButton: {},
    phoneIcon: {},
    text: {},
    value: {},
    dropDownCta: {},
    categoryTitle: {},
    level1Menu: {},
    level2Menu: {},
    level3Menu: {},
    subMenu: {},
    mobileMenu: {},
    wishListIcon: {},
    cartIcon: {},
  },
  tailwindClasses: {
    container: "",
    bottomSection: "",
    logo: "",
    searchBox: "",
    searchButton: "",
    phoneIcon: "",
    text: "",
    value: "",
    dropDownCta: "",
    categoryTitle: "",
    level1Menu: "",
    level2Menu: "",
    level3Menu: "",
    subMenu: "",
    mobileMenu: "",
    wishListIcon: "",
    cartIcon: "",
  },
  faviconUrl:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1740660049.favicon.ico",
  logoPath:
    "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1728362518.inline_logo.png",
  logoLink: "#",
  cta1Text: "Sign in",
  cta1Link: "#",
  cta2Text: "Sign up",
  cta2Link: "#",
  inputPlaceholder: "Search the store",
  text1: "Call us now",
  value1: "(011+) 4567 421 978",
  text2: "Email",
  value2: "contact@nexnnova.com",
  dropDownCtaText: "All Categories",
  wishListLink: "#",
  cartLink: "#",
  menus: [
    {
      menu: "home",
      link: "#",
    },
    {
      menu: "home",
      link: "#",
    },
    // {
    //     menu: "home",
    //     link: "#"
    // },
    // {
    //     menu: "home",
    //     link: "#"
    // },
    // {
    //     menu: "home",
    //     link: "#"
    // },
    // {
    //     menu: "home",
    //     link: "#"
    // },
    // {
    //     menu: "home",
    //     link: "#"
    // },
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
export default withRouter(HeaderV5);
