import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import SearchbarComponent from "./searchbarComponent.tsx";
import DropdownComponent from "./dropdownComponent.tsx";

export default function Header() {
    return(
        <>
            <div className="flex items-center w-screen justify-between h-18 pt-5 px-20">
                <p className="flex text-white font-semibold text-xl"><span className="text-blue-600">K</span>ILOBAITAS</p>
                <div className="flex items-center justify-between px-2 pr-6 w-2/5 h-full bg-red-950 backdrop-blur-xs rounded-4xl text-white">
                    <SearchbarComponent/>
                    <DropdownComponent/>
                    <a href="">Pristatymas</a>
                    <a href="">Kontaktai</a>
                </div>
                <a className="flex justify-between bg-red-950 w-1/10 h-full rounded-4xl items-center text-white" href="yikes">
                    <div className="pl-7">Prisijungti</div>
                    <a className="flex h-full w-14 justify-center items-center bg-lime-950 rounded-full" href="kik">
                        <ShoppingCartIcon className="h-6 w-6"/>
                    </a>
                </a>
            </div>
        </>
    )
}