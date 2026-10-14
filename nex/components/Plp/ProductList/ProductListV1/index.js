import { Component } from "react";

import { StarIcon } from "@heroicons/react/20/solid";

import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { object } from "prop-types";
import get from "lodash.get";
import withDataPlp from "@nex-core-ui/HOC/withDataPlp";
import {  Field, Select } from '@headlessui/react'

import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import PaginationV1 from "@nex-components/Plp/Pagination/PaginationV1";
import range from "lodash.range";
import NexImage from "@nex-core-ui/NexImage";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
  
// TODO: need to work on breadcrumb
  const pages = [
    { name: 'Projects', href: '#', current: false },
    { name: 'Project Nero', href: '#', current: true },
  ]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class ProductListV1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        open: false,
    }
  }
  sortOptionChange(e){
    console.log(e.target.value);
    switch(e.target.value){
      case 'Newest':
        this.props.applySorting('created_at', 'desc');
        break;
      case 'Price: Low - High':
        this.props.applySorting('price', 'asc');
        break;
      case 'Price: High - Low':
        this.props.applySorting('price', 'desc');
        break;
    }
  }
  render() {
    const slug = get(this.props, 'router.query.all', []);
    let categoryName = "Category Name Here..."
    if(slug.length > 1) {
      categoryName = slug[slug.length - 2];
    }
    
    return (
      <div classNames="">
        
        <div className="bg-white border-l border-r border-t pt-4">
            <nav aria-label="Breadcrumb" className="flex px-7 mb-5">
                <ol role="list" className="flex items-center space-x-4">
                    <li>
                    <div>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                        <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
                        <span className="sr-only">Home</span>
                        </a>
                    </div>
                    </li>
                    {pages.map((page) => (
                    <li key={page.name}>
                        <div className="flex items-center">
                        <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                        <a
                            href={page.href}
                            aria-current={page.current ? 'page' : undefined}
                            className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        >
                            {page.name}
                        </a>
                        </div>
                    </li>
                    ))}
                </ol>
            </nav>
          
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {categoryName}
            </h1>
            {/* <p className="mt-4 max-w-xl text-sm text-gray-700">
              Category Short Description here Category Short Description here Category Short Description here
            </p> */}
          </div>

          {/* Filters */}
          <section aria-labelledby="filter-heading">
            <h2 id="filter-heading" className="sr-only">
              Filters
            </h2>

            <div className="border-b border-gray-200 bg-white pb-4">
              <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              
                <Field>
                  <div className="relative">
                    Rows Per Page: 
                    <Select
                      // className={clsx(
                      //   'bg-indigo-600 ml-3 mt-3 inline-block w-16 appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 ',
                      //   'bg-indigo-600 w-16 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                      //   // Make the text of each option black on Windows
                      //   '*:text-black'
                      // )}
                      className="ml-3 appearance-none border-none bg-gray-100 "
                      onChange={(e) => this.props.applyPagination(0, e.target.value)}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </Select>
                    <ChevronDownIcon
                      className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                      aria-hidden="true"
                    />
                  </div>
                </Field>

                <Field className="relative inline-block text-left">
                  <div className="relative">
                    Sort: 
                    <Select
                      // className={clsx(
                      //   'ml-3 mt-3 inline-block w-36 appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 ',
                      //   'w-36 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                      //   // Make the text of each option black on Windows
                      //   '*:text-black'
                      // )}
                      className="ml-3 appearance-none border-none bg-gray-100 "
                      onChange={this.sortOptionChange.bind(this)}
                    >
                      <option value="Newest">Newest</option>
                      <option value="Price: Low - High">Price: Low - High</option>
                      <option value="Price: High - Low">Price: High - Low</option>
                    </Select>
                    <ChevronDownIcon
                      className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-white/60"
                      aria-hidden="true"
                    />
                  </div>
                </Field>
                
                
              </div>
            </div>

            
          </section>
        </div>

        <div className="bg-white border-t">
          <div className="mx-auto max-w-7xl overflow-hidden">
            <h2 className="sr-only">Products</h2>
            {
              this.props.loading == false && <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                {Array.isArray(get(this.props, 'items')) && get(this.props, 'items', []).map((item) => (
                  <PrimaryLink href={`${get(this.props, 'link')}/${get(item, 'title')}/${get(item, 'id')}`}>
                    <div
                      key={item.id}
                      className="group relative border-b border-r border-gray-200 p-4 sm:p-6"
                    >
                      <NexImage
                        alt={item.imageAlt}
                        src={item.imageSrc}
                        className="!relative !h-48 !w-full aspect-square rounded-lg bg-gray-200 group-hover:opacity-75"
                      />
                      <div className="pb-4 pt-10 text-center">
                        <h3 className="text-sm font-medium text-gray-900">
                          <a href={item.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {item.title}
                          </a>
                        </h3>
                        <div className="mt-3 flex flex-col items-center">
                          <p className="sr-only">{item.rating} out of 5 stars</p>
                          <div className="flex items-center">
                            {[0, 1, 2, 3, 4].map((rating) => (
                              <StarIcon
                                key={rating}
                                aria-hidden="true"
                                className={classNames(
                                  item.rating > rating
                                    ? "text-yellow-400"
                                    : "text-gray-200",
                                  "size-5 shrink-0"
                                )}
                              />
                            ))}
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.reviewCount} reviews
                          </p>
                        </div>
                        <p className="mt-4 text-base font-medium text-gray-900">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </PrimaryLink>
                ))}
              </div>
            }
            
            {
              this.props.loading && <div className="-mx-px grid grid-cols-2  border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {
                range(0, 8).map(() => (
                    <div key={1} className="group relative border-b border-r border-gray-200 p-5">
                      <div class="group relative   animate-pulse">
                        <div class="aspect-square rounded-lg bg-gray-200 w-full h-48"></div>
                        <div class="pb-4 pt-10 text-center">
                          <div class="h-2 bg-gray-200 rounded w-1/2 mx-auto"></div>
                          <div class="mt-3 flex flex-col items-center">
                            <div class="flex items-center mt-2">
                              <div class="h-4 bg-gray-200 rounded w-4 mr-1"></div>
                              <div class="h-4 bg-gray-200 rounded w-4 mr-1"></div>
                              <div class="h-4 bg-gray-200 rounded w-4 mr-1"></div>
                              <div class="h-4 bg-gray-200 rounded w-4 mr-1"></div>
                              <div class="h-4 bg-gray-200 rounded w-4 mr-1"></div>
                            </div>
                            <div class="mt-1 h-4 bg-gray-200 rounded w-16"></div>
                          </div>
                          <div class="mt-4 h-5 bg-gray-200 rounded w-1/3 mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  
                ))
              }
              </div>
            }
            

            {
                get(this.props, 'items').length != 0 && <PaginationV1 page={get(this.props, 'page', 1)} rowsPerPage={get(this.props, 'rowsPerPage', 10)} totalRecords={get(this.props, 'totalRecords', 10)} applyPagination={this.props.applyPagination}  />
              }
          </div>
        </div>
      </div>
    );
  }
}

