# Test Plan: Angular 10 → 18 Upgrade

## What Changed
Complete framework upgrade from Angular 10 to Angular 18 including all dependencies (TypeScript, RxJS, zone.js, Sass compiler). Source code fixes for compatibility (SCSS imports, RxJS paths, deprecated APIs removed).

## Primary Flow: App Loads and Core Navigation Works

### Test 1: Dashboard page renders correctly
**Steps:** Navigate to `http://localhost:4200/#/app/dashboard`
**Pass criteria:**
- Page loads without a blank white screen or console errors
- The sidebar is visible with menu items (Classic Dashboard, Custom Dashboard, UI, Components, Account, Maps, Charts, Pages)
- The "darkboard" title is visible in the sidebar
- Dashboard content area shows cards/widgets (todo list, weather, charts)

### Test 2: Lazy-loaded route works (UI pages)
**Steps:** Click "UI" in the sidebar to expand submenu, then click "Buttons"
**Pass criteria:**
- The URL changes to `/#/ui/buttons`
- The buttons page renders with MDL-styled button examples
- No white screen or JavaScript errors in console

### Test 3: Charts page renders (proves d3/nvd3 integration works)
**Steps:** Click "Charts" in the sidebar
**Pass criteria:**
- The URL changes to `/#/app/charts`
- At least one SVG chart element is visible on the page
- The chart has rendered paths/bars (not just an empty container)

### Test 4: Forms page renders (proves material-angular-select replacement works)
**Steps:** Click "Account" in the sidebar
**Pass criteria:**
- The URL changes to `/#/app/forms`
- The employer form renders with input fields
- Select dropdown elements are visible (from our replacement MaterialAngularSelectComponent)
- Dropdowns contain options (e.g. "Male", "Female")

### Test 5: Production build output is valid
**Steps:** Already verified via CLI - production build succeeds with hashed output files
**Pass criteria:** Exit code 0 from `ng build --configuration production` (already confirmed)
