# Transport

## Console Transport

Saat membuat Logger, secara default Logger tidak akan menggunakan Transport

Apa itu Transport? Transport adalah destinasi atau target yang digunakan untuk mengirim log. 

Ada banyak sekali Transport, salah satunya yang paling sederhana adalah Console

Console merupakan Transport yang digunakan untuk mengirim data log ke console/stdout

![Console transport](/console-transport.jpeg)

## File Transport

Sebelumnya kita hanya menggunakan Console Transport, selain Console Transport, di Winston juga terdapat File Transport

Dari namanya kita sudah tahu, bahwa Transport ini akan menyimpan data log ke file

Kita bisa menambahkan langsung beberapa Transport dalam satu Logger object

![](/file.jpeg)

![](/hasil-file.jpeg)

## Transport Level

Beberapa Transport memiliki pengaturan Level sendiri

Saat sebuah Transport memiliki pengaturan Level, secara otomatis Transport hanya akan menerima log dengan level tersebut atau yang lebih tinggi

Hal ini sangat cocok misal ketika kita ingin memisahkan beberapa level log di transport yang berbeda

![](/transport-level.jpeg)

![](/hasil-transport-level.jpeg)

## Membuat Transport

Kadang pada kasus tertentu, mungkin kita ingin membuat Transport sendiri, misal ketika ada log error, kita ingin mengirim data log tersebut ke database, atau ke chat, atau email, dan lain-lain

Jika tidak ada Transport yang tersedia secara default oleh Winston, kita bisa mencari Transport yang opensource yang disediakan di komunitas, atau bisa saja kita membuat Transport sendiri secara manual jika kita mau

Untuk membuat Transport, kita cukup membuat class turunan dari package winston-transport

## Spesifikasi Transport

![](/spesifikasi.jpeg)

![](/membuat.jpeg)

![](/menggunakan.jpeg)

## Transport Lainnya

Winston juga menyediakan Transport lain, misalnya :

- Redis Transport : https://github.com/winstonjs/winston-redis 
- Syslog Transport :  https://github.com/winstonjs/winston-syslog 
- CouchDB Transport : https://github.com/winstonjs/winston-couchdb 
- Loggy Transport : https://github.com/winstonjs/winston-loggly 

Atau Transport yang disediakan oleh komunitas :

- Slack Transport : https://github.com/TheAppleFreak/winston-slack-webhook-transport 
- Telegram Transport : https://github.com/ivanmarban/winston-telegram 
