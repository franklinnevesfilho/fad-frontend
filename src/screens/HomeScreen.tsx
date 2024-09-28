export function HomeScreen(){
    return (
        <main className="container mx-auto p-4 text-center">
            <section id="home" className="my-8">
                <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
                <p>This is the homepage content.</p>
            </section>

            <section id="about" className="my-8">
                <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                <p>Information about the company or website.</p>
            </section>

            <section id="services" className="my-8">
                <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
                <p>Details about the services offered.</p>
            </section>
        </main>
    );
}
