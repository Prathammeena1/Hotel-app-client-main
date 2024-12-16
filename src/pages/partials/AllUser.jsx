import React from 'react'

const AllUser = () => {
  return (
    <main className="flex-1 px-6 ">

        {/* Last Tasks */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Users</h2>
          <table className=" w-full text-left">
            <thead>
              <tr className="text-xl">
                <th >Username</th>
                <th>Email</th>
                <th>Member Since</th>
                <th>Number of Properties</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>someusername</td>
                <td>email@email.com</td>
                <td>18 Nov 2020</td>
                <td>
                  6
                </td>
                <td> <button className="w-full text-center bg-[#b17f44] text-white rounded-md py-2 mb-2 text-sm" type="submit">Remove</button></td>
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
  )
}

export default AllUser