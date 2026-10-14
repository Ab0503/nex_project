import React from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import PropTypes, { object } from 'prop-types'


const PencilBannerV3 = (props) => {
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});

    return (
        <div className={`p-2 px-16 font-light bg-pink-300 text-xs text-white ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <div className={`flex flex-col md:flex-row justify-between ${get(tailwindClasses, "contentContainer")}`} style={get(style, 'contentContainer')}>
                {props.socials !== 0 && (
                    <div className={`flex flex-row gap-2 ${get(tailwindClasses, 'socialIcon')}`} style={get(style, 'socialIcon')}>
                        {props.socials.map((social) =>
                            <a href={get(social, 'ctalink')}>{get(social, 'svg').length > 0 && parse(get(social, 'svg'))}</a>
                        )}
                    </div>)}
                <div className='flex'>
                    {get(props, "text1").length !== 0 && 
                        <div className={`flex flex-row gap-2 ${get(tailwindClasses, 'text1Container')}`} style={get(style, 'text1Container')}>
                            <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{get(props, 'icon1').length > 0 && parse(get(props, 'icon1'))}</span>
                            <p className={`${get(tailwindClasses, 'text1')}`} style={get(style, 'text1')}>{get(props, 'text1')}</p>
                        </div> }
                        {(get(props, "text1").length !== 0 && get(props, "text2").length !== 0)&& <div class="mx-2 h-5 w-0.5 bg-white"></div>}
                    {get(props, "text2").length !== 0 && <div className={`flex flex-row gap-2 ${get(tailwindClasses, 'text2Container')}`} style={get(style, 'text2Container')}>
                        <span className={`${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{get(props, 'icon2').length > 0 && parse(get(props, 'icon2'))}</span>
                        <p className={`${get(tailwindClasses, 'text2')}`} style={get(style, 'text2')}>{get(props, 'text2')}</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}

PencilBannerV3.defaultProps = {
    style: {
        container: {},
        contentContainer: {},
        text1Container: {},
        text2Container: {},
        icon: {},
        socialIcon: {},
    },
    tailwindClasses: {
        container: "",
        contentContainer: "",
        text1Container: "",
        text2Container: "",
        icon: "",
        socialIcon: "",
    },
    icon1: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" /></svg>`,
    text1: "Discover 100+ charity plans for safe future",
    icon2: `<svg xmlns= http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4"><path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" /></svg>`,
    text2: "Talk to Us: (+41)88822333 [or] mailus@nexnnova.com",
    socials: [
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none"><path d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z" fill="#fff"/>`,
            ctalink: "#"
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 -0.5 25 25" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="15.5" y="9" width="2" height="2" rx="1" transform="rotate(-90 15.5 9)" fill="#fff"/><rect x="16" y="8.5" width="1" height="1" rx="0.5" transform="rotate(-90 16 8.5)" stroke="#fff" stroke-linecap="round"/></svg>`,
            ctalink: "#"
        },
        {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none"><path d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z" fill="#fff"/><path d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z" fill="#fff"/><path d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#fff"/></svg>`,
            ctalink: "#"
        },
    ]
}
PencilBannerV3.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    icon1: PropTypes.string,
    text1: PropTypes.string,
    icon2: PropTypes.string,
    text2: PropTypes.string,
    socials: PropTypes.arrayOf(object)
}
export default PencilBannerV3
