import React, { useState} from 'react'
import get from 'lodash.get'
import { object, string } from 'prop-types'
import Marquee from 'react-fast-marquee';
import withData from '@nex-core-ui/HOC/withData';

const PencilBannerV6 = (props) => {
    // const http = new HttpService();
    const [isVisible, setIsVisible] = useState(true);
    // const [bannerText,setBannerText] =useState("");

    // useEffect(() => {
    //     http.get(get(props, 'apiEndpoint'))
    //         .then((response) => {
    //             console.log(response)
    //             setBannerText(get(response, "data.data"));
    //             toast.success("Banner data loaded successfully", { position: 'top-right' });
    //             console.log(bannerText)
    //         })
    //         .catch((err) => {
    //             console.error("Error fetching banner data:", err);
    //             toast.error("Error fetching banner data", { position: 'top-right' });
    //         });
    // }, [props.apiEndpoint]);
    // useEffect(() => {
    //     console.log("Updated bannerText:", bannerText);
    // }, [bannerText]);

    if (!isVisible) return null;
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    return (
        <div className={`relative isolate flex items-center gap-x-6 overflow-hidden  px-6 py-3.5 sm:px-3.5 sm:before:flex-1 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className="flex text-sm/6 text-gray-50 items-center gap-y-2 max-lg:w-[90%] lg:w-[93%]">
                <Marquee>
                    {Array.isArray(get(props,'items',[])) && get(props,'items',[]).map((item)=><strong className={`font-normal ml-5 ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item,'text')}</strong> )}
                </Marquee>
            </div>
            <div className="flex flex-1 justify-end">
                <button onClick={() => setIsVisible(false)} type="button" className={`-m-3 p-3 focus-visible:outline-offset-[-4px] ${get(tailwindClasses, 'closeIcon', '')}`} style={get(style, 'closeIcon')}>
                    <span className="sr-only">Dismiss</span>
                    <svg className="size-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                        <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
PencilBannerV6.propTypes = {
    style: object,
    tailwindClasses: object,
    text: string
}
PencilBannerV6.defaultProps = {
    style: {
        container: {},
        text: {},
        closeIcon: {}
    },
    tailwindClasses: {
        container: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",
        text: "",
        closeIcon: "text-gray-50"
    },
    items:[
        {
            text: "Populate this marketing banner to advertise a special promotion such as: Save 20% this weekend!",
        },
        {
            text: "Populate this marketing banner to advertise a special promotion such as: Save 20% this weekend!",
        },
        {
            text: "Populate this marketing banner to advertise a special promotion such as: Save 20% this weekend!",
        },
    ],
}
export default withData(PencilBannerV6)