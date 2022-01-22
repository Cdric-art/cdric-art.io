import React, { ReactNode } from "react";
import { styled } from "../../../styles/stitches.config";
import { VariantProps } from "@stitches/react";

type PillsProps = {
  children: ReactNode;
  name: VariantProps<HTMLSpanElement>;
};

export const Pills = ({ children, name }: PillsProps) => {
  return <PillsVariants color={name}>{children}</PillsVariants>;
};

const PillsVariants = styled("span", {
  display: "inline-block",
  fontFamily: "La Belle Aurore",
  lineHeight: 0,
  marginTop: 10,
  marginInline: 10,
  borderRadius: 3,
  padding: "6px 10px",

  variants: {
    color: {
      html: {
        backgroundColor: "#ED7345",
      },
      scss: {
        backgroundColor: "#C16393",
      },
      react: {
        backgroundColor: "#58BBDC",
      },
      native: {
        backgroundColor: "#7449B9",
      },
      wordpress: {
        backgroundColor: "#3C90B0",
      },
    },
  },
});
