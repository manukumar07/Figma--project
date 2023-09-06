import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';



const Home = () => {
  const navigate=useNavigate();

  const [apiData, setApiData] = useState([]);

  useEffect(()=> {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(" ");
      setApiData(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

function handleClick(){
  navigate("/form")
}

  return (
    <>
      <Header/>
      <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
           <FontAwesomeIcon icon={faPenToSquare} className="iconn" onClick={handleClick} /> 
           {/* <button className="btnt" onClick={handleClick}>create post</button> */}
          </div>
          <div class="BC">
            <div class="ABC">
              <div class="parentBlog1">
                <div class="IMAGE">
                  <img class="img01" src="image/img01.png" alt="img01_img" />
                </div>
                <div class="heading1">
                  <h4>
                    How To Make GUI in JAVA <br />
                    With Example Example
                  </h4>
                </div>

                <div class="abcd">
                  <hr />
                  <div class="a">
                    <img
                      class="profileA"
                      src="image/profileA.png"
                      alt="profileA_img"
                    />
                  </div>
                  <div class="b">
                    <span>
                      <h2>Dasteen</h2>
                    </span>
                    <p>Jan 12,2022</p>
                  </div>
                  <div class="c">
                    <i class="fa-regular fa-heart"></i>
                    <span>
                      <label>03</label>
                    </span>
                  </div>
                  <div class="d">
                    <i class="fa-regular fa-comment"></i>
                    <span>12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
