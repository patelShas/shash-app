import SideBar from "./side-bar/SideBar.tsx";

function HomePage() {
  return (
    <div className="flex">
      <div className="flex-none w-32">
        <SideBar />
      </div>
      <div className="relative w-full h-screen">
        <div className="relative font-bold z-50">
          <p>This text is foreground</p>
        </div>
        <div className="absolute top-0 left-0 -z-50 bg-gray-800 w-full h-full"></div>
      </div>
    </div>
  );
}

export default HomePage;
