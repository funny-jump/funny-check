"use client";
import { useEffect } from "react";
import styled from "styled-components";

const ToastBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 5rem;
  z-index: 1;
  background-color: black;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 20px;
  p {
    color: white;
  }
`;

const Toast = ({ setToast, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setToast]);

  return (
    <ToastBox>
      <p>{text}</p>
    </ToastBox>
  );
};

export default Toast;
