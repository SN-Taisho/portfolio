import ScrollAnimation from "react-animate-on-scroll";

export default function Stats() {
    const statList = [
        {
            Stat: "630+",
            Image: "stats/hourglass-icon.png",
            Text: "hours of experience",
        },
        {
            Stat: "100+",
            Image: "stats/uielement-icon.png",
            Text: "UI elements designed and developed"
        }
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
