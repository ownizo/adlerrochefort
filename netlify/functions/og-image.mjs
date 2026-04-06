import satori from "satori";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

let wasmInitialized = false;

async function ensureWasm() {
  if (!wasmInitialized) {
    const wasmBuffer = await readFile(join(__dirname, "resvg.wasm"));
    await initWasm(wasmBuffer);
    wasmInitialized = true;
  }
}

export default async (req) => {
  const url = new URL(req.url);
  const title = url.searchParams.get("title") || "Adler & Rochefort";
  const subtitle = url.searchParams.get("subtitle") || "Seguros Empresariais & Particulares";

  try {
    await ensureWasm();

    const [fontBold, fontRegular] = await Promise.all([
      readFile(join(__dirname, "Montserrat-Bold.ttf")),
      readFile(join(__dirname, "Montserrat-Regular.ttf")),
    ]);

    const svg = await satori(
      {
        type: "div",
        props: {
          style: {
            width: "1200px",
            height: "630px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            background: "linear-gradient(135deg, #1A3148 0%, #1E3A50 40%, #1B6B93 100%)",
            padding: "60px 80px",
            fontFamily: "Montserrat",
            position: "relative",
            overflow: "hidden",
          },
          children: [
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  top: "-80px",
                  right: "-80px",
                  width: "400px",
                  height: "400px",
                  borderRadius: "50%",
                  background: "rgba(46, 196, 182, 0.12)",
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  bottom: "-120px",
                  right: "200px",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: "rgba(27, 107, 147, 0.15)",
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "32px",
                },
                children: [
                  {
                    type: "div",
                    props: {
                      style: {
                        width: "48px",
                        height: "48px",
                        borderRadius: "8px",
                        background: "#2EC4B6",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "16px",
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#FFFFFF",
                      },
                      children: "A&R",
                    },
                  },
                  {
                    type: "div",
                    props: {
                      style: {
                        fontSize: "22px",
                        fontWeight: 700,
                        color: "#2EC4B6",
                        letterSpacing: "2px",
                        textTransform: "uppercase",
                      },
                      children: "Adler & Rochefort",
                    },
                  },
                ],
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: title.length > 60 ? "36px" : title.length > 40 ? "42px" : "48px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                  maxWidth: "900px",
                  marginBottom: "24px",
                  display: "flex",
                },
                children: title,
              },
            },
            {
              type: "div",
              props: {
                style: {
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.7)",
                  maxWidth: "700px",
                  display: "flex",
                },
                children: subtitle,
              },
            },
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  bottom: "40px",
                  left: "80px",
                  right: "80px",
                  height: "3px",
                  background: "linear-gradient(90deg, #2EC4B6, rgba(46, 196, 182, 0))",
                  display: "flex",
                },
              },
            },
            {
              type: "div",
              props: {
                style: {
                  position: "absolute",
                  bottom: "52px",
                  right: "80px",
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "rgba(255, 255, 255, 0.5)",
                  display: "flex",
                },
                children: "adlerrochefort.com",
              },
            },
          ],
        },
      },
      {
        width: 1200,
        height: 630,
        fonts: [
          { name: "Montserrat", data: fontBold, weight: 700, style: "normal" },
          { name: "Montserrat", data: fontRegular, weight: 400, style: "normal" },
        ],
      }
    );

    const resvg = new Resvg(svg, {
      fitTo: { mode: "width", value: 1200 },
    });
    const pngData = resvg.render();
    const pngBuffer = pngData.asPng();

    return new Response(pngBuffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("OG image generation error:", error);

    // Return a minimal valid PNG fallback (1x1 pixel in brand color #1A3148)
    // so social media crawlers always get a valid image instead of an error
    const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1A3148"/>
          <stop offset="100%" style="stop-color:#1B6B93"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <text x="600" y="290" text-anchor="middle" font-family="sans-serif" font-size="48" font-weight="bold" fill="#2EC4B6">Adler &amp; Rochefort</text>
      <text x="600" y="360" text-anchor="middle" font-family="sans-serif" font-size="24" fill="rgba(255,255,255,0.7)">Seguros Empresariais &amp; Particulares</text>
      <text x="600" y="560" text-anchor="middle" font-family="sans-serif" font-size="16" fill="rgba(255,255,255,0.5)">adlerrochefort.com</text>
    </svg>`;

    return new Response(fallbackSvg, {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "public, max-age=60",
      },
    });
  }
};

export const config = {
  path: "/api/og-image",
  includedFiles: [
    "netlify/functions/Montserrat-Bold.ttf",
    "netlify/functions/Montserrat-Regular.ttf",
    "netlify/functions/resvg.wasm",
  ],
};
