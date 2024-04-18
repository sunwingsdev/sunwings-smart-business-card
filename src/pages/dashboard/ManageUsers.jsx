import { useState } from "react";
import {
  useGetUsersQuery,
  useUpdateUserRoleMutation,
} from "../../redux/features/allApis/usersApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ManageUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [checkedRows, setCheckedRows] = useState({});
  const { data: allUsers, isLoading } = useGetUsersQuery();
  const [updateRole] = useUpdateUserRoleMutation();

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;

  // Filtered users based on search term
  const filteredUsers = allUsers?.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Slice the filtered users based on pagination
  const currentEntries = filteredUsers?.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  // Calculate total number of pages for filtered users
  const totalEntries = filteredUsers?.length || 0;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  // Generate an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEntriesPerPageChange = (e) => {
    const newEntriesPerPage = parseInt(e.target.value);
    setEntriesPerPage(newEntriesPerPage);
    setCurrentPage(1);
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCheck = (index) => {
    setCheckedRows((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the checked state for the clicked row
    }));
  };

  const handleUserRole = async (uid, newRole) => {
    try {
      const result = await updateRole({ uid: uid, data: { role: newRole } });

      if (result.data) {
        toast.success("User role updated successfully.");
      } else {
        toast.error("Failed to update user role.");
      }
    } catch (error) {
      toast.error(`Error updating user role: ${error.message}`);
    }
  };

  return (
    <div className="h-screen my-10">
      <h1 className="text_db_36 mb-3">Manage Users</h1>
      {/* users table */}
      <div>
        <div className="relative overflow-x-auto">
          <nav className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2 md:gap-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Entries per page:
              </span>
              <select
                value={entriesPerPage}
                onChange={handleEntriesPerPageChange}
                className="block px-3 py-1.5 border border-solid border-gray-500 dark:border-gray-700 rounded-md focus:outline-none"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black pl-10 bg-white outline-none"
                placeholder="Search users by name"
                value={searchTerm}
                onChange={handleSearchTermChange}
              />
            </div>
          </nav>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="p-4">
                  <div className="flex items-center">
                    <input
                      id="checkbox-all-search"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label htmlFor="checkbox-all-search" className="sr-only">
                      checkbox
                    </label>
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Designation
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Manage Role
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <th colSpan="7" className="p-4 text-center text-black">
                    Loading User Data...
                  </th>
                </tr>
              ) : (
                <>
                  {currentEntries?.map((entry, i) => (
                    <tr
                      key={i}
                      className={`border-b dark:border-gray-700 ${
                        checkedRows[i] ? "bg-blue-300" : "bg-white"
                      }`}
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id={`checkbox-table-search-${i}`}
                            type="checkbox"
                            onClick={() => handleCheck(i)}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-3"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black"
                      >
                        {entry?.name ? entry?.name : "Not Set Yet"}
                      </th>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        {entry?.designation
                          ? entry?.designation
                          : "Not Set Yet"}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        {entry?.email ? entry?.email : "Not Set Yet"}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        {entry?.phone ? entry?.phone : "Not Set Yet"}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                            entry?.role === "admin"
                              ? "bg-red-500 text-white"
                              : entry?.role === "user"
                              ? "bg-green-500 text-white"
                              : "bg-yellow-500 text-black"
                          }`}
                        >
                          {entry?.role ? entry?.role : "Not Set Yet"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <select
                          className=" w-full px-3 py-1.5 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none text-black"
                          defaultValue={entry?.role}
                          onChange={(e) =>
                            handleUserRole(entry?._id, e.target.value)
                          }
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
          <nav
            className="flex items-center flex-row flex-wrap justify-between pt-4 px-3"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400 block w-full md:inline md:w-auto">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-black">
                {indexOfFirstEntry + 1}-
                {Math.min(indexOfLastEntry, allUsers?.length)}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-gray-900 dark:text-black">
                {allUsers?.length}
              </span>
            </span>
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li>
                <button
                  className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={() => {
                    if (currentPage > 1) {
                      paginate(currentPage - 1);
                    }
                  }}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {/* Pagination links */}
              {pageNumbers?.map((number) => (
                <li key={number}>
                  <a
                    href="#"
                    className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === number
                        ? "text-blue-600 border-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                        : ""
                    }`}
                    onClick={() => paginate(number)}
                  >
                    {number}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                    currentPage === totalPages
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  onClick={() => {
                    if (currentPage < totalPages) {
                      paginate(currentPage + 1);
                    }
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
