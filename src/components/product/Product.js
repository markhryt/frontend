function Product(props){
    return(
        <div id={props.id} className='product'>
            <h1>{props.name}</h1>
        </div>
    )
}

export default Product;