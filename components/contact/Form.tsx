import React, { FormEventHandler, useRef, useState } from "react";
import { styled } from "../../styles/stitches.config";

export const Form = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const [success, setSuccess] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const sendMail: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setSuccess(false);
    if (formRef.current) {
      const payload = new FormData(formRef.current);
        const response = await fetch("http://localhost:3333/sendmail", {
        method: "POST",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(payload)),
      });

      if (response.ok) {
        setSuccess(true);
        formRef.current.reset();
      }
    }
  };

  return (
    <Formulaire ref={formRef} onSubmit={sendMail}>
      <WrapperInput>
        <input type="text" name="name" placeholder="Nom*" />
        <input type="email" name="mail" placeholder="Email*" />
      </WrapperInput>
      <WrapperInput>
        <input type="text" name="object" placeholder="Objet" />
      </WrapperInput>
      <WrapperInput className="textarea_form">
        <textarea
          onFocus={(disabled) => (disabled ? setDisabled(!disabled) : null)}
          name="message"
          placeholder="Message*"
        />
      </WrapperInput>
      <Button disabled={disabled} className="form_button">
        {success ? "Bien recu !" : "Envoyer"}
      </Button>
    </Formulaire>
  );
};

const Formulaire = styled("form", {
  position: "relative",
  width: "50%",
  display: "grid",
  gridAutoRows: "minmax(50px, auto)",

  "&::before": {
    position: "absolute",
    content: "<form>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    top: -15,
    left: -25,
    "@desktop": {
      left: -30,
    },
  },

  "&::after": {
    position: "absolute",
    content: "</form>",
    fontFamily: "La Belle Aurore",
    fontSize: "1.2rem",
    fontStyle: "italic",
    color: "$gray100",
    fontWeight: 400,
    letterSpacing: 1,
    bottom: -20,
    left: -25,
    "@desktop": {
      left: -25,
      bottom: -30,
    },
  },
});

const WrapperInput = styled("div", {
  display: "flex",
  alignSelf: "center",

  "input, textarea": {
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

  "input:focus, textarea:focus": {
    borderColor: "$contrast",
  },

  "input[type='email']": {
    marginLeft: "$space2",
  },

  textarea: {
    "@desktop": {
      minHeight: 150,
    },
  },
});

const Button = styled("button", {
  position: "relative",
  alignSelf: "center",
  justifySelf: "start",
  fontSize: ".8rem",
  letterSpacing: 4,
  color: "$contrast",
  backgroundColor: "transparent",
  border: "1px solid $contrast",
  padding: "14px 36px",
  marginTop: 20,
  cursor: "pointer",
  transition: "all .3s",
  outline: "none",
  zIndex: 10,

  "@desktop": {
    marginTop: 50,
  },

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
