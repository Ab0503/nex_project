import { useState, useEffect } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import NexImage from "@nex-core-ui/NexImage";
import { Fragment } from "react";
import get from "lodash.get";
import { arrayOf, number, object, string } from "prop-types";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { classNames } from "@/utils/common";
import withDataPdp from "@nex-core-ui/HOC/withDataPdp";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import toast, { Toaster } from 'react-hot-toast';
import HttpService from "@/utils/HttpService";

const PdpV7 = (props) => {
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if (quantity < props.maxPurchase) setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const AddToCart = () => {
        const http = new HttpService();
        const product = {
            id: get(props, "id"),
            name: get(props, "name"),
            price: get(props, "price"),
            image: get(props, "image"),
            quantity: quantity,
        };

        const customer_id = sessionStorage.getItem("customer_id");
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];

        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));

        if (customer_id) {

            const payload = {
                customer_id,
                cart
            };

            http.post(get(props, 'apiEndpoint', ''), payload, {})
                .then(response => {
                    if (response.status === 200 && response.data.responseCode === "success") {
                        toast.success("cart updated successfully", { position: "top-right" })
                    } else {
                        toast.error("failed to update the cart", { position: "top-right" })
                    }
                })
                .catch(error => {
                    console.error(error);
                })
        } else {
            toast.success("product added to the cart!", { position: 'top-right', });
        }
    };

    return (
        <section className={`px-6 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <Toaster toastOptions={{
                    // success: {
                    //   style: {
                    //     background: 'green',
                    //   },
                    // },
                    // error: {
                    //   style: {
                    //     background: 'red',
                    //   },
                    // },
                  }} 
                  containerStyle={{
                    top: 20,
                    
                    right: 20,
                  }}
                  />
            <div className={`flex flex-col md:flex-row mb-10`} >
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <NexImage src={get(props, 'image', '')} alt={get(props, 'name')} className={`!relative !w-full ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
                </div>
                <div className="w-full md:w-1/2 max-sm:mt-5 sm:p-6">
                    {get(props, 'name', '').length !== 0 && <h1 className={`nx-section-heading-font text-4xl font-semibold mb-3 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'name')}</h1>}
                    {get(props, 'price', '').length !== 0 && <p className={`text-2xl nx-text-primary font-bold mb-3 ${get(tailwindClasses, 'price')}`} style={get(style, 'price')}>{get(props, 'price')}</p>}
                    <div className="mt-2 space-y-2 mb-3">
                        {get(props, 'label1').length !== 0 && <h1 className={`font-medium ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(props, 'label1')}</h1>}
                        {get(props, 'categoryName', '').length !== 0 && <p className={`mb-3 ${get(tailwindClasses, 'categoryName')}`} style={get(style, 'categoryName')}>{get(props, 'categoryName')}</p>}
                        {get(props, 'label2').length !== 0 && <h1 className={`font-medium ${get(tailwindClasses, 'label')}`} style={get(style, 'label')}>{get(props, 'label2')}</h1>}
                        {get(props, 'description', '').length !== 0 && <p className={`${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
                    </div>
                    {get(props, 'quantityText', '').length !== 0 && <div className="mt-4 flex items-center">
                        <p className={`mr-2 font-medium ${get(tailwindClasses, 'quantityText')}`} style={get(style, 'quantityText')}>{get(props, 'quantityText')}</p>
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
                    <div className="mt-4 flex space-x-4">
                        {<button onClick={AddToCart} className={`nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-xl px-6 py-2 rounded ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>Add to Cart</button>}
                    </div>
                </div>

            </div>
            <div className="sm:px-10">
                <TabGroup>
                    <div className="">
                        <TabList className="mb-5 flex flex-wrap justify-center space-x-8">
                            {get(props, 'attributes', []).map((attribute, index) => <Tab key={index} as={Fragment}>
                                {({ selected }) => (<button className={classNames("relative whitespace-nowrap border-2 py-2 px-5 text-lg font-medium hover:border-gray-300 hover:text-gray-800 max-sm:mb-5",
                                    selected ? "nx-border-primary nx-text-primary" : "")}>
                                    {get(attribute, 'text')}
                                    {selected && <ArrowDownIcon className="absolute w-6 h-6 animate-fade-down animate-infinite pointer-events-none nx-text-primary -bottom-8 left-[40%] -translate-x-1/2" />}
                                </button>)}
                            </Tab>)}
                        </TabList>
                    </div>
                    <TabPanels as={Fragment}>
                        {get(props, 'attributes', []).map((attribute) => <TabPanel className=" max-w-5xl mx-auto border-2 p-10">
                            <h3 className="sr-only">License</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: `${get(attribute, 'value')}` }}
                                className="text-sm text-gray-500 [&>:first-child]:mt-0 [&_h4]:mt-5 [&_h4]:font-bold [&_h4]:text-lg [&_h4]:text-gray-900 [&_li::marker]:text-gray-300 [&_li]:pl-2 [&_p]:my-2 [&_p]:text-sm/6 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-sm/6"
                            />
                        </TabPanel>)}
                    </TabPanels>
                </TabGroup>
            </div>
        </section>
    );
};

PdpV7.propTypes = {
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

PdpV7.defaultProps = {
    style: {
        container: {},
        image: {},
        thumbImage: {},
        title: {},
        price: {},
        label: {},
        categoryName: {},
        description: {},
        quantityText: {},
        updownIcon: {},
        cta: {},
    },
    tailwindClasses: {
        container: "",
        image: "",
        thumbImage: "",
        title: "",
        price: "",
        label: "",
        categoryName: "",
        description: "",
        quantityText: "",
        updownIcon: "",
        cta: "",
    },
    id:1,
    image: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1737024018.pf6.jpg",
    name: "Xerat fulicom lan",
    price: "$420.00",
    label1: "Category",
    categoryName: "Fashion",
    label2: "Description",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, eligendi. Quam ducimus repellat ut? Sunt aliquam fuga, nam temporibus assumenda eligendi! Molestiae aliquam deserunt culpa mollitia quis alias labore nemo?",
    minPurchase: 1,
    maxPurchase: 10,
    quantityText: "Quantity:",
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
            text: "Ingredients",
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

export default withDataPdp(PdpV7);
