import { useTranslations } from "next-intl";
import React from "react";

function AntiquePage() {
  const t = useTranslations();

  return (
    <div className="mt-8 flex flex-col">
      <h1 className="mx-auto text-gold-gradient text-[52px]">
        {t("antiquePage")}
      </h1>
    </div>
  );
}

export default AntiquePage;
