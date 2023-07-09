import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Divider, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 5,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom:"2rem",
            color:"goldenrod",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 3,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To "Take It Cheesy!!" </Typography>
        <Divider/> 
        <br/>
        <br/>
        <Box fontSize={"18px"}>
        <p>
        Welcome to <strong><em>"Take It Cheesy"</em></strong>- a culinary haven where gastronomic delights and tantalizing flavors converge. With our extensive menu that spans fast food, diverse cuisines, and traditional fare, we aim to take your taste buds on an unforgettable journey. As one of the leading restaurants in the industry, we take immense pride in delivering a premium dining experience like no other.
        </p>
        <br />
        <p>
        At <strong><em>"Take It Cheesy"</em></strong> we believe that exceptional food starts with exceptional ingredients. Our team of seasoned chefs meticulously handpicks the freshest produce, finest cuts of meat, and the most exquisite spices, ensuring that each dish embodies the epitome of quality. Whether you're craving a juicy burger, indulging in international delicacies, or savoring the nostalgia of authentic traditional recipes, every bite will transport you to a world of sublime culinary satisfaction.
        </p>
        <br/>
        <p>
        We understand that food is not just sustenance; it is an art form that brings people together. <strong><em>That's why our skilled culinary artisans craft each dish with passion and precision, infusing their expertise into every morsel.</em></strong> From our innovative and delectable creations to our time-honored classics, we cater to all palates, leaving no culinary desire unfulfilled.

        To complement our exceptional cuisine, we have created an ambiance that exudes warmth, sophistication, and a touch of modernity. Whether you're celebrating a special occasion, enjoying a meal with loved ones, or seeking a quiet retreat, our elegant surroundings and attentive staff will ensure that your dining experience is nothing short of extraordinary.
        </p>
        <br/>
        <p>
        At <strong><em>"Take It Cheesy"</em></strong>we believe that hospitality is not just about serving food; it's about creating cherished memories. We pride ourselves on our commitment to impeccable service, ensuring that every visit is met with genuine warmth and hospitality. Our team of dedicated professionals is here to cater to your every need, making your time with us truly unforgettable.
        </p>
        <br/>
        <p>
        As a leader among the top restaurants, we continually strive to exceed expectations and set new standards of excellence. We constantly innovate our menu, introducing exciting flavors and seasonal specialties to surprise and delight our guests. <strong><em>It is our unwavering dedication to quality, creativity, and customer satisfaction that has earned us a reputation as a culinary destination worth experiencing.</em>
        </strong>
        </p>
        <br/>
        <p>
        We invite you to embark on a culinary adventure at "Take It Cheesy" and discover the harmonious symphony of flavors that awaits you. Whether you're a connoisseur of fast food, an enthusiast of world cuisines, or someone seeking the comfort of traditional dishes, our restaurant is poised to redefine your dining expectations.
        </p>
        <br/>
        <p>
        Thank you for choosing <strong><em>"Take It Cheesy"</em></strong> - where extraordinary food, impeccable service, and a memorable dining experience are our promises to you.
        </p>
      </Box>
      </Box>
    </Layout>
  );
};

export default About;
