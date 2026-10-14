import get from "lodash.get";
import { useEffect } from "react";
import has from "lodash.has";
import React, { useState } from "react";
import {
  getPathNameFromUrl,
  getPropsValuesFromResponseData,
  getPropsValuesFromResponseDataForPdp,
  getQueryStringFromQuery,
} from "@/utils/common";
import axios from "axios";
import { withRouter } from "next/router";
import { getQueryParamsFromUrl } from "@/utils/common";

/*
this HOC is used to centralise API call for dynamic components
 */
const withDataPdp = (InputComponent) => {
  return withRouter((props) => {
    console.log("withDataPdp", props);
    const [responseData, setResponseData] = useState(get(props, "items", []));
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    useEffect(() => {
      if (
        has(props, "detail.apiEndpoint") == true &&
        get(props, "detail.apiEndpoint", "").length != ""
      ) {
        // setLoading(true);
        // setResponseData({});
        const apiInfo = Object.assign({}, get(props, "detail"));
        let url = get(apiInfo, "apiEndpoint");
        // read filter and append in url

        const newQueryParam = getQueryParamsFromUrl(url);
        const apiPath = getPathNameFromUrl(url);

        // let where = [];
        // const filter = get(props, 'filter', {});
        // console.log('filter', filter);
        // for(let key in filter){
        //   if(filter[key].length != 0){
        //     where.push({
        //       column_name: key,
        //       operator: 'IN',
        //       value: filter[key],
        //     })
        //   }
        // }
        // const slug = get(props, 'router.query.all', []);
        // if(slug.length > 1) {
        //   where.push({
        //     column_name: "category_id",
        //     operator: '=',
        //     value: slug[slug.length - 1],
        //   })
        // }

        let productId = 1;
        // to do 
        // const slug = get(props, "router.query.all", []);  
        const slug = get(props, "router.query.slug", []);  
        if (slug.length > 1) {
          productId = slug[slug.length - 1];
        }

        console.log("slug value",slug)
        const finalUrl = apiPath + "/" + productId + "?" + getQueryStringFromQuery(newQueryParam);
        axios({
          method: get(apiInfo, "method"),
          url: finalUrl,
          withCredentials: false,
          // mode: 'cors',
          data: {},
          headers: {
            // Authorization: 'Bearer ' + token
            // 'clientId': 1,
            // mode: 'cors',
          },
        }).then((response) => {
          // TODO: success or failure need to handle
          setResponseData(get(response, "data.data"));
          setLoading(false);
        });
      }
    }, [props.detail]);
    // todo
    const newProps =
      has(props, "detail.apiEndpoint") &&
      get(props, "detail.apiEndpoint", "").length != 0
        ? getPropsValuesFromResponseDataForPdp(props, responseData)
        : props;
    // // console.log('newItemsData', newItemsData);
    return <InputComponent {...newProps} totalRecords={0} loading={loading} />;
  });
};

export default withDataPdp;
