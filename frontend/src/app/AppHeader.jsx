"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppHeader() {
    return (
        <nav className="navbar justify-content-between bg-dark">
            <Link href="/" className="navbar-brand ms-3">
            <div className="text-white">
                <Image src={"/react-logo.svg"} width={50} height={50} alt="" className="align-middle"/>
                {" "}
                React
            </div>
            </Link>
        
        </nav>
    );
}   