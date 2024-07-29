# Component file convention

- All components file has to follow `kebab-case`[^1] casing with `.tsx` extension. Only if `kebab-case` is not possible at all `camelCase` is also fine (but remember **only if...**).
- If a component is generated with `shadcn-ui` , the generated component has to be in `src/lib/shadcn-ui/` path. If component is generated with other similar library, they also has to be in similar but in their respective path. i.e `src/lib/[library-name]` .
- For futher modification of a generated component through a library, copy the component code, and create a new file in `src/components/` folder with your desire name, and extend the name with `.ui.tsx`.

  e.g -
  Generated component:
  `src/lib/shadcn-ui/ui/button.tsx`
  Modified component:
  `src/components/button.ui.tsx`

# Server-action convention

Try to send object as `form-data` to the `server-action`. If we cannot send object as `form-data` to the `server-action`, (i.e - form data consist of file), try to get the pure `form-data` from the `form` as **`FormData`**, send the data to `server-action` and convert them to object inside the `server-action`.

[^1]:
    Kebab-casing - `kebab-case`
    Pascal-casing - `PascalCase`
    Camel-casing - `camelCase`
    Snake-casing - `snake_case`
