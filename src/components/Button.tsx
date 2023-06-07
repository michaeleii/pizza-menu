function Button(props: { soldOut: boolean }) {
  return props.soldOut ? (
    <button className="mt-auto w-36 cursor-not-allowed self-end rounded-md bg-gray-500 px-2 py-3">
      Sold Out
    </button>
  ) : (
    <button className="mt-auto w-36 self-end rounded-md bg-yellow-500 px-2 py-3 hover:bg-yellow-600">
      Add to Cart
    </button>
  );
}

export default Button;
