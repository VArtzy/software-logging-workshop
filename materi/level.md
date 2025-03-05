# Level

Dalam logging, terdapat istilah yang bernama Level, Level biasanya digunakan sebagai informasi seberapa penting log tersebut

Level dimulai dari paling rendah ke paling tinggi, semakin tinggi Level nya, artinya semakin penting informasi log tersebut

Untuk menambahkan Level ketika melakukan log, kita bisa ubah attribute level menjadi level yang kita inginkan

## Logging Level

Winston level (RC4029)

- error
- warn
- info
- http
- verbose
- debug
- silly

## Level

![](/level.jpeg)

Hasil log level

![](/hasil-level.jpeg)

## Kenapa Beberapa Level Tidak Muncul


Secara default, saat kita membuat Logger,  Logger hanya akan menampilkan log dengan level info atau level diatasnya

Jika kita ingin mengubah log level mana yang ingin kita tampilkan, maka kita perlu ubah konfigurasi level ketika kita membuat logger, dengan menggunakan level minimal yang ingin kita tampilkan

## Logger dengan Level

![](/logger-level.jpeg)

## Shortcut Function

Logger juga memiliki function shortcut yang bisa digunakan untuk melakukan logging, sehingga kita tidak perlu menggunakan function log dan object dengan attribute level lagi

Kita bisa langsung menggunakan function dengan nama sesuai dengan level nya, misal logger.info(message), logger.warn(message), dan lain-lain

![](/shortcut.jpeg)

