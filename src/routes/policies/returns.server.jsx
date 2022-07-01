import { Layout } from "../../components/Layout.server";
import { Link, Image } from "@shopify/hydrogen";
import { Head } from "@shopify/hydrogen";

export default function Returns() {

  return (
    <Layout>
      <Head>
        <title>Return Policy</title>
      </Head>
      <div className="mb-40 mt-24 px-8 md:px-12 ">

        <h2 className="text-5xl mb-8"> Return Policy </h2>
        
        <p className="text-2xl leading-relaxed">
        Any claims for misprinted/damaged/defective items must be submitted within 30 days after the product has been received. For packages lost in transit, all claims must be submitted no later than 30 days after the estimated delivery date. Claims deemed an error on our part are covered at our expense.
<br/>
<br/>
If you notice an issue on the products or anything else on the order, we’ll need to  submit a problem report on your behalf.
<br/>
<br/>
The return address is set by default to the Printful facility. 
<br/>
<br/>
Unclaimed - Shipments that go unclaimed are returned to our facility and you will be liable for the cost of a reshipment to Crafted Studios or you as a customer (if and as applicable).
<br/>
<br/>
Printful does not accept returns of sealed goods, such as but not limited to face masks, which are not suitable for return due to health or hygiene reasons. You hereby agree that any returned orders with face masks won’t be available for reshipping and will be disposed of.
<br/>
<br/>
Returned by Customer - Please contact Crafted Studios before returning any products. Except for Customers residing in Brazil, we do not refund orders for buyer’s remorse. Returns for products, face masks, as well as size exchanges are to be offered at your expense and discretion. If you choose to accept returns or offer size exchanges to your end customers, you would need to place a new order at your expense for a face mask or a product in another size. Customers residing in Brazil and regretting a purchase must contact our Customer Service and express their will to return the item within 7 consecutive days after receiving it, providing a picture of the item. The withdrawal request will undergo an evaluation to verify whether the product was used or destroyed, even if partial. In these cases, a refund will not be possible.
<br/>
<br/>
Notification for EU consumers: According to Article 16(c) and (e) of the Directive 2011/83/EU of the European Parliament and of the Council of 25 October 2011 on consumer rights, the right of withdrawal may not be provided for:
<br/>
<br/>
1. the supply of goods that are made to the consumer's specifications or are clearly personalized;
2. sealed goods which were unsealed after delivery and thus aren't suitable for return due to health protection or hygiene reasons,
<br/>
<br/>
therefore Printful reserves rights to refuse returns at its sole discretion.
<br/>
<br/>
This Policy shall be governed and interpreted in accordance with the English language, regardless of any translations made for any purpose whatsoever.
<br/>
<br/>
For more info on returns, please read our FAQs. 
        </p>
        

      </div>
    </Layout>
  );
}

