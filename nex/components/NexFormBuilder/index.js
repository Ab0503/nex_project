/**
 * Objective
 * It should take list of form fields and it should render fields - done
 * It should take api endpoint details where we need to post data - done
 * It should take url where to redirect in case of success
 * It should take form fields and perform validation base on its configuration
 * It should act as prefill form filed in case it has id in url - get api need to configure
 * It should act as update form to update data as per user need
 * It should control form orientation
 * It should render select field dynamically
 */
import get from "lodash.get";
import { Component } from "react";
import { withRouter } from "next/router";
import axios from "axios";
import { geIdFromQuery } from "@/utils/common";
import { Button } from "@nex-core-ui/tailwind/button";

class NexFormBuilder extends Component {
  constructor(props) {
    super(props);
    var formData = {};
    get(this.props, "fields", []).map((field) => {
      formData[get(field, "name", "")] = "";
    });

    this.state = {
      data: { ...formData, client_id: 1 },
    };
    this.slug = get(this.props, "router.query.slug", []);
    this.submitHandler = this.submit.bind(this);
    this.deleteHandler = this.delete.bind(this);
    this.backHandler = this.gotToBack.bind(this);
  }
  componentDidMount() {
    const id = geIdFromQuery(get(this.props, "router.query", ""));
    if (id != "") {
      this.getDetails(id);
    }
  }
  gotToBack() {
    this.props.router.back();
  }
  delete() {
    const id = geIdFromQuery(get(this.props, "router.query", ""));
    let url = get(this.props, "apiEndpoint", "") + "/" + id + "?client_id=1";
    if (id != "") {
      url = url + "/" + id;
    }
    axios({
      method: "DELETE",
      url: url,
      withCredentials: false,
      // mode: 'cors',
      data: this.state.data,
      headers: {
        // Authorization: 'Bearer ' + token
        // 'clientId': 1,
        // mode: 'cors',
      },
    }).then((response) => {
      // TODO: success or failure need to handle
      if (get(response, "data.responseCode", "") == "success") {
        alert("Data deleted successfully");
        // TODO: redirect to success page url
        this.props.router.push(get(this.props, "successPageUrl"));
      } else {
        alert("Something went wrong");
      }
    });
  }
  validate() {
    let errorMessages = "";
    get(this.props, "fields", []).map((field) => {
      // console.log(field);
      if (
        field["validation"].includes("required") &&
        this.state.data[field["name"]].length == 0
      ) {
        errorMessages += field["name"] + " is required \r\n";
      }
    });
    if (errorMessages == "") {
      return true;
    }
    alert(errorMessages);
    return false;
  }

  // need to think on this
  inputChange(e, key) {
    const data = this.state.data;
    data[key] = e.target.value;
    // console.log(data, key, e);
    this.setState({
      data: data,
    });
  }
  getDetails(id) {
    let url = get(this.props, "apiEndpoint", "") + "/" + id + "?client_id=1";
    axios({
      method: "GET",
      url: url,
      withCredentials: false,
      // mode: 'cors',
      headers: {
        // Authorization: 'Bearer ' + token
        // 'clientId': 1,
        // mode: 'cors',
      },
    }).then((response) => {
      // TODO: success or failure need to handle
      if (get(response, "data.responseCode", "") == "success") {
        const responseData = get(response, "data.data", "");
        this.setState({
          data: { ...this.state.data, ...responseData },
        });
      } else {
        alert("Something went wrong");
      }
    });
  }
  submit() {
    if (this.validate()) {
      // console.log(this.state.data);
      const id = geIdFromQuery(get(this.props, "router.query", ""));
      let method = "post";
      let url = get(this.props, "apiEndpoint", "");
      if (id != "") {
        method = "put";
        url = url + "/" + id;
      }
      axios({
        method: method,
        url: url,
        withCredentials: false,
        // mode: 'cors',
        data: this.state.data,
        headers: {
          // Authorization: 'Bearer ' + token
          // 'clientId': 1,
          // mode: 'cors',
        },
      }).then((response) => {
        // TODO: success or failure need to handle
        if (get(response, "data.responseCode", "") == "success") {
          var formData = {};
          get(this.props, "fields", []).map((field) => {
            formData[get(field, "name", "")] = "";
          });
          this.setState({
            data: { ...formData },
          });
          alert("success");

          // TODO: redirect to success page url
          this.props.router.push(get(this.props, "successPageUrl"));
        } else {
          alert("Something went wrong");
        }
      });
    }
  }

  render() {
    return (
      <div maxWidth={false}>
        <div class="grid grid-cols-4 gap-4">
          {get(this.props, "fields", []).map((field) => {
            return (
              <div className="mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    {get(field, "label")}
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        id={get(field, "label")}
                        name="username"
                        type="text"
                        placeholder={get(field, "label", "")}
                        autoComplete="username"
                        className="w-full block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        value={this.state.data[get(field, "name")]}
                        onChange={(e) =>
                          this.inputChange(e, get(field, "name", ""))
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="grid grid-cols-6 gap-2 mt-10">
          <button className="flex w-full text-white justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" onClick={this.submitHandler}>
            Submit
          </button>
          {geIdFromQuery(get(this.props, "router.query", "")) != "" && (
            <button
            className="flex w-full text-white justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" 
              color="error"
              onClick={this.deleteHandler}
            >
              Delete
            </button>
          )}

          <button onClick={this.submitHandler} className="flex w-full text-white justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer" >
            Back
          </button>
        </div>
      </div>
    );
  }
}

NexFormBuilder.propTypes = {};
NexFormBuilder.defaultProps = {
  isPreviewMode: false,
  style: "vertical",
  columns: 4,
  size: "small", //small, medium, string
  fields: [
    {
      label: "name",
      name: "name",
      type: "text", // text, num, date, static-dropdown, dynamic dropdown
      validation: "required",
    },
    {
      label: "email",
      name: "email",
      type: "text", // text, num, date, static-dropdown, dynamic dropdown
      validation: "required",
    },
    {
      label: "mobile number",
      name: "mobile_number",
      type: "text", // text, num, date, static-dropdown, dynamic dropdown
      validation: "required",
    },
    {
      label: "address",
      name: "address",
      type: "text", // text, num, date, static-dropdown, dynamic dropdown
      validation: "required",
    },
  ],
  apiEndpoint:
    "https://solutions.nexnnova.com/nex_dummy_admin_panel/admin/public/api/customer",
  successPageUrl: "/editor/development?success",
};
export default withRouter(NexFormBuilder);
