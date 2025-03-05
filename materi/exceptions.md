# Exceptions

Saat kita membuat program NodeJS, kadang kita lupa menangkap Exception

Hal ini bisa berbahaya karena nanti kita tidak bisa melakukan debug Exception dengan baik, sehingga tidak bisa kita investigasi selanjutnya

![](/exception.jpeg)

## Handle Exception

Winston memiliki fitur secara otomatis yang bisa digunakan untuk menangkap Exception yang belum ter-handle

Kita bisa lakukan pengaturan ini di Logger, yang secara otomatis exception akan dikirim ke semua Transport

Atau kita bisa lakukan pengaturan ini di Transport

![](/handle-exception.jpeg)
