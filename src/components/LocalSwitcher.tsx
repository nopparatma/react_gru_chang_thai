"use client"

import { useRouter, usePathname } from '@/navigation';
import { useLocale } from 'next-intl';
import React, { ChangeEvent } from 'react'

function LocalSwitcher() {

    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();

    const onChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        router.replace(pathname, { locale: nextLocale });
    }

    return (
        <label className='border-2 rounded'>
            <p className='sr-only'>Change language</p>
            <select className='bg-transparent py-2' defaultValue={locale} onChange={onChangeLang}>
                <option value='en'>English</option>
                <option value='th'>Thai</option>
            </select>
        </label>
    )
}

export default LocalSwitcher