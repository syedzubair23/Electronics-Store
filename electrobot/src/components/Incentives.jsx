import React from "react";

function Incentives() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-8 py-32">
        <div className="col-start-1 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          <div className="group flex flex-col items-center gap-y-4">
            <div>
              <span className="sr-only">
                Person running to deliver shipping items
              </span>
              <img className="w-auto" src="images/Free_Shipping.svg" alt="" />
            </div>
            <h3 className="text-center font-semibold text-sm text-gray-900">Free Shipping</h3>
            <p className="text-center text-sm text-gray-500 max-w-prose">It's actually free delivery when your order is above $100.
              So, don't forget to save some extra bucks.
            </p>
          </div>
          <div className="group flex flex-col items-center gap-y-4">
            <div>
              <span className="sr-only">
                Person running to deliver shipping items
              </span>
              <img className="w-auto" src="images/Customer_Support.svg" alt="" />
            </div>
            <h3 className="text-center font-semibold text-sm text-gray-900">24/7 Customer Support</h3>
            <p className="text-center text-sm text-gray-500 max-w-prose">We provide 24/7 customer support as we care about our customer's
             time and money. Our staff is always on the toes to help out the customers.
            </p>
          </div>
          <div className="group flex flex-col items-center gap-y-4">
            <div>
              <span className="sr-only">
                Person running to deliver shipping items
              </span>
              <img className="w-auto" src="images/Gift.svg" alt="" />
            </div>
            <h3 className="text-center font-semibold text-sm text-gray-900">Gift Items</h3>
            <p className="text-center text-sm text-gray-500 max-w-prose">You can send items to your friends or family members who 
            have hobbies related to electronics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Incentives;
