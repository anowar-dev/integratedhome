"use client";


const projectImages = [
    {
        id: 1,
        title: "Modern Skyscraper",
        image:
            "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 2,
        title: "Historic Facade",
        image:
            "https://images.pexels.com/photos/221148/pexels-photo-221148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 3,
        title: "Office Complex",
        image:
            "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
        id: 4,
        title: "Urban Landscape",
        image:
            "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

const page = () => {
    return (
        <section className="py-40 bg-secondary overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                {/* Section Title & Description */}
                <h2 className="text-4xl font-bold text-primary mb-4">Explore Projects</h2>
                <p className="text-lg text-light mb-8">
                    We have successfully completed various projects installing products in our customers houses &amp; commercial buildings.
                </p>
                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projectImages.map((project) => (
                        <div key={project.id} className="group relative">
                            <img
                                src={project.image}
                                alt={project.title}


                                className="object-cover h-96"
                            />
                            {/* Overlay shown on hover */}
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default page;
