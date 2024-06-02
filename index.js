// Bài 1: Tính tổng các số dương có trong mảng
// Tính tổng các số dương có trong mảng
// document.getElementById("btnBT1").onclick =
//   // let n = document.getElementById("number").value * 1;
//   // let arr = n;
//   // var arr_duong = function(arr) {
//   //   if (arr % 2 ==0 ) {

//   //   }
//   // }
//   function inputArr(n) {
//     // Tạo một mảng rỗng
//     let arr = [];

//     // Sử dụng vòng lặp để nhập n phần tử vào mảng
//     for (let i = 0; i < n; i++) {
//       // Sử dụng prompt để lấy giá trị từ người dùng và chuyển nó thành kiểu số
//       let value = parseFloat(prompt(`Nhập giá trị thứ ${i + 1}:`));

//       // Thêm giá trị vào mảng
//       arr.push(value);
//     }

//     // Trả về mảng đã nhập
//     return arr;
//   };

// // Gọi hàm nhapMang với độ dài mảng là 5
// let mangDaNhap = inputArr(5);
// console.log(mangDaNhap);

// Chat GPT
// function nhapMangSoNguyen() {
//   // Tạo một mảng rỗng để lưu trữ các số nguyên
//   let mangSoNguyen = [];

//   // Yêu cầu người dùng nhập vào số lượng phần tử
//   let soLuong = parseInt(prompt("Nhập số lượng phần tử trong mảng:"));

//   // Sử dụng vòng lặp để nhập từng phần tử
//   for (let i = 0; i < soLuong; i++) {
//     let soNguyen = parseInt(prompt(`Nhập phần tử thứ ${i + 1}:`));
//     mangSoNguyen.push(soNguyen);
//   }

//   // Trả về mảng các số nguyên đã nhập
//   return mangSoNguyen;
// }

// Gọi hàm và in kết quả
// let arr = nhapMangSoNguyen();
// console.log("Mảng các số nguyên đã nhập:", arr);

// Chat GPT nhập mảng vào field
// function taoCacTruongNhap() {
//   let soLuong = parseInt(document.getElementById("quantityNumber").value);
//   let soNguyenFields = document.getElementById("soNguyenFields");
//   soNguyenFields.innerHTML = ""; // Xóa các trường nhập cũ nếu có

//   for (let i = 0; i < soLuong; i++) {
//     let inputField = document.createElement("input");
//     inputField.type = "number";
//     inputField.id = `soNguyen${i}`;
//     inputField.name = `soNguyen${i}`;
//     inputField.placeholder = `Nhập phần tử thứ ${i + 1}`;
//     soNguyenFields.appendChild(inputField);
//     soNguyenFields.appendChild(document.createElement("br"));
//   }
// }

// function layGiaTri() {
//   let soLuong = parseInt(document.getElementById("quantityNumber").value);
//   let mangSoNguyen = [];

//   for (let i = 0; i < quantityNumber; i++) {
//     let soNguyen = parseInt(document.getElementById(`soNguyen${i}`).value);
//     mangSoNguyen.push(soNguyen);
//   }

//   document.getElementById(
//     "result"
//   ).textContent = `Mảng các số nguyên đã nhập: [${mangSoNguyen.join(", ")}]`;
// }

// DEMO Homework

let arrsoN = [];
document.getElementById("btnThemSoN").onclick = function () {
  // truy xuat data user
  let soN = document.getElementById("soN").value * 1;
  // thêm mới và lưu trữ giá trị của mảng
  arrsoN.push(soN);
  console.log(arrsoN);
};

let btnReset = (document.getElementById("btnReset").onclick = function () {
  btnReset.reset();
});

document.getElementById("btn1").onclick = function () {
  // sử dụng mảng arrsoN để tính
  // for of
  let tong = 0;
  for (let item of arrsoN) {
    console.log(item);
    if (item >= 0) {
      tong += item;
    }
    console.log(tong);
  }
  document.getElementById("result").textContent =
    `Mảng các số nguyên đã nhập: [${arrsoN.join(", ")}]  ` +
    " " +
    "Tổng các số dương của mảng: " +
    tong;
};

// 2. Đếm có bao nhiêu phần tử số dương trong mảng
document.getElementById("btn2").onclick = function () {
  let count = 0;

  for (let item of arrsoN) {
    console.log(item);
    if (item >= 0) {
      count += item;
    }
    console.log(count);
  }
};

// 7. Sắp xếp mảng theo thứ tự tăng dần
document.getElementById("btn7").onclick = function () {
  let arrSoN2 = arrsoN.sort((a, b) => a - b);
  console.log(arrSoN2);
  document.getElementById("result").textContent =
    `Mảng các số nguyên đã nhập: [${arrsoN.join(", ")}]  ` +
    "; " +
    `Thứ tự mảng tăng dần của mảng vừa nhập:  +
    [${arrSoN2.join(", ")}]`;
};

// 3. Số nhỏ nhất trong mảng
document.getElementById("btn3").onclick = function () {
  let arr3 = (arrsoN = [0]),
    i;
  if (((arr3 = arrsoN = [0]), arr3 < arrsoN[i], i++)) {
    return (arr3 = arrsoN[i]);
    console.log(arr3);
  }
};
