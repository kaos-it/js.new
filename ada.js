function calculateProduct(arr1, arr2) {
 
    if (arr1.length !== arr2.length) {
        console.error("Array uzunluqları eyni deyil");
        return; 
    }


    let product = 1;
    for (let i = 0; i < arr1.length; i++) {
        product *= arr1[i] * arr2[i];
    }

    return product;
}


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const result = calculateProduct(arr1, arr2);
if (result !== undefined) {
    console.log("Arraylərin uyğun sıradakı elementlərinin hasilı:", result);
}
