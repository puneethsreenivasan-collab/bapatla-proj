import React, { useEffect, useState } from "react";
import "../styles/MensPro.css";
import axios from "axios";
const MensPro = () => {
  let URL_Coverimg = "http://localhost:5000/Products";

  const [data, setData] = useState([]);

  console.log(data);
  const getData = () => {
    axios
      .get(URL_Coverimg)
      .then((res) => {
        //  console.log(res.data)
        setData(res.data);
      })
      .catch((err) => {
        alert("network error");
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="MensPro-container">
      hhhh
      {/* if data is available then map else show loading */}
      {data.length > 0
        ? data.map((x) => {
            return (
              <section className="MensPro-card">
                <img
                  src={x.ProductImg}
                  alt="img"
                  height={"50%"}
                  width={"100%"}
                  style={{ borderRadius: "20px" }}
                />

                <div className="mens-card-content">
                  <b> ProductName: {x.ProductName}</b>
                  <strong>ProductPrice :</strong>
                  <span>ProductRating : {x.ProductRating}</span>
                  <div style={{display:"flex", gap:"20px"}}>
                   
                    <button style={{width:"100px"}} >Buy</button> <button>Add to Cart</button>
                  </div>
                </div>
              </section>
            );
          })
        : <h1>loading...</h1> || "loading..."}
    </div>
  );
};

export default MensPro;
