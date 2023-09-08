import { NextResponse } from "next/server";
export const GET = async () => {
  const res = await fetch(
    `https://api.odcloud.kr/api/15050912/v1/uddi:0a633058-9843-40fe-93d0-b568f23b715e_201909261047?page=1&perPage=10&serviceKey=data-portal-test-key`
  );
  const data = await res.json();
  return NextResponse.json(data);
};
export const POST = async (req) => {
  const request = await req.json();
  const data = request.data;
  return NextResponse.json(data);
};
