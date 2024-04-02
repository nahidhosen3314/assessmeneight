
import toast from "react-hot-toast";

export const seveDataToLocalStorage = (singleData) =>{

    const savedData = JSON.parse(localStorage.getItem('read')) || [];
    const hasData = savedData.find(item => item.bookId === singleData.bookId)
    if( hasData ){
        toast.error("Already in read list");
    }else{
        savedData.push(singleData)
        localStorage.setItem('read', JSON.stringify(savedData));
        toast.success('Data added successfully');
    }

}

export const getDataFromLocal = () => {
    const getDefaultData = JSON.parse(localStorage.getItem('read')) || [];
    return getDefaultData;
}

// wishlist data
export const saveWishlistDataToLocalStorage = (singleData) => {
    const readData = JSON.parse(localStorage.getItem('read')) || [];
    const inRead = readData.find(item => item.bookId === singleData.bookId)

    if( inRead ){
        toast.error("Already in readlist.");
    }else{
        const wishlistData = JSON.parse(localStorage.getItem('wishlist')) || [];
        const wishlist = wishlistData.find(item => item.bookId === singleData.bookId);
        if( wishlist ){
            toast.error("Already in wishlist");
        }else{
            wishlistData.push(singleData)
            localStorage.setItem('wishlist', JSON.stringify(wishlistData))
            toast.success('Added to wishlist successfully')
        }
    }
    
}

export const getWishlistFromLocalStroage = () => {
    const getDefaultData = JSON.parse(localStorage.getItem('wishlist')) || [];
    return getDefaultData;
}