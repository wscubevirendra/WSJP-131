
import { fetchCategory } from "@/api/category";
import DeleteButton from "@/components/admin/DeleteButton";
import StatusButton from "@/components/admin/StatusButton";
import TableHeader from "@/components/admin/TableHeader";
import Link from "next/link";
import {
  FiPlus,
  FiEdit,
  FiTrash2,
  FiImage,
} from "react-icons/fi";

export default async function CategoryViewPage() {
  const response = await fetchCategory();
  console.log(response)
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <TableHeader module="Category" add_page="/admin/category/add" />

        {/* Table Card */}
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              {/* Table Head */}
              <thead className="border-b border-gray-200 bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    #
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Category
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Slug
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Image
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Status
                  </th>

                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">
                    Actions
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-100">
                {response?.category?.map((item, index) => (
                  <tr
                    key={item._id}
                    className="transition hover:bg-gray-50"
                  >
                    {/* Index */}
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {index + 1}
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                    </td>

                    {/* Slug */}
                    <td className="px-6 py-4">
                      <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                        /{item.slug}
                      </span>
                    </td>

                    {/* Image */}
                    <td className="px-6 py-4">
                      <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <FiImage className="text-gray-400" size={20} />
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <StatusButton status={item.status} api={`category/status/${item._id}`} />

                    {/* Actions */}
                    <td className="px-6 py-4">
                      <div className="flex justify-end gap-2">
                        {/* Edit */}
                        <Link
                          href={`/admin/category/edit/${item._id}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                          title="Edit"
                        >
                          <FiEdit size={16} />
                        </Link>

                        {/* Delete */}
                        <DeleteButton api={`category/delete/${item._id}`} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {response?.category?.length === 0 && (
            <div className="px-6 py-16 text-center">
              <FiImage className="mx-auto mb-3 text-gray-400" size={32} />

              <h3 className="text-sm font-semibold text-gray-900">
                No categories found
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Create your first category to get started.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}