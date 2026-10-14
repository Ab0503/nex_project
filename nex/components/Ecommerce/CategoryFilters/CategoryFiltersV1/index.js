import React from 'react'
import get from 'lodash.get'
import { object } from 'prop-types'
import NexImage from '@nex-core-ui/NexImage'

const CategoryFiltersV1 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});

    return (
        <div className={`mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="border-b border-gray-200 pb-10">
                <h1 className={`text-4xl font-bold tracking-tight text-gray-900 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>
                <p className={`mt-4 text-base text-gray-500 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</p>
            </div>

            <div className="pt-8 lg:grid lg:grid-cols-1 lg:gap-x-8 xl:grid-cols-1">

                <h2 className="sr-only">Filters</h2>

                {/* Mobile filter dialog toggle, controls the 'mobileFilterDialogOpen' state. */}
                <button type="button" className="inline-flex items-center lg:hidden">
                    <span className={`text-sm font-medium text-gray-700 ${get(tailwindClasses, 'filter')}`} style={get(style, 'filter')}>{get(props, 'filter')}</span>
                    <svg className="ml-1 size-5 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                    </svg>
                </button>
                <div className="hidden lg:block">
                    <form className="divide-y divide-gray-200">
                        <div className='border-b border-gray-300 pb-5'>
                            <div className="py-10 first:pt-0 last:pb-0">
                                <fieldset>
                                    <legend className={`block text-sm font-medium text-gray-900 ${get(tailwindClasses, 'filter1')}`} style={get(style, 'filter1')}>{get(props, 'filter1')}</legend>
                                    <div className="space-y-3 pt-6">
                                        <div className="flex gap-3">
                                            <div className="flex h-5 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input id="color-0" name="color[]" value="white" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                    <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                        <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label for="color-0" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter1Text1')}`} style={get(style, 'filter1Text1')}>{get(props, 'filter1Text1')}</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-5 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input id="color-1" name="color[]" value="beige" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                    <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                        <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label for="color-1" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter1Text2')}`} style={get(style, 'filter1Text2')}>{get(props, 'filter1Text2')}</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-5 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input id="color-2" name="color[]" value="blue" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                    <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                        <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label for="color-2" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter1Text3')}`} style={get(style, 'filter1Text3')}>{get(props, 'filter1Text3')}</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-5 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input id="color-3" name="color[]" value="brown" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                    <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                        <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label for="color-3" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter1Text4')}`} style={get(style, 'filter1Text4')}>{get(props, 'filter1Text4')}</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-5 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input id="color-4" name="color[]" value="green" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                    <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                        <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label for="color-4" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter1Text5')}`} style={get(style, 'filter1Text5')}>{get(props, 'filter1Text5')}</label>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="flex h-5 shrink-0 items-center">
                                                <div className="group grid size-4 grid-cols-1">
                                                    <input id="color-5" name="color[]" value="purple" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                    <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                        <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <label for="color-5" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter1Text6')}`} style={get(style, 'filter1Text6')}>{get(props, 'filter1Text6')}</label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                    <form className="divide-y divide-gray-200">
                        <div className="py-10 first:pt-6 last:pb-0">
                            <fieldset>
                                <legend className={`block text-sm font-medium text-gray-900 ${get(tailwindClasses, 'filter2')}`} style={get(style, 'filter2')}>{get(props, 'filter2')}</legend>
                                <div className="space-y-3 pt-6">
                                    <div className="flex gap-3">
                                        <div className="flex h-5 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input id="color-0" name="color[]" value="white" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                    <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="color-0" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter2Text1')}`} style={get(style, 'filter2Text1')}>{get(props, 'filter2Text1')}</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-5 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input id="color-1" name="color[]" value="beige" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                    <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="color-1" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter2Text2')}`} style={get(style, 'filter2Text2')}>{get(props, 'filter2Text2')}</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-5 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input id="color-2" name="color[]" value="blue" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                    <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="color-2" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter2Text3')}`} style={get(style, 'filter2Text3')}>{get(props, 'filter2Text3')}</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-5 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input id="color-3" name="color[]" value="brown" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                    <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="color-3" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter2Text4')}`} style={get(style, 'filter2Text4')}>{get(props, 'filter2Text4')}</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-5 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input id="color-4" name="color[]" value="green" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                    <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="color-4" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter2Text5')}`} style={get(style, 'filter2Text5')}>{get(props, 'filter2Text5')}</label>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="flex h-5 shrink-0 items-center">
                                            <div className="group grid size-4 grid-cols-1">
                                                <input id="color-5" name="color[]" value="purple" type="checkbox" className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-gray-50 checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                                                <svg className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25" viewBox="0 0 14 14" fill="none">
                                                    <path className="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path className="opacity-0 group-has-[:indeterminate]:opacity-100" d="M3 7H11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <label for="color-5" className={`text-sm text-gray-600 ${get(tailwindClasses, 'filter2Text6')}`} style={get(style, 'filter2Text6')}>{get(props, 'filter2Text6')}</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
CategoryFiltersV1.propTypes = {
    style: object,
    tailwindClasses: object
}
CategoryFiltersV1.defaultProps = {
    style: {
        container: {},
        title: {},
        subTitle: {},
        filter: {},
        filter1: {},
        filter1Text: {},
        filter2: {},
        filter2Text: {},
    },
    tailwindClasses: {
        container: "",
        title: "",
        subTitle: "",
        filter: "",
        filter1: "",
        filter1Text: "",
        filter2: "",
        filter2Text: "",
    },
    title: "New Arrivals",
    subTitle: "Checkout out the latest release of Basic Tees, new and improved with four openings!",
    filter: "filters",
    filter1: "Color",
    filter1Text1: "White",
    filter1Text2: "Beige",
    filter1Text3: "Blue",
    filter1Text4: "Brown",
    filter1Text5: "Green",
    filter1Text6: "Purple",
    filter2: "Price",
    filter2Text1: "0-100$",
    filter2Text2: "100-500$",
    filter2Text3: "500-1000$",
    filter2Text4: "1000-2000$",
    filter2Text5: "2000-3000$",
    filter2Text6: "2000-3000$"
}
export default CategoryFiltersV1;