'use client'

import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { Radio, RadioGroup } from '@headlessui/react'
import get from 'lodash.get'
import PrimaryLink from '@nex-core-ui/PrimaryLink'
import NexImage from '@nex-core-ui/NexImage'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const PdpV5 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const [selectedColor, setSelectedColor] = useState(get(props,'colors')[0])
    const [selectedSize, setSelectedSize] = useState(get(props,'sizes')[2])

    return (
        <div className={get(tailwindClasses,'container')} style={get(style,'container')}>
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {get(props,'breadcrumbs',[]).map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <PrimaryLink href={breadcrumb.href} className={`mr-2 text-sm font-medium text-gray-900 ${get(tailwindClasses,'breadcrumb')}`} style={get(style,'breadcrumb')}>
                                        {breadcrumb.name}
                                    </PrimaryLink>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <PrimaryLink href={get(props,'titleLink')} aria-current="page" className="font-medium text-gray-500 nx-text-hover-primary">
                                {get(props, 'title')}
                            </PrimaryLink>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <NexImage
                        alt="image1"
                        src={get(props, 'image1')}
                        className={`!relative hidden size-full rounded-lg object-cover lg:block ${get(tailwindClasses,'image1')}`}
                        style={get(style,'image1')}
                    />
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <NexImage
                            alt="image2"
                            src={get(props, 'image2')}
                            className={`!relative aspect-[3/2] w-full rounded-lg object-cover ${get(tailwindClasses,'image2')}`}
                            style={get(style,'image2')}
                        />
                        <NexImage
                            alt="image3"
                            src={get(props, 'image3')}
                            className={`!relative aspect-[3/2] w-full rounded-lg object-cover ${get(tailwindClasses,'image3')}`}
                            style={get(style,'image3')}
                        />
                    </div>
                    <NexImage
                        alt="image4"
                        src={get(props, 'image4')}
                        className={`!relative aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-auto ${get(tailwindClasses,'image4')}`}
                        style={get(style,'image4')}
                    />
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    {get(props, 'title',"").length !==0 &&<div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className={`text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl nx-section-heading-font ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props, 'title')}</h1>
                    </div>}

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        {get(props,'value',"").length !==0 &&<p className={`text-3xl tracking-tight text-gray-900 ${get(tailwindClasses,'value')}`} style={get(style,'value')}>{get(props,'value')}</p>}

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            aria-hidden="true"
                                            className={classNames(
                                                get(props,'reviewsAverage') > rating ? 'nx-text-primary' : 'text-gray-200',
                                                'size-5 shrink-0',
                                            )}
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{get(props,'reviewsAverage')} out of 5 stars</p>
                                {get(props,'reviewsTotalCount',"").length !==0 &&<PrimaryLink href={get(props,'reviewsLink')} className={`ml-3 text-sm font-medium nx-text-primary-light nx-text-hover-primary ${get(tailwindClasses,'reviewsTotalCount')}`} style={get(style,'reviewsTotalCount')}>
                                    {get(props,'reviewsTotalCount')} reviews
                                </PrimaryLink>}
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                                <fieldset aria-label="Choose a color" className="mt-4">
                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center gap-x-3">
                                        {get(props,'colors',[]).map((color) => (
                                            <Radio
                                                key={get(color,'name')}
                                                value={color}
                                                aria-label={get(color,'name')}
                                                className={classNames(
                                                    get(color,'selectedClass'),
                                                    'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1',
                                                )}
                                            >
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(get(color,'class'), 'size-8 rounded-full border border-black/10')}
                                                />
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    {get(props,'text',"").length !==0 &&<h3 className={`text-sm font-medium ${get(tailwindClasses,'text')}`} style={get(style,'text')}>{get(props,'text')}</h3>}
                                    {get(props,'text2',"").length !==0 &&<PrimaryLink href={get(props,'text2Link')} className={`text-sm font-medium nx-text-primary-light nx-text-hover-primary ${get(tailwindClasses,'text2')}`} style={get(style,'text2')}>
                                        {get(props,'text2')}
                                    </PrimaryLink>}
                                </div>

                                <fieldset aria-label="Choose a size" className="mt-4">
                                    <RadioGroup
                                        value={selectedSize}
                                        onChange={setSelectedSize}
                                        className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                                    >
                                        {get(props,"sizes",[]).map((size) => (
                                            <Radio
                                                key={get(props,'name')}
                                                value={size}
                                                disabled={!get(size,'inStock')}
                                                className={classNames(
                                                    get(size,'inStock')
                                                        ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                        : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                    'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-indigo-500 sm:flex-1 sm:py-6',
                                                )}
                                            >
                                                <span>{get(size,'name')}</span>
                                                {get(size,'inStock') ? (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-[focus]:border group-data-[checked]:border-indigo-500"
                                                    />
                                                ) : (
                                                    <span
                                                        aria-hidden="true"
                                                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            viewBox="0 0 100 100"
                                                            preserveAspectRatio="none"
                                                            className="absolute inset-0 size-full stroke-2 text-gray-200"
                                                        >
                                                            <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                        </svg>
                                                    </span>
                                                )}
                                            </Radio>
                                        ))}
                                    </RadioGroup>
                                </fieldset>
                            </div>

                            {get(props,'ctaText',"").length !==0 &&<button
                                type="submit"
                                className={`mt-10 flex w-full items-center justify-center rounded-md border border-transparent nx-btn-primary px-8 py-3 text-base font-medium nx-btn-primary:hover focus:outline-none focus:ring-2 focus:ring-offset-2  hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] ${get(tailwindClasses,'cta')}`} style={get(style,'cta')} >
                                {get(props,'ctaText')}
                            </button>}
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        {get(props, 'description',"").length !==0 &&<div>
                            <h3 className="sr-only">Description</h3>

                            <div className="space-y-6">
                                <p className={`text-base text-gray-900 ${get(tailwindClasses,'description')}`} style={get(style,'description')}>{get(props, 'description')}</p>
                            </div>
                        </div>}

                        <div className="mt-10">
                            {get(props,'attributeTitle',"").length !==0 &&<h3 className={`text-sm font-medium text-gray-900 ${get(tailwindClasses,'attributeTitle')}`} style={get(style,'attributeTitle')}>{get(props,'attributeTitle')}</h3>}

                            <div className="mt-4">
                                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                    {get(props,'attributes',[]).map((attribute) => (
                                        get(attribute,'text','').length !==0 &&<li key={attribute} className="text-gray-400">
                                            <span className={`text-gray-600 ${get(tailwindClasses,'attributeText')}`} style={get(style,'attributeText')}>{get(attribute,'text')}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-10">
                            {get(props,'detailTitle',"").length !==0&&<h2 className={`text-sm font-medium text-gray-900 ${get(tailwindClasses,'detailTitle')}`} style={get(style,'detailTitle')}>{get(props,'detailTitle')}</h2>}

                            {get(props,'detailDescription',"").length !==0 &&<div className="mt-4 space-y-6">
                                <p className={`text-sm text-gray-600 ${get(tailwindClasses,'detailDescription')}`} style={get(style,'detailDescription')}>{get(props,'detailDescription')}</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PdpV5.defaultProps = {
    style:{
        container:{},
        breadcrumb:{},
        image1:{},
        image2:{},
        image3:{},
        image4:{},
        title:{},
        description:{},
        attributeTitle:{},
        attributeText:{},
        detailTitle:{},
        detailDescription:{},
        value:{},
        reviewsTotalCount:{},
        text:{},
        text2:{},
        cta:{},
    },
    tailwindClasses:{
        container:"",
        breadcrumb:"",
        image1:"",
        image2:"",
        image3:"",
        image4:"",
        title:"",
        description:"",
        attributeTitle:"",
        attributeText:"",
        detailTitle:"",
        detailDescription:"",
        value:"",
        reviewsTotalCount:"",
        text:"",
        text2:"",
        cta:"",
    },
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    image1: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
    image2: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    image3: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
    image4: 'https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
    title: "Basic Tee 6-Pack",
    description: 'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    attributeTitle:"Highlights",
    attributes: [
        {
            text:'Hand cut and sewn locally'
        },
        {
            text:'Dyed with our proprietary colors'
        },
        {
            text:'Pre-washed & pre-shrunk'
        },
        {
            text:'Ultra-soft 100% cotton'
        },
    ],
    detailTitle:"Details",
    detailDescription:`The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.`,
    value: '$192',
    titleLink: '#',
    reviewsLink: '#', 
    reviewsAverage: 4, 
    reviewsTotalCount: 117 ,
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    text1:"Size",
    text2:"Size Guide",
    text2Link:"#",
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    ctaText:"Add to bag",
}
export default PdpV5