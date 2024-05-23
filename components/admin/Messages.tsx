import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { MessagesType } from "../types/Messages";

export const Messages = () => {
  const [messages, setMessages] = useState<MessagesType[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/mail`, {
      method: "GET",
      referrerPolicy: "no-referrer",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMessages(data));
  }, []);

  return (
    <Wrapper>
      <h2>Messages</h2>
      <Wrapper_Messages>
        {messages.map((m: MessagesType) => (
          <Card key={m.id}>
            <h3>Nom : {m.name}</h3>
            <h3>Email : {m.mail}</h3>
            <h4>Objet : {m.object}</h4>
            <p>Message : {m.message}</p>
          </Card>
        ))}
      </Wrapper_Messages>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  padding: "$space8",
});

const Wrapper_Messages = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  alignItems: "start",
  width: 900,
  marginInline: "auto",
  gap: "$space8",
});

const Card = styled("div", {
  maxWidth: 300,
  border: "1px solid transparent",
  transition: "all .3s",
  cursor: "pointer",
  backgroundColor: "$dark50",
  borderRadius: 12,
  padding: "$space4",

  h3: {
    fontSize: ".8rem",
    color: "$contrast",
  },

  h4: {
    fontSize: ".7rem",
    marginBlock: "$space2",
  },

  p: {
    fontSize: ".8rem",
    marginTop: "$space4",
  },

  "&:hover": {
    borderColor: "$contrast",
  },
});
