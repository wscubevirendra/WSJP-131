
import { fetchProduct } from "@/api/product";
import ProductCard from "@/components/website/ui/ProductCard";

export default async function Page({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || null;
  const room_type = params?.room_type || null;
  const min_price = params?.min_price || null;
  const max_price = params?.max_price || null;
  const stock = params?.stock || null;
  const sort = params?.sort || null;
  const response = await fetchProduct({ category, room_type, status: true, min_price, max_price ,stock,sort})
  console.log(response, "my-response")
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {
          response?.product?.map((item) => {
            return <ProductCard key={item._id} product={item} />
          })
        }

      </div>
    </>
  );
}
