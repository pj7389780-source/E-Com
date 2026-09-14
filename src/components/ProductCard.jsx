import { ShoppingCart, Star, Heart, ArrowUpRight } from "lucide-react";
import { useContext } from "react";
import { MyStore } from "../context/MyStore";


const ProductCard = ({ elem }) => {
  const {setCartItems} = useContext(MyStore)
  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {" "}
      {/* Image Section */}{" "}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-slate-50 p-6">
        {" "}
        {/* Category */}{" "}
        <span className="absolute left-4 top-4 z-10 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold capitalize text-white">
          {" "}
          {elem.category}{" "}
        </span>{" "}
        {/* Wishlist */}{" "}
        <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition-all duration-200 hover:bg-red-50 hover:text-red-500 active:scale-90">
          {" "}
          <Heart size={18} />{" "}
        </button>{" "}
        {/* Product Image */}{" "}
        <img
          src={elem.image}
          alt={elem.title}
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />{" "}
        {/* View Product */}{" "}
        <button className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-800 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          {" "}
          View <ArrowUpRight size={16} />{" "}
        </button>{" "}
      </div>{" "}
      {/* Content */}{" "}
      <div className="p-6">
        {" "}
        {/* Category + Rating */}{" "}
        <div className="mb-3 flex items-center justify-between gap-3">
          {" "}
          <p className="text-sm font-semibold capitalize tracking-wide text-indigo-600">
            {" "}
            {elem.category}{" "}
          </p>{" "}
          <div className="flex shrink-0 items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1">
            {" "}
            <Star
              size={15}
              fill="currentColor"
              className="text-amber-500"
            />{" "}
            <span className="text-sm font-bold text-slate-700">
              {" "}
              {elem.rating.rate}{" "}
            </span>{" "}
            <span className="text-xs text-slate-400">
              {" "}
              ({elem.rating.count}){" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
        {/* Title */}{" "}
        <h2 className="line-clamp-2 min-h-14 text-lg font-bold leading-snug text-slate-900">
          {" "}
          {elem.title}{" "}
        </h2>{" "}
        {/* Description */}{" "}
        <p className="mt-3 line-clamp-3 min-h-18 text-sm leading-6 text-slate-500">
          {" "}
          {elem.description}{" "}
        </p>{" "}
        {/* Bottom */}{" "}
        <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
          {" "}
          {/* Price */}{" "}
          <div>
            {" "}
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              {" "}
              Price{" "}
            </p>{" "}
            <p className="text-2xl font-extrabold text-slate-900">
              {" "}
              ${elem.price}{" "}
            </p>{" "}
          </div>{" "}
          {/* Add To Cart */}{" "}
          <button
            onClick={() => setCartItems((prev) => [...prev, elem])}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700 hover:shadow-xl active:scale-95"
          >
            {" "}
            <ShoppingCart size={18} /> Add to Cart{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default ProductCard;
