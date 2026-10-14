"use client";

import { Component } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import NexImage from "@nex-core-ui/NexImage";
import get from "lodash.get";
import parse from "html-react-parser/lib/index";
import withDataPdp from "@nex-core-ui/HOC/withDataPdp";
import EnquiryButtonV1 from "@nex-components/EnquiryButton/EnquiryButtonV1";
const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  images: [
    {
      id: 1,
      name: "Angled view",
      src: "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg",
      alt: "Angled front view with bag zipped and handles upright.",
    },
    // More images...
  ],
  colors: [
    {
      name: "Washed Black",
      bgColor: "bg-gray-700",
      selectedColor: "ring-gray-700",
    },
    { name: "White", bgColor: "bg-white", selectedColor: "ring-gray-400" },
    {
      name: "Washed Gray",
      bgColor: "bg-gray-500",
      selectedColor: "ring-gray-500",
    },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: "Features",
      items: [
        "Multiple strap configurations",
        "Spacious interior with top zip",
        "Leather handle and tabs",
        "Interior dividers",
        "Stainless strap loops",
        "Double stitched construction",
        "Water-resistant",
      ],
    },
    // More sections...
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class PdpV1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-02.jpg",
    };
  }

  render() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Image gallery */}

            <div className="flex flex-col-reverse">
              <div className="mx-auto w-full max-w-2xl">
                <div className="group relative flex max-sm:h-64 md:h-96 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-500/50 focus:ring-offset-4 mb-5">
                  <span className="sr-only"></span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <NexImage
                      src={this.state.activeImage}
                      className="!relative w-full max-sm:h-64 md:h-96"
                    ></NexImage>
                  </span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {get(this.props, "productImages", []).map((image, index) => (
                    <div>
                      <NexImage
                        src={get(image, "image")}
                        className="!relative aspect-square w-full object-cover sm:rounded-lg"
                      ></NexImage>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                {get(this.props, "title")}
              </h1>
              <h5 className="font-bold tracking-tight text-gray-500">
                {get(this.props, "subTitle")}
              </h5>
              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">
                  {get(this.props, "price")}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <span className="space-y-6 text-base text-gray-700">
                  {parse(get(this.props, "description"))}
                </span>
              </div>

              <form className="mt-6">
                <div className="mt-10 flex">
                  <EnquiryButtonV1 />
                </div>
              </form>

              <section aria-labelledby="details-heading" className="mt-12">
                <h2 id="details-heading" className="sr-only">
                  Additional details
                </h2>
                <div className="divide-y divide-gray-200 border-t">
                  {product.details.map((detail) => (
                    <Disclosure key={detail.name} as="div">
                      <h3>
                        <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                          <span className="text-sm font-medium text-gray-900 group-data-[open]:text-indigo-600">
                            {detail.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            <PlusIcon
                              aria-hidden="true"
                              className="block size-6 text-gray-400 group-hover:text-gray-500 group-data-[open]:hidden"
                            />
                            <MinusIcon
                              aria-hidden="true"
                              className="hidden size-6 text-indigo-400 group-hover:text-indigo-500 group-data-[open]:block"
                            />
                          </span>
                        </DisclosureButton>
                      </h3>
                      <DisclosurePanel className="pb-6">
                        <ul
                          role="list"
                          className="list-disc space-y-1 pl-5 text-sm/6 text-gray-700 marker:text-gray-300"
                        >
                          {detail.items.map((item) => (
                            <li key={item} className="pl-2">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </DisclosurePanel>
                    </Disclosure>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PdpV1.propTypes = {
  style: {},
};
PdpV1.defaultProps = {
  style: {},
  title: "Zip Tote Basket",
  subTitle: "Sub title here...",
  currency: "$",
  price: "140",
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  variants: [
    {
      color: "red",
      size: "xl",
      image: "",
    },
    {
      color: "blue",
      size: "xl",
      image: "",
    },
  ],
  specification: [
    {
      title: "",
      description: "",
      image: "",
    },
  ],
  productImages: [
    {
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-01.jpg",
    },
    {
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-02.jpg",
    },
    {
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-03.jpg",
    },
    {
      image:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-03-product-04.jpg",
    },
  ],
};

export default withDataPdp(PdpV1);
