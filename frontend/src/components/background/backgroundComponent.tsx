import BackgroundPattern from '/src/assets/backgroundPattern.svg';
import BackgroundLightRed from '/src/assets/backgroundLightRed.svg';
import BackgroundLightBlue from '/src/assets/backgroundLightBlue.svg';

export default function BackgroundComponent() {
    return (
        <>
            <img src={BackgroundPattern} alt="Background Pattern" className="absolute inset-0 w-full h-full object-cover z-1"/>
            <img src={BackgroundLightRed} alt="Background Light Red" className="absolute right-0 top-0 w-1/2 h-full object-cover z-2"/>
            <img src={BackgroundLightBlue} alt="Background Light Blue" className="absolute left-0 top-0 w-1/2 h-full object-cover z-2"/>
            <div className="absolute inset-0 bg-neutral-950 z-0"/>
        </>
    );
}
