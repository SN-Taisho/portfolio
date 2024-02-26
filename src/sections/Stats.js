import ScrollAnimation from "react-animate-on-scroll";

export default function Stats() {
    const statList = [
        {
            Stat: "612 hrs",
            Image: "stats/hourglass-icon.png",
            Text: "Hours developing software",
        },
    ];

    return (
        <section id="stats-container">
            <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
                <div className="width-limiter">
                    {statList.map((stat) => (
                        <div className="stat-card">
                            <div>
                                <img
                                    img
                                    src={stat.Image}
                                    alt={stat.Image.replace("stats/", "")}
                                />
                                <h2>{stat.Stat}</h2>
                            </div>
                            <p>{stat.Text}</p>
                        </div>
                    ))}
                </div>
            </ScrollAnimation>
        </section>
    );
}
