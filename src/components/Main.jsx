import comics from '../data/comics.js'
import BtnLoadMore from './Btn-load-more.jsx';

export default function Main() {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {comics.map(({ id, thumb, title, price }) => (
                        <div className="col-6" key={id}>
                            <img src={thumb} alt={title} />
                            <h3>{title}</h3>
                            <p>{price}</p>
                        </div>
                    ))}
                </div>
                <div className="row-btn-load-more">
                    <BtnLoadMore />
                </div>
            </div>
        </main>
    );
}