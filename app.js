let arr = [1, 2, 300, 22, 23, 100, 1000];
let max = arr[0];
for (var value of arr ){
    if (value > max) {
        max = value;
    }

}
console.log("giá trị lớn nhất của mảng là: " + value)