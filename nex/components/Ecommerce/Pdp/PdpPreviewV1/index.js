import { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import NexImage from "@nex-core-ui/NexImage";
import get from "lodash.get";
import { arrayOf, number, object, string } from "prop-types";
import { Dialog, DialogPanel } from '@headlessui/react'
import parse from "html-react-parser";

const PdpPreviewV1 = (props) => {
    const [selectedImage, setSelectedImage] = useState(get(props,'image',''));
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        if (quantity < props.maxPurchase) setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (

        <Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)} className="relative z-10">
            <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center max-sm:items-center sm:p-0">
                    <DialogPanel
                        className={`relative bg-white transform overflow-hidden rounded-lg text-left transition-all sm:my-8 sm:w-full sm:max-w-3xl ${get(tailwindClasses, 'dialogBox')}`} style={get(style, 'dialogBox')}>
                        <div className={`flex flex-col md:flex-row px-6 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
                            <div className="w-full md:w-1/2 flex flex-col items-center">
                                <NexImage src={selectedImage}  alt={get(props, 'name')} className={`!relative !w-full !h-72 ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />
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
                                    {get(props, 'subCategory', '').length !== 0 && <p className={`${get(tailwindClasses, 'textValue')}`} style={get(style, 'textValue')}>{get(props, 'categoryName')}: {get(props, 'subCategory')}</p>}
                                    {get(props, 'condition', '').length !== 0 && <p className={`${get(tailwindClasses, 'textValue')}`} style={get(style, 'textValue')}>{get(props, 'conditionTitle')}: {get(props, 'condition')}</p>}
                                    {get(props, 'minPurchase', '').length !== 0 && <p className={`${get(tailwindClasses, 'textValue')}`} style={get(style, 'textValue')}>{get(props, 'minPurchaseTitle')}: {get(props, 'minPurchase')} unit</p>}
                                    {get(props, 'maxPurchase', '').length !== 0 && <p className={`${get(tailwindClasses, 'textValue')}`} style={get(style, 'textValue')}>{get(props, 'maxPurchaseTitle')}: {get(props, 'maxPurchase')} units</p>}
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
                                    {get(props, 'cta1Text', "").length !== 0 && <button className={`nx-btn-primary nx-btn-primary:hover px-6 py-2 rounded ${get(tailwindClasses, 'cta1')}`} style={get(style, 'cta1')}>{get(props, 'cta1Text')}</button>}
                                    {get(props, 'cta2Text', "").length !== 0 && <button className={`border nx-border-primary px-6 py-2 rounded ${get(tailwindClasses, 'cta2')}`} style={get(style, 'cta2')}>{get(props, 'cta2Text')}</button>}
                                </div>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                onClick={() => props.setIsOpen(false)}
                                className={`absolute top-2 right-2 rounded-full nx-btn-primary px-2 py-2 shadow-sm hover:!bg-gray-400 z-10 ${get(tailwindClasses, 'closedIcon')}`} style={get(style, 'closedIcon')}
                            >
                                {parse(get(props, 'closedIcon'))}
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>

    );
};

PdpPreviewV1.propTypes = {
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
    images: arrayOf(object)
}

PdpPreviewV1.defaultProps = {
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
        dialogBox:{},
        closedIcon:{}
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
        dialogBox: "",
        closedIcon: ""
    },
    image:"https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=384&h=240&fit=crop&dpr=1",
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
    cta1Text: "Add to Cart",
    cta2Text: "Add to Wish List",
    quantityText: "Quantity:",
    closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
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
    ]
}

export default PdpPreviewV1;
