import React, { useState, useEffect } from "react";

import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Link } from "react-router-dom";
import Menu from "../menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import MyFooter from "./MyFooter";
import SearchBar from "./SearchBar/SearchBar";
import { LoadingCard } from "./LoadingCards/LoadingCard";


export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data && data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <div className="flex flex-col">
      <Menu></Menu>



      <div className="fake-search">
        <SearchBar />
      </div>

      <div className="" style={{ textAlign: "center" }}>
        <h1 style={{ padding: "2vw" }}>All of tshirts</h1>
      </div>

      <div style={{ width: "100%" }}>
        <div className="flex flex-row flex-wrap flex-jc-center" style={{ width: "100%" }}>
          {
            loading && (
              <>
                {
                  [12, 122, 33].map((val, ind)=>{
                   return  <LoadingCard />
              
                })
              }
              </>
            )
          }
          </div>
          <div className="flex flex-row flex-wrap flex-jc-center" style={{ width: "100%" }}>
            {products?.map((product, index) => {
              return (
                <Card product={product} style={{ height: "17rem" }} />
              );
            })}
          </div>
        
      </div>
      <MyFooter />
      <MobileMenu />
    </div>
  );
}
