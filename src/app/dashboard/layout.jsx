
import Navbar from "../../../components/Navbar/Navbar";
import Sidebar from "../../../components/Sidebar/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <>
    
    <div className="flex   justify-end mr-[20px] fixed top-0 right-0">
    <Navbar/>
</div>
<div className="mt-[40px]">
<Sidebar className="">
{children}
</Sidebar>
</div>



    </>
  );
}
