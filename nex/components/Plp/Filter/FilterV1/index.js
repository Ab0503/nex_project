"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { arrayOf, object } from "prop-types";
import get from "lodash.get";
import withData from "@nex-core-ui/HOC/withData";
import { Component, PureComponent, useState } from "react";
import without from "lodash.without";
import { withRouter } from "next/router";

class FilterV1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: [],
    };
  }
  filterChange = (e) => {
    let selectedIndexValue = [];
    if (e.target.checked == true) {
      if (this.state.selectedIndex.length > 0) {
        selectedIndexValue = [e.target.value, ...this.state.selectedIndex];
      } else {
        selectedIndexValue = [e.target.value];
      }
      this.setState({
        selectedIndex: [...selectedIndexValue],
      });
    } else {
      selectedIndexValue = [...without(this.state.selectedIndex, e.target.value)];
      this.setState({
        selectedIndex: [...selectedIndexValue],
      });
    }
    
    const selectedValue = [];
    for(let i=0; i<selectedIndexValue.length; i++){
      selectedValue.push(this.props.items[parseInt(selectedIndexValue[i])].value);
    }
    
    this.props.applyFilter(
      get(this.props, "queryParamName"),
      selectedValue.join(",")
    );
  };
  removeFilter(selectedIndex){
    let selectedIndexValue = [];
    selectedIndexValue = [...without(this.state.selectedIndex, selectedIndex)];
    console.log('selectedIndexValue after remove', selectedIndexValue);
    this.setState({
      selectedIndex: [...selectedIndexValue],
    });
    const selectedValue = [];
    for(let i=0; i<selectedIndexValue.length; i++){
      selectedValue.push(this.props.items[parseInt(selectedIndexValue[i])].value);
    }
    this.props.applyFilter(
      get(this.props, "queryParamName"),
      selectedValue.join(",")
    );
  }
  render() {
    console.log('check after checked', this.state.selectedIndex);
    const style = get(this.props, "style", {});
    const tailwindClasses = get(this.props, "tailwindClasses", {});

    return (
      <>
        <Disclosure
          key={get(this.props, "title")}
          as="div"
          className={`border-t border-gray-200 pb-4 pt-4 ${get(
            tailwindClasses,
            "container"
          )}`}
          style={{ ...get(style, "container") }}
        >
          <fieldset>
            <legend className="w-full px-2">
              <DisclosureButton className="group flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                <span
                  className={`text-sm font-medium text-gray-900 ${get(
                    tailwindClasses,
                    "title"
                  )}`}
                  style={{ ...get(style, "title") }}
                >
                  {get(this.props, "title")}
                </span>
                <span className="ml-6 flex h-7 items-center">
                  <ChevronDownIcon
                    aria-hidden="true"
                    className={`size-5 rotate-0 transform group-data-[open]:-rotate-180 `}
                    style={{ ...get(style, "checkBox") }}
                  />
                </span>
              </DisclosureButton>
            </legend>
            {
              this.state.selectedIndex.length != 0 && <div className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 py-3 sm:flex sm:items-center ">
                  <h3 className="text-sm font-medium text-gray-500">
                    Filters
                    <span className="sr-only">, active</span>
                  </h3>

                  <div
                    aria-hidden="true"
                    className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
                  />

                  
                    <div className="mt-2 sm:ml-4 sm:mt-0">
                      <div className="-m-1 flex flex-wrap items-center">
                        {this.state.selectedIndex.map((selectedIndex) => (
                          <span
                            key={this.props.items[selectedIndex].label}
                            className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900"
                          >
                            <span>{this.props.items[selectedIndex].label}</span>
                            <button
                              type="button"
                              className="ml-1 inline-flex size-4 shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                              onClick={() => this.removeFilter(selectedIndex)}
                            >
                              <span className="sr-only">
                                Remove filter for{" "}
                                {this.props.items[selectedIndex].label}
                              </span>
                              <svg
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 8 8"
                                className="size-2"
                              >
                                <path
                                  d="M1 1l6 6m0-6L1 7"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </button>
                          </span>
                        ))}
                      </div>
                    </div>
                  
                  
                </div>
              </div>
            }
            

            {this.props.loading == false && (
            <DisclosurePanel className="h-40 px-4 pb-2 pt-2 overflow-x-scroll ">
              <div className="space-y-3">
                {get(this.props, "items").map((item, index) => (
                  <div
                    key={item.value}
                    className={`flex items-center   ${get(
                      tailwindClasses,
                      "filterBox"
                    )}`}
                    style={{ ...get(style, "filterBox") }}
                  >
                    <input
                      checked={
                        this.state.selectedIndex.indexOf(index.toString()) == -1
                          ? false
                          : true
                      }
                      value={index}
                      id={`${index}`}
                      type="checkbox"
                      className={`size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 ${get(
                        tailwindClasses,
                        "checkBox"
                      )}`}
                      style={{ ...get(style, "checkBox") }}
                      onClick={this.filterChange}
                    />
                    <label
                      htmlFor={`${index}-mobile`}
                      className={`ml-3 text-sm text-gray-500 ${get(
                        tailwindClasses,
                        "filterOption"
                      )}`}
                      style={{ ...get(style, "filterOption") }}
                    >
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </DisclosurePanel>
            )}

            {this.props.loading && (
                  <div class="animate-pulse h-64 overflow-x-scroll border-t border-gray-200 pb-4 pt-4">
                    <fieldset>
                      <div class="px-4 pb-2 pt-4">
                        <div class="space-y-6">
                          <div class="h-8 bg-gray-200 rounded w-full"></div>
                          <div class="h-8 bg-gray-200 rounded w-full"></div>
                          <div class="h-8 bg-gray-200 rounded w-full"></div>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                )}
          </fieldset>
        </Disclosure>
      </>
    );
  }
}

FilterV1.propTypes = {
  style: object,
  itmes: arrayOf(object),
};
FilterV1.defaultProps = {
  style: {
    container: {},
    title: {},
    checkBox: {},
    filterBox: {},
    filterOption: {},
  },
  title: "Color",
  queryParamName: "color_id",
  items: [
    { value: "white", label: "White" },
    { value: "beige", label: "Beige" },
    { value: "blue", label: "Blue" },
    { value: "brown", label: "Brown" },
    { value: "green", label: "Green" },
    { value: "purple", label: "Purple" },
  ],
};

export default withRouter(withData(FilterV1));
// export default FilterV1;
