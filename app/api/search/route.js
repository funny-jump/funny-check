import { NextResponse } from "next/server";

/* 전체 리스트 불러오기 */
export const GET = async () => {
  const res = await fetch(
    `https://api.odcloud.kr/api/15050912/v1/uddi:0a633058-9843-40fe-93d0-b568f23b715e_201909261047?page=1&perPage=30&serviceKey=${process.env.api_key}`
  );
  const data = await res.json();
  return NextResponse.json(data.data);
};

/* 검색 값 불러우기 */
export const POST = async (req) => {
  console.log("search/route.js post 요청을 받음");
  const request = await req.json();
  const search = request.data;

  const res = await fetch(
    `https://api.odcloud.kr/api/15050912/v1/uddi:0a633058-9843-40fe-93d0-b568f23b715e_201909261047?page=1&perPage=30&serviceKey=${process.env.api_key}`
  );
  const data = await res.json();

  const model = data.data.filter((m) => m["음식명"].indexOf(search) != -1);
  console.log("search/route.js 필터링된 값", model);
  return NextResponse.json(model);
};
