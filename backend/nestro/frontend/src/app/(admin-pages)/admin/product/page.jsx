import { fetchProduct } from "@/api/product";
import DeleteButton from "@/components/admin/DeleteButton";
import ProductUpdateButton from "@/components/admin/ProductUpdateButton";
import StatusButton from "@/components/admin/StatusButton";
import TableHeader from "@/components/admin/TableHeader";
import Link from "next/link";
import {
    FiEdit,
    FiEye,
    FiImage,
} from "react-icons/fi";
import { VscDiffMultiple } from "react-icons/vsc";


export default async function ProductViewPage() {
    const response = await fetchProduct();

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-6">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <TableHeader module="Product" add_page="/admin/product/add" />

                {/* Table Card */}
                <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1200px]">
                            {/* Table Head */}
                            <thead className="border-b border-gray-200 bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        #
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        Product
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        Slug
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        Thumbnail
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        Stock
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        New Arrival
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        Featured
                                    </th>

                                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                                        Bestseller
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
                                {response?.product?.map((item, index) => (
                                    <tr
                                        key={item._id}
                                        className="transition hover:bg-gray-50"
                                    >
                                        {/* Index */}
                                        <td className="px-6 py-4 text-sm text-gray-500">
                                            {index + 1}
                                        </td>

                                        {/* Product */}
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

                                        {/* Thumbnail */}
                                        <td className="px-6 py-4">
                                            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
                                                {item.thumbnail ? (
                                                    <img
                                                        src={item.thumbnail}
                                                        alt={item.name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <FiImage
                                                        className="text-gray-400"
                                                        size={20}
                                                    />
                                                )}
                                            </div>
                                        </td>

                                        {/* Stock */}
                                        <td className="px-6 py-4">
                                            <ProductUpdateButton id={item._id} value={item.stock} label="stock" />
                                        </td>

                                        {/* New Arrival */}
                                        <td className="px-6 py-4">
                                            <ProductUpdateButton id={item._id} value={item.newArrival} label="newArrival" />
                                        </td>

                                        {/* Featured */}
                                        <td className="px-6 py-4">
                                            <ProductUpdateButton id={item._id} value={item.featured} label="featured" />
                                        </td>

                                        {/* Bestseller */}
                                        <td className="px-6 py-4">
                                            <ProductUpdateButton id={item._id} value={item.Bestseller} label="bestSeller" />
                                        </td>
                                         <StatusButton
                                            status={item.status}
                                            api={`product/status/${item._id}`}
                                        />

                                        <td className="px-6 py-4">
                                          <Link href={`admin/product/add-images/${item._id}`}> <VscDiffMultiple /></Link> 
                                        </td>

                                        {/* Status */}
                                       
                                        {/* Actions */}
                                        <td className="px-6 py-4">
                                            <div className="flex justify-end gap-2">
                                                {/* View */}
                                                <Link
                                                    href={`/admin/product/view/${item._id}`}
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-green-200 hover:bg-green-50 hover:text-green-600"
                                                    title="View"
                                                >
                                                    <FiEye size={16} />
                                                </Link>

                                                {/* Edit */}
                                                <Link
                                                    href={`/admin/product/edit/${item._id}`}
                                                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                                                    title="Edit"
                                                >
                                                    <FiEdit size={16} />
                                                </Link>

                                                {/* Delete */}
                                                <DeleteButton
                                                    api={`product/delete/${item._id}`}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Empty State */}
                    {response?.product?.length === 0 && (
                        <div className="px-6 py-16 text-center">
                            <FiImage
                                className="mx-auto mb-3 text-gray-400"
                                size={32}
                            />

                            <h3 className="text-sm font-semibold text-gray-900">
                                No products found
                            </h3>

                            <p className="mt-1 text-sm text-gray-500">
                                Create your first product to get started.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}