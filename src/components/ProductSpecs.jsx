function ProductSpecs({ activeItem }) {
  const { texture, weight, size } = activeItem;

  return (
    <div className="container">
      <div className="flex flex-col gap-5 mb-[100px] sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col p-5 bg-[#e5e5e5]">
          <span className="text-[22px] font-semibold">Texture:</span>
          <span className="text-[16.5px]">{texture}</span>
        </div>
        <div className="flex flex-1 flex-col p-5 bg-[#e5e5e5]">
          <span className="text-[22px] font-semibold">Weight:</span>
          <span className="text-[16.5px]">{weight}</span>
        </div>
        <div className="flex flex-1 flex-col p-5 bg-[#e5e5e5]">
          <span className="text-[22px] font-semibold">Size:</span>
          <span className="text-[16.5px]">{size}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductSpecs;
