import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { hash } from "bcryptjs";
const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zwyfzii.mongodb.net/?retryWrites=true&w=majority`;
export const POST = async (req) => {
  const request = await req.json();

  if (request.password != request.passwordCheck) {
    return NextResponse.json({
      status: 405,
      message: "비밀번호를 다시 확인해 주세요.",
    });
  }

  const client = await MongoClient.connect(url);

  const db = client.db("funny-check");
  const hashedPassword = await hash(request.password, 12);

  const user = {
    email: request.email,
    password: hashedPassword,
  };

  /*existed user*/
  const existedUser = await db
    .collection("users")
    .findOne({ email: user.email });
  if (existedUser) {
    client.close();
    return NextResponse.json({
      status: 405,
      message: "이미 존재하는 이메일 주소 입니다.",
      existedUser,
    });
  }

  await db.collection("users").insertOne(user);
  return NextResponse.json({
    status: 200,
    message: "회원가입 성공! 로그인 페이지로 이동합니다.",
  });
};
