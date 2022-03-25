import React from "react";
import { AppLayout } from "../AppLayout/AppLayout";
import { NavTabs } from "../NavTabs/NavTabs";

const CreateEmployerProfileLayout: React.FC = ({ children }) => {
  const tabs = [
    { name: "Experience", endpoint: "/employer-profile/edit/experience" },
    { name: "Skills", endpoint: "/employer-profile/edit/skills" },
    { name: "Looking For", endpoint: "/employer-profile/edit/looking-for" },
  ];

  return (
    <AppLayout displayNavBarBottom={false} title="My Profile">
      <div className="CreateEmployerProfileLayout">
        <NavTabs tabs={tabs} />
        {children}
      </div>
    </AppLayout>
  );
};

export default CreateEmployerProfileLayout;
