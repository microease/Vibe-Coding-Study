import NextAuth from "next-auth";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";

export const config = {
  providers: [],
  adapter: MongoDBAdapter(clientPromise),
  // 添加其他配置选项
  session: {
    strategy: "jwt",
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(config);
