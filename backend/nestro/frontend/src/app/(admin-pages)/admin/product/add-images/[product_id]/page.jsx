"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Tag, Link2, Upload, X, Save } from "lucide-react";
import { toast } from 'sonner';
import { slugify, client } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { fetchProductById } from "@/api/product";



export default function Page({ params }) {
    const [images, setImages] = useState([]);

    const { product_id } = use(params);

    useEffect(() => {
        async function getData() {
            const { message, success, product } = await fetchProductById(product_id);
            if (success) {
                setImages(product.images)
            }
        }
        getData();

    }, [])

    const router = useRouter()

    const submitHanlder = (e) => {
        e.preventDefault()
        const images_array = e.target.images.files;
        const form = new FormData()
        for (const img of images_array) {
            form.append("image", img);
        }

        client.post(`product/add-images/${product_id}`, form).then(
            (response) => {
                if (response.data.success) {
                    toast.success(response.data.message)
                    router.push("/admin/product")
                }
            }
        ).catch(
            (error) => {
                toast.error("Internal Server Error")
            }
        )

    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">

            {/* Back Link */}
            <Link
                href="/admin/category"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-teal-600 transition font-medium"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Categories
            </Link>

            {/* Page Title */}
            <div>
                <h1 className="text-2xl font-bold text-gray-900">
                    Edit Category
                </h1>


            </div>

            {/* Form */}
            <form onSubmit={submitHanlder} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

                <div className="p-6 space-y-6">
                    <label
                        htmlFor="category-image"
                        className="flex flex-col items-center justify-center gap-3 w-full h-24 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 hover:border-teal-400 hover:bg-teal-50/30 cursor-pointer transition-all"
                    >

                        <div className="p-3 rounded-full bg-gray-100">
                            <Upload className="w-6 h-6 text-gray-400" />
                        </div>

                        <div className="text-center">
                            <p className="text-sm font-medium text-gray-600">
                                Click to upload
                            </p>

                            <p className="text-xs text-gray-400 mt-0.5">
                                PNG, JPG, WEBP
                            </p>
                        </div>

                        <input
                            id="category-image"
                            multiple
                            type="file"
                            name="images"
                            accept="image/png,image/jpeg,image/webp"
                            className="hidden"
                        />

                    </label>

                </div>
                <div className="relative w-full flex gap-2 rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                    {
                        images.length !== 0 &&
                        images.map((img) => {
                            return (
                                <div className="w-full h-52 flex items-center justify-center">
                                    <img
                                        src={img}
                                        alt="Category preview"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            )
                        })
                    }


                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-100 bg-gray-50/50">

                    <Link
                        href="/admin/category"
                        className="px-6 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition"
                    >
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold rounded-xl transition shadow-sm shadow-teal-200"
                    >
                        <Save className="w-4 h-4" />
                        Save Category
                    </button>

                </div>

            </form>
        </div>
    );
}