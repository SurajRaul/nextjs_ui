import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData } from "@/lib/data";
import Image from "next/image";
import React from "react";

type Parent = {
  id: number;
  name: string;
  email?: string;
  students: string[];
  phone: string;
  address: string;
};

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
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

const ParentListPage = () => {
  const renderRow = (item: Parent) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 hover:bg-cyan-300 text-sm"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(",")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="flex flex-row gap-2">
        <FormModal table="parent" type="update" data={item}></FormModal>
        <FormModal table="parent" type="delete" id={item.id}></FormModal>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md m-4 mt-0 flex-1">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block font-semibold text-lg">All Parents</h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <TableSearch />
          <div className="flex items-center self-end gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lime-200">
              <Image src="/sort.png" alt="" height={14} width={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lime-200">
              <Image src="/filter.png" alt="" height={14} width={14} />
            </button>
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      <Pagination />
    </div>
  );
};

export default ParentListPage;
