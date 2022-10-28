/* eslint-disable @next/next/no-server-import-in-page */
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
    runtime: "experimental-edge",
};

const handler = (req: NextRequest) => {
    const { searchParams } = req.nextUrl;

    const name = searchParams.get("name");
    const description = searchParams.get("description");
    const imageUrl = searchParams.get("imageUrl");

    return new ImageResponse(
        (
            // Modified based on https://tailwindui.com/components/marketing/sections/cta-sections
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    fontSize: 100,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                }}
            >
                <div tw="bg-black flex">
                    <div tw="flex flex-col md:flex-row w-full p-12 md:items-center justify-between">
                        <h2 tw="flex flex-col font-bold tracking-tight text-gray-900 text-left">
                            <span tw="text-white text-6xl">{name}</span>
                            <span tw="text-indigo-600 text-5xl">{description}</span>
                        </h2>

                        <div tw="flex p-4">
                            {imageUrl && <img tw="h-72 rounded" alt="" src={decodeURIComponent(imageUrl)} />}
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
};

export default handler;
