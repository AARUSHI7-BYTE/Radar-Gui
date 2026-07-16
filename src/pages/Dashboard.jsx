import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import CenterPanel from "../components/CenterPanel";
import RightPanel from "../components/RightPanel";

function Dashboard() {
  return (
    <div className="h-screen bg-slate-800">

      <Header />

      <div className="flex h-[calc(100vh-80px)]">

        <Sidebar />

        

        <CenterPanel />

        <RightPanel />

      </div>

    </div>
  );
}

export default Dashboard;