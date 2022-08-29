// const from = document.getElementById('from');
// const search = document.getElementById('search');

// document.getElementById('loginBtn').addEventListener('click', function () {

//     from.style.right = '6px';
//     from.style.display = 'block';

//     search.style.right = '-400px';
//     search.style.display = 'none';
// })
// document.getElementById('searchElement').addEventListener('click', function () {


//     search.style.right = '40px';
//     search.style.display = 'block';
//     from.style.right = '-6000px';
//     from.style.display = 'none';
// })


// document.getElementById('header').addEventListener('click', function () {
//     console.log('clicked')
//     from.style.display = 'none';
//     search.style.display = 'none';
// })
// // classlist
// document.getElementById('active').addEventListener('mouseover', function () {
//     this.classList.add('active');
// })
// document.getElementById('active').addEventListener('mouseout', function () {
//     this.classList.remove('active');
//     this.style.transition = '.9s';
// })

// // btn
// document.getElementById('leftBtn').addEventListener('click', function () {
//     const img = document.getElementById('img1');
//     img.src = 'images/cover2.jpg';
// })
// document.getElementById('rightBtn').addEventListener('click', function () {
//     const img = document.getElementById('img1');
//     img.src = 'images/cover3.jpg';
// })

// function show() {
//     const img = document.getElementById('image-box');
//     const createTag = document.createElement('img');
//     createTag.src = 'images/cover3.jpg';
//     img.appendChild(createTag);
// }
// function reset() {
//     document.getElementById('image-box').remove();

// }


let numbers = [12, 23, 22];
const sums = [];
for (const num of numbers) {

    const num1 = parseInt(num);
    const sum = num + 23;
    sums.push(sum);
    console.log(sums);
}