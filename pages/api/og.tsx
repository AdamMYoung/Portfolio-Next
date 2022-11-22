import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { getContentRepository } from "../../src/utils/content";

export const config = {
    runtime: "experimental-edge",
};

const handler = async (req: NextRequest) => {
    const { searchParams } = req.nextUrl;

    const name = searchParams.get("name");
    const imageUrl = searchParams.get("imageUrl");

    console.log(req.nextUrl ?? "");

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
                    <div tw="flex flex-col md:flex-row w-full p-12 gap-12 md:items-center justify-between">
                        <h2 tw="flex w-[66%] flex-col font-bold tracking-tight text-gray-900 text-left">
                            <span tw="text-white text-6xl">{decodeURIComponent(name ?? "")}</span>
                            <span tw="text-indigo-600 text-5xl">AdamMYoung</span>
                        </h2>

                        <div tw="flex w-33% p-4">
                            {imageUrl && <img tw="h-64 rounded" alt="" src={decodeURIComponent(imageUrl)} />}
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
