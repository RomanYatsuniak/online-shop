import { db } from './../firebase'

export async function getCollectionByRefId() {}

export async function getReviewsCountByProductId(id) {
    const productRef = db.collection('products').doc(id)
    const productsRef = await db.collection('productsreviews').where("productId", "==", productRef).get();
    return productsRef.docs.length
}

export async function getRatingByProductId(id) {
    const productRef = db.collection('products').doc(id)
    const productsRef = await db.collection('productsreviews').where("productId", "==", productRef).get();
    const count = productsRef.docs.length
    console.log(productsRef)
    const sum = productsRef.docs.reduce((acc, p) => {
        const product = p.data()
        return acc + product.rating
    }, 0)
    return Math.round(sum/count);
}
