export const getDiscount = (original_price, discounted_price)=>{
    return ((original_price - discounted_price)/original_price * 100).toFixed(2)
}
