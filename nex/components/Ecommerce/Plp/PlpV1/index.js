import { Component } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { object } from "prop-types";
import get from "lodash.get";
import withDataPlp from "@nex-core-ui/HOC/withDataPlp";
import { Field, Select } from '@headlessui/react'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';
import PaginationV1 from "@nex-components/Plp/Pagination/PaginationV1";
import range from "lodash.range";
import PlpTileV1 from "../PlpTileV1";
import PdpPreviewV1 from "@nex-components/Ecommerce/Pdp/PdpPreviewV1";

// TODO: need to work on breadcrumb
const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

class PlpV1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isOpen: false,
      activeIndex: 0
    }
  }
  sortOptionChange(e) {
    console.log(e.target.value);
    switch (e.target.value) {
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
    const openQuickViewModal = (productId, index) => {
      this.setState({ activeIndex: index })
      this.setState({ isOpen: true })
    }

    const closeQuickViewModal = (productId) => {
      this.setState({ isOpen: false })
    }

    const slug = get(this.props, 'router.query.all', []);
    let categoryName = "Category Name Here..."
    if (slug.length > 1) {
      categoryName = slug[slug.length - 2];
    }
    return (
      <div className="">

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
                {Array.isArray(get(this.props, 'items')) && get(this.props, 'items', []).map((item, index) => (
                    <PlpTileV1 link={get(this.props,'link')} {...item} openQuickViewModal={() => openQuickViewModal(item.id, index)} closeQuickViewModal={closeQuickViewModal} />
                ))}
              </div>
            }
            {this.state.isOpen && (
              <PdpPreviewV1 {...this.props.items[this.state.activeIndex]} isOpen={this.state.isOpen} setIsOpen={(val) => this.setState({ isOpen: val })} />
            )
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
              get(this.props, 'items').length != 0 && <PaginationV1 page={get(this.props, 'page', 1)} rowsPerPage={get(this.props, 'rowsPerPage', 10)} totalRecords={get(this.props, 'totalRecords', 10)} applyPagination={this.props.applyPagination} />
            }
          </div>
        </div>
      </div>
    );
  }
}

PlpV1.propTypes = {
  style: object
};

PlpV1.defaultProps = {
  style: {},
  tailwindClasses: {},
  link:"product",
  items: [
    {
      id: 1,
      name: "Xerat fulicom lan",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$129.00",
      oldPrice: "$150.00",
      discount: "12%",
      rating: 4,
    },
    {
      id: 2,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 3,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 4,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 5,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 6,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
  ]
};

export default withDataPlp(PlpV1);
