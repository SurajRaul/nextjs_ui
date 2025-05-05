import Image from "next/image";

const Modal = ({
  image,
  onClose,
}: {
  image: { src: string; alt: string };
  onClose: () => void;
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 p-2 text-white bg-red rounded-full"
        >
          Close
        </button>
        <Image src={image.src} alt={image.alt} height={800} width={800} />
      </div>
    </div>
  );
};

export default Modal;
