import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import CountUp from 'react-countup';
import { arrayOf, object, string } from 'prop-types';

const StatsV19 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    return (
        <section className={`py-12 px-5 text-white ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(props, 'bgImage')})`, backgroundPosition: "center", ...get(style, 'container') }}>
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                {get(props, 'items', []).map((item) =>
                    <div className='flex gap-2 items-start'>
                        {get(item, 'icon', '').length !== 0 && <div className={`inline-flex ${get(item, 'iconColor')} ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>
                            {parse(get(item, 'icon'))}
                        </div>}
                        <div>
                            {get(item, 'value', '').length !== 0 && <h1 className={`text-3xl font-semibold relative after:block after:h-[2px] after:w-10 after:mt-4 after:bg-gray-300 mb-5 ${get(tailwindClasses, 'value')}`} style={get(style, 'value')}><CountUp end={get(item, 'value')} enableScrollSpy /></h1>}
                            {get(item, 'text', '').length !== 0 && <p className={`font-semibold ${get(tailwindClasses, 'text')}`} style={get(style, 'text')}>{get(item, 'text')}</p>}
                        </div>
                    </div>)}
            </div>
        </section>
    )
}

StatsV19.propTypes = {
    style: object,
    tailwindClasses: object,
    bgImage: string,
    items: arrayOf(object)
}

StatsV19.defaultProps = {
    style: {
        container: {},
        icon: {},
        value:{},
        text:{}
    },
    tailwindClasses: {
        container: "",
        icon: "",
        value:"",
        text:""
    },
    bgImage: "https://pro-theme.com/html/academica/assets/media/backgrounds/1.jpg",
    items: [
        {
            value: 190,
            iconColor: "text-yellow-500",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" /></svg>`,
            text: "COUNTRIES REACHED"
        },
        {
            value: 250000,
            iconColor: "text-red-600",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,
            text: "PASSED GRADUATES"
        },
        {
            value: 824,
            iconColor: "text-sky-500",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>`,
            text: "QUALIFIED STAFF"
        },
        {
            value: 1500,
            iconColor: "text-green-500",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`,
            text: "COURSES PUBLISHED"
        },
    ]
}
export default StatsV19
