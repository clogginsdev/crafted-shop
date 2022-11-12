import FeaturedCollections from "../components/FeaturedCollections.server";
import { Layout } from "../components/Layout.server";
import { Suspense } from "react";
import { Link, Image, gql, useShopQuery} from "@shopify/hydrogen";

export default function Home() {
  const {data} = useShopQuery({
    query: QUERY,
  });


  return (
    <Layout>
      <div className="mb-52 mt-24 px-8 md:px-12 md:mb-96">
        <p className="text-2xl leading-snug md:text-4xl md:font-normal md:leading-normal lg:text-5xl lg:leading-normal lg:w-2/3">Crafted Studios is a design studio based in Los Angeles, California, but working internationally. We’re about people, collaborations, and making things an enjoyable experience for others.</p>
      </div>
      <Suspense>
      <section className="px-8 mb-52 md:px-12">
        <h2 className="text-2xl mb-24 md:text-5xl">Discover our Summer Collection</h2>
      <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3 lg:gap-8">
        
        {data.products.nodes.map((product) => {
          return (
            
            <div key={product.id}>
              <Link className="" to={`/products/${product.handle}`}>
              <Image alt={product.title} data={product.featuredImage} />
              <div className="flex items-center px-6 justify-between">
              <h3 className="text-md">{product.title}, {product.tags}</h3>
              <p className="text-md">${product.priceRange.minVariantPrice.amount}</p>
              </div>
              </Link>
            </div>
            
          );
        }
        )}
      </div>
      </section>
      </Suspense>
    </Layout>
  );
        }

const QUERY = gql`
{
  products (first: 10) {
    nodes {
      featuredImage {
        url
      }
      title
			handle
      priceRange {
        minVariantPrice {
          amount
        }
      }
      tags
    	}
      }
    }
  `;
