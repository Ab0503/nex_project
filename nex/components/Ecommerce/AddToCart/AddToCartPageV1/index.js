import { ChevronRightIcon, MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import NexImage from "@nex-core-ui/NexImage";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import get from "lodash.get";
import { arrayOf, object, string } from "prop-types";
import { React, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import withData from "@nex-core-ui/HOC/withData";

const AddToCartPageV1 = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState(()=>{return Array.isArray(get(props, "items", [])) ? get(props, "items", []): []});
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleQuantityChange = (id, delta) => {
        setCartItems((prevItems)=> Array.isArray(prevItems) ?
            prevItems.map((item) =>
                get(item, 'id', '') === id ? { ...item, quantity: Math.max(1, (Number(get(item, 'quantity', 0))) + delta) } : item
            ): []
        );
    };

    const handleRemoveItem = (id) => {
        setCartItems((prevItems)=>Array.isArray(prevItems) ? (prevItems.filter((item) => get(item, 'id', '') !== id)):[]);
    }

    const subtotal = Array.isArray(cartItems) && cartItems.reduce((acc, item) => acc + (Number(get(item, 'price',0))) * (Number(get(item, 'quantity', 0))), 0);
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    
    return (
        <div className={`px-6 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'breadCrumb1', '').length !== 0 && <div className="flex items-center gap-1 my-3">
                <PrimaryLink href={get(props, 'breadCrumb1Link')} className={`nx-text-hover-primary uppercase ${get(tailwindClasses, 'breadCrumb')}`} style={get(style, 'breadCrumb')}>{get(props, 'breadCrumb1')}</PrimaryLink>
                <ChevronRightIcon className="size-4" />
                {get(props, 'breadCrumb2', '').length !== 0 && <PrimaryLink href={get(props, 'breadCrumb2Link')} className={`nx-text-hover-primary uppercase ${get(tailwindClasses, 'breadCrumb')}`} style={get(style, 'breadCrumb')}>{get(props, 'breadCrumb2')}</PrimaryLink>}
            </div>}
            {get(props, 'title', '').length !== 0 && <h2 className={`text-2xl font-bold mb-4 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')} ({get(props, 'items', []).length} items)</h2>}
            <div className="border-b pb-3 mb-3">
                <div className="sm:grid grid-cols-5 hidden">
                    {get(props, 'columnText1', '').length !== 0 && <span className={`col-span-2 font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText1')}</span>}
                    {get(props, 'columnText2', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText2')}</span>}
                    {get(props, 'columnText3', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText3')}</span>}
                    {get(props, 'columnText4', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText4')}</span>}
                </div>
            </div>
            {cartItems.map((item) => (
                <div key={get(item, 'id', '')} className="grid grid-cols-2 md:grid-cols-5 items-center border-b py-3">
                    <div className="flex flex-col gap-1 col-span-2 max-sm:mb-5">
                        {get(props, 'columnText1', '').length !== 0 && <span className={`col-span-2 font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText1')}</span>}
                        <div className="flex items-center space-x-4">
                            {get(item, 'image', '').length !== 0 && <NexImage src={get(item, 'image')} alt={item.name} className={`!relative !w-20 !h-20 object-cover ${get(tailwindClasses, 'image')}`} style={get(style, 'image')} />}
                            {get(item, 'name', '').length !== 0 && <span className={`nx-text-hover-primary ${get(tailwindClasses, 'itemName')}`} style={get(style, 'itemName')}><PrimaryLink href={get(item, 'ctaLink')}>{get(item, 'name')}</PrimaryLink></span>}
                        </div>
                    </div>
                    {get(item, 'price', 0) > 0 && <span className={`hidden md:block ${get(tailwindClasses, 'priceText')}`} style={get(style, 'priceText')}>{get(props, 'currencySign')}{get(item, 'price').toFixed(2)}</span>}
                    <div className="flex items-center justify-between max-md:col-span-2">
                        <div className="flex flex-col gap-1 md:hidden">
                            {get(props, 'columnText2', '').length !== 0 && <span className={`font-bold ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText2')}</span>}
                            {get(item, 'price', '').length !== 0 && <span className={`${get(tailwindClasses, 'priceText')}`} style={get(style, 'priceText')}>{get(props, 'currencySign')}{get(item, 'price').toFixed(2)}</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            {get(props, 'columnText3', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText3')}</span>}
                            {get(item, 'quantity', '').length !== 0 && <div className="flex items-center">
                                <button
                                    className={`px-2 border size-7 ${get(tailwindClasses, 'minusIcon')}`}
                                    style={get(style, 'minusIcon')}
                                    onClick={() => handleQuantityChange(item.id, -1)}
                                    disabled={item.quantity === 1}
                                >
                                    <MinusIcon />
                                </button>
                                <span className={`px-4 ${get(tailwindClasses, 'quantityText')}`} style={get(style, 'quantityText')}>{get(item, 'quantity')}</span>
                                <button
                                    className={`px-2 border size-7 ${get(tailwindClasses, 'plusIcon')}`}
                                    style={get(style, 'plusIcon')}
                                    onClick={() => handleQuantityChange(item.id, 1)}>
                                    <PlusIcon />
                                </button>
                            </div>}
                        </div>
                        <div className="flex flex-col gap-1">
                            {get(props, 'columnText4', '').length !== 0 && <span className={`font-bold md:hidden ${get(tailwindClasses, 'columnText')}`} style={get(style, 'columnText')}>{get(props, 'columnText4')}</span>}
                            <div className="flex md:hidden items-center justify-between">
                                {((Number(get(item, 'price',0))) * (Number(get(item, 'quantity',0)))).length !== 0 && <span className={`${get(tailwindClasses, 'totalText')}`} style={get(style, 'totalText')}>{get(props, 'currencySign')}{((Number(get(item, 'price',0))) * (Number(get(item, 'quantity',0)))).toFixed(2)}</span>}
                                <button className={`size-6 bg-gray-100 p-1 rounded-full ${get(tailwindClasses, 'deleteIcon')}`} style={get(style, 'deleteIcon')} onClick={() => {setIsOpen(true),setSelectedItemId(get(item,'id',''))}}>
                                    <XMarkIcon />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex hidden items-center justify-between">
                        {((Number(get(item, 'price',0))) * (Number(get(item, 'quantity',0)))) !== 0 && <span className={`${get(tailwindClasses, 'totalText')}`} style={get(style, 'totalText')}>{get(props, 'currencySign')}{((Number(get(item, 'price',0))) * (Number(get(item, 'quantity',0)))).toFixed(2)}</span>}
                        {((Number(get(item, 'price',0))) * (Number(get(item, 'quantity',0)))) !== 0 &&<button className={`size-6 bg-gray-100 p-1 rounded-full ${get(tailwindClasses, 'deleteIcon')}`} style={get(style, 'deleteIcon')} onClick={() => {setIsOpen(true),setSelectedItemId(get(item,'id',''))}}>
                            <XMarkIcon />
                        </button>}
                    </div>
                </div>
            ))}
            <div className="text-right mt-4">
                {subtotal > 0 && <p className={`text-lg font-semibold ${get(tailwindClasses, "subTotalText")}`} style={get(style, 'subTotalText')}>{get(props, 'subTotalText')} {get(props, 'currencySign')}{Number(subtotal.toFixed(2))}</p>}
                {subtotal > 0 && <p className={`text-lg font-bold ${get(tailwindClasses, "grandTotalText")}`} style={get(style, 'grandTotalText')}>{get(props, 'grandTotalText')} {get(props, 'currencySign')}{Number(subtotal.toFixed(2))}</p>}
                {get(props, 'ctaText', '').length !== 0 && <button className={`mt-4 nx-btn-primary nx-btn-primary:hover hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] px-6 py-2 rounded ${get(tailwindClasses, 'cta')}`} style={get(style, 'cta')}>{get(props, 'ctaText')}</button>}
            </div>
            <Dialog open={isOpen} onClose={()=>setIsOpen(false)} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className={`relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 ${get(tailwindClasses,'dialogBox')}`} style={get(style,'dialogBox')}
                        >
                            <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <span className="sr-only">Close</span>
                                    <XMarkIcon aria-hidden="true" className="size-6" />
                                </button>
                            </div>
                            <div className="sm:flex sm:items-start">
                                <div className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 sm:mx-0 sm:size-10 p-2 ${get(tailwindClasses,'dialogIcon')}`} style={get(style,'dialogIcon')}>
                                    <ExclamationTriangleIcon aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    {get(props,'dialogTitle','').length !==0 &&<DialogTitle as="h3" className={`text-base font-semibold text-gray-900 ${get(tailwindClasses,'dialogTitle')}`} style={get(style,'dialogTitle')}>
                                        {get(props,'dialogTitle')}
                                    </DialogTitle>}
                                    <div className="mt-2">
                                        {get(props,'dialogDescription','').length !==0 &&<p className={`text-sm text-gray-500 ${get(tailwindClasses,'dialogDescription')}`} style={get(style,'dialogDescription')}>
                                        {get(props,'dialogDescription')}
                                        </p>}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                {get(props,'dialogCta1','').length !==0 &&<button
                                    type="button"
                                    onClick={() => {handleRemoveItem(selectedItemId),setIsOpen(false)}}
                                    className={`inline-flex w-full justify-center rounded-md nx-btn-primary nx-btn-primary:hover px-3 py-2 text-sm font-semibold shadow-sm  sm:ml-3 sm:w-auto ${get(tailwindClasses,'dialogCta1')}`} style={get(style,'dialogCta1')}
                                >
                                    {get(props,'dialogCta1')}
                                </button>}
                                {get(props,'dialogCta2','').length !==0 &&<button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className={`mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto ${get(tailwindClasses,'dialogCta2')}`} style={get(style,'dialogCta2')}
                                >
                                    {get(props,'dialogCta2')}
                                </button>}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

AddToCartPageV1.propTypes = {
    style: object,
    tailwindClasses: object,
    breadCrumb1Link: string,
    breadCrumb1: string,
    breadCrumb2Link: string,
    breadCrumb2: string,
    title: string,
    columnText1: string,
    columnText2: string,
    columnText3: string,
    columnText4: string,
    subTotalText: string,
    grandTotalText: string,
    currencySign: string,
    ctaText: string,
    items: arrayOf(object)
}

AddToCartPageV1.defaultProps = {
    style: {
        container: {},
        breadCrumb: {},
        title: {},
        columnText: {},
        image: {},
        itemName: {},
        priceText: {},
        minusIcon: {},
        quantityText: {},
        plusIcon: {},
        totalText: {},
        deleteIcon: {},
        subTotalText: {},
        grandTotalText: {},
        dialogBox:{},
        dialogIcon:{},
        dialogTitle:{},
        dialogDescription:{},
        dialogCta1:{},
        dialogCta2:{}
    },
    tailwindClasses: {
        container: "",
        breadCrumb: "",
        title: "",
        columnText: "",
        image: "",
        itemName: "",
        priceText: "",
        minusIcon: "",
        quantityText: "",
        plusIcon: "",
        totalText: "",
        deleteIcon: "",
        subTotalText: "",
        grandTotalText: "",
        dialogBox: "",
        dialogIcon: "",
        dialogTitle: "",
        dialogDescription: "",
        dialogCta1: "",
        dialogCta2: ""
    },
    breadCrumb1Link: "#",
    breadCrumb1: "Home",
    breadCrumb2Link: "#",
    breadCrumb2: "Your Cart",
    title: "Your Cart",
    columnText1: "Item",
    columnText2: "Price",
    columnText3: "Quantity",
    columnText4: "Total",
    subTotalText: "Subtotal:",
    grandTotalText: "Grand Total:",
    currencySign: "$",
    ctaText: "Check out",
    dialogTitle:"Remove Item",
    dialogDescription:"Are you sure you want to remove this item? This action cannot be undone.",
    dialogCta1:"Remove Item",
    dialogCta2:"Cancel",
    items: [
        {
            id: 1,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Nami alan shankle tempus turpis",
            price: 400,
            quantity: 2,
            ctaLink: "#"
        },
        {
            id: 2,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Xerat fulicom lan",
            price: 420,
            quantity: 1,
            ctaLink: "#"
        },
        {
            id: 3,
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            name: "Spicy jalapeno pork nam tempus turpis",
            price: 300,
            quantity: 1,
            ctaLink: "#"
        },
    ]
}
export default withData(AddToCartPageV1);
