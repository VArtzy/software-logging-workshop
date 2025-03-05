# Rotate File

## Default Transport File

Secara default, winston Transport File hanya akan menyimpan semua log di dalam satu file

Hal ini akan sangat berbahaya ketika aplikasi berjalan dalam jangka waktu lama, sehingga menyebabkan ukuran file akan semakin membesar

## Daily Rotate File

Untungnya, Winston sendiri membuat package terpisah untuk membantu ini, yaitu Daily Rotate File

https://www.npmjs.com/package/winston-daily-rotate-file 

Package ini bisa digunakan untuk membuat rotasi file transport secara otomatis sesuai aturan yang kita tentukan, dan bisa secara otomatis menghapus file lama ketika sudah tidak diperlukan lagi

![](/rotate.jpeg)

![](/rotate-file.jpeg)
