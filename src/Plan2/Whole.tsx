const Whole = () => {
  return (
    <div className="w-screen bg-slate-800 flex">
      <div className="h-screen w-32 flex-none bg-slate-300"></div>
      <div className=" flex-auto bg-slate-600 p-10 ">
        <div
          className=" bg-slate-300 p-10 transitioning-curves hover:bg-slate-100
        hover:scale-105 border-4  hover:border-black"
        >
          <h1 className=" text-3xl font-bold">
            Hi! My name is Shashwat Patel.
          </h1>
          <br />
          <p>
            Hi! I am a rising Senior at Northeastern majoring in Computer
            Science and concentrating in software development. I like working on
            new features and developing web pages. I'm looking to continue
            building my experience working with software, particularly with some
            back-end work, data pipelines, or similar applications.
          </p>
        </div>
        <div className=" mt-5 flex flex-row flex-wrap gap-5">
          <div className="flex-auto w-48">01</div>
          <div className="flex-auto w-48">02</div>
          <div className="flex-auto w-48">03</div>
        </div>
      </div>
    </div>
  );
};

export default Whole;
