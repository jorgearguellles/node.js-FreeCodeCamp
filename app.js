const miUrl = new URL(
  "https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1"
);

console.log("hostname:", miUrl.hostname);
console.log("pathname:", miUrl.pathname);
console.log("search:", miUrl.search);
console.log("searchParams:", miUrl.searchParams);
console.log("searchParams:", miUrl.searchParams.get("ordenar"));
console.log("searchParams:", miUrl.searchParams.get("nivel"));
