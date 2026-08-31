'use client'

import React from 'react'
import {
    FiTrash2,
} from "react-icons/fi";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { client } from '@/utils/helper';
export default function DeleteButton({api}) {
    const router = useRouter()

    function deleteHandler() {
        client.delete(api).then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
                router.refresh();
            }
        }).catch((error) => {
            console.log(error)

        })
    }
    return (
        <button
            onClick={deleteHandler}
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            title="Delete"
        >
            <FiTrash2 size={16} />
        </button>
    )
}
