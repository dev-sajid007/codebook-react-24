import React from "react";
import { Link } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-10 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 mx-auto text-gray-300 dark:text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l1.68 10.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61l1.18-7H6" />
            </svg>
            <h1 className="text-2xl font-semibold mt-5 dark:text-gray-100">
              Your cart is empty
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link
              to="/products"
              className="mt-5 inline-block bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
