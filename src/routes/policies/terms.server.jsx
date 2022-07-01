import { Layout } from "../../components/Layout.server";
import { Link, Image } from "@shopify/hydrogen";
import { Head } from "@shopify/hydrogen";

export default function Terms() {

  return (
    <Layout>
      <Head>
        <title>Terms & Conditions</title>
      </Head>
      <div className="mb-40 mt-24 px-8 md:px-12 leading-relaxed ">

        <h2 className="text-5xl mb-8"> Terms & Orders </h2>
        <h2 className="text-3xl mb-8"> Delivery </h2>

        <p className="text-2xl md:w-2/3">
          Usually, it takes 3–7 days to fulfill an order, after which it’s shipped out. The shipping time depends on your location, but can be estimated as follows:
          <br />
          <br />
          <p className="mb-4">USA: 3–4 business days</p>

          <p className="mb-4">Europe: 6–8 business days</p>

          <p className="mb-4">Australia: 2–14 business days</p>

          <p className="mb-4">Japan: 4–8 business days</p>

          <p className="mb-4">International: 10–20 business days</p>

        </p>
      </div>

      <div className="mb-40 mt-24 px-8 md:px-12 ">
        <h2 className="text-3xl mb-2"> Where will my order ship from? </h2>
        <p className="text-2xl mb-16">We work with an on-demand order fulfillment company with facilities worldwide! </p>

        <h2 className="text-3xl mb-2"> Will I be charged customs for my order?</h2>
        <p className="text-2xl mb-16">An additional customs and tax fee can occur on international orders. This fee is not in our control and is assessed by your local customs office. Customs policies vary widely for every country so please check with your local customs office directly to see if they apply duties and taxes to your purchases. </p>

        <h2 className="text-3xl mb-2"> My order should be here by now, but I still don't have it. What should I do? </h2>
        <p className="text-2xl mb-2">Before getting in touch with us, please help us out by doing the following: </p>
        <ul className="mb-8 list-disc pl-6 text-lg">
          <li>Check your shipping confirmation email for any mistakes in the delivery address</li>
          <li>Ask your local post office if they have your package</li>
          <li>Stop by your neighbors in case the courier left the package with them</li>
        </ul>
        <p className="text-2xl mb-16">If the shipping address was correct, and the package wasn't left at the post office or at your neighbor’s, get in touch with us at hello@craftedstudios.co with your order number.
          If you did find a mistake in your delivery address, we can send you a replacement order, but shipping will be at your own cost.</p>

        <h2 className="text-4xl mb-12"> Orders </h2>

        <h2 className="text-3xl mb-4">How are your products made?</h2>
        <p className="text-2xl mb-8">We work with a print-on-demand drop shipper. They have locations worldwide, so depending on where you are, your orders are printed and shipped from the facility that can do it most efficiently! </p>

        <h2 className="text-3xl mb-4">How do I track my order?</h2>
        <p className="text-2xl mb-8">You’ll receive a tracking link via email when your order ships out. If you have any questions about your tracking or shipment, drop us a line at hello@craftedstudios.co. </p>

        <h2 className="text-3xl mb-4">I received a wrong/damaged product, what should I do?</h2>
        <p className="text-2xl mb-16">We’re so sorry if the product you ordered arrived damaged. To help us resolve this for you quickly, please email us at hello@craftedstudios.co within a weeks' time with photos of the damaged product, your order number, and any other details you may have about your order. We’ll get back to you with a resolution as soon as possible! </p>

        <h2 className="text-4xl mb-12">Returns </h2>

        <h2 className="text-3xl mb-4">What’s your return policy?</h2>
        <p className="text-2xl mb-8">We don’t offer returns and exchanges, but if there’s something wrong with your order, please let us know by contacting us at hello@craftedstudios.co</p>

        <h2 className="text-3xl mb-4">Do you offer refunds?</h2>
        <p className="text-2xl mb-8">Refunds are only offered to customers that receive the wrong items or damaged items. If any of these apply, please contact us at hello@craftedstudios.co with photos of wrong/damaged items and we’ll sort that out for you.</p>

        <h2 className="text-3xl mb-4">Can I exchange an item for a different size/color?</h2>
        <p className="text-2xl mb-8">At this time, we don't offer exchanges. If you’re unsure which size would fit better, check out our sizing charts—we have one for every item listed on our store, in the product description section. Though rare, it's possible that an item you ordered was mislabelled. If that’s the case, please let us know at hello@craftedstudios.co within a week after receiving your order. Include your order number and photos of the mislabeled item, and we’ll send you a new one, or issue a refund!</p>


      </div>
    </Layout>
  );
}

