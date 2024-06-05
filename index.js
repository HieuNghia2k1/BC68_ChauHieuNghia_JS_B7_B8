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
  let timMin = arrsoN;
  let n;
  {
    let min = arrsoN[0];
    for (let i = 1; i < n; i++)
      if (min < arrsoN[i]) {
        return (min = arrsoN[i]);
      }
    console.log(min);
  }
};

// 4. Số dương nhỏ nhất trong mảng
document.getElementById("btn4").onclick = findSmallestPositiveNumber();

function findSmallestPositiveNumber(arrsoN) {
  // Kiểm tra nếu arr không phải là mảng hoặc không tồn tại
  // if (!Array.isArray(arrsoN)) {
  //   throw new TypeError("Input must be an array");
  // }

  // Lọc các số dương từ mảng
  let positiveNumbers = arrsoN.filter((number) => number > 0);

  // Kiểm tra nếu không có số dương nào trong mảng
  if (positiveNumbers.length === 0) {
    return null; // hoặc trả về một giá trị nào đó phù hợp
  }

  // Tìm số dương nhỏ nhất
  let smallestPositiveNumber = Math.min(...positiveNumbers);

  return smallestPositiveNumber;
}

// Ví dụ sử dụng
