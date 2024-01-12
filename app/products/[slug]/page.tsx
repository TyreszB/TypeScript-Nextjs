import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: "cool-hat" | "lightweight-jacket" | "t-shirt";
  };
};

export default function poductSlug({ params }: Props) {
  console.log(params.slug);

  return (
    <div>
      {params.slug === "cool-hat" ||
      params.slug === "lightweight-jacket" ||
      params.slug === "t-shirt" ? (
        <div>{params.slug}</div>
      ) : (
        notFound()
      )}
    </div>
  );
}
