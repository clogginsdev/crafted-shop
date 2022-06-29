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
      <div className="xl:max-w-screen-2xl mx-auto p-16 md:mt-16 md:mb-16">
        <p className="font-light text-2xl leading-relaxed md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed">Crafted Studios is a design studio based in Los Angeles, California, but working internationally. We’re about people, collaborations, and making things an enjoyable experience for others. This time, we decided to do that through apparel, bringing you our first collection ever. We hope you enjoy these threads and stay comfortable this summer. </p>
      </div>
      <Suspense>
      <div className="xl:max-w-screen-2xl mx-auto p-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.products.nodes.map((product) => {
            return (
              
              <div style={{border: '1px solid #323232'}} key={product.id}>
                <Link className="divide-y divide-slate-600" to={`/products/${product.handle}`}>
                <Image alt={product.title} data={product.featuredImage} />
                <div className="flex items-center p-4 justify-between">
                <h2 className="text-lg">{product.title}</h2>
                <p className="text-lg">{product.tags}</p>
                </div>
                </Link>
              </div>
              
            );
          }
          )}
        </div>
      </Suspense>
    </Layout>
  );
        }

const QUERY = gql`
{
  products (first: 6) {
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