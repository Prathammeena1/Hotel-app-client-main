import React from "react";

const Allproperties = () => {
  return (
    <main className="flex-1 px-6 ">
      {/* Last Tasks */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Properties</h2>
        <table className=" w-full text-left">
          <thead>
            <tr className="text-xl">
              <th>Title</th>
              <th>Price</th>
              <th>Existing Since</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td>sometitle</td>
              <td>$99.00</td>
              <td>18 Nov 2020</td>
              <td>bhopal MP India</td>
              <td className="flex gap-4">
                {" "}
                <button
                  className="w-full text-center border border-[#b17f44] text-[#b17f44] rounded-md py-2 mb-2 text-sm"
                  type="submit"
                >
                  View
                </button>
                <button
                  className="w-full text-center bg-[#b17f44] text-white rounded-md py-2 mb-2 text-sm"
                  type="submit"
                >
                  Remove
                </button>
              </td>
            </tr>
            {/* Add other rows here */}
          </tbody>
        </table>
      </section>

      {/* Productivity and Projects */}
      <section className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Productivity</h2>
          <div>
            {/* Placeholder for chart */}
            <div className="h-32 bg-gray-200 flex items-center justify-center">
              Chart Placeholder
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Projects in Progress</h2>
          <ul>
            <li className="mb-2">
              <p className="text-sm text-gray-600">Improve card readability</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>12 comments</span>
                <span className="ml-4">7 files</span>
              </div>
            </li>
            {/* Add other projects */}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Allproperties;
