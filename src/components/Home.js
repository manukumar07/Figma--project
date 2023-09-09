import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]); 
  const [data1, setData1] = useState({}); 

  // To get the data from the API

  const fetchData = () => {
    axios.get("https://training-project-8tay.onrender.com")
      .then((response) => {
        setData(response.data.Posts);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // To handle edit
  const handleEdit = (id) => {
    axios.get(`https://training-project-8tay.onrender.com/${id}`)
      .then((response) => {
        setData1(response.data.Posts);
        console.log(response.data.Posts);

        // Use navigate, not Navigate, to navigate to the form
        navigate("/form", {
          state: {
            data: data1.title,
          },
        });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  // To delete the post

  const handleDelete = (postId) => {
    console.log("==========", postId);
    axios.delete(`https://training-project-8tay.onrender.com/delete/Post${postId}`)
      .then(() => {
        console.log(`Post with ID ${postId} deleted.`);
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  // navigate to form
  function handleClick() {
    navigate("/form");
  }
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="container1">
          <h3>Blog Posts</h3>
          <button className="btn" onClick={handleClick}>
            Create post
          </button>
        </div>
        {data.map ((item) => {
          return (
            <div className="container1" key={item.id}>
              <Card style={{ width: "20rem" }} className="card-style">
                <Card.Img
                  variant="top"
                  src="image/img01.png"
                  alt="img01_img"
                  className="img1"
                />
                <Card.Body>
                  <Card.Title className="title">{item.title}</Card.Title>
                  <Card.Text className="description">
                    {item.description}
                    {/* Use onClick={() => handleEdit(item._id)} to pass the correct ID */}
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        onClick={() => handleEdit(item._id)}
                        className="pentosquare"
                      />
                      {/* Use onClick={() => handleDelete(item._id)} for delete */}
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => handleDelete(item._id)}
                        className="trash"
                      />
                    </div>
                  </Card.Text>
                  <div className="a">
                    <img
                      className="profileA"
                      src="image/profileA.png"
                      alt="profileA_img"
                    />
                  </div>
                  <div className="b">
                    <span>
                      <h2>Dasteen</h2>
                    </span>
                    <p>Jan 12, 2022</p>
                  </div>
                  <div className="c">
                    <i className="fa-regular fa-heart"></i>
                    <span>
                      <label>03</label>
                    </span>
                  </div>
                  <div className="d">
                    <i className="fa-regular fa-comment"></i>
                    <span>12</span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};
export default Home;