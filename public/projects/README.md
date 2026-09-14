# Project images

Screenshots referenced from `src/content/projects.ts`.

AVIF only. These are served through `next/image`, which negotiates WebP for
browsers that need it — a second source file is not required.

Recommended size: 1600×1000 (16:10). Convert with:

```
npx sharp-cli -i input.png -o output.avif --format avif --quality 62
```
