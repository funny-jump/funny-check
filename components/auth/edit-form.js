"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { signIn, useSession } from "next-auth/react";
import Toast from "../layout/toast";

const LoginFormBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  form {
    width: 720px;
  }
`;

const LoginInput = styled.div`
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
const LoginBtn = styled.div`
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
const LoginTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const EditForm = () => {
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  const { data: session, state } = useSession();
  const inputPassword = useRef();
  const inputChangePassword = useRef();
  const router = useRouter();

  const cancelBtn = () => {
    router.back();
  };

  const onSubmitHandler = (event) => {
    console.log("edit-form : 비밀번호 변경 요청");
    event.preventDefault();

    const data = {
      password: inputPassword.current.value,
      changePassword: inputChangePassword.current.value,
    };

    fetch("/api/edit-info", {
      method: "PATCH",
      body: JSON.stringify(data),
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
            router.push("/");
            setToast(false);
          }, 1500);
          return () => {
            clearTimeout(timer);
          };
        }
      });
  };

  return (
    <LoginFormBox>
      {toast && <Toast setToast={setToast} text={message}></Toast>}
      <form onSubmit={onSubmitHandler}>
        <LoginTitle>
          <h1>비밀 번호 변경</h1>
        </LoginTitle>

        <LoginInput>
          <h1>이메일 : {session.user.email}</h1>
        </LoginInput>
        <LoginInput>
          <input
            type="password"
            id="password"
            placeholder="기존 비밀번호"
            ref={inputPassword}
            required
          ></input>
        </LoginInput>
        <LoginInput>
          <input
            type="password"
            id="password"
            placeholder="변경 할 비밀번호"
            ref={inputChangePassword}
            required
          ></input>
        </LoginInput>
        <LoginBtn>
          <button>변경하기</button>
          <button type="button" onClick={cancelBtn}>
            취소
          </button>
        </LoginBtn>
      </form>
    </LoginFormBox>
  );
};
export default EditForm;
