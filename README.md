# Orion - Modern Angular Admin Dashboard Template

**Technology Stack:**

- **Frontend:** Angular v20
- **CSS Framework:** Tailwind CSS
- **UI Components:** Zard UI

**Dashboard Name:** Orion - Modern Angular Admin Dashboard Template

---

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Navigation Menu](#navigation-menu)
4. [Features](#features)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Overview

Orion is a modern, responsive, and customizable admin dashboard template built with **Angular v20**, **Tailwind CSS**, and **Zard UI**. It includes a structured navigation system, pre-built pages, UI components, and data tables to accelerate dashboard development.

The dashboard is designed for scalability and modularity, making it suitable for projects ranging from small web apps to enterprise-level applications.

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/Rumahkodingku/orion-angular-admin-dashboard-free.git
cd orion-angular-admin-dashboard-free
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
ng serve
```

4. Open the dashboard in your browser: `http://localhost:4200`

---

## Navigation Menu

The dashboard uses a structured navigation menu defined in `NAV_ITEMS`. Below is the menu hierarchy:

### MENU

- **Dashboard**
  - Route: `/`
  - Icon: `material-symbols:dashboard-outline-rounded`

- **Authentication**
  - Icon: `material-symbols:security`
  - Sub-pages:
    - **Login** → `/auth/login`
    - **Register** → `/auth/register`

- **Pages**
  - Icon: `material-symbols:description`
  - Sub-pages:
    - **Error 401** → `/error/401`
    - **Error 404** → `/error/404`
    - **Error 500** → `/error/500`

- **Tables**
  - Icon: `mdi:table-large`
  - Sub-pages:
    - **Basic Table** → `/tables/basic`
    - **Data Table** → `/tables/data`

### OTHERS

- **UI Elements**
  - Icon: `mdi:palette`
  - Sub-pages:
    - **Accordion** → `/ui-elements/accordion`
    - **Alert** → `/ui-elements/alert`
    - **Alert Dialog** → `/ui-elements/alert-dialog`
    - **Avatar** → `/ui-elements/avatar`
    - **Badge** → `/ui-elements/badge`
    - **Breadcrumb** → `/ui-elements/breadcrumb`
    - **Button** → `/ui-elements/button`

---

## Features

- Fully responsive design optimized for desktop, tablet, and mobile.
- Modular Angular architecture for scalability.
- Integrated Tailwind CSS for utility-first styling.
- Pre-built UI components via Zard UI.
- Data tables with sorting, pagination, and search.
- Authentication pages (Login/Register) included.
- Standard error pages (401, 404, 500).

---

## Usage

- Use `routerLink` for navigation between pages.
- UI components can be imported individually from the `ui-elements` module.
- Tables support both static and dynamic data.

Example:

```html
<z-button color="primary" (click)="handleClick()">Click Me</z-button>
```

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-name`).
6. Create a pull request.

---

## License

This project is free to use and distributed without any license restrictions.
