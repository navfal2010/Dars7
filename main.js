let fruits = ['Olma', 'Banan', 'Gilos', 'Shaftoli']

alert(`Boshlanishida Arrayning uzinligi: ${fruits.length}`)

console.log(fruits);

let Confirm_Question = confirm('sizni arrayingizni malumotlarni olib tashlomoqchimiz')

if (Confirm_Question === true) {
    fruits.pop()
    alert(`Arrayning uzunligi: ${fruits.length}`)
    console.log(fruits);
}

else{
    alert(`Arrayning uzunligi: ${fruits.length}`)
    console.log(fruits);
}
