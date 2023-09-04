import { hash } from "bcryptjs";

export const getDbUrl = () => {
  return `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zwyfzii.mongodb.net/?retryWrites=true&w=majority`;
};

export const hashedData = async (data) => {
  return await hash(data, 12);
};
