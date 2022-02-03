import React from "react";
import useModalToggle from "../hooks/useModalToggle";

function DetailsModal({ selectCat, catSelected }) {
  const modalRef = useModalToggle("DetailsModal");
  const handleCloseModal = () => {
    selectCat({});
    modalRef();
  };

  return (
    <div className="hidden " id="DetailsModal">
      <div className="fixed z-50 top-0 w-full h-screen _overlar-bg">
        <div className=" px-3 lg:px-10 mx-3 md:mx-5 xl:mx-20 h-full overflow-y-auto ">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow ">
            {/* <!-- Modal header --> */}
            <div className="flex justify-between items-center p-5 rounded-t border-b bg-white sticky top-0 z-40 ">
              <h3 className="text-xl font-medium text-gray-900 ">
                {catSelected.name !== "" ? (
                  <p>{catSelected.name}</p>
                ) : (
                  <p>Random</p>
                )}
              </h3>
              <button
                onClick={handleCloseModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Modal body --> */}
            <div className="flex flex-col items-center p-6 space-y-6 overflow-y-auto">
              <img
                src={catSelected.url}
                alt={catSelected.url}
                className="rounded-lg border w-96"
              />
              {catSelected.name !== "" ? (
                <div>
                  <p className="m-0 p-0">
                    <span className="font-bold">Origin:</span>{" "}
                    {catSelected.origin}
                  </p>
                  <p className="m-0 p-0">
                    <span className="font-bold">Temperament:</span>{" "}
                    {catSelected.temperament}
                  </p>
                  <p className="m-0 p-0">
                    <span className="font-bold">Description:</span>{" "}
                    {catSelected.description}
                  </p>
                </div>
              ) : (
                <div>
                  No information available at the moment, we are working on it
                  :)
                </div>
              )}
            </div>

            {/* <!-- Modal footer --> */}
            <div className="flex items-center justify-end p-2 pr-5 space-x-2 rounded-b border-t border-gray-200 ">
              <button
                onClick={handleCloseModal}
                type="button"
                className="flex-shrink-0 bg-gray-500 hover:bg-gray-700 border-gray-500 hover:border-gray-700 text-base border-4 text-white p-1  rounded "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
