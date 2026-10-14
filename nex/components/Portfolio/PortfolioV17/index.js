import React, { useState } from 'react';
import get from 'lodash.get';
import parse from 'html-react-parser';
import { Dialog, DialogPanel } from '@headlessui/react'
import { object, string } from 'prop-types';

const PortfolioV17 = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  return (
    <section className={`py-32 px-5 text-white relative before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 before:bg-[rgba(27,46,66,.84)] ${get(tailwindClasses, 'container')}`} style={{ background: `url(${get(props, 'bgImage')})`, backgroundPosition: "center", ...get(style, 'container') }}>
      <div className='relative z-[1]'>
        {get(props, 'icon', '').length !== 0 && <div className='flex justify-center mb-7'>
          <button onClick={() => setIsOpen(true)} className={`inline-flex text-yellow-500 ${get(tailwindClasses, 'icon')}`} style={get(style, 'icon')}>{parse(get(props, 'icon'))}</button>
        </div>}
        {get(props, 'title', '').length !== 0 && <h1 className={`text-center font-light text-4xl mb-5 ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
        {get(props, 'description', '').length !== 0 && <p className={`text-center font-light ${get(tailwindClasses, 'description')}`} style={get(style, 'description')}>{get(props, 'description')}</p>}
      </div>
      {isOpen && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-10">
          <div className="fixed inset-0 bg-gray-500/75 transition-opacity" />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center max-sm:items-center sm:p-0">
              <DialogPanel
                className={`relative transform overflow-hidden rounded-lg bg-transparent px-4 pb-4 pt-5 text-left transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6 ${get(tailwindClasses, 'dialogBox')}`} style={get(style, 'dialogBox')}
              >{get(props, 'videoUrl', '').length !== 0 && <video className={`${get(tailwindClasses, 'dialogVideo')}`} style={get(style, 'dialogVideo')} src={get(props, 'videoUrl')} autoPlay controls />}
                <div className="mt-6">
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`absolute top-2 right-2 rounded-full nx-btn-primary px-2 py-2 shadow-sm hover:bg-gray-400 z-10 ${get(tailwindClasses, 'closedIcon')}`} style={get(style, 'closedIcon')}
                  >
                    {parse(get(props, 'closedIcon'))}
                  </button>
                </div>
              </DialogPanel>
            </div>
          </div>
        </Dialog>
      )
      }
    </section>
  )
}

PortfolioV17.propTypes = {
  style: object,
  tailwindClasses: object,
  bgImage: string,
  icon: string,
  title: string,
  description: string,
  videoUrl: string,
  closedIcon: string,
}

PortfolioV17.defaultProps = {
  style: {
    container: {},
    icon: {},
    title: {},
    description: {},
    dialogBox: {},
    dialogVideo: {},
    closedIcon: {}
  },
  tailwindClasses: {
    container: "",
    icon: "",
    title: "",
    description: "",
    dialogBox: "",
    dialogVideo: "",
    closedIcon: ""
  },
  bgImage: "https://pro-theme.com/html/academica/assets/media/backgrounds/2.jpg",
  icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" /></svg>`,
  title: "Campus Life Video Tour",
  description: "Having over 9 million students worldwide and more than 50,000 online courses available.",
  videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  closedIcon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>`,
}
export default PortfolioV17
