// app/product/[slug]/page.jsx
import ProductDetails from "../ProductDetailsPage";
import { getSeoMetadata } from '../../Componets/SEO/SeoHead'
import { slugify } from '../../Utility/Slugify'
export async function generateMetadata({ params }) {
    console.log(params)
    const { slug } = await params;
    const slugify1 = slugify(slug);

    return getSeoMetadata({
        title: `${slugify1} | Modern Furniture Store`,
        description: `Buy ${slugify1} — premium, durable, and smartly designed furniture with wireless charging and LED lighting.`,
        image: "./images/all/1.jpg",
        url: `https://nextproject-xxrq.onrender.com/product-details/${slugify1}`,
    });
}

export default function ProductPage({ params }) {
    return <ProductDetails slug={params.slug} />;
}
