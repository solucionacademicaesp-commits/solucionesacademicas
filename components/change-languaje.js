import React, { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";
import Img from "./img";
import Image from 'next/image'
import flag_eng from "@/images/flag_eng.png";
import flag_esp from "@/images/flag_esp.png";

const ChangeLanguaje = () => {
    const router = useRouter();
    return (
        <Link
            href={router.asPath}
            locale={router.locale === 'es' ? 'en' : 'es'}
            className="button_for_change_languaje"
            style={{ display: 'inline-block', border: 'none', cursor: 'pointer' }}
        >
            <Image
                src={router.locale === 'es' ? flag_eng : flag_esp} alt="Spain flag" layout="fixed" width="25px" height="15px"
            />
        </Link>
    );
};

export default ChangeLanguaje;
