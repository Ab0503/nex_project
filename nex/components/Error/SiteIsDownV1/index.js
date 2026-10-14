import React from "react";
import get from "lodash.get";
import NexAnimation from "@nex-components/NexAnimation";
import { object, string } from "prop-types";

const SiteIsDownV1 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <div className={`flex flex-col items-center justify-center min-h-screen bg-red-100 text-gray-800 p-6 ${get(tailwindClasses, "container")}`} style={get(style, "container")} >
            <NexAnimation type="Scale-In">
                <div className={`bg-white shadow-md rounded-lg p-8 text-center max-w-md mt-6 border border-gray-200 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
                    <div className={`bg-red-300 text-red-500 p-4 rounded-full inline-flex shadow-lg mx-auto mb-3 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <h2 className={`text-2xl font-bold text-red-500 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'companyName')} is Down!</h2>
                    <p className={`text-gray-600 mt-2 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>We're sorry, but <strong>{get(props, 'companyName')}</strong> is currently unavailable. Please try again later.</p>
                </div>
            </NexAnimation>
        </div>
    )
}

SiteIsDownV1.propTypes={
    style: object,
    tailwindClasses: object,
    companyName: string
}

SiteIsDownV1.defaultProps = {
    style: {
        container: {},
        sectionBox: {},
        icon: {},
        title: {},
        description: {}
    },
    tailwindClasses: {
        container: "",
        sectionBox: "",
        icon: "",
        title: "",
        description: ""
    },
    companyName: "Mavale Parivar",
}

export default SiteIsDownV1;
