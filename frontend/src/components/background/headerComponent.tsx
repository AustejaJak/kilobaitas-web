export default function Header() {
    return(
        <>
            <div className="flex items-center w-screen justify-between h-16 pt-5 px-20">
                <p className="flex text-white font-semibold text-xl"><span className="text-blue-600">K</span>ILOBAITAS</p>
                <div className="flex items-center justify-between w-2/5 h-full bg-red-950 backdrop-blur-xs rounded-4xl text-white">
                    <input className="flex w-1/2 h-9 items-center bg-neutral-800 rounded-4xl" placeholder="Ieškoti prekės"/>
                    <a href="">Produktai C</a>
                    <a href="">Pristatymas</a>
                    <a href="">Kontaktai</a>
                </div>
                <div className="flex text-white">
                    <a href="">Prisijungti</a>
                    <div>Cart</div>
                </div>
            </div>
        </>
    )
}