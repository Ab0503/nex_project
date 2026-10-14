import get from 'lodash.get';
import { React, useState } from 'react';
import { ChevronRightIcon,ChevronLeftIcon} from '@heroicons/react/24/outline';
import PdpPreviewV1 from "@nex-components/Ecommerce/Pdp/PdpPreviewV1";
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import { arrayOf, number, object, string } from 'prop-types';
import withData from '@nex-core-ui/HOC/withData';
import PlpTileV1 from '@nex-components/Ecommerce/Plp/PlpTileV1';

const WishlistPageV1 = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemList ,setItemList] = useState(Array.isArray(get(props,'items',[])) && (get(props,'items',[])))

    const removeItem=(id)=>{
        const newItemList = itemList.filter((item)=> (get(item,'id','')) !== id)
        setItemList(newItemList)
    };

    const openQuickViewModal =  (productId) => {
        setIsOpen(true);
      }
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;
    const totalItems = itemList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Array.isArray(itemList) ? itemList.slice(startIndex, endIndex) : [];
    
    const handlePrevious = () => {
            if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };


    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});
    return (
        <div className={`px-6 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            {get(props, 'breadCrumb1', '').length !== 0 && <div className="flex items-center gap-1 my-3">
                <PrimaryLink href={get(props, 'breadCrumb1Link')} className={`nx-text-hover-primary uppercase ${get(tailwindClasses, 'breadCrumb')}`} style={get(style, 'breadCrumb')}>{get(props, 'breadCrumb1')}</PrimaryLink>
                <ChevronRightIcon className="size-4" />
                {get(props, 'breadCrumb2', '').length !== 0 && <PrimaryLink href={get(props, 'breadCrumb2Link')} className={`nx-text-hover-primary uppercase ${get(tailwindClasses, 'breadCrumb')}`} style={get(style, 'breadCrumb')}>{get(props, 'breadCrumb2')}</PrimaryLink>}
            </div>}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${get(props,'sectionKeyNo')} gap-5`}>
            {Array.isArray(currentItems) && currentItems.map((item)=>
            <PlpTileV1 page="Wishlist" removeItem={removeItem} {...item} openQuickViewModal={openQuickViewModal} />
            )}
            </div>
            {totalItems > itemsPerPage && (
                    <div className="flex items-center justify-between py-3">
                        <div className={`sm:flex sm:flex-1 sm:items-center sm:justify-${get(props,'paginationPosition')}`}>
                            <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                                <button
                                    onClick={handlePrevious}
                                    disabled={currentPage === 1}
                                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    <ChevronLeftIcon aria-hidden="true" className="size-5" />
                                </button>
                                {Array.from({ length: totalPages }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-inset ring-gray-300  focus:z-20 ${get(tailwindClasses,'paginationNum')} ${currentPage === index + 1 && `nx-btn-primary nx-btn-primary:hover` 
                                            }`} style={get(style,'paginationNum')}>
                                        {index + 1}
                                    </button>
                                ))}
                                <button
                                    onClick={handleNext}
                                    disabled={currentPage === totalPages}
                                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    <ChevronRightIcon aria-hidden="true" className="size-5" />
                                </button>
                            </nav>
                        </div>
                    </div>
                )}
            {isOpen && (
               <PdpPreviewV1 isOpen={true} setIsOpen={setIsOpen} isClose={()=> setIsOpen(false)}/>  
            )
            }
        </div>
    )
}

WishlistPageV1.propTypes={
    style: object,
    tailwindClasses: object,
    sectionKeyNo: number,
    breadCrumb1Link: string,
    breadCrumb1: string,
    breadCrumb2Link: string,
    breadCrumb2: string,
    prevIcon: string,
    nextIcon: string,
    closedIcon: string,
    ctaText: string,
    items: arrayOf(object)
}

WishlistPageV1.defaultProps = {
    style:{
        container:{},
        breadCrumb:{},
        sectionBox: {},
        image: {},
        previewIcon: {},
        badgeText: {},
        productName: {},
        priceText: {},
        oldPrice: {},
        cta: {},
        deleteIcon:{},
        wishlistIcon: {},
        dialogBox: {},
        closedIcon: {},
        paginationNum:{}
    },
    tailwindClasses:{
        container:"",
        breadCrumb:"",
        sectionBox: "",
        image: "",
        previewIcon: "",
        badgeText: "",
        productName: "",
        priceText: "",
        oldPrice: "",
        cta: "",
        deleteIcon:"",
        wishlistIcon: "",
        dialogBox: "",
        closedIcon: "",
        paginationNum:"",
    },
    sectionKeyNo: 5,
    paginationPosition:"start",
    breadCrumb1Link: "#",
    breadCrumb1: "Home",
    breadCrumb2Link: "#",
    breadCrumb2: "Your WishList",
    prevIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>`,
    nextIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>`,
    closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
    ctaText: "Add to Cart",
    currencySign:"$",
    link:"product",
    items: [
        {
            id: 1,
            name: "Xerat fulicom lan",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "129.00",
            oldPrice: "150.00",
            discount: "12%",
            rating: 4,
            ctaText:"Add to Cart"
        },
        {
            id: 2,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "400.00",
            oldPrice: "456.00",
            discount: "12%",
            rating: 5,
            ctaText:"Add to Cart"
        },
        {
            id: 3,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "400.00",
            oldPrice: "456.00",
            discount: "12%",
            rating: 5,
            ctaText:"Add to Cart"
        },
        {
            id: 4,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "400.00",
            oldPrice: "456.00",
            discount: "12%",
            rating: 5,
            ctaText:"Add to Cart"
        },
        {
            id: 5,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "400.00",
            oldPrice: "456.00",
            discount: "12%",
            rating: 5,
            ctaText:"Add to Cart"
        },
        {
            id: 6,
            name: "Nami alan shankle temp...",
            image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
            price: "400.00",
            oldPrice: "456.00",
            discount: "12%",
            rating: 5,
            ctaText:"Add to Cart"
        },
    ]
}
export default withData(WishlistPageV1)
