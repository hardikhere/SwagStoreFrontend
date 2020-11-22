import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';


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
    <>
      <Base title="Tshirt Shop" desc="Welcome to the Tshirt Store"></Base>
      <div className="container">
        <div className="row " style={{ marginTop: "23%" }}>
          <div className="col-12" style={{ textAlign: "center" }}>
            <h1 style={{ padding: "2vw" }}>All of tshirts</h1>
          </div>

          <div style={{width:"100%"}}>
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
              <div className="flex flex-row flex-wrap flex-jc-center" style={{width:"100%"}}>
                { products?.map((product, index) => {
                  return (
                        <Card product={product} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>


      </div>


      <footer>
        <div style={{ width: "100%", height: "15rem", backgroundColor: "rgb(66,66,66)", position: "inherit", marginTop: "14%", marginBottom: 0 }}>
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h3 style={{ color: "white" }}> Made with &nbsp;
               <i className="fa fa-heart" aria-hidden="true" style={{ color: "white" }}></i>&nbsp;
               by Hardik Khanchandani
               </h3>
          </div>
          <div style={{ textAlign: "center", color: "white" }}>
            <h3>
              Front End Source Code &nbsp;
                 <a href="https://github.com/hardikhere/ecomfronend">
                <i style={{ fontSize: "2.4rem" }} className="fa fa-github" aria-hidden="true"></i>
              </a>
            </h3>

            <h3>
              Back End Source Code &nbsp;
                 <a href="https://github.com/hardikhere/ecombackend">
                <i style={{ fontSize: "2.4rem" }} className="fa fa-github" aria-hidden="true"></i>
              </a>
            </h3>
          </div>


        </div>
      </footer>
    </>
  );
}
