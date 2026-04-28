import BootstrapClient from "./BootstrapClient";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import { Inter } from "next/font/google";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
    return (
        <html lang="ko" className={inter.className}>
            <body>
                <BootstrapClient/>

                <div className="d-flex flex-column min-vh-100">
                    <AppHeader/>
                    <div className="flex-grow-1 container-fluid">
                        <div className="row">
                            <div className="col-md-3 p-3">
                                <Suspense fallback={<div>페이지 로딩 중...</div>}>
                                    <AppMenu/>
                                </Suspense>
                            </div>
                            <div className="col-md-9">
                                {/* 페이지 컴포넌트 */}
                                    {children}
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}