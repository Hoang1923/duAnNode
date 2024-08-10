const danhSachCSKH_element = document.getElementById ("danhSachCSKH")

const danhSachCSKH_options = [
    "Trung Tâm Trợ Giúp",
    "Shopee Blog",
    "Shopee Mall",
    "Hướng Dẫn Mua Hàng",
    "Hướng Dẫn Bán Hàng",
    "Thanh Toán",
    "Shopee Xu",
    "Vận Chuyển",
    "Trả Hàng & Hoàn Tiền",
    "Chăm Sóc Khách Hàng",
    "Chính Sách Bảo Hành"

]

const doDaiMang = danhSachCSKH_options.length

for (var i = 0; i < doDaiMang; i++)
    {
        let tenOption = danhSachCSKH_options[i]
        const phanTuDuocThem = `<a href="">${tenOption}</a>`
        danhSachCSKH_element.innerHTML =  danhSachCSKH_element.innerHTML + phanTuDuocThem
    }


const danhSachVeShoppe_element = document.getElementById("danhSachVeShoppe")

const danhSachVeShoppe_options = [
    "Giới Thiệu Về Shopee Việt Nam",
    "Tuyển Dụng",
    "Điều Khoản Shopee",
    "Chính Sách Bảo Mật",
    "Chính Hãng",
    "Kênh Người Bán",
    "Flash Sales",
    "Flash Sales",
    "Chương Trình Tiếp Thị Liên Kết Shopee",
    "Liên Hệ Với Truyền Thông"
]

let doDaiMang1 = danhSachCSKH_options.length

for(var i = 0; i<doDaiMang1; i++)
    {
        let tenOption1 = danhSachVeShoppe_options[i]
        const phanTuThem1 = `<a href="">${tenOption1}</a>`
        danhSachVeShoppe_element.innerHTML += phanTuThem1
    }
    

const danhSachQuocGia_element = document.getElementById("danhSachQuocGia")

const danhSachQuocGia_options = [
    "Singapore</a><span>|</span>",
    "Indonesia</a><span>|</span>",
    "Thái Lan</a><span>|</span>",
    "Malaysia</a><span>|</span>",
    "Việt Nam</a><span>|</span>",
    "Phillipinnes</a><span>|</span>",
    "Brazil</a><span>|</span>",
    "México</a><span>|</span>",
    "Colombia</a><span>|</span>",
    "Chile</a><span>|</span>",
    "Đài Loan"
]

var doDaiMang2 = danhSachCSKH_options.length

for (var i = 0; i<doDaiMang2; i++){
    const phanTuThem2 = `<a href="">${danhSachQuocGia_options[i]}</a>`
    danhSachQuocGia_element.innerHTML += phanTuThem2
}

