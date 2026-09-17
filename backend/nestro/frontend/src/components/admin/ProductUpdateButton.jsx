"use client";

import { client } from "@/utils/helper";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function ProductUpdateButton({
    value,
    label,
    type = "toggle",
    id
}) {

    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const handleUpdate = async () => {
        if (loading) return;

        try {
            setLoading(true);
            const response = await client.patch(`product/update/flag/${id}`, { field: label });
      
            if (response.data.success) {
                toast.success(`${label} updated successfully`);
                router.refresh()

            }

        } catch (error) {
            console.error(error);
            toast.error(`Failed to update ${label}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={handleUpdate}
            disabled={loading}
            title={`Update ${label}`}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition ${value
                ? "bg-green-100 text-green-700 hover:bg-green-200"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                } ${loading ? "cursor-not-allowed opacity-50" : ""}`}
        >
            {loading ? "..." : value ? "Yes" : "No"}
        </button>
    );
}