ProductListV1.propTypes = {
    style: object
};

ProductListV1.defaultProps = {
    style: {},
    items: [
        {
          id: 1,
          title: "Organize Basic Set (Walnut)",
          price: "$149",
          rating: 5,
          reviewCount: 38,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-01.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        {
          id: 2,
          title: "Organize Pen Holder",
          price: "$15",
          rating: 5,
          reviewCount: 18,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-02.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        {
          id: 3,
          title: "Organize Sticky Note Holder",
          price: "$15",
          rating: 5,
          reviewCount: 14,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-03.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        {
          id: 4,
          title: "Organize Phone Holder",
          price: "$15",
          rating: 4,
          reviewCount: 21,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        {
          id: 4,
          title: "Organize Phone Holder",
          price: "$15",
          rating: 4,
          reviewCount: 21,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        {
          id: 4,
          title: "Organize Phone Holder",
          price: "$15",
          rating: 4,
          reviewCount: 21,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        {
          id: 4,
          title: "Organize Phone Holder",
          price: "$15",
          rating: 4,
          reviewCount: 21,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        {
          id: 4,
          title: "Organize Phone Holder",
          price: "$15",
          rating: 4,
          reviewCount: 21,
          imageSrc:
            "https://tailwindui.com/plus/img/ecommerce-images/category-page-05-image-card-04.jpg",
          imageAlt: "TODO",
          href: "#",
        },
        // More products...
      ]
};

export default withDataPlp(ProductListV1);
