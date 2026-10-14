import get from "lodash.get";
import { useEffect } from "react";
import has from "lodash.has";
import React, { useState } from "react";
import { getPathNameFromUrl, getPropsValuesFromResponseData, getQueryStringFromQuery } from "@/utils/common";
import axios from "axios";
import { withRouter } from "next/router";
import { getQueryParamsFromUrl } from "@/utils/common";

/*
this HOC is used to centralise API call for dynamic components
 */
const withDataPlp = (InputComponent) => {
  return withRouter((props) => {
    console.log('withDataPlp', props);
    const [items, setItems] = useState(get(props, 'items', []));
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    useEffect(() => {
      if (has(props, 'items.apiEndpoint') == true && props.items.apiEndpoint.length != '') {
        setLoading(true);
        setItems([]);
        const apiInfo = Object.assign({}, get(props, 'items'));
        let url = get(apiInfo, 'apiEndpoint');
        // read filter and append in url

        const newQueryParam = getQueryParamsFromUrl(url);
        const apiPath = getPathNameFromUrl(url);

        let where = [];
        const filter = get(props, 'filter', {});
        console.log('filter', filter);
        for(let key in filter){
          if(filter[key].length != 0){
            where.push({
              column_name: key,
              operator: 'IN',
              value: filter[key],
            })
          }
        }
        const slug = get(props, 'router.query.all', []);
        if(slug.length > 1) {
          where.push({
            column_name: "category_id",
            operator: '=',
            value: slug[slug.length - 1],
          })
        }
        if(where.length > 0){
          console.log('where', where);
          newQueryParam['where'] = JSON.stringify(where);
        }
        newQueryParam['page'] = get(props, 'page') + 1;
        newQueryParam['limit'] = get(props, 'rowsPerPage');
        newQueryParam['order_by'] = get(props, 'orderBy');
        newQueryParam['order'] = get(props, 'order');
        
        

        const finalUrl = apiPath + "?" + getQueryStringFromQuery(newQueryParam);
        axios({
          method: get(apiInfo, 'method'),
          url: finalUrl,
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
    }, [props.filter, props.page, props.rowsPerPage, props.order, props.orderBy, props.loading]);
    // todo 
    const newItemsData = has(props, 'items.apiEndpoint') ? getPropsValuesFromResponseData(props.items['Prop Mapper'], items) : items;
    // // console.log('newItemsData', newItemsData);
    if(newItemsData.length == 0){
      return <InputComponent {...props} />
    }
    return <InputComponent {...props} items={newItemsData} totalRecords={totalRecords} loading={loading}  />
  });
}

export default withDataPlp;