import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

function main() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-row ">
        <SideBar />

        <div className="bg-gray-100 flex-1"></div>
      </div>
    </div>
  );
}

export default main;
