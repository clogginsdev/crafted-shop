import {
  ProductOptionsProvider,
  MediaFile,
  useProductOptions,
  ProductPrice,
  BuyNowButton,
  AddToCartButton,
} from "@shopify/hydrogen";

export default function ProductDetails({ product }) {
  return (
    <ProductOptionsProvider data={product}>
      <section className="xl:max-w-screen-2xl mx-auto p-16 w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
        <div className="grid items-start gap-6 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
          <div className="sticky col-span-2 md:col-span-1 md:mx-auto max-w-xl md:max-w-[24rem] grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">
            <div className="grid gap-2">
              

            </div>
            <ProductForm product={product} />
            <div className="mt-8">
              <div
                className="prose border-t border-gray-200 pt-6 text-black text-md"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              ></div>
            </div>
          </div>
          <div className="grid md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full lg:col-span-2">

            <div className="col-span-2 mt-32 md:col-span-2  snap-center card-image aspect-square md:w-full w-full">
              <ProductGallery media={product.media.nodes} />
            </div>
          </div>

        </div>
      </section>
    </ProductOptionsProvider>
  );
}

function ProductForm({ product }) {
  const { options, selectedVariant } = useProductOptions();

  return (
    <form className="grid gap-10">
      {
        <div className="grid gap-4">
          {options.map(({ name, values }) => {
            if (values.length === 1) {
              return null;
            }
            return (

              <div
                key={name}
                className="flex flex-wrap items-baseline justify-start gap-6"
              >
                <div className="w-full">
                <ProductPrice
                    className="text-gray-900 line-through text-4xl font-light"
                    priceType="compareAt"
                    variantId={selectedVariant.id}
                    data={product}
                  />
                  <ProductPrice
                    className="text-gray-900 text-4xl font-light"
                    variantId={selectedVariant.id}
                    data={product}
                  />
                <h1 className="text-6xl leading-snug font-light leading-10 whitespace-normal">
                {product.title}
                </h1>
                  
                </div>
                <div className="flex flex-wrap items-baseline gap-4">
                  <OptionRadio name={name} values={values} />
                </div>
              </div>
            );
          })}
        </div>
      }

      <div className="grid items-stretch gap-4">
        <PurchaseMarkup />
      </div>
    </form>
  );
}

function PurchaseMarkup() {
  const { selectedVariant } = useProductOptions();
  const isOutOfStock = !selectedVariant?.availableForSale || false;

  return (
    <>
      <AddToCartButton
        variantId={selectedVariant.id}
        quantity={1}
        accessibleAddingToCartLabel="Adding item to your cart"
        disabled={isOutOfStock}
      >
        <span className="bg-black text-white inline-block rounded-sm font-medium text-center rounded-full border-0 py-3 px-6 max-w-xl leading-none w-full">
          {isOutOfStock ? "Sold out" : "Add to bag"}
        </span>
      </AddToCartButton>
      {isOutOfStock ? (
        <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">
          Available in 2-3 weeks
        </span>
      ) : (
        <BuyNowButton variantId={selectedVariant.id}>
          <span className="inline-block rounded-full font-medium text-center py-3 px-6 max-w-xl leading-none border w-full">
            Buy it now
          </span>
        </BuyNowButton>
      )}
    </>
  );
}

function OptionRadio({ values, name }) {
  const { selectedOptions, setSelectedOption } = useProductOptions();

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;

        return (
          <label key={id} htmlFor={id}>
            <input
              className="sr-only"
              type="radio"
              id={id}
              name={`option[${name}]`}
              value={value}
              checked={checked}
              onChange={() => setSelectedOption(name, value)}
            />
            <div
              className={`${checked ? "border-[2px] px-6 rounded-full border-gray-900" : "border-[1px] px-6 rounded-full  border-gray-700"}`}
            >
              {value}
            </div>
          </label>
        );
      })}
    </>
  );
}

function ProductGallery({ media }) {
  if (!media.length) {
    return null;
  }

  return (
    <div
      className={`grid gap-4 overflow-x-scroll grid-flow-col md:grid-flow-row  md:p-0 md:overflow-x-auto md:grid-cols-2 w-screen md:w-full lg:col-span-2`}
    >
      {media.map((med, i) => {
        let extraProps = {};

        if (med.mediaContentType === "MODEL_3D") {
          extraProps = {
            interactionPromptThreshold: "0",
            ar: true,
            loading: "eager",
            disableZoom: true,
          };
        }

        const data = {
          ...med,
          image: {
            ...med.image,
            altText: med.alt || "Product image",
          },
        };

        return (
          <div
            className={`${i % 3 === 0 ? "md:col-span-2" : "md:col-span-1"
              } snap-center card-image bg-white aspect-square md:w-full w-[80vw] shadow-sm rounded`}
            key={med.id || med.image.id}
          >
            <MediaFile
              tabIndex="0"
              className={`w-full h-full aspect-square object-cover`}
              data={data}
              options={{
                crop: "center",
              }}
              {...extraProps}
            />
          </div>
        );
      })}
    </div>
  );
}
