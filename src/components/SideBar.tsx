import { FaRegUser } from "react-icons/fa";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbFileReport } from "react-icons/tb";

interface Properties {
  path: string;
  setPath: (val: string) => void;
}

function SideBar({ path, setPath }: Properties) {
  const options = [
    {
      name: "Users",
      label: "Usuários",
      icon: FaRegUser,
    },
    {
      name: "Payments",
      label: "Assinaturas",
      icon: FaRegCreditCard,
    },
    {
      name: "Workouts",
      label: "Aulas",
      icon: IoIosFitness,
    },
    {
      name: "Performance",
      label: "Performance",
      icon: BsGraphUp,
    },
    {
      name: "Reports",
      label: "Relatórios",
      icon: TbFileReport,
    },
    {
      name: "Access",
      label: "Controle de acesso",
      icon: MdOutlineAdminPanelSettings,
    },
  ];

  function getActiveClasses(isActive: boolean) {
    return isActive ? "bg-primary text-white" : "text-primary";
  }
  return (
    <div className="flex flex-col gap-2 w-70 py-5 px-1">
      {options.map((item, idx) => {
        const isActive = path === item.name;
        const itemClasses = `${getActiveClasses(
          isActive
        )} flex flex-row items-center gap-3  cursor-pointer px-5 py-3 rounded-l-full font-semibold`;

        return (
          <div
            key={idx}
            className={itemClasses}
            onClick={() => setPath(item.name)}
          >
            <item.icon className={`text-2xl ${getActiveClasses(isActive)}`} />
            <p className={getActiveClasses(isActive)}>{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SideBar;
