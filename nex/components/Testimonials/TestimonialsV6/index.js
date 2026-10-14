import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import withLazyLoad from '@/utils/withLazyLoad';
import withData from "@nex-core-ui/HOC/withData";

class TestimonialsV6 extends Component {
    render() {
      const style = get(this.props,'style', {});
      const tailwindClasses = get(this.props, 'tailwindClasses', {});
        return (
            <div className={`bg-white py-24 sm:py-32 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                    <h2 className={`text-base/7 font-semibold text-indigo-600 ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>{get(this.props, 'title')}</h2>
                    <p className={`mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl ${get(tailwindClasses, 'subTitle')}`} style={{...get(style, 'subTitle')}}>
                        {get(this.props, 'subTitle')}
                    </p>
                    </div>
                    <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-2">
                        {get(this.props, 'items', []).map((item, index) => (
                            <div key={get(item, 'text1')} className={`pt-8 sm:inline-block sm:w-full sm:px-4  `} >
                                <figure className={`rounded-2xl bg-gray-50 p-8 text-sm/6 ${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                                    <blockquote className="text-gray-900">
                                        <p className={`${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>{`“${get(item, 'description')}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <NexImage src={item.imagePath} className={`!h-12 !w-12 !relative rounded-full bg-gray-50 ${get(tailwindClasses, 'image')}`} style={{...get(style, 'image')}}></NexImage>
                                        <div>
                                        <div className={`font-semibold text-gray-900 ${get(tailwindClasses, 'text1')}`} style={{...get(style, 'text1')}}>{get(item, 'text1')}</div>
                                        <div className={`text-gray-600 ${get(tailwindClasses, 'text2')}`} style={{...get(style, 'text2')}}>{get(item, 'text2')}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

TestimonialsV6.propTypes = {
  style: object,
  title: "",
  subTitle: "",
  items: arrayOf(object)
}
TestimonialsV6.defaultProps = {
  style: {
      container: {},
      title:{},
      subTitle: {},
      description: {},
      image: {},
      sectionBox:{},
      text1: {},
      text2:{}
  },
  title: "Title",
  subTitle: "We have worked with thousands of amazing people",
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
export default withData(withLazyLoad(TestimonialsV6));