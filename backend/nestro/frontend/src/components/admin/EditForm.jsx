"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Tag, Link2, Upload, X, Save } from "lucide-react";
import { toast } from 'sonner';
import { slugify, client } from "@/utils/helper";
import { useRouter } from "next/navigation";



export default function EditForm({ category }) {
    const router = useRouter()
    const [name, setName] = useState(category.name || "");
    const [slug, setSlug] = useState(category.slug || "");
    const [image, setImage] = useState(category.image || null);

    // Category name change
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setSlug(slugify(value));
    };

    // Slug change
    const handleSlugChange = (e) => {
        setSlug(e.target.value);
    };

    // Image change
    const handleImageChange = (e) => {

        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    // Remove image
    const handleRemoveImage = () => {
        setImage(null);
    };

    const submitHanlder = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append("name", name);
        form.append("slug", slug);
        form.append("image", image);


        client.put(`category/update/${category._id}`, form).then(
            (response) => {
                if (response.data.success) {
                    toast.success(response.data.message)
                    router.push("/admin/category")
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

                    {/* Category Name */}
                    <div className="space-y-1.5">

                        <label className="text-sm font-semibold text-gray-800">
                            Category Name <span className="text-red-500">*</span>
                        </label>

                        <div className="relative">
                            <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                            <input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="e.g., Electronics, Fashion, Mobiles"
                                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400 focus:bg-white transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <p className="text-xs text-gray-400">
                            This is how customers will see the category
                        </p>

                    </div>

                    {/* Slug */}
                    <div className="space-y-1.5">

                        <label className="text-sm font-semibold text-gray-800">
                            Slug
                        </label>

                        <div className="relative">
                            <Link2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />

                            <input
                                type="text"
                                value={slug}
                                onChange={handleSlugChange}
                                placeholder="auto-generated-slug"
                                className="w-full pl-10 pr-4 py-3 text-sm bg-gray-100 border border-gray-200 rounded-xl text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-400 transition-all placeholder:text-gray-400"
                            />
                        </div>

                        <p className="text-xs text-gray-400">
                            URL-friendly name
                        </p>

                    </div>

                   
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
                            type="file"
                            accept="image/png,image/jpeg,image/webp"
                            onChange={handleImageChange}
                            className="hidden"
                        />

                    </label>

                </div>
                  <div className="relative w-full rounded-xl overflow-hidden border border-gray-200 bg-gray-50">

                                <div className="w-full h-52 flex items-center justify-center">
                                    <img
                                        src={image}
                                        alt="Category preview"
                                        className="w-full h-full object-contain"
                                    />
                                </div>


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