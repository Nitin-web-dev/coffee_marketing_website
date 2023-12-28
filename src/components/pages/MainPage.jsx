import React from "react";
import heroSectionimg from "../../assets/heroSectionImg.png";
import SuccessStoryimg from "../../assets/SuccessStoryImg.jpg";
import stretegiesimg1 from "../../assets/stretegiesimg1.jpg";
import stretegiesimg2 from "../../assets/stretegiesimg2.jpg";

import "./MainPage.css";
const MainPage = () => {
  return (
    <div>
      {/* // hero section start  */}
      <section className="herosection">
        <div className="heroSectionText">
          <h2>
            
            We Dreamt, Planned, Executed And Scaled Levista To Reach 2.5 Million
          People
            </h2>
        </div>
        <div className="heroSectionImg">
          <img src={heroSectionimg} alt="product img" id="heroSectionImg" />
        </div>
      </section>
      {/* // hero section end  */}

      {/* // SuccessStory start  */}
      <section className="SuccessStory">
        <div className="SuccessStoryText">
          <h2>Success Story of Levista</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            repellendus sit explicabo sequi ipsam corrupti eum quod possimus
            eius quisquam? Fuga, nostrum commodi animi expedita facere totam est
            error tempora? Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </p>
          <h3>Our Main Focus Was:</h3>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              mollitia pariatur quasi aliquam nulla voluptatum odio. rem earum
              labore nobis nihil illum dolore porro similique!
            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              mollitia pariatur quasi aliquam nulla voluptatum odio.{" "}
            </li>
            <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. !</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus deserunt, praesentium voluptates minima dolores
            dolorum eveniet et debitis ipsum fugiat libero hic. Natus nesciunt
            porro molestias placeat, ratione optio possimus.
          </p>
        </div>
        <div className="SuccessStoryImg">
          <img src={SuccessStoryimg} alt="product img" id="SuccessStoryImg" />
        </div>
      </section>

      {/* // SuccessStory end  */}

      {/* // stretegies start  */}
      <section className="stretegiesSection">
        <div className="stretegiesSectionText">
          <h2>Strategies We Implemented</h2>

          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              mollitia pariatur quasi aliquam nulla voluptatum odio. rem earum
              labore nobis nihil illum dolore porro similique!
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.{" "}
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              mollitia pariatur quasi aliquam nulla voluptatum odio.{" "}
            </li>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit.!
            </li>
          </ul>
        </div>
        <div className="stretegiesSectionImg">
          <img
            src={stretegiesimg1}
            alt="product img"
            id="stretegiesSectionImg1"
          />
          <img
            src={stretegiesimg2}
            alt="product img"
            id="stretegiesSectionImg2"
          />
        </div>
      </section>
      {/* // stretegies end  */}

      {/* result section start   */}

      <section className="resultSection">
        <div className="resultLeftSide">
          <h2>2,500,000 +</h2>
          <h3>Reached</h3>
          <h2>30</h2>
          <h3>Influencers</h3>
        </div>
    
        <div className="resultRightSide">
        <h2>1,500,000 +</h2>
          <h3>Engagement</h3>
        </div>
      </section>
      {/* result section end  */}


      {/* caseStudy section start   */}

      <section className="caseStudySection">
        <div className="caseStudyLeftSide">
          <h3>Previous Case Study</h3>
          <h2>CashKaro</h2>
      
        </div>
    
        <div className="caseStudyRightSide">
          <h3>Next Case Study</h3>
        <h2>Casagrand</h2>
        </div>
      </section>
      {/* caseStudy section end  */}

    </div>
  );
};

export default MainPage;
