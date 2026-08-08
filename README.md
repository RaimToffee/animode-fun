# ANIMODE FUN — GitHub Pages

API is preconfigured to `https://anime-api-orcin-one.vercel.app`.

Upload this folder to a GitHub repository and enable GitHub Pages.

Implemented against the supplied Flask API: home/categories, series/seasons, episodes, search, A-Z, movies and stream. Favorites and watch history use browser localStorage because GitHub Pages has no backend/database. No login/register/admin is included.

The player uses only `streamLink` or `file` returned by the API. If GitHub Pages reports CORS errors, the Flask/Vercel API must allow the GitHub Pages origin.
