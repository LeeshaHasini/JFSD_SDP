import React from 'react';
import './Home.css'; // Optional, for additional custom styling

const Home = () => {
    const fitnessPrograms = [
        {
            title: "Yoga for Beginners",
            description: "Start your fitness journey with yoga. Suitable for all levels to improve flexibility and mental focus.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMcfxrzCq7ZLbItpTRN6_GlEBzKKHsa56lw&s",
            link: "/programs/yoga-for-beginners"
        },
        {
            title: "HIIT Training",
            description: "High-Intensity Interval Training to help you burn fat and improve cardiovascular health.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQVOfkBDnUgd5QAoyvzGeUyvA2BSyjzgqtYw&s",
            link: "/programs/hiit-training"
        },
        {
            title: "Strength and Conditioning",
            description: "Build strength and endurance with this weight training and conditioning program.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_Mckm9oB37DBJAuoujI9jeqQrTVZvPIfgA&s",
            link: "/programs/strength-conditioning"
        },
        {
            title: "Mindfulness Meditation",
            description: "A program designed to help you reduce stress and improve your mental well-being through meditation.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvrbNmxiRQxYAxyp0eBjII5Yn1zv8ENDZyIw&s",
            link: "/programs/mindfulness-meditation"
        }
    ];

    return (
        <div className="home-page">
            <header className="jumbotron">
                <h1>Welcome to Health & Wellness</h1>
                <p>Your one-stop solution for fitness, nutrition, and mental health.</p>
            </header>

            <section className="fitness-programs container">
                <h2>Our Fitness Programs</h2>
                <div className="row">
                    {fitnessPrograms.map((program, index) => (
                        <div className="col-md-3" key={index}>
                            <div className="card mb-4">
                                <img src={program.image} className="card-img-top" alt={program.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{program.title}</h5>
                                    <p className="card-text">{program.description}</p>
                                    <a href={program.link} className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
