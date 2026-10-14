import PropTypes, { object } from 'prop-types'
import get from "lodash.get";
import parse from "html-react-parser";
import PrimaryLink from '@nex-core-ui/PrimaryLink';
import NexAnimation from '@nex-components/NexAnimation';


const ContactUsV9 = (props) => {
  const style = get(props, "style", {});
  const tailwindClasses = get(props, "tailwindClasses", {});
  return (
    <div className={`overflow-hidden py-16 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <div className="grid grid-cols-3 mx-10 max-xl:grid-cols-2 mb-14 max-xl:mb-5 max-md:mb-5 max-md:grid-cols-1 gap-8">
        <div className="col-span-2 max-xl:col-span-1">
          <NexAnimation  type={get(props, 'titleContentAnimation', '')}>
          {get(props,'title',"").length !==0 && <h2 className={`nx-section-heading-font text-3xl text-gray-800 font-bold mb-8 ${get(tailwindClasses,'title')}`} style={get(style,'title')}>{get(props,'title')}</h2>}
          </NexAnimation>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {get(props,'input1PlaceholderText',"").length !==0 && <input type="text" placeholder={get(props,'input1PlaceholderText')} className={`border p-3 rounded w-full ${get(tailwindClasses,'input')}`} style={get(style,'input')} />}
              {get(props,'input2PlaceholderText',"").length !==0 && <input type="text" placeholder={get(props,'input2PlaceholderText')} className={`border p-3 rounded w-full ${get(tailwindClasses,'input')}`} style={get(style,'input')} />}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {get(props,'input3PlaceholderText',"").length !== 0 && <input type="email" placeholder={get(props,'input3PlaceholderText')} className={`border p-3 rounded w-full ${get(tailwindClasses,'input')}`} style={get(style,'input')} />}
              {get(props,'input4PlaceholderText',"").length !==0 &&<input type="tel" placeholder={get(props,'input4PlaceholderText')} className={`border p-3 rounded w-full ${get(tailwindClasses,'input')}`} style={get(style,'input')} />}
            </div>
            {get(props,'input5PlaceholderText',"").length !==0 && <input type="text" placeholder={get(props,'input5PlaceholderText')} className={`border p-3 rounded w-full ${get(tailwindClasses,'input')}`} style={get(style,'input')} />}
            {get(props,'textareaPlacholderText',"").length !== 0 && <textarea placeholder={get(props,'textareaPlacholderText')} rows="4" className={`border p-3 rounded w-full ${get(tailwindClasses,'input')}`} style={get(style,'input')}/>}
            <div className="justify-items-end">
              <div className="relative  group">
                {get(props,'ctaText',"").length !== 0 && 
                <button
                  className={`inline-block p-px font-semibold leading-6 text-gray-50 nx-btn-primary nx-btn-primary:hover shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}
                >
                  <span className="relative z-10 block px-6 py-3 rounded-xl ">
                    <div className="relative z-10 flex items-center space-x-2">
                     <span className="transition-all duration-500 group-hover:translate-x-1"
                      >{get(props,'ctaText')}</span>
                      {get(props,'ctaIcon',"").length !== 0 && <span className={`${get(tailwindClasses,'ctaIcon')}`} style={get(style,'ctaIcon')}>{parse(get(props,'ctaIcon'))}</span>}
                    </div>
                  </span>
                </button>}
              </div>
            </div>
          </form>
        </div>
        {(get(props, 'itemTitle', '').length !== 0||get(props, 'itemSubTitle', '').length !== 0|| get(props, 'items',"").length !==0 || get(props, 'socials',"").length !==0)&& <div className={`bg-amber-100 p-5 rounded ${get(tailwindClasses,'itemBox')}`} style={get(style,'itemBox')}>
          {
            get(props, 'itemTitle', '').length !== 0 && <h3 className={`text-2xl text-gray-800 font-bold mb-4 ${get(tailwindClasses, 'itemTitle')}`} style={get(style, 'itemTitle')}>{get(props, 'itemTitle')}</h3>
          }
          {
            get(props, 'itemSubTitle', '').length !== 0 && <p className={`text-gray-600 mb-4 p-3 ${get(tailwindClasses, 'itemSubTitle')} `} style={get(style,'itemSubTitle')}>{get(props, 'itemSubTitle')}</p>
          }
          {
            get(props, 'items',[]).map((item) => (
              <ul className="space-y-4">
                {get(item, 'text', '').length !== 0 && <li className={`flex items-center space-x-2 bg-gray-50 text-gray-600 p-5 mb-3 nx-bg-hover-primary transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${get(tailwindClasses,'itemTextBox')}`} style={get(style,'itemTextBox')}>
                  {get(item, 'svg', '').length !== 0 && <span className={`${get(tailwindClasses,'itemSvg')}`} style={get(style,'itemSvg')}>{parse(get(item, 'svg', ''))}</span>}
                  {<span className={`${get(tailwindClasses,'itemText')}`} style={get(style,'itemText')}>{get(item, 'text', '')}</span>}
                </li>}
              </ul>
            ))
          }
          <div className="flex justify-between items-center mt-4">
            {get(props, 'socials',[]).map((social) => get(social, 'svg').length !== 0 && (<div className="social-button">
              <button className="relative w-12 h-12 rounded-full group max-lg:mr-5 gap-1">
                <div className={`floater w-full h-full absolute top-0 left-0 nx-bg-primary rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl ${get(tailwindClasses,'floaterBg')}`} style={get(style,'floaterBg')} ></div>
                <div className="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-gray-50 rounded-full " >
                  <PrimaryLink className={`${get(tailwindClasses,'socialIcon')}`} style={get(style,'socialIcon')} href={get(social, 'url')}>{parse(get(social, 'svg'))}</PrimaryLink>
                </div>
              </button>
            </div>))}
          </div>
        </div>}
      </div>
      <div className="mx-auto  px-4 sm:px-6 lg:px-8 max-sm:mt-20 max-lg:mt-40">
        {get(props,'mapText',"").length !== 0 && <h2 className={`nx-section-heading-font text-3xl font-bold text-gray-800 mb-6 text-center ${get(tailwindClasses,'mapTitle')}`} style={get(style,'mapTitle')}>
          {get(props,'mapText')}
        </h2>}
        {get(props,'mapPath',"").length !== 0 && <div className="w-full h-64 sm:h-96">
          <iframe
            className={`w-full h-full border-0 ${get(tailwindClasses,"mapBox")}`}
            src= {get(props,'mapPath')}
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
            style={get(style,'mapBox')}
          ></iframe>
        </div>}
      </div>
    </div>
  )
}


