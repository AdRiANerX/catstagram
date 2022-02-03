/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import useModalToggle from "../hooks/useModalToggle";
// import DetailsModal from "./DetailsModal";

function ImageCard({ data, selectCat }) {
  const modalRef = useModalToggle("DetailsModal");
  const handleOnClick = () => {
    modalRef();
    selectCat(data);
  };
  return (
    <div
      onClick={handleOnClick}
      className="flex flex-row justify-center items-center text-center p-2 bg-white rounded-lg border border-pink-400 shadow-md "
    >
      <img src={data.url} alt={data.url} className="rounded-lg border" />
    </div>
  );
}

export default ImageCard;
