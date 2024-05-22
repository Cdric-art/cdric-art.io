import { styled } from "@stitches/react";
import { useState } from "react";

export const Messages = () => {

  const [messages, setMessages] = useState([])

  return (
    <Wrapper>
      <h2>Messages</h2>
      <Wrapper_Messages>
        {messages.map((m, k) => {
          <Card key={k}>
            <h3>{m.name}</h3>
            <h3>{m.mail}</h3>
            <h4>{m.object}</h4>
            <p>{m.message}</p>
          </Card>
        })}
      </Wrapper_Messages>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  padding: "$space8",
});

const Wrapper_Messages = styled('div', {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  width: 800,
  gap: "$space8",
})

const Card = styled("div", {
  maxWidth: 300,
  border: "1px solid transparent",
  transition: "all .3s",
  cursor: "pointer",
  backgroundColor: "$dark50",
  borderRadius: 12,
  padding: "$space4",

  h3: {
    fontSize: "1rem",
    fontWeight: 600,
    padding: "$space1",
    letterSpacing: -1,
  },

  h4: {
    fontSize: ".9rem",
  },

  p: {
    fontSize: ".8rem",
    margin: "$space4 0 0 0",
    padding: "$space1",
    fontWeight: 400,
    lineHeight: 1,
  },

  "&:hover": {
    borderColor: "$contrast",
  },
});
