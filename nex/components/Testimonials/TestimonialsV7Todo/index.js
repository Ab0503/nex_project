import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import withData from "@nex-core-ui/HOC/withData";

class TestimonialsV7 extends Component {
    render() {
      const style = get(this.props,'style', {});
      const tailwindClasses = get(this.props, 'tailwindClasses', {});
        return (
            <div className={`relative isolate bg-white pb-32 pt-24 sm:pt-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
                >
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
                    />
                </div>
                <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
                >
                    <div
                    style={{
                        clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
                    />
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                    <h2 className={`text-base/7 font-semibold text-indigo-600 ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(this.props, 'title')}</h2>
                    <p className={`mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>
                        {get(this.props, 'subTitle')}
                    </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
                    <figure className={`rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1 ${get(tailwindClasses, 'featuredBox')}`} style={{...get(style, 'featuredBox')}}>
                        <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
                        <p className={`${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}} >{`“${featuredDescription}”`}</p>
                        </blockquote>
                        <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                        <NexImage src={featuredImagePath} className={`!h-12 !w-12 flex-none rounded-full bg-gray-50 ${get(tailwindClasses, 'image')}`} style={{...get(style, 'image')}}></NexImage>
                        <div className="flex-auto">
                            <div className={`font-semibold ${get(tailwindClasses, 'text1')}`} style={{...get(style, 'text1')}}>{featuredText1}</div>
                            <div className={`text-gray-600 ${get(tailwindClasses, 'text2')}`} style={{...get(style, 'text2')}}>{featuredText2}</div>
                        </div>
                        </figcaption>
                    </figure>
                    {get(this.props, 'items', []).map((columnGroup, columnGroupIdx) => (
                        <div key={get(item, 'text1')} className="space-y-8 xl:contents xl:space-y-0">
                        {columnGroup.map((column, columnIdx) => (
                            <div
                            key={columnIdx}
                            className={classNames(
                                (columnGroupIdx === 0 && columnIdx === 0) ||
                                (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                                ? 'xl:row-span-2'
                                : 'xl:row-start-1',
                                'space-y-8',
                            )}
                            >
                            {column.map((testimonial) => (
                                <figure
                                key={testimonial.author.handle}
                                className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                                >
                                <blockquote className="text-gray-900">
                                    <p>{`“${testimonial.body}”`}</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <NexImage alt="" src={testimonial.author.imageUrl} className="!relative !h-10 !w-10 rounded-full bg-gray-50" />
                                    <div>
                                    <div className="font-semibold">{testimonial.author.name}</div>
                                    <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                                    </div>
                                </figcaption>
                                </figure>
                            ))}
                            </div>
                        ))}
                        </div>
                    ))}
                    </div>
                </div>
                </div>
        );
    }
}

TestimonialsV7.propTypes = {
  style: object,
  title: "",
  subTitle: "",
  featuredImagePath: "",
  featuredDescription: "",
  featuredText1: "",
  featuredText2: "",
  items: arrayOf(object)
}
TestimonialsV7.defaultProps = {
  style: {
      container: {},
      title:{},
      subTitle: {},
      description: {},
      image: {},
      featuredBox: {},
      sectionBox:{},
      text1: {},
      text2:{}
  },
    title: "Title",
    subTitle: "We have worked with thousands of amazing people",
    featuredImagePath: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
    featuresdDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
    featuredText1: "Judith Black 1",
    featuredText2: "CEO of Workcation",
  items: [
      {
          imagePath: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
          text1: "Judith Black 1",
          text2: "CEO of Workcation"
      },
      {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
          imagePath: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
          text1: "Judith Black 2",
          text2: "CEO of Workcation"
      },
      {
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
          imagePath: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
          text1: "Judith Black 3",
          text2: "CEO of Workcation"
      },
      {
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.",
        imagePath: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=1024&h=1024&q=80",
        text1: "Judith Black 4",
        text2: "CEO of Workcation"
    }
  ]
}
export default withData(TestimonialsV7);