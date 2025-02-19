"use client";
import Image from "next/image";




export default function Home() {
    return (
        <div className="space-y-12 bg-secondary py-20 overflow-hidden">
            {/* Section 1: Image left, text right */}
            <section className="container mx-auto flex flex-col md:flex-row items-center overflow-hidden">
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Technology Background"
                        layout="responsive"
                        width={600}
                        height={400}
                        className="object-cover rounded-2xl border-4 border-primary"
                    />
                </div>
                {/* Text Column */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-primary text-4xl font-bold mb-2">
                        Building Management Solutions
                    </h2>
                    <p className="text-light text-base">
                        For investors, operators as well as users of buildings, an investment in
                        building automation is worthwhile. The additional effort or costs for
                        intelligent building technology are usually amortized in a few years thanks
                        to high potential savings. This makes it a worthwhile investment for investors
                        and sustainable resource-saving construction is in great demand.
                    </p>
                </div>
            </section>

            {/* Section 2: Text left, image right */}
            <section className="container mx-auto flex flex-col md:flex-row-reverse items-center overflow-hidden">
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Automation Technology"
                        layout="responsive"
                        width={600}
                        height={400}
                        className="object-cover rounded-2xl border-4 border-primary"
                    />
                </div>
                {/* Text Column */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-primary text-4xl font-bold mb-4">
                        How Does Building Automation Work?
                    </h2>
                    <p className="text-light text-base">
                        Measurement, control, and regulation technology (MSR technology) plays a central
                        role in building automation. Measurement and control technology refers to the
                        hardware, such as sensors, actuators, the brain of the installation and the
                        communication of all components in the field and in the control cabinet.
                    </p>
                </div>
            </section>

            {/* Section 3: Image left, text right */}
            <section className="container mx-auto flex flex-col md:flex-row items-center overflow-hidden">
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Welcome to Building Automation"
                        layout="responsive"
                        width={600}
                        height={400}
                        className="object-cover rounded-2xl border-4 border-primary"
                    />
                </div>
                {/* Text Column */}
                <div className="w-full md:w-1/2 p-8">
                    <p className="text-light text-base mb-2">WELCOME TO</p>
                    <h1 className="text-primary text-4xl font-bold mb-4">
                        BUILDING AUTOMATION THAT WORKS FOR YOU
                    </h1>
                    <p className="text-light text-base mb-4">
                        For investors, operators as well as users of buildings, an investment in
                        building automation is worthwhile. The additional effort or costs for
                        intelligent building technology are usually amortized in a few years thanks
                        to high potential savings. This makes it a worthwhile investment for investors
                        and sustainable resource-saving construction is in great demand.
                    </p>
                    <p className="text-light text-base">
                        Measurement, control, and regulation technology (MSR technology) plays a central
                        role in building automation. Measurement and control technology refers to the
                        hardware, such as sensors, actuators, the brain of the installation and the
                        communication of all components in the field and in the control cabinet.
                    </p>
                </div>
            </section>

            {/* Section 4: Text left, image right */}
            <section className="container mx-auto flex flex-col md:flex-row-reverse items-center overflow-hidden">
                {/* Image Column */}
                <div className="w-full md:w-1/2">
                    <Image
                        src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Three Levels of Building Automation"
                        layout="responsive"
                        width={600}
                        height={400}
                        className="object-cover rounded-2xl border-4 border-primary"
                    />
                </div>
                {/* Text Column */}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-primary text-4xl font-bold mb-4">
                        The Three Levels of Building Automation
                    </h2>
                    <p className="text-light text-base">
                        With the help of sensors and actuators, the technical systems are operated on the
                        field level. The Loxone Miniserver is the brains and processes the supplied data on
                        the automation level. The software on the management level is responsible for the
                        higher-level operation and monitoring.
                    </p>
                </div>
            </section>

            {/* Extra Section: Title and Two Images Side by Side */}
            <section className="container mx-auto flex flex-col items-center overflow-hidden py-12">
                <div className="w-full">
                    <h2 className="text-primary text-4xl font-bold mb-8">
                        Intelligent and scalable
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full">
                    {/* First Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Extra Image 1"
                            layout="responsive"
                            width={600}
                            height={400}
                            className="object-cover rounded-xl border-4 border-primary"
                        />
                    </div>
                    {/* Second Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src="https://images.pexels.com/photos/1001688/pexels-photo-1001688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                            alt="Extra Image 2"
                            layout="responsive"
                            width={600}
                            height={400}
                            className="object-cover rounded-xl border-4 border-primary"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
