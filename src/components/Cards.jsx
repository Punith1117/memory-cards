export default function Cards({castArray}) {
    return (
        <section className="cards">
            {castArray.map((item) => (
                <figure key={item.id}>
                    <img src={item.imageUrl} alt="some-photo" />
                    <figcaption>{item.name}</figcaption>
                </figure>
            ))}
        </section>
    )
}