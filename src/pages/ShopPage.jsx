import React, { useEffect, useState } from "react";
import ContactContainer from "../components/home/ContactContainer";
import Header from "../components/global/Header";
import Carousel from "../components/shop/Carousel";
import ArticlesSection from "../components/shop/ArticlesSection";
import axios from "axios";
import { apiUrl } from "../constants/api";
import { useParams } from "react-router-dom";

const ShopPage = () => {
  let { shopSlug } = useParams();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get(apiUrl + "/articles/get-shop-articles-from-slug/" + shopSlug)
      .then((res) => {
        setArticles(res.data.articles);
      })
      .catch((err) => {
        console.log("err :>> ", err);
      });
  }, []);
  return (
    <div>
      <Header />
      <Carousel />
      <ArticlesSection sectionName="Articles" articles={articles} />
      <ContactContainer />
    </div>
  );
};

export default ShopPage;
