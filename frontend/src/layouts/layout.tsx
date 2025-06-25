import type {ReactNode} from "react";
import Header from "../components/background/headerComponent.tsx";
import BackgroundComponent from "../components/background/backgroundComponent.tsx";

interface Props{
    children?: ReactNode;
}

export default function Layout ({ children }: Props) {
    return(
        <>
            <div className="relative w-screen h-screen">
                <div className="absolute inset-0 -z-10">
                    <BackgroundComponent/>
                </div>
                <div className="relative z-10">
                    <Header/>
                    {children}
                </div>
            </div>
      </>
    )
}