"use client";

import { useRouter, usePathname } from "@/navigation";
import { useLocale } from "next-intl";
import React, { ChangeEvent } from "react";

type Locale = "en" | "th";

function LocalSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const onChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value as Locale;
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <select
      className="bg-transparent"
      defaultValue={locale}
      onChange={onChangeLang}
    >
      <option value="en">English</option>
      <option value="th">Thai</option>
    </select>
  );
}

export default LocalSwitcher;
