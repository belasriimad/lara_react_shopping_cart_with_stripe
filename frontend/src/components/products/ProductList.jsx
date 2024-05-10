import ProductListItem from './ProductListItem'


export default function ProductList({products}) {
    return (
        <div className='row my-4'>
            {
                products.map(product => <ProductListItem key={product.id}
                    product={product} />)
            }
        </div>
    )
}
