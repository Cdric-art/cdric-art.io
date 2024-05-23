import React, { useState } from "react";
import { styled } from "@stitches/react";
import { SideBarAdmin } from "../../components/admin/SideBarAdmin";
import { LoginForm } from "../../components/admin/LoginForm";
import { HomeDashboard } from "../../components/admin/HomeDashboard";
import { User } from "../../components/types/User";

function Admin() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <Admin_Container>
      <SideBarAdmin />
      <Right_Container>
        {user ? <HomeDashboard user={user} /> : <LoginForm setUser={setUser} />}
      </Right_Container>
    </Admin_Container>
  );
}

export default Admin;

const Admin_Container = styled("section", {
  position: "relative",
  backgroundColor: "$dark75",
  height: "100dvh",
});

const Right_Container = styled("section", {
  position: "relative",
  display: "flex",
  justifyContent: "center",
  height: "100%",
  marginLeft: 180,
});
