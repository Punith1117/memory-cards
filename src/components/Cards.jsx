export default function Cards({castArray}) {
    return (
        <section className="cards">
            {castArray.map((item) => (
                <button key={item.id}>
                    <figure>
                        <img src={item.imageUrl} alt="some-photo" />
                        <figcaption>{item.name}</figcaption>
                    </figure>
                </button>
            ))}
        </section>
    )
}