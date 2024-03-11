"use client";
import React from "react";
import style from "./logoutButton.module.css";
import Image from "next/image";
export default function LogoutButton() {
  const me = {
    id: "kim",
    nickname: "김건희",
    image: "/5Udwvqim.jpg",
  };
  const onLogout = () => {};
  return (
    <button className={style.logoutButton} onClick={onLogout}>
      <div className={style.logoutUserImage}>
        <Image src={me.image} alt={me.id} width={40} height={40} />
      </div>
      <div className={style.logoutUsername}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
