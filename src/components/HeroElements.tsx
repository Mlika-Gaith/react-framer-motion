import { motion } from "framer-motion";
import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: #0a0f1e;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  max-width: 1300px;
  padding: 3rem calc((100vw-1300px) / 2);
  @media screen and(max-width:768px) {
    grid-template-columns: 1fr;
  }
`;

export const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
  p {
    margin-bottom: 1.5rem;
    font-size: 2rem;
    text-transform: capitalize;
  }
  img {
    position: relative;
    bottom: -10px;
    left: 50px;
    max-width: 400px;
    max-height: 400px;
  }
`;

export const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1.2rem;
  font-weight: 600;
  border: 2px solid #000;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: #ffc44c;
  color: #000;
`;

export const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

export const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 25px;
    left: 15px;
  }
  ${Image}:nth-child(2) {
    top: 150px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 40px;
  }
  ${Image}:nth-child(4) {
    bottom: 180px;
    right: 75px;
  }
`;
