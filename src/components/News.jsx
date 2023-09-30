function News() {
  return (
    <div className="bg-[#191919]">
      <div className="container flex items-center justify-center flex-col h-[280px]">
        <h2 className="text-white text-[35px] font-bold mb-5">Newsletter</h2>
        <form className="flex flex-col items-center justify-center gap-3 xs:flex-row">
          <input
            type="email"
            placeholder="your@email.com"
            className="py-[5px] px-7 outline-none border-2 border-[#efefef]"
          />
          <button className="bg-[#EFEFEF] w-full font-bold font-[Arial] uppercase py-[5px] px-5 border-2 border-[#EFEFEF] bg-transparent text-[#EFEFEF] transition-all hover:text-black hover:bg-white">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default News;
