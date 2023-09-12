import { hash } from 'bcryptjs';

export const getDbUrl = () => {
  return `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.zwyfzii.mongodb.net/?retryWrites=true&w=majority`;
};

export const getCalInfoAPIUrl = (page = 1, perPage = 637) => {
  return `https://api.odcloud.kr/api/15050912/v1/uddi:0a633058-9843-40fe-93d0-b568f23b715e_201909261047?page=${page}&perPage=${perPage}&serviceKey=${process.env.api_key}`;
};

export const hashedData = async data => {
  return await hash(data, 12);
};
