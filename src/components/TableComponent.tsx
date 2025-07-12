import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

import { useRouter } from "next/navigation";

interface TableProperties {
  title: string;
  columns: Column[];
  rows: any[];
}

interface Column {
  label: string;
  key: string;
}

function Table({ title, columns, rows }: TableProperties) {
  const [filter, setFilter] = useState("");
  const router = useRouter();

  function handleFilter(value: string) {
    setFilter(value);
  }

  function toAdd() {
    router.push("user/addUser");
  }

  return (
    <div className="h-full p-5">
      <div className="h-full flex flex-col rounded-lg gap-2">
        <div className="py-2 px-4 flex flex-row rounded-t-lg bg-white shadow justify-between items-center">
          <div className="text-2xl font-bold text-primary">{title}</div>

          <div className="flex flex-row gap-3">
            <div className="flex flex-row gap-4 items-center border p-1 rounded-md border-gray-200">
              <IoSearch className="text-gray-400 text-lg" />
              <input
                className="outline-0"
                value={filter}
                onChange={(evt) => handleFilter(evt.target.value)}
                placeholder="Pesquisar"
              />
            </div>

            <button
              onClick={toAdd}
              className="bg-secundary flex flex-row items-center px-2 rounded-md gap-1.5 cursor-pointer text-white hover:bg-green-600 transition .2"
            >
              <FaPlus />
              <span className="font-medium">Adicionar</span>
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto max-h-[calc(100vh-140px)]">
          <table className="w-full">
            <thead className="bg-gray-100 shadow">
              <tr>
                {columns.map((item) => (
                  <th
                    key={item.key}
                    className={`px-4 py-1 ${
                      item.key === "actions" ? "text-right" : "text-left"
                    }`}
                  >
                    {item.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="overflow-scroll">
              {rows.map((item, idx) => (
                <tr key={idx} className="bg-white shadow">
                  {columns.map((col) => (
                    <>
                      {col.key !== "actions" ? (
                        <td
                          key={col.key}
                          className={`px-4 py-3 text-left align-middle`}
                        >
                          {item[col.key]}
                        </td>
                      ) : (
                        <td
                          key={col.key}
                          className={`px-4 flex-row gap-3 flex py-3 justify-end items-center`}
                        >
                          <FiEdit className="text-lg text-yellow-500 cursor-pointer" />
                          <AiOutlineDelete className="text-xl text-red-700 cursor-pointer" />
                        </td>
                      )}
                    </>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
