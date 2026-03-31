function girar(tarjeta) {
  const inner = tarjeta.querySelector('.tarjeta-inner');
  inner.classList.toggle('girado');
}

window.addEventListener("scroll", function () {
  const elementos = document.querySelectorAll(".reveal");

  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;

    if (top < visible) {
      el.classList.add("active");
    }
  });
});