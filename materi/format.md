# Format

Format adalah object yang digunakan untuk melakukan formatting data log sebelum dikirim ke Transport

Saat kita membuat Logger, secara default, Logger akan akan menggunakan JSON Format, artinya data akan dikirim dalam bentuk JSON

Winston juga menyediakan banyak format lain selain JSON

![](/format.jpeg)

## Membuat Format Sendiri

Winston juga menyediakan format printf, yang bisa digunakan untuk membuat format sendiri

![](/printf.jpeg)

## Combine Format

Winston memiliki fitur bernama Combine Format, dimana kita bisa melakukan kombinasi beberapa Format sekaligus

Ini cocok untuk menambah informasi tambahan ke log data, misal data timestamp, data jarak waktu antar log, dan lain-lain

Kita bisa menggunakan Combine Format di Winston untuk menggabungkan beberapa Format

## Daftar Format di Winston

![](/daftarformat.jpeg)

![](/combine.jpeg)
