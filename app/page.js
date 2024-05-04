import SideBar from "./components/Sidebar";
import JobComponent from "./components/JobComponent";

export default function Home() {
  return (
    <div className="flex">
    <SideBar>
      <JobComponent/>
    </SideBar>
    </div>
  );
}
