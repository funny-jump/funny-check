import NextAuth from "next-auth/next";
import { MongoClient } from "mongodb";
import { compare } from "bcryptjs";
import CredentialsProvider from "next-auth/providers/credentials";
const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zwyfzii.mongodb.net/?retryWrites=true&w=majority`;

export const authOptions = {
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log("1");
        const client = await MongoClient.connect(url);
        const db = client.db("funny-check");
        const user = await db
          .collection("users")
          .findOne({ email: credentials.email });

        if (!user) {
          client.close();

          throw new Error("존재하지 않는 이메일입니다.");
        }
        const isValid = await compare(credentials.password, user.password);
        if (!isValid) {
          client.close();
          console.log("2");
          throw new Error("비밀번호가 틀립니다.");
        }
        client.close();
        console.log("3");
        return { email: user.email };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
