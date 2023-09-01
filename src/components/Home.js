import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
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

  return (
    <>
      <Header />
      {/* <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
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
      <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
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
      <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
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
      <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
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
      <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
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
      <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
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
      </section> */}
      <section>
        <div class="AB">
          <div class="container1">
            <h3>Blog Posts</h3>
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

              <div class="parentBlog2">
                <div class="IMAGE2">
                  <img class="img02" src="image/img02.jpg" alt="img02_img" />
                </div>
                <div class="heading2">
                  <h4>
                    Make Animated LightMode
                    <br />& DarkMode Toggle{" "}
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

              <div class="parentBlog3">
                <div class="IMAGE3">
                  <img class="img01" src="image/img01.png" alt="img01_img" />
                </div>
                <div class="heading3">
                  <h4>
                    Make Tic Tac Toe Games <br /> With React JS
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
        <div class="AB">
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
                <hr />
                <div class="abcd">
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

              <div class="parentBlog2">
                <div class="IMAGE2">
                  <img class="img02" src="image/img02.jpg" alt="img02_img" />
                </div>
                <div class="heading2">
                  <h4>
                    Make Animated LightMode
                    <br />& DarkMode Toggle{" "}
                  </h4>
                </div>
                <hr />

                <div class="abcd">
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

              <div class="parentBlog3">
                <div class="IMAGE3">
                  <img class="img01" src="image/img01.png" alt="img01_img" />
                </div>
                <div class="heading3">
                  <h4>
                    Make Tic Tac Toe Games <br /> With React JS
                  </h4>
                </div>
                <hr />
                <div class="abcd">
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
        <div class="AB">
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
                <hr />
                <div class="abcd">
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

              <div class="parentBlog2">
                <div class="IMAGE2">
                  <img class="img02" src="image/img02.jpg" alt="img02_img" />
                </div>
                <div class="heading2">
                  <h4>
                    Make Animated LightMode
                    <br />& DarkMode Toggle{" "}
                  </h4>
                </div>
                <hr />
                <div class="abcd">
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

              <div class="parentBlog3">
                <div class="IMAGE3">
                  <img class="img01" src="image/img01.png" alt="img01_img" />
                </div>
                <div class="heading3">
                  <h4>
                    Make Tic Tac Toe Games <br /> With React JS
                  </h4>
                </div>
                <hr />
                <div class="abcd">
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

      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="img02.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

      <Footer />
    </>
  );
};
export default Home;
