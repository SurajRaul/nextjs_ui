"use client";
import { fetchProducts } from "@/store/productSlice";
import { AppDispatch, RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const LessonsPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.employee
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { limit, products, skip } = data;
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold-mt-4">Employee</h1>
      {loading && <p>Loading ....</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {products.map((emp) => (
          <li key={emp.id} className="mb-2 border-b pb-2">
            <Image
              src={emp.images[0]}
              alt={emp.title}
              width={300}
              height={300}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonsPage;

// const LessonsPage = () => {
//   const dispatch=useDispatch();
//   // const {data,loading,error}=useSelector();
// const images = [
//   { id: 1, src: "/university.jpg", alt: "University Image 1" },
//   { id: 2, src: "/passout.jpg", alt: "School Image 2" },
//   { id: 3, src: "/graduate.jpg", alt: "Campus Image 3" },
// ];

// return (
//   <div>
//     <h1>Total Images: {images.length}</h1>
//     <div className="flex gap-4">
//       {images.map((image) => (
//         <div key={image.id}>
//           <Link href={`lessons/${image.id}`}>
//             {/* <a> */}
//             <Image src={image.src} alt={image.alt} height={300} width={300} />
//             {/* </a> */}
//           </Link>
//         </div>
//       ))}
//     </div>
//     <div>

//     </div>
//   </div>
// );
// };

// export default LessonsPage;
