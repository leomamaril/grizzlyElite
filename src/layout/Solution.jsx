import { SOLUTIONS } from "../data";
import { Container, SubContainer } from "../components/ui/container";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
export default function Solution() {
  return (
    <section className="my-5">
      <Container>
        <SubContainer className="mb-5 pb-5">
          <h1 className="font-xl">
            Our<span className="text-base"> Solutions.</span>
          </h1>
          <div className="row text-start d-flex d-lg-none">
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="solution-swiper"
            >
              {SOLUTIONS.map((solutionItem) => (
                <SwiperSlide key={solutionItem.title}>
                  <div className="bg-dark bg-opacity-50 rounded py-5 px-4" 
                    style={{
                        border: solutionItem.title === "Grizzly Elite" ? "3px solid #F98925" : "none",
                    }}>
                    {solutionItem.title === "Grizzly Elite" && (
                      <>                      
                        <span className="grizzly-popular ">
                          Most Popular
                        </span>
                        <span className="triangle-lower"></span>
                      </>
                    )}
                    <div className="solutions-text">
                      <h6 className="grizzly-solutions-title">{solutionItem.title}</h6>
                      <p className="grizzly-solutions-subtitle"><small>{solutionItem.subtitle}</small></p>
                      <h6 className="grizzly-solutions-who">{solutionItem.who}</h6>
                      <p className="grizzly-solutions-description">{solutionItem.description}</p>
                      <h6 className="grizzly-solutions-outcome">{solutionItem.outcome}</h6>

                      <div className="row justify-content-center">
                          {solutionItem.outcomes.map((item, index) => (
                            <div key={index} className="my-2 col-6 col-sm-4 ">
                              <div className="d-flex flex-column align-items-center text-center">   
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="mb-2"
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "contain",
                                    
                                  }}
                                />
                                <span className="fw-medium">{item.title}</span>
                              </div>
                            </div>
                          ))}
                        
                      </div>
                      <div>{solutionItem.button}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="row justify-content-center d-none d-lg-flex">
            {SOLUTIONS.map((solutionItem) => (
              <div
                className="col-lg-6 col-md-7 col-sm-9 g-4 position-relative"
                key={solutionItem.title}
              >
                <div className="bg-dark bg-opacity-50 rounded p-5">
                  {solutionItem.title === "Grizzly Elite" && (
                    <>
                      <span className="triangle-popular-upper"></span>
                      <span className="grizzly-solution-popular ">
                        Most Popular
                      </span>
                      <span className="triangle-popular-lower"></span>
                    </>
                  )}
                  <div className="solutions-text">
                    <h6 className="grizzly-solutions-title">
                      {solutionItem.title}
                    </h6>
                    <p className="grizzly-solutions-subtitle"><small>{solutionItem.subtitle}</small></p>
                    <h6 className="grizzly-solutions-who">{solutionItem.who}</h6>
                    <p className="grizzly-solutions-description">{solutionItem.description}</p>
                    <h6 className="grizzly-solutions-outcome">{solutionItem.outcome}</h6>
                    <div className="row">
                        
                          {solutionItem.outcomes.map((item, index) => (
                            <div key={index} className="my-2 col-4">
                              <div className="d-flex flex-column  align-items-center text-center">   
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="mb-2"
                                  style={{
                                    width: "80px",
                                    height: "80px",
                                    objectFit: "contain",
                                    filter:
                                      "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                                  }}
                                />
                                <span className="fw-medium">{item.title}</span>
                              </div>
                            </div>
                          ))}
                        
                      </div>
                    <div>{solutionItem.button}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grizzly-eclipse-d" />
        </SubContainer>
        
      </Container>
    </section>
  );
}
