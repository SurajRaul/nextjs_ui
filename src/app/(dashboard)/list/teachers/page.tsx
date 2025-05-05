// "use client";
import TeacherForm from "@/components/form/TeacherForm";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@/components/Pagination";
import FormModal from "@/components/FormModal";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { Class, Prisma, Subject, Teacher } from "@prisma/client";

// type Teacher = {
//   id: number;
//   teacherId: string;
//   name: string;
//   email?: string;
//   photo: string;
//   phone: string;
//   subjects: string[];
//   classes: string[];
//   address: string;
// };
interface Props {
  searchParams?: { [key: string]: string };
}
type TeacherList= Teacher & { subjects: Subject[] } & { classes: Class[]}



const TeacherListPage = async ({ searchParams = {} }: Props) => {
  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Teacher ID",
      accessor: "teacherId",
      className: "hidden md:table-cell",
    },
    {
      header: "Subjects",
      accessor: "subjects",
      className: "hidden md:table-cell",
    },
    {
      header: "Classes",
      accessor: "classes",
      className: "hidden md:table-cell",
    },
    {
      header: "Phone",
      accessor: "phone",
      className: "hidden lg:table-cell",
    },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

  const renderRow = (item: TeacherList) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-sky-300"
    >
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.img || "/avatar.png"}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.username}</td>
      <td className="hidden md:table-cell">{item.subjects.map((subject) => subject.name).join(",")}</td>
      <td className="hidden md:table-cell">{item.classes.map((subject) => subject.name).join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {/* <button className="bg-transparent">
            <FontAwesomeIcon
              icon={faPenToSquare}
              size="lg"
              className="text-purple-500"
            /> */}
          <Link href={`/list/teachers/${item.id}`}>
            <button className="bg-transparent">
              <FontAwesomeIcon
                icon={faEye}
                size="lg"
                className="text-purple-500"
              />
            </button>
          </Link>
          {role === "admin" && (
            <FormModal table="teacher" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  const { page, ...queryParams} = searchParams;
  const p= page? parseInt(page):1;
  const query: Prisma.TeacherWhereInput={};
  if(queryParams){
    for(const [key, value] of Object.entries(queryParams)){
      if(value !== undefined){
        switch(key){
          case "classId": 
          query.lessons={
            some: {
              classId: parseInt(value)
            }
          }
          break;
          case "search":
            query.name={ contains:value, mode: "insensitive"}
          break;
          default:
          break;
        }
      }
    }
  }

  const [data, count]= await prisma.$transaction([
    prisma.teacher.findMany({
      where: query,
      include: {
        subjects:true,
        classes:true,
      },
      take: 12,
      skip: 12*(p-1)
    }),
    prisma.teacher.count({ where: query })
  ])
  // console.log("data2",data)
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="self-end gap-4 flex items-center">
            <button>
              <Image src="/filter.png" alt="" width={20} height={20} />
            </button>
            <button>
              <Image src="/sort.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* <TeacherForm type="create"/> */}
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
