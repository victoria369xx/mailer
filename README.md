# mailer
Виджет для отправки сообщений на электронную почту (Node JS,  Express, Nodemailer)

Настройки почтового клиента smtp сделаны для mail.ru - https://help.mail.ru/mail/mailer/popsmtp 
Можно отправлять письма только с ящиков с доменом mail.ru, для отправки письма с ящиком другого домена - измените настройки smtp.

{
    host: 'smtp.mail.ru',
    port: 465,
    secure: true, //true for 465, false for others
    auth: {
        user: 'почта', // Ввести адрес ящика, на который вы хотите получать сообщения
        pass: 'внешний пароль' // Ввести пароль для внешних приложений
    }
},
    {
        to: 'почта' // Поле по умолчанию, пользователь не видит, на какую почту будет отправлено письмо 
    } 
    
    В письме, которое вы получите, в поле from - будет указано значение "Email для ответа", которое ввел пользователь. 
    
  Сервер: **http://localhost:3000/helpdesk** 
  Запуск сервера  **npm run start** 
