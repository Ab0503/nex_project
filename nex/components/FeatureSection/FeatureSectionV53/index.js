import React, { useState } from "react";
import parse from 'html-react-parser';
import { object, string } from 'prop-types'
import get from 'lodash.get';

const FeatureSectionV53 = (props) => {
    const style = get(props, 'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const cards = get(props, 'cards', {});
    const [activeIndex, setActiveIndex] = useState(1); // Middle card active by default

    return (
        <div className={`relative bg-cover bg-center py-20 px-4 ${get(tailwindClasses, 'container')}`}
            style={{ backgroundImage: `url('${get(props,'bgImage')}')`,"backgroundRepeat":"no-repeat","backgroundSize":"cover", ...get(style, 'container')}}
        >
            <div className="absolute inset-0 bg-black/40 z-0" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-stretch">
                {
                    props.cards.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`cursor-pointer transform transition-all duration-500 ease-in-out flex-1 rounded-2xl px-8 py-12 text-center shadow-lg ${get(tailwindClasses, 'box')} ${activeIndex == index ?
                                 `scale-105 z-10 ${get(props,'ActiveBg')}` : `scale-95 opacity-90 hover:opacity-100 ${get(props,'InactiveBg')}`
                                }`} style={get(style, 'box')}
                        >
                            {get(item,'icon',"").length !==0 &&
                                <span className={`inline-flex w-12 h-12 mx-auto mb-1 ${get(tailwindClasses, 'icon')}`}style={get(style, 'icon')}>{parse(get(item,"icon"))}</span>
                            }
                            <h3 className={`text-lg font-bold uppercase ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{item.title}</h3>
                            <p className={`text-sm mt-4 ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{item.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

FeatureSectionV53.propTypes = {
    style: object,
    tailwindClasses: object,
    title: string
}
FeatureSectionV53.defaultProps = {
    style: {
        container: {},
        box: {},
        title: {},
        description: {},
        icon: {},
    },
    tailwindClasses: {
        container: "",
        box: "",
        title: "",
        description: "",
        icon: "",
    },
    bgImage:"https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80",
    ActiveBg: "bg-yellow-400",
    InactiveBg:"bg-blue-700",
    cards: [
    {
        title: "Select a Course!",
        description:
            "There are many variations of passages viduntur parum clari, fiant sollemnes in futurum.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
</svg>`
    },
    {
        title: "Attend a Seminar",
        description:
            "There are many variations of passages viduntur parum clari, fiant sollemnes in futurum.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
</svg>`
    },
    {
        title: "Build Your Future",
        description:
            "There are many variations of passages viduntur parum clari, fiant sollemnes in futurum.",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>`
    }
]
}
export default FeatureSectionV53;
