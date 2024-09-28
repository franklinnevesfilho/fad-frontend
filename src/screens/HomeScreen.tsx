export function HomeScreen(){
    return (
        <main className="container mx-auto p-4 text-center">
            <section id="home" className="my-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
                <p>This is the homepage content.</p>
            </section>

            <section id="about" className="my-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-semibold mb-4 ">About Us</h2>
                    <p>Empowering immigrants seeking asylum by leveraging
                        generative AI to provide personalized, accessible
                        guidance on obtaining legal entry into the United States
                        through Green Card pathways, fostering a clearer path to safety,
                        security, and opportunity.
                    </p>
                </div>

            </section>

            <section id="services" className="my-8">
                <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
                <p>Details about the services offered.</p>
            </section>
        </main>
    );
}
