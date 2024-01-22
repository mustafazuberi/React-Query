import Product from "@/app/types/types.product";
import Link from "next/link";

const createProduct = (product: Product) => {
  return {
    id: product.id,
    description: product.description,
    price: product.price,
    imageSrc: product.images[0],
    imageAlt: product.thumbnail,
    name: product.title,
    category: product.category,
    brand: product.brand,
    rating: product.rating,
    href: product.title,
    color: product,
  };
};

const ProductComp = ({ product }: { product: Product }) => {
  const myProduct = createProduct(product);
  return (
    <Link href={`products/${product.id}`}>
      <div key={myProduct.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={myProduct.imageSrc}
            alt={myProduct.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <span aria-hidden="true" className="absolute inset-0">
                {myProduct.name}
              </span>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{myProduct.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductComp;
