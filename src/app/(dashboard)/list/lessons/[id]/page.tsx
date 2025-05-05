// // pages/lessons/[id]/page.tsx
// "use client";
// import { useRouter } from "next/router";
// import Modal from "@/components/Modal";
// import { useState } from "react";

// const images = [
//   { id: "1", src: "/university.jpg", alt: "University Image 1" },
//   { id: "2", src: "/passout.jpg", alt: "School Image 2" },
//   { id: "3", src: "/graduate.jpg", alt: "Campus Image 3" },
// ];

// const SingleImagePage = () => {
//   const router = useRouter();
//   const { id } = router.query; // Dynamic route parameter
//   const [isModalOpen, setModalOpen] = useState(false);

//   // Find the image by id
//   const image = images.find((img) => img.id === id);

//   // If image is not found, show loading message
//   if (!image) return <div>Loading...</div>;

//   return (
//     <div>
//       {isModalOpen && (
//         <Modal image={image} onClose={() => setModalOpen(false)} />
//       )}
//       <button onClick={() => setModalOpen(true)}>
//         <img src={image.src} alt={image.alt} width={300} height={300} />
//       </button>
//     </div>
//   );
// };

// export default SingleImagePage;
