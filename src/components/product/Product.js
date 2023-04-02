function Product(props){
    return(
        <div id={props.id} className='product'>
            <li>{props.name}</li>
        </div>
    )
}

export default Product;