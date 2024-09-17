import { antiquePage } from "@/constants/constants";
import { useTranslations } from "next-intl";
import React from "react";

function AntiquePage() {
  const t = useTranslations();

  return (
    <div className="content mt-8 flex flex-col">
      <h1 className="mx-auto text-gold-gradient text-[52px]">
        {t(antiquePage)}
      </h1>
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default AntiquePage;
