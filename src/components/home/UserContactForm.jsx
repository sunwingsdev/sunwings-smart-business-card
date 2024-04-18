const UserContactForm = () => {
  return (
    <div className="my-6 mx-auto max-w-xl bg-white font-[sans-serif] mt-10">
      <h1 className="text-3xl text-[#ff7a00] font-extrabold text-center">
        যেকোনো প্রয়োজনে, যেকোনো সময় যোগাযোগ করতে পারেন
      </h1>
      <form className="mt-8 space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-blue-500"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 outline-blue-500"
        ></textarea>
        <button
          type="button"
          className="text-white bg-blue-500 hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default UserContactForm;
