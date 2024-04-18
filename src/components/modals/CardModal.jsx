const CardModal = ({ isModalOpen, closeModal }) => {
  return (
    <dialog
      open={isModalOpen}
      className="modal modal-middle sm:modal-middle z-10"
    >
      <div className="modal-box bg-white">
        <form method="dialog">
          <button
            onClick={closeModal}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
        </form>
        {/* Modal Content */}
        <div></div>
      </div>
    </dialog>
  );
};

export default CardModal;
