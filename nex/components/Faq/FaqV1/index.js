import { arrayOf, object, string } from 'prop-types';
import get from 'lodash.get';
import withData from "@nex-core-ui/HOC/withData";

const FaqV1 = (props) => {
    const style = get(props,'style', {});
    const tailwindClasses = get(props, 'tailwindClasses', {});
    
  return (
    <div className={`bg-white ${get(tailwindClasses, 'container')}`} style={{...get(style, 'container')}}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className={`text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl ${get(tailwindClasses, 'title')}`} style={{...get(style, 'title')}}>
                {get(props, 'title')}
            </h2>
            <p className={`mt-4 text-pretty text-base/7 text-gray-600 ${get(tailwindClasses, 'description')}`} style={{...get(style, 'description')}}>
                {get(props, 'description')}
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {get(props, 'items', []).map((faq) => (
                <div key={faq.question} className={`${get(tailwindClasses, 'sectionBox')}`} style={{...get(style, 'sectionBox')}}>
                  <dt className={`text-base/7 font-semibold text-gray-900  ${get(tailwindClasses, 'question')}`} style={{...get(style, 'question')}}>
                    {faq.question}
                  </dt>
                  <dd className={`mt-2 text-base/7 text-gray-600 ${get(tailwindClasses, 'answer')}`} style={{...get(style, 'answer')}}>
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

FaqV1.propTypes = {
    style: object,
}

FaqV1.defaultProps = {
    style: {
        container: {},
        title: {},
        description: {},
        sectionBox: {},
        question: {},
        answer: {},
        
    },
    title: "Frequently asked questions",
    description: "Can’t find the answer you’re looking for? Reach out to our customer support team.",
    items: [
        {
          question: "How do you make holy water?",
          answer:
            "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "How do you make holy water?",
            answer:
              "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "How do you make holy water?",
            answer:
              "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        }
    ]
}

export default withData(FaqV1);