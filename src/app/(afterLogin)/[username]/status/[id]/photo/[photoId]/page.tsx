import Home from "@/app/(afterLogin)/home/page";
import React from "react";

type Props = {
  params: {
    usename: string;
    id: string;
    pghotoId: string;
  };
};
export default function Page({ params }: Props) {
  return <Home />;
}
