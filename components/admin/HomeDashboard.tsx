import { styled } from "@stitches/react";
import { useState } from "react";
import { User } from "../types/User";
import { Messages } from "./Messages";
import { Projets } from "./Projets";

type PropsHomeDashboard = {
  user: User
}

export const HomeDashboard = ({ user }: PropsHomeDashboard) => {
  const [tabs, settabs] = useState(false);

  return (
    <Container>
      <Header>
        <h2>{`Connecté en tant que : ${user.fullName}`}</h2>
        <ul>
          <li onClick={() => settabs(false)}>Messages</li>
          <li onClick={() => settabs(true)}>Projets</li>
        </ul>
      </Header>
      {tabs ? <Projets /> : <Messages />}
    </Container>
  );
};

const Header = styled("div", {
  display: "flex",
  alignItems: "center",
  color: "$subtext",
  fontSize: ".8rem",
  height: 80,
  backgroundColor: "$dark50",
  margin: "12px 18px",
  borderRadius: 18,

  "& h2": {
    color: "$contrast",
    marginLeft: "$space8",
    letterSpacing: 0,
  },

  "& ul": {
    display: "flex",
    backgroundColor: "$dark25",
    borderRadius: 12,
    marginLeft: 250,
    padding: 8,
  },

  "& li": {
    marginInline: 8,
    borderRadius: 10,
    padding: "4px 6px",
    backgroundColor: "$dark25",
    transition: "all .3s",
    cursor: "pointer",
  },

  "& li:hover": {
    backgroundColor: "$contrast",
    color: "$dark50",
  },
});

const Container = styled("div", {
  padding: "&space8",
  width: "100%",
});
