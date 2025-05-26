# Kalkulator CVSS 4.0

**Autorzy:** Miłosz Brzeziński, Michał Duszyński, Bartosz Barwiński, Adam Kądziela, Bartłomiej Kowalewski

Kalkulator CVSS 4.0  – Kalkulator to aplikacja webowa umożliwiająca interaktywne wyliczanie wyników CVSS 4.0. Zbudowana w oparciu o [Quasar Framework](https://quasar.dev/) oraz Vue 3 z TypeScript, pozwala wybierać wektory CVSS, śledzić na bieżąco poziom zagrożenia i eksportować raport w formacie PDF.

---

## Funkcje

* **Interaktywny wybór wektorów**
  Wybieraj wartości dla wszystkich metryk Base, Temporal i Environmental zgodnych z CVSS 4.0.
* **Obliczenia w czasie rzeczywistym**
  Wynik i poziom zagrożenia aktualizują się automatycznie przy każdej zmianie.
* **Eksport do PDF**
  Pobierz sformatowany raport PDF z wybranym wektorem i wynikiem.
* **Responsywny interfejs**
  Układ oparty na komponentach Quasar.
* **Routing po stronie klienta**
  Vue Router do obsługi głównego widoku kalkulatora i strony 404.

---

## Struktura projektu

```plaintext
frontend/
└── src/
    ├── components/
    │   ├── types.ts               # Definicje typów TS (wektory, modele)
    │   ├── VectorButtons.vue      # Grupa przycisków dla jednej metryki
    │   ├── VectorCategory.vue     # Kategoria metryk z kartą i przyciskami
    │   └── vectors.ts             # Definicje wszystkich metryk CVSS i helpery
    │
    ├── css/
    │   └── quasar.variables.scss  # Zmienne i nadpisania motywu Quasar
    │
    ├── layouts/
    │   └── MainLayout.vue         # Szablon aplikacji (header, router-view)
    │
    ├── pages/
    │   ├── CalculatorPage.vue     # Główny interfejs kalkulatora CVSS
    │   └── ErrorNotFound.vue      # Strona 404 z przyciskiem „Wróć”
    │
    └── router/
        ├── index.ts               # Inicjalizacja Vue Router
        └── routes.ts              # Definicje tras („/” i „*”)
```

---

## Technologie

* **Framework:** Vue 3 z Composition API
* **Biblioteka UI:** Quasar Framework
* **Język:** TypeScript
* **Bundler:** Vite (via Quasar CLI)
* **Generowanie PDF:** [pdfmake](https://pdfmake.github.io/)

---

## Szczegóły folderów i komponentów

* **components/types.ts**
  Definicje interfejsów TypeScript używanych w aplikacji (np. typy przycisków, mapy modeli).

* **components/vectors.ts**
  Opis wszystkich możliwych metryk CVSS 4.0 oraz funkcja łączenia wyborów.

* **VectorButtons.vue**
  Tworzy pojedynczy przycisk wyboru metryki. Emituje `update:modelValue` przy kliknięciu.

* **VectorCategory.vue**
  Grupuje zestaw przycisków dla jednej kategorii metryk, aktualizuje `modelMap`.

* **CalculatorPage.vue**
  Koordynuje wyświetlanie kategorii, generuje string wektora, wywołuje funkcję obliczającą wynik i zarządza eksportem PDF.

* **MainLayout.vue**
  Zawiera szkielet aplikacji (layout) stosowany dla strony.

* **ErrorNotFound.vue**
  Prosta strona błędu 404 z przyciskiem powrotu.

* **router/index.ts** & **router/routes.ts**
  Konfiguracja Vue Router i definicje tras.

* **css/quasar.variables.scss**
  Globalne zmienne SCSS dla motywu Quasar.
