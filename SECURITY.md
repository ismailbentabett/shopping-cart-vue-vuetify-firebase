# Security Policy

## Supported versions

This project is maintained as a reference implementation. Security fixes are applied to the latest commit on the default branch (`master`) only.

| Version | Supported |
| ------- | --------- |
| `master` (latest) | Yes |
| Older commits / forks | No |

## Reporting a vulnerability

Please **do not** open a public issue for security problems.

Report vulnerabilities privately through GitHub:

1. Go to the repository's **Security** tab.
2. Click **Report a vulnerability** (GitHub private vulnerability reporting).
3. Describe the issue, the affected files or flows, and steps to reproduce.

Direct link: <https://github.com/ismailbentabett/shopping-cart-vue-vuetify-firebase/security/advisories/new>

You can expect an acknowledgement within a few days. Once the issue is confirmed, a fix will be prepared and you will be credited in the advisory unless you prefer to stay anonymous.

## Scope and deployment notes

This is a client-side Vue application that talks directly to Firebase. When you run it against your own Firebase project:

- **Firestore and Storage security rules are your primary line of defense.** Restrict reads and writes so users can only modify their own `product` documents and uploads.
- **Firebase web config is not a secret by itself**, but it identifies your project. Pair it with strict security rules, API key restrictions in Google Cloud Console and, where possible, Firebase App Check.
- Never commit service-account keys, admin SDK credentials or `.env` files.
