import Link from "next/link";
import React from "react";
import { styled } from "../../../styles/stitches.config";

type LinkProjectProps = {
  href: string;
};

export const LinkProject = ({ href }: LinkProjectProps) => {
  return (
    <Link href={href} passHref>
      <A target="_blank" rel="noopener noreferrer">
        Lien vers le projet
      </A>
    </Link>
  );
};

const A = styled("a", {
  fontSize: ".8rem",
  padding: "30px 20px",
  color: "$contrast",
});
