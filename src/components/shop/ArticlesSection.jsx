import React from "react";
import ArticleCard from "./ArticleCard";

const ArticlesSection = ({ sectionName, articles }) => {
  return (
    <div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900">
            {sectionName}
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {articles.map((article) => (
              <ArticleCard article={article} key={`article-${article.id}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
