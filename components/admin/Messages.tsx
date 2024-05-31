import { styled } from "@stitches/react";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";
import { MessagesType } from "../types/Messages";

export const Messages = () => {
  const [messages, setMessages] = useState<any[] | null>(null);
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const getMessages = async () => {
    const { data } = await supabase.from("message").select()
    setMessages(data)
  }

  useEffect(() => {
    getMessages()
  }, []);

  return (
    <Wrapper>
      <h2>Messages</h2>
      <Wrapper_Messages>
        {messages?.map((m: MessagesType) => (
          <Card key={m.id}>
            <Flex>
              <h3>{m.name}</h3>
              <span>{m.created_at.split('T')[0]}</span>
            </Flex>
            <h3>Email : {m.email}</h3>
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
  width: 900,
  marginInline: "auto",
  gap: "$space8",
});

const Flex = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
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

  span: {
    fontSize: ".6rem",
    color: "$red",
  },

  "&:hover": {
    borderColor: "$contrast",
  },
});
