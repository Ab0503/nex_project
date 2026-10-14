import * as React from 'react';
import has from "lodash.has";
import { arrayOf, bool, number, string } from 'prop-types';
import get from 'lodash.get';
import { VARIANTS } from './constants';
import axios from "axios";
import { getPropsValuesFromResponseData, getDetailPageLink } from '@/utils/common';
import { withRouter } from 'next/router';
import NexTablePagination from './NexTablePagination';

class NexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      items: [],
      data: [],
      page: 0,
      rowsPerPage: 50,
      totalRecords: 0,
    }
    this.onPageChange = this.onPageChange.bind(this);
    this.onRowsPerPageChange1 = this.onRowsPerPageChange.bind(this);
  }
  componentDidMount() {
    this.fetchData(0, 10);
  }
  onPageChange(e, page) {
    // console.log(page);
    this.fetchData(page, this.state.rowsPerPage);
  }
  onRowsPerPageChange(e) {
    // console.log(e.target.value);
    let rowsPerPage = get(e, 'target.value', 10);
    this.fetchData(0, rowsPerPage);
  }
  fetchData(page, rowsPerPage) {
    if (has(this.props, 'items.apiEndpoint') == true && this.props.items.apiEndpoint.length != '') {
      const apiInfo = Object.assign({}, get(this.props, 'items'));
      const urlInfo = get(apiInfo, 'apiEndpoint');
      var url = get(apiInfo, 'apiEndpoint');
      var urlArray = url.split('?');
      if (urlArray.length == 2) {
        const updatedSearchParams = new URLSearchParams(urlArray[1])
        updatedSearchParams.set("page", page + 1);
        updatedSearchParams.set("limit", rowsPerPage);
        var apiEndpointDyanamicQueryParam = get(apiInfo, 'apiEndpointDyanamicQueryParam');
        for (const dynamicQueryParam in apiEndpointDyanamicQueryParam) {
          updatedSearchParams.set(dynamicQueryParam, get(this.props.router.query, apiEndpointDyanamicQueryParam[dynamicQueryParam]));
        }
        
        url = urlArray[0] + "?" + updatedSearchParams.toString();
      }
      this.setState({
        loading: true,
      });
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
          if(get(response, 'data.responseCode', '') == "success"){
            this.setState({
              loading: false,
              items: getPropsValuesFromResponseData(this.props.items['Prop Mapper'], get(response, 'data.data')),
              data: get(response, 'data.data'),
              totalRecords: get(response, 'data.totalRecords', 0),
              rowsPerPage: rowsPerPage,
              page: page
            });
          }else{
            alert("Something went wrong");
          }
        });
    }
    
  }
  onRowClick(index){
    let url = getDetailPageLink(get(this.props, 'link', ''), get(this.props, 'linkMapper', ''), this.state.data[index]);
    this.props.router.push(url);
  }
  render() {
    return (
      <div className="">
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  {
                    get(this.props, 'headerData', []).map((data, index) => {
                      return (
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">
                          {get(data, 'column' + (index + 1), '')}
                        </th>
                      )
                    })
                  }
                  
                </thead>
                <tbody className="bg-white">
                  {get(this.state, 'items', []).map((row, index) => {
                    return (
                      <tr key={'table' + index} className="even:bg-gray-50 cursor-pointer"  onClick={() => this.onRowClick(index)}>
                        {
                          get(this.props, 'headerData', []).map((data, index) => {
                            return (
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{get(row, 'column' + (index + 1), '')}</td>
                            )
                          })
                        }
                      </tr>
                    )
                    })}
                    
                </tbody>
              </table>
              {
                get(this.state, 'items').length != 0 && <NexTablePagination page={this.state.page} rowsPerPage={this.state.rowsPerPage} totalRecords={this.state.totalRecords} fetchData={this.fetchData.bind(this)}  />
              }
              
              {
                get(this.state, 'items').length == 0 && <div className='text-center'>Data not found</div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

NexTable.propTypes = {
  variant: string,
  borderColor: string,
  borderStyle: string,
  borderSize: string,
  isColumnColored: bool,
  tableHeaderBackground: string,
  rowEvenBackground: string,
  rowOddBackground: string,
  hoverBackground: string,
  link: string,
  headerData: arrayOf(Object),
  items: arrayOf(Object),
  totalRecords: number,
  rowsPerPage: number,
  page: number,
  level1: string, // this param value will use to extract name and id information from data and append in detail page url
  level2: string,
  level3: string,
  level4: string,
  id: string,
}
NexTable.defaultProps = {
  variant: VARIANTS.VARIANT_5,
  borderColor: '#E0E0E0',
  borderStyle: 'solid',
  borderSize: '1px',
  isColumnColored: false,
  tableHeaderBackground: 'white',
  rowOddBackground: 'whitesmoke',
  rowEvenBackground: 'white',
  hoverBackground: 'whitesmoke',
  link: '#',
  headerData: [{ column1: 'Desert', align: 'left' }, { column2: 'Calories', align: 'right' }, { column3: 'size', align: 'right' }],
  items: [
    {
      column1: 'Desert1',
      column2: '1 kg',
      column3: 'sdfds'
    },
    {
      column1: 'Desert2',
      column2: '1 kg',
      column3: 'sdfds'
    }
  ],
  totalRecords: 50,
  rowsPerPage: 10,
  page: 1
}

export default withRouter(NexTable);