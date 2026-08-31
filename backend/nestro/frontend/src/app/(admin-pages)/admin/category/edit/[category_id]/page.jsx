import { fetchCategoryById } from '@/api/category';
import EditForm from '@/components/admin/EditForm';
import React from 'react'

export default async function EditPage({ params }) {
  const promise = await params;
  const { category, success, message } = await fetchCategoryById(promise.category_id)
  if (!success) {
    throw new Error(message)
  }
  return (
    <EditForm category={category}/>
  )
}
