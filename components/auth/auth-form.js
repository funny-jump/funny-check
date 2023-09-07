"use client";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { signIn } from "next-auth/react";

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
`;

const SignUpBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  button {
    background-color: black;
    border: 0;
    color: white;
    font-size: 1.5rem;
    border-radius: 5px;
    &:hover {
      cursor: pointer;
      color: #ff0d64;
    }
  }
`;

const AuthForm = () => {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const router = useRouter();
  const cancelBtn = () => {
    router.back();
  };
  const signUpBtn = () => {
    router.push("/sign-up");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    signIn("credentials", {
      redirect: false,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
    }).then((result) => {
      console.log(result);
      if (!result.error) {
        router.replace("/");
      } else {
        console.log(result);
      }
    });
  };
  return (
    <LoginFormBox>
      <form onSubmit={onSubmitHandler}>
        <LoginTitle>
          <h1>로그인</h1>
        </LoginTitle>
        <LoginInput>
          <input
            type="email"
            id="email"
            placeholder="이메일을 입력하세요"
            ref={inputEmail}
            required
          ></input>
        </LoginInput>
        <LoginInput>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            ref={inputPassword}
            required
          ></input>
        </LoginInput>
        <LoginBtn>
          <button>로그인</button>
          <button type="button" onClick={cancelBtn}>
            취소
          </button>
        </LoginBtn>
        <SignUpBtn>
          <button type="button" onClick={signUpBtn}>
            회원가입
          </button>
        </SignUpBtn>
      </form>
    </LoginFormBox>
  );
};
export default AuthForm;
