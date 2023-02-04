# windowsUserVerification

0.1 Установить Node.js (если он не стоит), добавить node.exe в глобальные переменные среды Windows, указать ссылку на 
него в стурктуре проекта.

Для запуска программы выполнить следующие действия:
1. склонировать репозиторий  https://github.com/svaroggod/windowsUserVerification.git;
2. подтянуть зависимости, введя в терминале команду npm install;
3. запустить исполняемый файл server.bat из корневой папки проекта.

Тестовое задание:

Необходимо написать простое web-приложение с использованием node.js node-addon-api WinAPI для проверки наличия
пользователя (например, Администратор) в списке пользователей операционной системы Windows.

Приложение должно работать по следующему сценарию

1. Пользователь запускает web-сервер из корня проекта:
   server.bat

2. Автоматически открывается браузер с начальной web страницей, на которой отображаются
   -поле ввода имени пользователя
   -кнопка "Проверить"

3. Пользователь вводит любое имя пользователя и нажимает на "проверить"

4. Если введённый пользователь присутствует в списке пользователей Windows, отображается страница с надписью
   "Пользователь <имя_введённого_пользователя> есть", иначе "Пользователя <имя_введённого_пользователя> нет".
   Под надписью есть кнопка "Назад", при нажатии на которую происходит возврат на начальную страницу.

5. Проверку наличия введённого имени пользователя в списке пользователей ОС Windows запрещено проводить путём сравнения
   текущего пользователя, от которого запущен процесс сервера и введённого пользователя, а также запрещено использовать
   названия домашних каталогов пользователей в каталоге C:\Users (С:\Пользователи).
   Список пользователей для проверки можно получить через Управление компьютером->Служебные программы->
   Локальные пользователи и группы->Пользователи.

6. В корне проекта создать файл README.MD с текстом тестового задания в кодировке UTF-8

7. Проект выложить на github.com (другие ресурсы не рассматриваются).

8. Ссылку на проект присылайте на job@eurekabpo.ru

9. Срок выполнения задания 7 дней начиная с завтрашнего дня.

Использованные ресурсы:

1. Изменение кодировки файла: https://www.jetbrains.com/help/phpstorm/encoding.html#file-encoding-settings
   https://www.cyberforum.ru/cmd-bat/thread618288.html
2. Node.js установка глобальных переменных для Виндовс, библиотеки:
   https://stackoverflow-com.translate.goog/questions/53487217/pycharm-cant-open-local-terminal-failed-to-start-cmd-exe?_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=ru
   https://nodejs.org/dist/latest/docs/api/
   https://github.com/sindresorhus/awesome-nodejs
   https://habr.com/ru/company/cit/blog/259987/
3. V8 https://nodejs.org/api/addons.html
4. https://www.exefiles.com/ru/h/lmcons-h/
5. Handlebars https://habr.com/ru/post/273581/
   https://nodejsdev.ru/guide/express-handlebars-partial/
   https://nodejsdev.ru/guide/express-handlebars-layout/
6. css https://www-javatpoint-com.translate.goog/materialize-css-navbar?_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=ru
   https://materializecss-com.translate.goog/getting-started.html?_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=ru
7.
bat https://ru.stackoverflow.com/questions/1211264/%D0%B2%D1%8B%D0%BF%D0%BE%D0%BB%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%B2-bat-%D1%84%D0%B0%D0%B9%D0%BB-child-process-nodejs
8. os https://nodejsdev.ru/api/os/