import { imageURL } from "@/assets/image";
import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import React from "react";

function About() {
  return (
    <>
      <Container>
        <Box
          sx={{
            backgroundColor: "rgb(247 247 247)",
            borderRadius: { lg: "20px", md: "20px", sm: "0", xs: "0" },
            overflow: "hidden",
            marginTop: { lg: "20px", md: "20px", sm: "0", xs: "0" },
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <Box
              sx={{
                paddingTop: "10px",
                paddingLeft: "30px",
                paddingRight: "15px",
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "400",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "25px",
                  fontSize: {
                    lg: "34px",
                    md: "28px",
                    sm: "26px",
                    xs: "22px",
                  },
                }}
              >
                Social Banner Maker
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{ mt: 2, color: "white", textAlign: "center", pb: 3 }}
              >
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/"
                >
                  Home
                </Link>
                |
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/privacy"
                >
                  Privacy
                </Link>
                |
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/termsandcondition"
                >
                  Term & Condition
                </Link>
                |
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/about-us"
                >
                  About us
                </Link>
                |
                <Link
                  className="linkHover"
                  style={{
                    marginRight: "5px",
                    marginLeft: "5px",
                    textDecoration: "none",
                    color: "white",
                  }}
                  href="/disclaimer"
                >
                  Disclaimer
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
        <h2 style={{ textAlign: "center" }}>About Us!</h2>
        <h3>
          Welcome To <span id="W_Name1">social-banner-maker</span>
        </h3>
        <p>
          <span id="W_Name2">social-banner-maker</span> is a Professional{" "}
          <span id="W_Type1">tools</span> Platform. Here we will provide you
          only interesting content, which you will like very much. Were
          dedicated to providing you the best of <span id="W_Type2">tools</span>
          , with a focus on dependability and{" "}
          <span id="W_Spec">online making banner tools</span>. Were working to
          turn our passion for <span id="W_Type3">tools</span> into a booming{" "}
          <a
            href="https://www.blogearns.com/2021/05/free-about-us-page-generator.html"
            rel="do-follow"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            online website
          </a>
          . We hope you enjoy our <span id="W_Type4">tools</span> as much as we
          enjoy offering them to you.
        </p>
        <p>
          I will keep posting more important posts on my Website for all of you.
          Please give your support and love.
        </p>
        <p style={{ fontWeight: "bold" }}>
          Thanks For Visiting Our Site
          <br />
          <br />
          <span
            style={{
              color: "blue",
              fontSize: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Have a nice day!
          </span>
        </p>
      </Container>
    </>
  );
}

export default About;
