export default function Cards({castArray, setScores}) {
    return (
        <section className="cards">
            {castArray.map((item) => (
                <button key={item.id} onClick={() => setScores(item.id)}>
                    <figure>
                        <img src={item.imageUrl} alt="some-photo" />
                        <figcaption>{item.name}</figcaption>
                    </figure>
                </button>
            ))}
        </section>
    )
}