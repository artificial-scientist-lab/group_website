# Artificial Scientist Lab Website

Group website built with Next.js (App Router) and Tailwind CSS.

## Requirements

- Node.js 20 or newer
- npm (comes with Node.js)
- Git (needed only if you want to clone the repository)

## Install Requirements

### Linux / macOS (recommended: `nvm`)

1. Install `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

2. Restart your terminal, then install Node.js LTS (includes `npm`):

```bash
nvm install --lts
nvm use --lts
```

3. Verify installation:

```bash
node -v
npm -v
```

### Windows

1. Install Node.js LTS (includes `npm`) using `winget`:

```powershell
winget install OpenJS.NodeJS.LTS
```

2. Restart terminal and verify:

```powershell
node -v
npm -v
```

### Install Git (if needed)

- Linux (Ubuntu/Debian): `sudo apt install git`
- macOS (Homebrew): `brew install git`
- Windows: `winget install Git.Git`

## First-Time Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the site at:

```text
http://localhost:3000
```

4. Stop the server with `Ctrl + C`.

## Useful Commands

- Run dev server: `npm run dev`
- Run lint checks: `npm run lint`
- Create static export build: `npm run build` (output goes to `out/`)

## Update Team Member Texts and Images

Team members are defined in `app/page.tsx` in the `teamMembers` array near the top of the file.

Each member has this structure:

```ts
{
  name: "Full Name",
  role: "Role",
  focus: "Short research description.",
  image: "/team/file-name.jpg",
  links: [
    { label: "Website", href: "https://..." },
    { label: "GitHub", href: "https://..." }
  ]
}
```

### Change Text Fields

Edit these keys inside the member object:

- `name`
- `role`
- `focus`
- `links` (labels and URLs)

### Replace a Team Image

1. Add the new image file to `public/team/` (for example: `public/team/jane-doe.jpg`).
2. Update that person’s `image` field in `app/page.tsx`:

```ts
image: "/team/jane-doe.jpg"
```

### Important Image Behavior

- `.jpg`, `.jpeg`, `.png`, `.webp` are shown as full photos (`object-cover`).
- `.svg` is treated as a placeholder-style portrait (`object-contain` with padding and muted styling).

If you want a normal full-color photo card, use a raster format (`.jpg/.png/.webp`) instead of `.svg`.

### Add, Remove, or Reorder Team Members

- Add: copy an existing object in `teamMembers`, paste it, and edit values.
- Remove: delete the corresponding object.
- Reorder: move objects up/down in the `teamMembers` array.
