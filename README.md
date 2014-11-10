# AngularJS Gallery Manager

See it in work [here](http://c1nde.github.io/gallery/)

## What's wrong about that

Answer: REST Api.

1. Proper collection URI should return actual values, not urls for them. Slows down app, slows down development.
2. Proper resource nesting should be done different way. Once again, not with URLs, but IDs or objects.
3. Proper response to POST request is whole just created object. Otherwise, there is no new ID, only fetching new one from server. Also, this destroys angular 2 way-binding.
4. Once again. Recourse nesting. First you get urls, then get elements one by one, then fetch urls for nested collection and once again, fetching them one by one. Four level promises are not good.
