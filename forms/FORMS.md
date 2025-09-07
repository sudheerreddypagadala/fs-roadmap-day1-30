# HTML Forms — Day 5 Notes

## What is a `<form>`?
A `<form>` is a container for user input. It can collect data and send it to a server or process it with JavaScript.

### Key Attributes
- **action**: URL where form data is sent.
- **method**: HTTP method used (`GET` or `POST`).
  - `GET`: Adds data to the URL (used for search, filters).
  - `POST`: Sends data securely in the request body (used for login, signup).

---

## Common Form Inputs
- **Text Input**: `<input type="text" />`
- **Email Input**: `<input type="email" />` → validates email format.
- **Password Input**: `<input type="password" />`
- **Textarea**: For multi-line input.
- **Radio Buttons**: Choose one option.
- **Checkbox**: Yes/No or multiple selections.
- **Submit Button**: `<button type="submit">`

---

## Accessibility
- Always pair inputs with `<label>` using the `for` attribute.
- This improves screen reader usability and makes forms more accessible.

---

## Validation
- **Client-side (HTML)**: Uses attributes like `required`, `minlength`, `type="email"`.
- **Server-side (Backend)**: Validates data again in Django/Express/etc. (never trust client-only validation).

---

## Connection to React
- HTML inputs become **controlled components** using `useState`.
- Example:
  ```jsx
  const [email, setEmail] = useState("");
  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
