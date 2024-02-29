# Component file convention

- All components file has to follow `kebab-case`[^1] casing with `.tsx` extension. Only if `kebab-case` is not possible at all `camelCase` is also fine.
- If a component is generated with `shadcn-ui` , the generated component has to be in `src/lib/shadcn-ui/` path. If component is generated with other similar library, they also has to be their respective path.
- For futher modification of a generated component, copy the component code, and create a new file in `src/components/` folder with your desire name, and extend the name with `.ui.tsx`.

  i.e -
  Generated component:
  `src/lib/shadcn-ui/ui/button.tsx`
  Modified component:
  `src/components/button.ui.tsx`

[^1]:
    Kebab-casing - `kebab-case`
    Pascal-casing - `PascalCase`
    Camel-casing - `camelCase`
    Snake-casing - `snake_case`
