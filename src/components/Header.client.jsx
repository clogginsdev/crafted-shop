import { useUrl, Link, useCart } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./Drawer.client";
import { CartDetails } from "./CartDetails.client";
import { Image } from "@shopify/hydrogen";

export default function Header({ shop }) {
  const { pathname } = useUrl();
  const { isOpen, openDrawer, closeDrawer } = useDrawer();

  const isHome = pathname === "/";
  return (
    <>
      <Drawer open={isOpen} onClose={closeDrawer}>
        <div className="grid">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
          </Drawer.Title>
          <CartDetails onClose={closeDrawer} />
        </div>
      </Drawer>
      <header
        role="banner"
        className={`flex items-center justify-between py-12 px-8 md:px-12 `}
      >
        <div className="md:w-auto">
          <Link className="font-bold" to="/">
            <Image alt="Crafted Studios" src="../assets/crafted-logo.svg" width={'230px'} height={'auto'} className="w-5/6 md:w-5/6"/>
          </Link>
        </div>
        <div className="flex items-center gap-4">
        <Link className="text-sm md:text-lg border border-gray-900 rounded-full px-2 py-1" to="/">SHOP</Link>
        <a className="text-sm  md:text-lg border border-gray-900 rounded-full px-2 py-1" href="https://www.craftedstudios.co/">STUDIO</a>
        <button
          onClick={openDrawer}
          className="relative flex items-center justify-center w-10 h-10"
        >
          <IconBag className="p-4"/>
          <CartBadge dark={isHome} />
        </button>
        </div>
        
      </header>
    </>
  );
}

function IconBag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#fff"
      className="w-7 h-7 bg-black rounded-full p-1"
    >
      <title>Bag</title>
      <path
        fillRule="evenodd"
        d="M8.125 5a1.875 1.875 0 0 1 3.75 0v.375h-3.75V5Zm-1.25.375V5a3.125 3.125 0 1 1 6.25 0v.375h3.5V15A2.625 2.625 0 0 1 14 17.625H6A2.625 2.625 0 0 1 3.375 15V5.375h3.5ZM4.625 15V6.625h10.75V15c0 .76-.616 1.375-1.375 1.375H6c-.76 0-1.375-.616-1.375-1.375Z"
      />
    </svg>
  );
}

function CartBadge({ dark }) {
  const { totalQuantity } = useCart();

  if (totalQuantity < 1) {
    return null;
  }
  return (
    <div
      className={`${
        dark ? "text-black bg-white" : "text-white bg-black"
      } absolute bottom-1 right-1 text-[0.625rem] font-medium subpixel-antialiased h-3 min-w-[0.75rem] flex items-center justify-center leading-none text-center rounded-full w-auto px-[0.125rem] pb-px`}
    >
      <span>{totalQuantity}</span>
    </div>
  );
}
