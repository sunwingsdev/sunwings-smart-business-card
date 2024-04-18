import { FaEye, FaRegTrashAlt } from "react-icons/fa";

const UserInquiry = () => {
  return (
    <div className="h-screen mt-10">
      <div className="flex flex-col gap-4">
        <h1 className="text_db_36 mb-1">User Inquiries</h1>
        <div className="w-[99%] md:w-full overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Vismo Dev</td>
                <td>vismo@gmail.com</td>
                <td>13/02/2024</td>
                <td>10.20 AM</td>
                <td>
                  <span className="flex items-center gap-3">
                    <button
                      className="bg-gray-400 p-1 hover:bg-white border border-solid border-gray-400 size-8 flex items-center justify-center transition-all ease-in-out duration-300"
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className=" p-1 hover:bg-gray-400 border border-solid border-gray-400 size-8 flex items-center justify-center transition-all ease-in-out duration-300"
                      title="Delete"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Vismo Dev</td>
                <td>vismo@gmail.com</td>
                <td>13/02/2024</td>
                <td>10.20 AM</td>
                <td>
                  <span className="flex items-center gap-3">
                    <button
                      className="bg-gray-400 p-1 hover:bg-white border border-solid border-gray-400 size-8 flex items-center justify-center transition-all ease-in-out duration-300"
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className=" p-1 hover:bg-gray-400 border border-solid border-gray-400 size-8 flex items-center justify-center transition-all ease-in-out duration-300"
                      title="Delete"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </span>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Vismo Dev</td>
                <td>vismo@gmail.com</td>
                <td>13/02/2024</td>
                <td>10.20 AM</td>
                <td>
                  <span className="flex items-center gap-3">
                    <button
                      className="bg-gray-400 p-1 hover:bg-white border border-solid border-gray-400 size-8 flex items-center justify-center transition-all ease-in-out duration-300"
                      title="View"
                    >
                      <FaEye />
                    </button>
                    <button
                      className=" p-1 hover:bg-gray-400 border border-solid border-gray-400 size-8 flex items-center justify-center transition-all ease-in-out duration-300"
                      title="Delete"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInquiry;
