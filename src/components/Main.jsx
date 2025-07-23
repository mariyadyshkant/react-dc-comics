import comics from '../data/comics.js'

export default function Main() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {comics.map(({ thumb, title }) => (
                        <div className="col-6" key={title}>

                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}