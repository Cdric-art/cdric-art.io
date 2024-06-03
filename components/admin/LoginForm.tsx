import { styled } from "@stitches/react";
import { FormEventHandler, useRef, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { User } from "../types/User";

type PropsLoginForm = {
  setUser: (user: User) => void
}

export const LoginForm = ({ setUser }: PropsLoginForm) => {

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const login: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formRef.current) {
      const payload = new FormData(formRef.current);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: payload.get("email") as string,
        password: payload.get("password") as string
      })

      if (!error) {
        setUser(data.user as User)
      }
    }
  };

  return (
    <form ref={formRef} onSubmit={login}>
      <WrapperInput>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Mot de passe" />
      </WrapperInput>
      <Button disabled={loading}>
        {loading ? "Connection" : "Se connecter"}
      </Button>
    </form>
  );
};

const WrapperInput = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$space1",
  minWidth: 350,
  marginTop: 80,

  input: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
    fontSize: ".9rem",
    color: "$white",
    padding: "$space4",
    marginTop: "$space2",
    border: "1px solid transparent",
    backgroundColor: "$dark50",
    transition: "all .3s",
    outline: "none",
  },

  "input:focus": {
    borderColor: "$contrast",
  },
});

const Button = styled("button", {
  position: "relative",
  display: "block",
  fontSize: ".8rem",
  letterSpacing: 4,
  color: "$contrast",
  backgroundColor: "transparent",
  border: "1px solid $contrast",
  padding: "14px 36px",
  marginTop: 50,
  marginInline: "auto",
  cursor: "pointer",
  transition: "all .3s",
  outline: "none",
  zIndex: 10,

  "&:hover": {
    color: "$dark75",
  },

  "&:before": {
    position: "absolute",
    content: "",
    top: 0,
    left: 0,
    width: 0,
    height: "100%",
    transition: "all .4s",
    backgroundColor: "$contrast",
    zIndex: -1,
  },

  "&:hover::before": {
    width: "100%",
  },
});
