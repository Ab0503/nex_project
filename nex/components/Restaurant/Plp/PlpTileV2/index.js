import HttpService from "@/utils/HttpService";
import withData from "@nex-core-ui/HOC/withData";
import NexImage from "@nex-core-ui/NexImage";
import PrimaryLink from "@nex-core-ui/PrimaryLink";
import get from "lodash.get";
import { number, object, string } from "prop-types";
import toast, { Toaster } from 'react-hot-toast';
import React from "react";

const PlpTileV2 = (props) => {
    const tailwindClasses = get(props, "tailwindClasses", {});
    const style = get(props, "style", {});

    const AddToCart = () => {
        const http = new HttpService();
        const product = {
            id: get(props, "id"),
            name: get(props, "name"),
            price: get(props, "price"),
            image: get(props, "image"),
            quantity: 1,
        };
    
        const customer_id = sessionStorage.getItem("customer_id");
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    
        const existingProduct = cart.find((item) => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }

        sessionStorage.setItem("cart", JSON.stringify(cart));

        if (customer_id){

            const payload={
                customer_id,
                cart
            };

            http.post(get(props,'apiEndpoint',''),payload,{})
                .then(response=>{
                    if(response.status===200 && response.data.responseCode ==="success"){
                        toast.success("cart updated successfully",{position:"top-right"})
                    }else{
                        toast.error("failed to update the cart",{position:"top-right"})
                    }
                })
                .catch(error=>{
                    console.error(error);
                })
        }else{
            toast.success("product added to the cart!",{position: 'top-right',});
        }
        };

// console.log(payload)
    return (
        <div key={get(props, 'id')} className={`relative group rounded overflow-hidden mb-5 ${get(tailwindClasses, 'sectionBox')}`} style={get(style, 'sectionBox')}>
            <Toaster toastOptions={{
                    // success: {
                    //   style: {
                    //     background: 'green',
                    //   },
                    // },
                    // error: {
                    //   style: {
                    //     background: 'red',
                    //   },
                    // },
                  }} 
                  containerStyle={{
                    top: 20,
                    
                    right: 20,
                  }}
                  />
            {get(props, 'image', '').length !== 0 && <PrimaryLink href={`${get(props, 'link')}/${get(props, 'name')}/${get(props, 'id')}`}><NexImage src={get(props, 'image')} className={`!relative !h-auto rounded mb-2 ${get(tailwindClasses, 'sectionImage')}`} style={get(style, 'sectionImage')} /></PrimaryLink>}
            <div className='text-center'>
                {get(props, 'name', '').length !== 0 && <PrimaryLink href={`${get(props, 'link')}/${get(props, 'name')}/${get(props, 'id')}`}><h1 className={`text-lg font-semibold mb-3 ${get(tailwindClasses, 'sectionTitle')}`} style={get(style, 'sectionTitle')}>{get(props, 'name')}</h1></PrimaryLink>}
                {get(props, 'description', '').length !== 0 && <p className={`text-sm border-b pb-2 mb-4 ${get(tailwindClasses, 'sectionDescription')}`} style={get(style, 'sectionDescription')}>{get(props, 'description')}</p>}
                {get(props, 'price', '').length !== 0 && <span className={`font-bold nx-text-primary ${get(tailwindClasses, 'sectionPrice')}`} style={get(style, 'sectionPrice')}>{get(props, 'price')}</span>}
                <div className="absolute bg-white bottom-0 left-0 w-full flex justify-center propss-center gap-2 py-2 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <button onClick={AddToCart}
                        className={`uppercase font-semibold nx-text-primary rounded flex items-center gap-2 ${get(
                            tailwindClasses,
                            "cta"
                        )}`}
                        style={get(style, "cta")}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}

PlpTileV2.propTypes = {
    style: object,
    tailwindClasses: object,
    image: string,
    name: string,
    description: string,
    price: number
}

PlpTileV2.defaultProps={
    apiEndpoint:"",
}
export default withData(PlpTileV2)