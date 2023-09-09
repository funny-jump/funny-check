import { NextResponse } from "next/server";
export const GET = async (request, { params }) => {
  const page = params.page;
  console.log(page);
  const res = await fetch(
    `https://api.odcloud.kr/api/15050912/v1/uddi:0a633058-9843-40fe-93d0-b568f23b715e_201909261047?page=1&perPage=637&serviceKey=${process.env.api_key}`
  );
  const data = await res.json();
  return NextResponse.json(data);
};
