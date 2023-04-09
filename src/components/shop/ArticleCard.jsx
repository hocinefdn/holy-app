import React from "react";
import AddToCartButton from "../global/buttons/AddToCartButton";
import { useParams } from "react-router";

const ArticleCard = ({ article }) => {
  let { shopSlug } = useParams();
  return (
    <a
      key={article.id}
      className="p-2 group drop-shadow-xl relative hover:border-2 border-black"
      href={`/${shopSlug}/`}
    >
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
        <img
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
          alt="article"
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-700 text-center">{article.title}</h3>
          <p className="text-md font-bold text-red-500">{article.price} DA</p>
        </div>
      </div>
      <div className="flex justify-center">
        <AddToCartButton />
      </div>
    </a>
  );
};

export default ArticleCard;
