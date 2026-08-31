'use client'

import { client } from '@/utils/helper'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'sonner'

export default function StatusButton({ status, api }) {
    const router = useRouter()

    function statusHandler() {
        client.patch(api).then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
                router.refresh();
            }
        }).catch((error) => {
            console.log(error)

        })
    }
    return (
        <td className="px-6 py-4">
            <button
                onClick={statusHandler}
                className={`inline-flex cursor-pointer rounded-full px-3 py-1 text-xs font-medium ${status
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                    }`}
            >
                {status ? "Active" : "Inactive"}
            </button>
        </td>
    )
}
