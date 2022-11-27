import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div className="h-[calc(100vh-105px)] grid grid-col-1 place-items-center">
      <div className="flex flex-col sm:flex-row gap-x-6 px-4 sm:px-0 md:-mt-28">
        <h2 className="text-4xl xs:text-5xl text-cyan-400 font-medium leading-none">404</h2>
        <div>
          <div className="sm:border-l border-gray-200 sm:pl-6">
            <h2 className="text-4xl xs:text-5xl font-bold leading-none mb-2">
              Page not Found
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-prose">
              Sorry, we couldn't find the page you're looking for.
            </p>
          </div>
          <div className="mt-10 flex gap-x-3 items-center sm:pl-6">
            <button
              className="outline-none text-center rounded-lg border border-transparent bg-cyan-400 px-2 py-2 2xs:px-4 text-xs 2xs:text-sm font-medium text-white shadow-sm hover:bg-cyan-500"
              onClick={() => navigate("/")}
            >
              Go to Home Page
            </button>
            <button
              className="outline-none text-center box-border rounded-lg border border-cyan-400 px-2 py-2 2xs:px-4 text-xs 2xs:text-sm font-medium text-cyan-400 shadow-sm hover:bg-cyan-100 hover:text-cyan-900 hover:border-none hover:shadow"
              onClick={() => navigate(-1)}
            >
              Back to Prev. Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
