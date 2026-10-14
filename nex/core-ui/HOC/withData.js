import get from "lodash.get";
import { useEffect } from "react";
import has from "lodash.has";
import React, { useState } from "react";
import { getPropsValuesFromResponseData } from "@/utils/common";
import axios from "axios";
import { withRouter } from "next/router";
import { getQueryParamsFromUrl } from "@/utils/common";

/*
this HOC is used to centralise API call for dynamic components
 */
const withData = (InputComponent) => {
  return withRouter((props) => {
    const [items, setItems] = useState(get(props, 'items', []));
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    useEffect(() => {
      if (has(props, 'items.apiEndpoint') == true && props.items.apiEndpoint != '') {
        setLoading(true);
        const apiInfo = Object.assign({}, get(props, 'items'));
        let url = get(apiInfo, 'apiEndpoint');
        if(get(apiInfo, 'appendQueryParam', false) == true){
          const queryParam = getQueryParamsFromUrl(get(props, 'router.asPath'));
          
        }
        axios({
          method: get(apiInfo, 'method'),
          url: url,
          withCredentials: false,
          // mode: 'cors',
          data: {},
          headers: {
            // Authorization: 'Bearer ' + token
            // 'clientId': 1,
            // mode: 'cors',
          }
        })
          .then((response) => {
            // TODO: success or failure need to handle
            setItems(get(response, 'data.data'));
            setTotalRecords(get(response, 'data.totalRecords', 0));
            setLoading(false)
          });
      }
    }, ['items']);
    // todo 
    const newItemsData = has(props, 'items.apiEndpoint') ? getPropsValuesFromResponseData(props.items['Prop Mapper'], items) : items;
    // // console.log('newItemsData', newItemsData);
    if(newItemsData.length == 0){
      return <InputComponent {...props} />
    }
    return <InputComponent {...props} items={newItemsData} totalRecords={totalRecords} loading={loading}  />
  });
}

export default withData;