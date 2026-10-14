import NexImage from '@nex-core-ui/NexImage';
import React from 'react'
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import ScrollToTop from '@nex-core-ui/ScrollToTop';

const FooterV13 = (props) => {
    const style = get(props, "style", {});
    const tailwindClasses = get(props, "tailwindClasses", {});

    return (
        <footer className={`bg-gray-50 py-10 max-md:px-0 px-10 border-t ${get(tailwindClasses, "container")}`} style={get(style, "container")}>
            <div className="mx-auto px-6 xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 xl:gap-2">
                {/* Our Shops */}
                <div>
                    <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${get(tailwindClasses, "section1")}`} style={get(style, "section1")}>{get(props, "section1")}</h3>
                    <ul className="text-gray-600 space-y-2">
                        {get(props, "items", []).map((item) => (
                            <li>
                                <PrimaryLink className={`text-gray-600 ${get(tailwindClasses, "section1Text")}`} style={get(style, "section1Text")} href={get(item, "section1ctaLink")}>{get(item, "section1Text")}</PrimaryLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${get(tailwindClasses, "section2")}`} style={get(style, "section2")}>{get(props, "section2")}</h3>
                    <ul className="text-gray-600 space-y-2">
                        {get(props, "items1", []).map((item) => (
                            <li>
                                <PrimaryLink className={`text-gray-600 ${get(tailwindClasses, "section2Text")}`} style={get(style, "section2Text")} href={get(item, "section2ctaLink")}>{get(item, "section2Text")}</PrimaryLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Brands */}
                <div>
                    <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${get(tailwindClasses, "section3")}`} style={get(style, "section3")}>{get(props, "section3")}</h3>
                    <ul className="text-gray-600 space-y-2">
                        {get(props, "items2", []).map((item) => (
                            <li>
                                <PrimaryLink className={`text-gray-600 ${get(tailwindClasses, "section3Text")}`} style={get(style, "section3Text")} href={get(item, "section3ctaLink")}>{get(item, "section3Text")}</PrimaryLink>
                            </li>
                        ))}
                        <li>
                            <PrimaryLink href={get(props, "ViewAll3cta")} className={`font-semibold text-black ${get(tailwindClasses, "container")}`} style={get(style, "container")}>{get(props, "section3ViewAll")} </PrimaryLink>
                        </li>
                    </ul>
                </div>

                {/* All Categories */}
                <div>
                    <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${get(tailwindClasses, "section4")}`} style={get(style, "section4")}>{get(props, "section4")}</h3>
                    <ul className="text-gray-600 space-y-2">
                        {get(props, "items3", []).map((item) => (
                            <li>
                                <PrimaryLink className={`text-gray-600 ${get(tailwindClasses, "section4Text")}`} style={get(style, "section4Text")} href={get(item, "section4ctaLink")}>{get(item, "section4Text")}</PrimaryLink>
                            </li>
                        ))}
                        <li>
                            <PrimaryLink href={get(props, "ViewAll4cta")} className={`font-semibold text-black ${get(tailwindClasses, "section4ViewAll")}`} style={get(style, "section4ViewAll")}>{get(props, "section4ViewAll")}</PrimaryLink>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div className='col-span-2'>
                    <h3 className={`text-lg font-semibold text-gray-800 mb-3 ${get(tailwindClasses, "section5")}`} style={get(style, "section5")}>{get(props, "section5")}</h3>
                    <ul className="text-gray-600 space-y-3">
                        {get(props, "items4", []).map((item) => (
                            <li className="flex items-center space-x-2">
                                <span className={`bg-gray-200 p-2 rounded-lg ${get(tailwindClasses, "section5Icon")}`} style={get(style, "section5Icon")}>
                                    {parse(get(item, "section5Icon"))}
                                </span>
                                <span className={`text-gray-600 ${get(tailwindClasses, "section5Text")}`} style={get(style, "section5Text")}>{get(item, "section5Text")}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-3 mt-4">
                        <NexImage href={get(props, "Image1Link")} src={get(props, "ImagePath1")} className={`!relative !h-16 !w-auto ${get(tailwindClasses, "ImagePath1")}`} style={get(style, "ImagePath1")} alt="QR code" />
                        <PrimaryLink href={get(props, 'appstoreLink')}><NexImage src={get(props, "ImagePath2")} className={`!relative !h-10 !w-auto ${get(tailwindClasses, "ImagePath2")}`} style={get(style, "ImagePath2")} alt="App Store" /></PrimaryLink>
                        <PrimaryLink href={get(props, "googleplayLink")}><NexImage src={get(props, "ImagePath3")} className={`!relative !h-9 !w-auto ${get(tailwindClasses, "ImagePath3")}`} style={get(style, "ImagePath3")} alt="Google Play" /></PrimaryLink>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t mt-10 p-5 pt-6 text-center">
                <nav className="space-x-6 text-gray-600">
                    {get(props, "items5", []).map((item) => (
                        <PrimaryLink href={get(item, "textctaLink")} className={`hover:text-gray-900 ${get(tailwindClasses, "text")}`} style={get(style, "text")}>{get(item, "text")}</PrimaryLink>
                    ))}
                </nav>
                <p className={`text-gray-500 text-md mt-3 ${get(tailwindClasses, "description")}`} style={get(style, "description")}>
                    {get(props, "description")}<br /> {get(props, "description1")}
                </p>
            </div>
            <div className="fixed bottom-5 right-10 space-y-4" style={{ zIndex: "1000" }}>
                <div className='text-green-500 bg-white p-2 animate-bounce hover:bg-gray-100 hover:animate-none rounded-full'>
                    <a href={`https://api.whatsapp.com/send?phone=${get(props, 'wpContactNo')}&text=${get(props, 'wpMessage')}`}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                        <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg></a>
                </div>
                <ScrollToTop />
            </div>
        </footer>
    )
}
FooterV13.propTypes = {
    style: object,
    tailwindClasses: object,
    text: string
}
FooterV13.defaultProps = {
    style: {
        container: {},
        section1: {},
        section1Text: {},
        section2: {},
        section2Text: {},
        section3: {},
        section3Text: {},
        section3ViewAll: {},
        section4: {},
        section4Text: {},
        section4ViewAll: {},
        section5: {},
        section5Icon: {},
        section5Text: {},
        image1: {},
        image2: {},
        image3: {},
        text: {},
        textctaLink: {},
        description: {}
    },
    tailwindClasses: {
        conatainer: "",
        section1: "",
        section1Text: "",
        section2: "",
        section2Text: "",
        section3: "",
        section3Text: "",
        section3ViewAll: "",
        section4: "",
        section4Text: "",
        section4ViewAll: "",
        section5: "",
        section5Icon: "",
        section5Text: "",
        image1: "",
        image2: "",
        image3: "",
        text: "",
        textctaLink: "",
        description: ""
    },
    wpMessage: "Hi hello",
    wpContactNo: "0000000000",
    section1: "",
    section2: "",
    section3: "",
    section3ViewAll: "View All",
    ViewAll3cta: "#",
    section4: "",
    section4ViewAll: "View All",
    ViewAll4cta: "#",
    section5: "",
    ImagePath1: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    ImagePath2: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1739344128.app_badge.png",
    appstoreLink: "#",
    ImagePath3: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/prod/web/1/1/img/1739358392.Google_Play_Store.png",
    googleplayLink: "#",
    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of",
    description1: "classical Latin literature from 45 BC, making it over 2000 years old.",
    items: [
        {
            section1Text: "Product Support",
            section1ctaLink: "#"
        },
        {
            section1Text: "PC Setup & Support",
            section1ctaLink: "#"
        },
        {
            section1Text: "Services",
            section1ctaLink: "#"
        },
        {
            section1Text: "Term & Conditions",
            section1ctaLink: "#"
        },
        {
            section1Text: "Privacy Policy",
            section1ctaLink: "#"
        }
    ],
    items1: [
        {
            section2Text: "Layout",
            section2ctaLink: "#"
        },
        {
            section2Text: "Blog",
            section2ctaLink: "#"
        },
        {
            section2Text: "About Us",
            section2ctaLink: "#"
        },
        {
            section2Text: "Bonus Page",
            section2ctaLink: "#"
        },
        {
            section2Text: "Sitemap",
            section2ctaLink: "#"
        }
    ],
    items2: [
        {
            section3Text: "Common Good",
            section3ctaLink: "#"
        },
        {
            section3Text: "OFS",
            section3ctaLink: "#"
        },
        {
            section3Text: "Demo Brand",
            section3ctaLink: "#"
        }
    ],
    items3: [
        {
            section4Text: "Fashion",
            section4ctaLink: "#"
        },
        {
            section4Text: "Kitchen",
            section4ctaLink: "#"
        },
        {
            section4Text: "Computer",
            section4ctaLink: "#"
        },
        {
            section4Text: "Bags",
            section4ctaLink: "#"
        },
        {
            section4Text: "Watches",
            section4ctaLink: "#"
        }
    ],
    items4: [
        {
            section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
            </svg>`,
            section5Text: "685 Market Street, San Francisco, CA 94105"
        },
        {
            section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
            </svg>`,
            section5Text: "Call us at (011+) 4567 421 978"
        },
        {
            section5Icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>`,
            section5Text: "Email: contact@revo.com",
        }
    ],
    items5: [
        {
            text: "Home",
            textctaLink: "#"
        },
        {
            text: "Layout",
            textctaLink: "#"
        },
        {
            text: "Blog",
            textctaLink: "#"
        },
        {
            text: "About Us",
            textctaLink: "#"
        },
        {
            text: "Bonus Page",
            textctaLink: "#"
        }
    ]
}
export default FooterV13;