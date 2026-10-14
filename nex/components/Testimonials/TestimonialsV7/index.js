import React, { Component } from 'react';
import { object, arrayOf } from 'prop-types';
import get from 'lodash.get';
import NexImage from '@nex-core-ui/NexImage';
import withLazyLoad from '@/utils/withLazyLoad';
import withData from "@nex-core-ui/HOC/withData";

class TestimonialsV7 extends Component {
    render() {
      const style = get(this.props,'style', {});
      const tailwindClasses = get(this.props, 'tailwindClasses', {});
        return (
            <section className={`bg-indigo-800 ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
                <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 gap-6 md:px-6 lg:px-8">
                    
                {get(this.props, 'items', []).map((item, index) => (
                    <div className={`px-6 py-12 md:flex md:flex-col md:border-r md:border-indigo-900 md:py-16 md:pl-0 md:pr-10 lg:pr-8 lg:pl-8 ${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                        <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
                            <div className="relative text-lg font-medium text-white md:flex-grow">
                            <svg
                                fill="currentColor"
                                viewBox="0 0 32 32"
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
                            >
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <p className={`relative ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                                {`${get(item, 'description')}`}
                            </p>
                            </div>
                            <footer className="mt-8">
                            <div className="flex items-start">
                                <div className="inline-flex flex-shrink-0 rounded-full border-2 border-white">
                                <NexImage src={item.imagePath} className={`!h-12 !w-12 !relative rounded-full ${get(tailwindClasses, 'image')}`} style={{...get(style, 'image')}}></NexImage>
                                        
                                </div>
                                <div className="ml-4">
                                    <div className={`text-base font-medium text-white ${get(tailwindClasses, 'text1')} `} style={{...get(style, 'text1')}}>{get(item, 'text1')}</div>
                                    <div className={`text-base font-medium text-indigo-200 ${get(tailwindClasses, 'text2')}`} style={{...get(style, 'text2')}}>{get(item, 'text2')}</div>
                                </div>
                            </div>
                            </footer>
                        </blockquote>
                    </div>
                ))}
                </div>
                </section>
        );
    }
}

TestimonialsV7.propTypes = {
  style: object,
  items: arrayOf(object)
}
TestimonialsV7.defaultProps = {
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
export default withData(withLazyLoad(TestimonialsV7));