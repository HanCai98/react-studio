// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
    return (
        <div className="bakeryItem">
            <img src={props.item.image} alt="bakery item image"></img>
            <div>
                <div className="description">
                    <h3>{props.item.name}</h3>
                    <p>{props.item.description}</p>
                </div>
                <div className="price">
                    <p>${props.item.price}</p>
                    <button onClick={() => props.addToCart(props.index)}>Add</button>
                </div>
            </div>
        </div>
    )
}


export default BakeryItem;