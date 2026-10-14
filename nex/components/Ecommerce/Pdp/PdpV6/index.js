import { useState,useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import NexImage from "@nex-core-ui/NexImage";
import { Fragment } from "react";
import get from "lodash.get";
import { arrayOf, number, object, string } from "prop-types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { classNames } from "@/utils/common";
import withDataPdp from "@nex-core-ui/HOC/withDataPdp";

const PdpV6 = (props) => {
    const [selectedImage, setSelectedImage] = useState("");
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setSelectedImage(get(props, 'image', ''));
    }, [props.image])

    const increaseQuantity = () => {
        if (quantity < props.maxPurchase) setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`px-6 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-col md:flex-row mb-10`} >
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <NexImage src={selectedImage} alt={get(props, 'name')} className={`!relative !w-full !h-96 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
                    <div className="flex mt-4 space-x-2">
                        {get(props, 'images', []).map((item, index) => (
                            <figure onClick={() => setSelectedImage(get(item, 'image'))}>
                                <NexImage
                                    key={index}
                                    src={get(item, 'image')}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`!relative !h-20 !w-20 md:!w-32 md:!h-32  cursor-pointer border-2 rounded-md ${selectedImage === get(item, 'image') ? "nx-border-primary" : "border-gray-300"} ${get(tailwindClasses, 'thumbImage')}`}
                                    style={get(style, 'thumbImage')}
                                />
                            </figure>
                        ))}
                    </div>
                </div>
                <div className="w-full md:w-1/2 max-sm:mt-5 sm:p-6">
                    {get(props, 'name', '').length !== 0 && <h1 className={`nx-section-heading-font text-4xl font-semibold mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'name')}</h1>}
                    {get(props, 'price', '').length !== 0 && <p className={`text-2xl nx-text-primary font-bold mb-3 ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}>{get(props, 'price')}</p>}
                    <div className="mt-2 space-y-4 mb-3">
                        {get(props, 'categoryName', '').length !== 0 && <p className={`${get(tailwindClasses, 'categoryName')}`} style={get(style, 'categoryName')}>{get(props, 'categoryName')}</p>}
                        {/* {get(props, 'condition', '').length !== 0 && <p className={`${get(tailwindClasses, 'textValue')}`} style={get(style, 'textValue')}>{get(props, 'conditionTitle')}: {get(props, 'condition')}</p>}
                        {get(props, 'minPurchase', '').length !== 0 && <p className={`${get(tailwindClasses, 'textValue')}`} style={get(style, 'textValue')}>{get(props, 'minPurchaseTitle')}: {get(props, 'minPurchase')} unit</p>}
                        {get(props, 'maxPurchase', '').length !== 0 && <p className={`${get(tailwindClasses, 'textValue')}`} style={get(style, 'textValue')}>{get(props, 'maxPurchaseTitle')}: {get(props, 'maxPurchase')} units</p>} */}
                    </div>
                    {get(props, 'quantityText', '').length !== 0 && <div className="mt-4 flex items-center">
                        <p className={`mr-2 ${get(tailwindClasses, 'quantityText')}`} style={get(style, 'quantityText')}>{get(props, 'quantityText')}</p>
                        <input type="text" value={quantity} readOnly className="w-12 text-center border-t border-b" />
                        <div className={`flex flex-col border p-1 bg-gray-200 ${get(tailwindClasses, 'updownIcon')}`} style={get(style, "updownIcon")}>
                            <button onClick={increaseQuantity}>
                                <ChevronUpIcon className="w-4 h-4" />
                            </button>
                            <button onClick={decreaseQuantity}>
                                <ChevronDownIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>}
                    <div className="mt-6 flex space-x-4">
                        {<button className={`nx-btn-primary nx-btn-primary:hover px-6 py-2 rounded ${get(tailwindClasses, 'cta1')}`} style={get(style, 'cta1')}>Add to Cart</button>}
                        {<button className={`border nx-border-primary px-6 py-2 rounded ${get(tailwindClasses, 'cta2')}`} style={get(style, 'cta2')}>Add to Wishlist</button>}
                    </div>
                </div>

            </div>
            <div className="sm:px-10">
                <TabGroup>
                    <div className="border-b border-gray-200">
                        <TabList className="-mb-px flex space-x-8">
                            {get(props, 'attributes',[]).map((attribute)=><Tab className={({ selected }) => classNames("whitespace-nowrap border-b-2 py-6 text-sm font-medium text-gray-700 hover:border-gray-300 hover:text-gray-800",
                                selected ? "nx-border-primary border-b-2 nx-text-primary" : "border-transparent")}>
                                {get(attribute, 'text')}
                            </Tab>)}
                        </TabList>
                    </div>
                    <TabPanels as={Fragment}>
                        {get(props, 'attributes',[]).map((attribute)=><TabPanel className="pt-10">
                            <h3 className="sr-only">License</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: `${get(attribute, 'value')}` }}
                                className="text-sm text-gray-500 [&>:first-child]:mt-0 [&_h4]:mt-5 [&_h4]:font-medium [&_h4]:text-gray-900 [&_li::marker]:text-gray-300 [&_li]:pl-2 [&_p]:my-2 [&_p]:text-sm/6 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm/6"
                            />
                        </TabPanel>)}
                    </TabPanels>
                </TabGroup>
            </div>
        </section>
    );
};

PdpV6.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string,
    price: string,
    categoryName: string,
    subCategory: string,
    conditionTitle: string,
    condition: string,
    minPurchaseTitle: string,
    minPurchase: number,
    maxPurchaseTitle: string,
    maxPurchase: number,
    cta1Text: string,
    cta2Text: string,
    quantityText: string,
    images: arrayOf(object),
    attribute: arrayOf(object)
}

PdpV6.defaultProps = {
    style: {
        container: {},
        image: {},
        thumbImage: {},
        title: {},
        price: {},
        textValue: {},
        quantityText: {},
        updownIcon: {},
        cta1: {},
        cta2: {},
    },
    tailwindClasses: {
        container: "",
        image: "",
        thumbImage: "",
        title: "",
        price: "",
        textValue: "",
        quantityText: "",
        updownIcon: "",
        cta1: "",
        cta2: "",
    },
    image:"https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024018.pf6.jpg",
    name: "Xerat fulicom lan",
    price: "$420.00",
    categoryName: "Fashion",
    subCategory: "sport 10",
    conditionTitle: "Condition",
    condition: "New",
    minPurchaseTitle: "Minimum Purchase",
    minPurchase: 1,
    maxPurchaseTitle: "Maximum Purchase",
    maxPurchase: 10,
    quantityText: "Quantity:",
    images: [
        {
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=384&h=240&fit=crop&dpr=1"
        },
        {
            image: "https://images.pexels.com/photos/5625124/pexels-photo-5625124.jpeg?auto=compress&cs=tinysrgb&w=384&h=240&fit=crop&dpr=1"
        },
        {
            image: "https://images.pexels.com/photos/8148577/pexels-photo-8148577.jpeg?auto=compress&cs=tinysrgb&w=384&h=240&fit=crop&dpr=1"
        }
    ],
    attributes: [
        {
            text: "Overview",
            value: `<h4>Overview</h4>
          
          <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
          
          <ul role="list">
          <li>You\'re allowed to use the icons in unlimited projects.</li>
          <li>Attribution is not required to use the icons.</li>
          </ul>
          
          <h4>What you can do with it</h4>
          
          <ul role="list">
          <li>Use them freely in your personal and professional work.</li>
          <li>Make them your own. Change the colors to suit your project or brand.</li>
          </ul>
          
          <h4>What you can\'t do with it</h4>
          
          <ul role="list">
          <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
          <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
          </ul>`,
        },
        {
            text: "Privacy & Policy",
            value: `<h4>Privacy & Policy</h4>
          
          <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
          
          <ul role="list">
          <li>You\'re allowed to use the icons in unlimited projects.</li>
          <li>Attribution is not required to use the icons.</li>
          <li>Attribution is not required to use the icons.</li>
          <li>Attribution is not required to use the icons.</li>
          <li>Attribution is not required to use the icons.</li>
          <li>Attribution is not required to use the icons.</li>
          <li>Attribution is not required to use the icons.</li>
          <li>Attribution is not required to use the icons.</li>
          <li>Attribution is not required to use the icons.</li>
          </ul>`,
        },
        {
            text: "Description",
            value: `<h4>Description</h4>
          
          <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
          
          <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>`,
        },
    ]
}

export default withDataPdp(PdpV6);
