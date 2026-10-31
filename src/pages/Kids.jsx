import React, { useEffect, useState } from "react";
import "../styles/kids.css";
import axios from "axios";
const Kids = () => {
  let URL_Coverimg = "http://localhost:5000/coverIMG";

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
    <div className="Kids-container">
      {/* if data is available then map else show loading */}
      {data.length > 0
        ? data
            .filter((x) => x.category === "kids")
            .map((x) => {
              return (
                <section className="mens-card">
                  <img
                    src={x.img}
                    alt="img"
                    height={"100%"}
                    width={"100%"}
                    style={{ borderRadius: "20px" }}
                  />
                </section>
              );
            })
        : <h1>loading...</h1> || "loading..."}
    </div>
  );
};

export default Kids;
