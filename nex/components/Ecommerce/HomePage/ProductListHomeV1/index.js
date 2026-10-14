import { useState, React } from "react";
import get from "lodash.get";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import PdpPreviewV1 from "@nex-components/Ecommerce/Pdp/PdpPreviewV1";
import { arrayOf, number, object, string } from "prop-types";
import withData from "@nex-core-ui/HOC/withData";
import PlpTileV1 from "../../Plp/PlpTileV1";


const ProductListHomeV1 = (props) => {
  const [activeIndex, setActiveIndex]= useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const tailwindClasses = get(props, "tailwindClasses", {});
  const style = get(props, "style", {});

  const openQuickViewModal = (productId,index) => {
    setActiveIndex(index)
    setIsOpen(true);
  }
  return (
    <div className={`flex flex-col md:flex-row px-4 py-8 ${get(tailwindClasses, 'container')}`} style={get(style, 'container')}>
      <aside className="relative w-full md:w-1/4 p-4 rounded-md border">
        <PrimaryLink href={get(props, 'categoryLink')}>
          <h2 className={`nx-section-heading-font absolute top-0 left-0 w-full text-xl font-semibold uppercase nx-bg-primary text-white p-3 ${get(tailwindClasses, 'categoryName')}`} style={get(style, 'categoryName')}>{get(props, 'categoryName')}</h2>
        </PrimaryLink>
        <ul className="mt-10">
          {get(props, 'subCategories', []).map((sub, index) => (
            get(sub, 'text').length !== 0 && <PrimaryLink href={get(sub, 'link')}>
              <li key={index} className={`my-2 nx-text-hover-primary hover:underline ${get(tailwindClasses, 'subCategory')}`} style={get(style, 'subCategory')}>
                {get(sub, 'text')}
              </li>
            </PrimaryLink>
          ))}
        </ul>
        {get(props, 'allText', "").length !== 0 && <p className={`my-2 nx-text-hover-primary hover:underline ${get(tailwindClasses, 'allText')}`} style={get(style, 'allText')}><PrimaryLink href={get(props, 'allLink')}>{get(props, 'allText')}</PrimaryLink></p>}
      </aside>
      <section className={`w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${get(props, 'sectionKeyNo')}`}>
        {Array.isArray(get(props, 'items', [])) && get(props, 'items', []).map((item,index) => (
            <PlpTileV1 {...item} link={get(props,'link')} openQuickViewModal={()=>openQuickViewModal(item.id,index)}/>
        ))}
        
      </section>
      {isOpen && (
        <PdpPreviewV1 {...props.items[activeIndex]} isOpen={true} setIsOpen={setIsOpen} onClose={()=>setIsOpen(false)} />
      )
      }
    </div>
  );
};

ProductListHomeV1.propTypes = {
  style: object,
  tailwindClasses: object,
  sectionKeyNo: number,
  categoryLink: string,
  categoryName: string,
  ctaText: string,
  allLink: string,
  allText: string,
  closedIcon: string,
  subCategories: arrayOf(object),
  items: arrayOf(object)
}

ProductListHomeV1.defaultProps = {
  style: {
    container: {},
    categoryName: {},
    subCategory: {},
    allText: {},
    sectionBox: {},
    image: {},
    previewIcon: {},
    badgeText: {},
    productName: {},
    priceText: {},
    oldPrice: {},
    cta: {},
    wishlistIcon: {},
    dialogBox: {},
    closedIcon: {}
  },
  tailwindClasses: {
    container: "",
    categoryName: "",
    subCategory: "",
    allText: "",
    sectionBox: "",
    image: "",
    previewIcon: "",
    badgeText: "",
    productName: "",
    priceText: "",
    oldPrice: "",
    cta: "",
    wishlistIcon: "",
    dialogBox: "",
    closedIcon: ""
  },
  sectionKeyNo: 5,
  categoryLink: "#",
  categoryName: "category",
  allLink: "#",
  allText: "View All",
  link:"product",
  subCategories: [
    {
      link: "#",
      text: "Clothing"
    },
    {
      link: "#",
      text: "Clothing"
    },
    {
      link: "#",
      text: "Clothing"
    },
    {
      link: "#",
      text: "Clothing"
    },
    {
      link: "#",
      text: "Clothing"
    },
    {
      link: "#",
      text: "Clothing"
    }
  ],
  items: [
    {
      id: 1,
      name: "Xerat fulicom lan",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$129.00",
      oldPrice: "$150.00",
      discount: "12%",
      rating: 4,
    },
    {
      id: 2,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 3,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 4,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 5,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
    {
      id: 6,
      name: "Nami alan shankle temp...",
      image: "https://images.pexels.com/photos/27467366/pexels-photo-27467366/free-photo-of-leather-wallet-design.jpeg?auto=compress&cs=tinysrgb&w=600",
      price: "$400.00",
      oldPrice: "$456.00",
      discount: "12%",
      rating: 5,
    },
  ]
}
export default withData(ProductListHomeV1);
