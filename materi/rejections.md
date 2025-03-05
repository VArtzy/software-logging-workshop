# Rejections

Selain kasus Exception yang tidak terhandle, kadang sering ada kasus di NodeJS kita sering lupa meng-handle Promise Rejection

![](/rejection.jpeg)

## Handle Promise Rejections

Winston juga memiliki fitur yang bisa kita gunakan untuk menangkap semua Promise yang reject secara otomatis

Jadi kita bisa melihat detail error Rejections tersebut

Sama seperti Exceptions, kita bisa atur ini di Logger atau di Transport

![](/handle-rejection.jpeg)
