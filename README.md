# AngularPosts

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Реализовано:

- Angular 16 
- использовался Angular Material 
- Роутинг
- Реактивные формы для страниц авторизации
- Страница постов и поста по id доступна только авторизованным пользователям
- Данные для регистрации пользователя сохраняются в localStorage
- Lazy Loading
- HttpClient для обращений к API
- Типизация форм, интерфейсов, методов, без any
- Angular сервисы

  *Приложение содержит*:
- страницу авторизации;
- страницу с таблицей постов,с этой страницы можно перейти на страницу поста по id;
- страницу поста по id, с этой страницы можно вернуться на страницу всех постов;
- шапку, в которой расположены кнопки авторизации/деавторизации

### Development server

http://localhost:4200/
```bash
ng serve
```
либо
```bash
npm run start
```
## Build

```bash
ng build
```
либо
```bash
npm run build
```
