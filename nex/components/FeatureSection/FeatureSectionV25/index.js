import {PropTypes,object} from 'prop-types'
import get from 'lodash.get';
import { React, useState } from 'react'
import NexImage from '@nex-core-ui/NexImage';

const FeatureSectionV25 = (props) => {
    const [donationAmount, setDonationAmount] = useState("");

    const handleAmountClick = (amount) => {
        setDonationAmount(amount);
    };

    const handleInputChange = (e) => {
        setDonationAmount(e.target.value);
    }
    const tailwindClasses = get(props, 'tailwindClasses', {});
    const style = get(props, 'style', {});
    return (
        <div className={`relative h-96 bg-cover bg-no-repeat p-10 max-sm:p-4 mb-24 max-sm:mb-40 ${get(tailwindClasses, 'container')}`} style={{ backgroundImage: `url(${get(props, "bgImage")})`, ...get(style, 'container') }}>
            <div className={`h-full flex flex-col items-center ${get(tailwindClasses, 'contentContainer')}`} style={get(style, 'contentContainer')}>
                {get(props, 'subTitle',"").length !== 0 && <h1 className={`text-gray-50 ${get(tailwindClasses, 'subTitle')}`} style={get(style, 'subTitle')}>{get(props, 'subTitle')}</h1>}
                {get(props, 'title',"").length !==0 && <h1 className={`text-gray-50 text-4xl font-bold ${get(tailwindClasses, 'title')}`} style={get(style, 'title')}>{get(props, 'title')}</h1>}
                <div className={`grid grid-cols-2 max-lg:grid-cols-1 absolute -bottom-24 max-sm:-bottom-48 max-md:-bottom-32 left-1/2 -translate-x-1/2 bg-gray-50 rounded-xl overflow-hidden w-full max-w-sm md:max-w-lg lg:max-w-2xl ${get(tailwindClasses, 'sectionBox')}`}
                    style={get(style, 'sectionBox')}>
                    <div className='p-5 flex flex-col justify-center'>
                        {get(props, 'sectionTitle',"").length !==0 && <h1 className={`font-bold text-lg m-2 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'sectionTitle')}</h1>}
                        {get(props,'sectionInputTitle',"").length !==0 && <h1 className={`text-md font-bold m-2 ${get(tailwindClasses, 'sectionInputTitle')}`} style={get(style, 'sectionInputTitle')}>{get(props,'sectionInputTitle')}</h1>}
                        {get(props,'sectionInputText').length !==0 && <input className={`rounded-full text-base px-3 py-1 bg-gray-300 m-2 ${get(tailwindClasses, 'sectionInput')}`} style={get(style, 'sectionInput')} type="text" value={donationAmount} onChange={handleInputChange} placeholder={get(props,'sectionInputText')} />}
                        <div className='flex flex-wrap list-none gap-2 m-2'>
                            {get(props,'sectionInputItem',[]).length !==0 &&
                            (get(props,'sectionInputItem',[]).map((amount,index) => <li key={index} className={`text-xs border rounded-full px-3 py-1 hover:bg-green-800 hover:text-gray-50 cursor-pointer ${get(tailwindClasses,'sectionAmountCta')}`} style={get(style,'sectionAmountCta')} onClick={() => handleAmountClick(get(amount,'amount'))}>{get(amount,'amount')}</li>))
                            }
                        </div>
                        {get(props, 'sectionText',"").length !==0 && <h1 className={`text-md font-bold m-2 ${get(tailwindClasses, 'sectionText')}`} style={get(style, 'sectionText')}>{get(props, 'sectionText')}</h1>}
                        <fieldset>
                            <div className="flex gap-2 m-2">
                                {get(props,'items',[]).map((item) => (
                                    get(item,'title').length !==0 && <div key={item.id} className="flex items-center">
                                        <input
                                            defaultChecked={item.id === "offline"}
                                            name="notification-method"
                                            type="radio"
                                            className={`relative size-4 appearance-none rounded-full border border-gray-300 bg-gray-50 
                                                before:absolute before:inset-1 before:rounded-full before:bg-gray-50 
                                                checked:border-green-950 checked:bg-green-950 
                                                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-950 
                                                disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 
                                                forced-colors:appearance-auto forced-colors:before:hidden 
                                                [&:not(:checked)]:before:hidden ${get(tailwindClasses, 'radioCta')}`} 
                                            style={get(style, "radioCta")}
                                            
                                        />
                                        <label htmlFor={item.id} className={`ml-3 block text-xs font-light text-gray-900 ${get(tailwindClasses,'radioCtaText')}`} style={get(style,'radioCtaText')}>
                                            {get(item,'title')}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                        {get(props,'ctaText',"").length !==0 && <button className={`bg-emerald-800 hover:bg-emerald-950 text-gray-50 text-xs px-6 py-2 rounded-full m-2 ${get(tailwindClasses,'cta')}`} style={get(style,'cta')}><a href={get(props,'ctaLink')}>{get(props,'ctaText')}</a></button>}
                    </div>
                    {get(props, 'sectionImage',"") !==0 && <div className='max-lg:hidden'>
                        <NexImage className={`!relative ${get(tailwindClasses,'sectionImage')}`} style={get(style,'sectionImage')} src={get(props, 'sectionImage')} alt='' />
                    </div>}
                </div>
            </div>
        </div>
    )
}

FeatureSectionV25.defaultProps = {
    style:{
        container:{},
        contentContainer:{},
        subTitle:{},
        title:{},
        sectionBox:{},
        sectionTitle:{},
        sectionInputTitle:{},
        sectionInput:{},
        sectionAmountCta:{},
        sectionText:{},
        radioCta:{},
        radioCtaText:{},
        cta:{}
    },
    tailwindClasses:{
        container:"",
        contentContainer:"",
        subTitle:"",
        title:"",
        sectionBox:"",
        sectionTitle:"",
        sectionInputTitle:"",
        sectionInput:"",
        sectionAmountCta:"",
        sectionText:"",
        radioCta:"",
        radioCtaText:"",
        cta:""
    },
    subTitle: "Start Donating Poor People",
    title: "Join The Community To Give Education For Children",
    bgImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735310167.1260x750.png",
    sectionTitle: "For Poor Its Important So Support",
    sectionInputTitle: "Your Donation:",
    sectionInputText:"Enter Amount",
    sectionInputItem: [{amount:"$20"}, {amount:"$30"}, {amount:"$50"}, {amount:"$100"}],
    sectionText: "Select Payment Method",
    sectionImage: "https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1735297501.300x300 - thumbnail.png",
    ctaLink:"#",
    ctaText:"Donate Now",
    items: [
        { id: 'offline', title: 'Offline Donation' },
        { id: 'card', title: 'Credit Card' },
    ]
}
FeatureSectionV25.propTypes = {
    style: PropTypes.object,
    tailwindClasses: PropTypes.object,
    subTitle: PropTypes.string,
    title: PropTypes.string,
    bgImage: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionInputTitle: PropTypes.string,
    sectionInputItem: PropTypes.array,
    sectionText: PropTypes.string,
    sectionImage: PropTypes.string,
    ctaLink:PropTypes.string,
    ctaText:PropTypes.string,
    items: PropTypes.arrayOf(object)
}
export default FeatureSectionV25
