"use client"

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";

import Payments from "@/app/main/payments/page";
import Users from "@/app/main/users/page";
import Performance from "@/app/main/performance/page";
import Reports from "@/app/main/reports/page";
import Workouts from "@/app/main/workouts/page";
import Access from "@/app/main/access/page";
import { JSX, useState } from "react";

function Main() {
  const [path, setPath] = useState("Users")
  const render: Record<string, JSX.Element> = {
    Payments: <Payments />,
    Users: <Users />,
    Performance: <Performance />,
    Workouts: <Workouts />,
    Reports: <Reports />,
    Access: <Access />
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 flex-row ">
        <SideBar path={path} setPath={setPath} />

        <div className="bg-gray-100 flex-1">
          { render[path] }
        </div>
      </div>
    </div>
  );
}

export default Main;
