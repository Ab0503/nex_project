import NexImage from "@nex-core-ui/NexImage";
import React from 'react'
import get from 'lodash.get'
import { object } from 'prop-types'
import PrimaryLink from "@nex-core-ui/PrimaryLink";

const ProfilePageV1 = (props) => {
  const style = get(props, 'style', {});
  const tailwindClasses = get(props, 'tailwindClasses', {});

  return (
    <div className="flex bg-gray-500 min-h-screen text-gray-800">
      <div className="w-1/4 bg-gray-50 p-4 shadow-md max-sm:hidden">
        <div className="inline-flex gap-2">
          <NexImage src="https://nexnnova.blr1.cdn.digitaloceanspaces.com/website-builder/dev/web/1/1/img/1739012097.335883005_760052852111117_3928786781642287647_n (2).jpg" className="!relative !w-10"/>
          <h2 className="text-xl font-semibold mb-4">Hello</h2>
        </div>
        <nav>
          <ul>
            <li> <PrimaryLink href="#" className="font-bold text-blue-600">Profile Information </PrimaryLink></li>
            <li> <PrimaryLink href="#" className="text-gray-800">Manage Addresses </PrimaryLink></li>
            <li> <PrimaryLink href="#" className="text-gray-800">PAN Card Information </PrimaryLink></li>
          </ul>
        </nav>
        <h3 className="mt-4 font-semibold">Payments</h3>
        <p>Gift Cards ₹0</p>
        <h3 className="mt-4 font-semibold">My Stuff</h3>
        <p>My Coupons</p>
        <p>My Reviews & Ratings</p>
        <p>All Notifications</p>
        <p>My Wishlist</p>
        <button className="mt-4 text-red-600">Logout</button>
      </div>

      <div className="flex-1 bg-gray-50 p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block font-semibold">Personal Information</label>
            <input type="text" className="w-full border p-2 rounded mt-1" placeholder="Enter Name" />
          </div>
          <div>
            <label className="block font-semibold">Email Address</label>
            <input type="email" className="w-full border p-2 rounded mt-1" placeholder="Enter Email" />
          </div>
          <div>
            <label className="block font-semibold">Mobile Number</label>
            <input type="tel" className="w-full border p-2 rounded mt-1" />
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-6">FAQs</h3>
        <div className="text-sm text-gray-600 mt-2">
          <p><strong>What happens when I update my email address (or mobile number)?</strong></p>
          <p>Your login email ID (or mobile number) changes, and all account-related communication will be sent to the updated email or mobile.</p>

          <p className="mt-2"><strong>When will my Flipkart account be updated?</strong></p>
          <p>As soon as you confirm the verification code sent to your email or mobile.</p>
        </div>

        <div className="mt-6">
          <button className="text-blue-600">Deactivate Account</button>
          <button className="ml-4 text-red-600">Delete Account</button>
        </div>
      </div>
    </div>
  )
}
ProfilePageV1.propTypes = {
    style: object,
    tailwindClasses: object
}
ProfilePageV1.defaultProps = {
    style: {
        container: {}
    },
    tailwindClasses: {
        container: ""
    }
    }
export default ProfilePageV1;