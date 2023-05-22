import SideBar from "./side-bar/SideBar.tsx";

const intent = () => {
  return (
    <div className="flex">
      <div className="flex-none w-32">
        <SideBar />
      </div>
      <div className="flex-1 left-24">
        <h1 className="text-3xl font-bold text-green-400 text-center">
          Hello (Shash)!
        </h1>
        <div className="p-12 bg-purple-700 h-screen">
          <div className="p-12 bg-black" />
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <div className="flex">
      <div className="flex-none w-32">
        <SideBar />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-green-400 text-center">
          Hello (Shash)!
        </h1>
        <div className="p-12 bg-purple-700 h-screen">
          <div className="p-12 bg-black" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
