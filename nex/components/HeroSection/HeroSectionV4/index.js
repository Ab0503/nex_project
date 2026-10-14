import { object, string } from 'prop-types'
import get from 'lodash.get'
import ReactPlayer from "react-player";
import NexImage from '@nex-core-ui/NexImage';
import {React,useState,useEffect} from 'react'
import ImageOrVedio from '@nex-core-ui/ImageOrVedio';



const HeroSectionV4 = (props) => {
  const style = get(props,'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
 
  return (
    <div class={`relative overflow-hidden bg-white ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
            <main class="mx-auto mt-16 max-w-7xl px-4 mb-32 sm:mt-24 lg:mt-32">
                <div class="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div class="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
                    <h1>
                        <span class={`block text-base font-semibold text-gray-500 sm:text-lg lg:text-base xl:text-lg ${get(tailwindClasses, 'title')}`}  style={{...get(style, 'title')}}>{get(props, 'title')}</span>
                        <span class="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                        <span class={`block text-gray-900 ${get(tailwindClasses, 'text1')}`}  style={{...get(style, 'text1')}}>{get(props, 'text1')}</span>
                        <span class={`block text-indigo-600 ${get(tailwindClasses, 'text2')}`} style={{...get(style, 'text2')}}>{get(props, 'text2')}</span>
                        </span>
                    </h1>
                    <p class={`mt-6 text-base text-gray-500 sm:mt-6 sm:text-xl lg:text-lg xl:text-xl ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>{get(props, 'description')}</p>
                    </div>
                    <div class="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
                        <svg class="absolute left-1/2 top-0 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden" width="640" height="784" fill="none" viewBox="0 0 640 784" aria-hidden="true">
                            <defs>
                            <pattern id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e" x="118" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <rect x="0" y="0" width="4" height="4" class={`text-gray-200 ${get(tailwindClasses, 'dots')}`} fill="currentColor" style={get(style, 'dots')} />
                            </pattern>
                            </defs>
                            <rect y="72" width="640" height="640" class={`text-gray-50 ${get(tailwindClasses, 'dotsBackground')}`} fill="currentColor"  style={get(style, 'dotsBackground')} />
                            <rect x="118" width="404" height="784" fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)" />
                        </svg>
                        <div class="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <ImageOrVedio 
                              src={get(props, "thumbnail", "")}
                              vedioSrc={get(props, "vedioPath", "")}
                            />
                        </div>
                    </div>
                </div>
            </main>
    </div>
  )
}

HeroSectionV4.propTypes = {
  style: object,
  title: string,
  subTitle: string,
  description: string,
  ctaText: string,
  ctaLink: string,
}

HeroSectionV4.defaultProps = {
  style: {
    container: {},
    dots: {},
    dotsBackground: {},
    title: {},
    text1: {},
    text2: {},
    description: {},
    cta: {},
    vedio: {},
  },
  title: "Data to enrich your online business",
  text1: "Data to enrich your",
  text2: "online business",
  description: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.",
  thumbnail: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735294780.750x500.png",
  vedioPath: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/vedio/1728966855.1728152985.19420800-uhd_3840_2160_30fps.mp4"
}

export default HeroSectionV4;