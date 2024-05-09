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
        backgroundColor: "#fab387",
      },
      scss: {
        backgroundColor: "#f5c2e7",
      },
      react: {
        backgroundColor: "#74c7ec",
      },
      native: {
        backgroundColor: "#cba6f7",
      },
      wordpress: {
        backgroundColor: "#89b4fa",
      },
    },
  },
});
