import { ShoppingCart, Trash2, Plus, Minus, Star } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";

const Cart = ({ removeCart }) => {
  const { cartItems, setCartItems, toggle, setToggle } = useContext(MyStore);
  console.log(cartItems)

  const total  = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-slate-50 px-5 py-8">
      {/* Header */}
      <div className="mx-auto mb-8 flex max-w-6xl items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-md">
          <ShoppingCart size={23} />
        </div>

        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Your Cart</h1>
          <p className="text-sm text-slate-500">
            {cartItems.length} {cartItems.length === 1 ? "product" : "products"}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white">
            <ShoppingCart size={50} className="mb-4 text-slate-300" />
            <h2 className="text-xl font-bold text-slate-800">
              Your cart is empty
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Add some products to get started.
            </p>
          </div>
        ) : (
          <>
            {/* Products */}
            <div className="space-y-4">
              {cartItems.map((elem) => (
                <div
                  key={elem.id}
                  className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:flex-row sm:items-center"
                >
                  {/* Image */}
                  <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-xl bg-slate-50 p-4 sm:w-32">
                    <img
                      src={elem.image}
                      alt={elem.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-1">
                      <Star
                        size={14}
                        fill="currentColor"
                        className="text-amber-500"
                      />
                      <span className="text-sm font-semibold">
                        {elem.rating.rate}
                      </span>
                    </div>

                    <h2 className="line-clamp-2 text-lg font-bold text-slate-900">
                      {elem.title}
                    </h2>

                    <p className="mt-2 text-sm capitalize text-slate-400">
                      {elem.category}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-white hover:text-indigo-600">
                      <Minus size={16} />
                    </button>

                    <span className="flex h-9 min-w-9 items-center justify-center font-bold text-slate-800">
                      {elem.quantity}
                    </span>

                    <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-white hover:text-indigo-600">
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Price */}
                  <div className="min-w-24 text-right">
                    <p className="text-xs text-slate-400">Price</p>
                    <p className="text-xl font-extrabold text-slate-900">
                      ${(elem.price).toFixed(2)}
                    </p>
                  </div>

                  {/* Delete */}
                  <button 
                  onClick={()=>removeCart(elem.id)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 transition hover:bg-red-50 hover:text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div>
                <p className="text-sm font-medium text-slate-400">
                  Total Amount
                </p>
                <p className="text-3xl font-extrabold text-slate-900">
                  ${total.toFixed(2)}
                </p>
              </div>

              <button className="rounded-xl bg-indigo-600 px-7 py-3 font-bold text-white shadow-md transition hover:bg-indigo-700 active:scale-95">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
