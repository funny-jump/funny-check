import { NextResponse } from "next/server";
import { hash, compare } from "bcryptjs";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { MongoClient } from "mongodb";

const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zwyfzii.mongodb.net/?retryWrites=true&w=majority`;

export const PATCH = async (req) => {
  console.log("edit-info/rouet.js : patch 요청을 받음");
  const request = await req.json();

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "허가되지 않은 사용자 입니다." });
  }

  console.log("edit-info/rouet.js : session email : ", session.user.email);
  console.log("edit-info/rouet.js : old password : ", request.password);
  console.log("edit-info/rouet.js : new password : ", request.changePassword);

  const userEmail = session.user.email;
  const oldPassword = request.password;
  const newPassword = request.changePassword;

  const client = await MongoClient.connect(url);
  const userCollection = client.db("funny-check").collection("users");

  const user = await userCollection.findOne({ email: userEmail });
  console.log("edit-info/rouet.js : user from db : ", user);
  if (!user) {
    client.close();
    return NextResponse.json({ message: "db에 존재하지 않습니다." });
  }

  const currentPassword = user.password;
  if (!compare(oldPassword, currentPassword)) {
    client.close();
    return NextResponse.json({ message: "비밀번호가 틀립니다." });
  }
  console.log("edit-info/rouet.js :  old pass === user password from db ");

  const hashedPassword = await hash(newPassword, 12);

  userCollection.updateOne(
    { email: userEmail },
    { $set: { password: hashedPassword } }
  );
  console.log("edit-info/rouet.js :  update pass in db ");
  const changedpass = await compare(newPassword, user.password);
  const data = {
    oldpass: oldPassword,
    newpass: newPassword,
    changedpass: changedpass,
  };
  client.close();
  return NextResponse.json(data);
};
