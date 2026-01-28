# React Native TDD Workshop

This repository was created for an **internal workshop** where I demonstrated how **Test-Driven Development (TDD)** works in a **realistic, client-style React Native application**.

The goal was not to build a polished product, but to **show the thought process** behind writing tests first, shaping components through tests, and keeping UI logic predictable and maintainable.

---

## 🎯 Purpose of the workshop

During the workshop, I walked colleagues through:

- how TDD changes the way you think about components
- writing tests **before** implementation
- letting tests drive component structure and API design
- avoiding over-engineering while still keeping code testable

This repo reflects that learning-focused, step-by-step approach.

---

## 🧠 What this project demonstrates

- **TDD workflow** in a React Native app
- Component-first development driven by tests
- Using **Jest** and **React Native Testing Library**
- Testing user interactions instead of implementation details
- Writing tests that survive refactors
- Structuring components to be easier to test

The app is intentionally simple, so the focus stays on **testing principles**, not app complexity.

---

## 🧪 Testing philosophy

The tests in this project aim to:
- describe behavior, not internals
- mimic how a user interacts with the app
- fail for meaningful reasons
- guide implementation instead of validating it after the fact

This mirrors how I approach testing in production projects.

---

## 🛠 Tech stack

- **React Native**
- **Jest**
- **React Native Testing Library**
- JavaScript

---

## 🚀 Getting started

```bash
git clone https://github.com/StanciuDragosIoan/react_native_tdd_workshop.git
cd react_native_tdd_workshop
npm install
npm test
