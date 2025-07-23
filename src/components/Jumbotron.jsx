import jumbo from '/img/jumbotron.jpg'
export default function Jumbotron() {
    return (
        <div className="jumbotron-container">
            <img className='jumbotron' src={jumbo} alt="" />
        </div>
    )
}