export function getSeoMetadata({
    title = "Smart Bench Pro | Modern Furniture",
    description = "Experience Smart Bench Pro — modern, durable, and packed with smart features like wireless charging, LED lighting, and more.",
    image = "/images/all/1.jpg",
    url = "https://yourwebsite.com",
    keywords = "smart bench, modern furniture, wooden bench, wireless charging",
}) {
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: url, // ✅ Canonical URL (helps avoid duplicate pages)
        },
        openGraph: {
            title,
            description,
            url,

            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}
