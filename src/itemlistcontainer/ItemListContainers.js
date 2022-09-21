import "./ItemListContainer.css"

const ItemListContainers = ({greeting}) =>{
    return(
        <div className="greeting">
            <hi>
                {greeting}
            </hi>
        </div>
    )
}

export default ItemListContainers;