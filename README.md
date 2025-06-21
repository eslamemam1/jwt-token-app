# 📘 Project Title

### Angular Dashboard App with JWT Authentication & Swagger API Integration

---

## 📋 Description

This is a simple Angular application that:

- Fetches users' data from a public Swagger-based API.
- Uses JWT token for protected route access.
- Implements route guards (`authGuard`) to restrict access to authenticated users only.
- Displays user statistics in a modern dashboard UI using Tailwind CSS.

---

## 🌐 Live API Source

Data is fetched from the following public API:

🔗 **Swagger UI**:  
[https://freeapi.miniprojectideas.com/index.html](https://freeapi.miniprojectideas.com/index.html)

---

## 🔐 Authentication

The app uses a **JWT token** obtained from Swagger UI authorization:

- You can manually copy the token from Swagger's "Authorize" button.
- Then paste it into `localStorage` under the key: `token`.

```ts
// Example (set manually for testing)
localStorage.setItem("token", "your-jwt-token");
```

---

## 🚀 Features

- ✅ Angular Standalone Components
- ✅ Route Guard (`authGuard`) for protecting routes
- ✅ JWT Authorization Header via Angular Interceptor
- ✅ Data fetched via HttpClient from Swagger API
- ✅ Responsive Dashboard UI
- ✅ Login/logout logic with token handling

---

## 🛠 Technologies Used

- Angular 17+ (Standalone Components)
- Tailwind CSS
- Swagger (API source)
- JWT Authentication
- TypeScript

---

## 📂 Project Structure

```
/src
 ├── app
 │    ├── about/
 │    ├── dashboard/
 │    ├── guards/
 │    ├── interceptor/
 │    ├── login/
 │    ├── not-found/
 │    └── app.routes.ts
```

---

## ✅ Run the Project

```bash
npm install
ng serve
```

---

## 🙌 Author

**Eslam Emam**  
Frontend Developer & Content Creator