ContactUsV9.propTypes = {
  style: PropTypes.object,
  tailwindClasses: PropTypes.object,
  title: PropTypes.string,
  input1PlaceholderText:PropTypes.string,
  input2PlaceholderText:PropTypes.string,
  input3PlaceholderText:PropTypes.string,
  input4PlaceholderText:PropTypes.string,
  input5PlaceholderText:PropTypes.string,
  textareaPlacholderText:PropTypes.string,
  ctaText:PropTypes.string,
  ctaIcon: PropTypes.string,
  itemTitle: PropTypes.string,
  itemSubTitle: PropTypes.string,
  mapPath: PropTypes.string,
  mapText:PropTypes.string,
  socials: PropTypes.arrayOf(object),
  items: PropTypes.arrayOf(object),
};

ContactUsV9.defaultProps = {
  style: {
    container: {},
    title: {},
    input:{},
    cta:{},
    itemBox:{},
    itemTitle:{},
    itemSubTitle:{},
    itemTextBox:{},
    itemSvg:{},
    itemText:{},
    floaterBg:{},
    socialIcon:{},
    mapTitle:{},
    mapBox:{},
  },
  tailwindClasses: {
    container: "",
    title: "",
    input:"",
    cta:"",
    itemBox:"",
    itemTitle:"",
    itemSubTitle:"",
    itemTextBox:"",
    itemSvg:"",
    itemText:"",
    floaterBg:"",
    socialIcon:"",
    mapTitle:"",
    mapBox:"",
  },
  titleContentAnimation:"",
  title:"Contact Us",
  input1PlaceholderText:"Name",
  input2PlaceholderText:"Last Name",
  input3PlaceholderText:"Email",
  input4PlaceholderText:"Phone no.",
  input5PlaceholderText:"Subject",
  textareaPlacholderText:"Write Message",
  ctaText:"Submit Now",
  ctaIcon: `<svg className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clip-rule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>`,
  itemTitle: "Get in Touch",
  itemSubTitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  mapPath: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1780.3755706088714!2d72.90087283896635!3d19.09423377943457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7d640637815%3A0x6e4c422ab37e5404!2sJhambul%20Pada!5e0!3m2!1sen!2sin!4v1733381939820!5m2!1sen!2sin",
  mapText:"Our Location",
  socials: [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" >
                      <path className="group-hover:fill-[#171543] fill-white duration-300" d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z" ></path>
                      <path className="group-hover:fill-[#171543] fill-white duration-300" d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z"></path>
                    </svg>`,
      url: "#",
    },
    {
      svg: `<svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>`,
      url: "#",
    },
    {
      svg: `<svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M8.5,19H6V10h2.5V19z M7.3,9 h-0.1C6.4,9,6,8.6,6,8.1V7.9c0-0.5,0.4-0.9,0.9-0.9h0.1C7.6,7,8,7.4,8,7.9v0.1C8,8.6,7.6,9,7.3,9z M19,19h-2.5v-4.9 c0-1.2-0.4-2-1.4-2c-0.8,0-1.3,0.6-1.5,1.2h-0.1V19H10V10h2.3v1.3h0C12.7,10.7,14,9.9,15.5,9.9c2.1,0,3.5,1.4,3.5,3.8V19z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>`,
      url: "#",
    },
    {
      svg: `<svg
                      height="32"
                      width="32"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="group-hover:fill-[#171543] fill-white duration-300"
                        d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>`,
      url: "#",
    },
  ],

  items: [
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>`,
      text: "+01 123456789, 1234567890",

    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-pulse">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>
`,

      text: "abc@gmail.com",

    },
    {
      svg: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 animate-bounce">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>
`,

      text: "2072 Pinnickinick Street, WA 98370",
    },
  ],
}

export default ContactUsV9;
