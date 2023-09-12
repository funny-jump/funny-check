"use client";
import styled from "styled-components";
import Image from "next/image";

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 7rem);
`;
const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }

  div {
    font-size: 2.5rem;
    position: absolute;
    left: 40%;
    top: 50%;
  }
`;
const Hero = () => {
  return (
    <Box>
      <ImageBox>
        <Image
          src="/images/hero_sample.png"
          alt="Hero 이미지 입니다."
          width={1440}
          height={900}
        ></Image>
        <div>
          <span style={{ color: "#ff0d64" }}>즐겁고</span>
          <span> 쉽게 일지를 </span>
          <span style={{ color: "#ff0d64" }}>CHECK</span>
          <span> 하자! </span>
        </div>
      </ImageBox>
    </Box>
  );
};
export default Hero;
