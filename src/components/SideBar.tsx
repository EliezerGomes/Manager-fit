import { FaUsers } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import { IoIosFitness } from "react-icons/io";
import { FaMoneyCheckDollar } from "react-icons/fa6";

function SideBar() {
  const options = [
    {
      name: "users",
      label: "Usuários",
      icon: <FaUsers className="text-3xl text-primary" />,
    },
    {
      name: "payments",
      label: "Assinaturas e pagamentos",
      icon: <FaMoneyCheckDollar className="text-3xl text-primary" />,
    },
    {
      name: "workouts",
      label: "Aulas",
      icon: <IoIosFitness className="text-3xl text-primary" />,
    },
    {
      name: "performance",
      label: "Performance",
      icon: <BsGraphUp className="text-2xl text-primary" />,
    },
    {
      name: "reports",
      label: "Relatórios e a análises",
      icon: <FaUsers className="text-3xl text-primary" />,
    },
    {
      name: "access",
      label: "Controle de acesso",
      icon: <MdAdminPanelSettings className="text-3xl text-primary" />,
    },
  ];
  return (

      <div className="flex flex-col gap-5 w-90 p-5 ">
        {options.map((item, idx) => (
          <div key={idx} className="flex flex-row items-center gap-3 cursor-pointer">
            {item.icon}
            <p className="font-semibold text-primary">{item.label}</p>
          </div>
        ))}
      </div>
  );
}

export default SideBar;
