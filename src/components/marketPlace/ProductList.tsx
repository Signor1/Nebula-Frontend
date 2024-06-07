import { ProductType } from "./ProductData";

const ProductList = ({ data }: { data: ProductType[] }) => {
    return (
        <main className="w-full flex-1 flex flex-col gap-4">
            <div className="w-full flex justify-end">
                <h3 className="text-gray-400 uppercase font-bold font-barlow">SHOWING 1 - 9 OF 15 RESULTS</h3>
            </div>
            <section className="w-full grid lg:grid-cols-3 md:grid-cols-2 lg:gap-4">
                <div className=""></div>
            </section>
        </main>
    )
}

export default ProductList;