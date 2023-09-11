"use client";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Toast from "../layout/toast";

const SignUpFormBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  form {
    width: 720px;
  }
`;
const SignUpInput = styled.div`
  display: flex;
  justify-content: center;
  input {
    font-size: 1.5rem;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: teal 1px solid;
    border-color: black;
  }
  & + & {
    margin-top: 0.5rem;
  }
`;
const SignUpBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  button {
    background-color: black;
    color: white;
    font-size: 1.5rem;
    border-radius: 5px;
    border: 0;
    &:hover {
      cursor: pointer;
      color: #ff0d64;
    }
  }
  button + button {
    margin-left: 1rem;
  }
`;
const SignUpTitle = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpForm = () => {
  const router = useRouter();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputName = useRef();
  const inputPasswordCheck = useRef();
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");

  const cancelBtn = () => {
    router.back();
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const userData = {
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      passwordCheck: inputPasswordCheck.current.value,
      name: inputName.current.value,
    };

    fetch("/api/sign-up", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToast(true);

        setMessage(data.message);
        if (data.status == 200) {
          const timer = setTimeout(() => {
            router.push("/sign-in");
            setToast(false);
          }, 1500);
          return () => {
            clearTimeout(timer);
          };
        }
      });
  };

  return (
    <SignUpFormBox>
      {toast && <Toast setToast={setToast} text={message}></Toast>}
      <form onSubmit={onSubmitHandler}>
        <SignUpTitle>
          <h1>회원가입</h1>
        </SignUpTitle>
        <SignUpInput>
          <input
            type="text"
            id="name"
            placeholder="이름을 입력하세요"
            ref={inputName}
            required
          ></input>
        </SignUpInput>
        <SignUpInput>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            ref={inputEmail}
            required
          ></input>
        </SignUpInput>
        <SignUpInput>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            ref={inputPassword}
            required
          ></input>
        </SignUpInput>
        <SignUpInput>
          <input
            type="password"
            id="password"
            placeholder="비밀번호 확인"
            ref={inputPasswordCheck}
            required
          ></input>
        </SignUpInput>
        <SignUpBtn>
          <button>회원가입</button>
          <button type="button" onClick={cancelBtn}>
            취소
          </button>
        </SignUpBtn>
      </form>
    </SignUpFormBox>
  );
};
export default SignUpForm;
