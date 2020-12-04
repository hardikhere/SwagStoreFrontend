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
      <div className="fake-search"></div>
      <div className="" style={{ textAlign: "center" }}>
        <h1 style={{ padding: "2vw" }}>All of tshirts</h1>
      </div>

      <div style={{ width: "100%" }}>
        <div>
          {
            loading && (
              <>
                <div key={1} className=" col-xs-4 col-md-4 col-sm-4 mb-4 ">
                  <SkeletonTheme color="#D0D0D0 " highlightColor="#E0E0E0">
                    <Skeleton height={300} width={300} />
                    <Skeleton count={3} width={300} />
                  </SkeletonTheme>
                </div>
                <div key={2} className=" col-xs-4 col-md-4 col-sm-4 mb-4 ">
                  <SkeletonTheme color="#D0D0D0 " highlightColor="#E0E0E0">
                    <Skeleton height={300} width={300} />
                    <Skeleton count={3} width={300} />
                  </SkeletonTheme>
                </div>
                <div key={3} className=" col-xs-4 col-md-4 col-sm-4 mb-4 ">
                  <SkeletonTheme color="#D0D0D0 " highlightColor="#E0E0E0">
                    <Skeleton height={300} width={300} />
                    <Skeleton count={3} width={300} />
                  </SkeletonTheme>
                </div>

              </>
            )
          }
          <div className="flex flex-row flex-wrap flex-jc-center" style={{ width: "100%" }}>
            {products?.map((product, index) => {
              return (
                <Card product={product} style={{ height: "17rem" }} />
              );
            })}
          </div>
        </div>
      </div>
      <MyFooter />
      <MobileMenu />
    </div>
  );
}
