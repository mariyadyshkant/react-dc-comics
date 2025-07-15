import comics from '/src/assets/comics.js'

export default function Main() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {comics.map(({ thumb, title }) => (
                        <div className="col-6" key={title}>
                            <div className="card_item">
                                <img src={thumb} alt={title} />
                            </div>
                            <div className="card-body">
                                <h3>{title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}