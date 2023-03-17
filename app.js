const sbmt = document.querySelector(".submite");
sbmt.addEventListener("click", changes);
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const orn = document.querySelector(".orn");
const lbl = document.querySelectorAll("label");
const inp = document.querySelectorAll("input");
const bod = document.querySelector("body");
const ifs = false;

lbl.forEach((lb) => {
  lb.addEventListener("click", (e) => {
    const tt = e.target.innerHTML;
    orn.innerHTML = `You selected ${tt} out of 5`;
  });
});

function changes() {
  inp.forEach((inn) => {
    if (inn.checked) {
      c1.style.display = "none";
      c2.style.display = "flex";
      ifs = true;
    }
  });

  if (ifs === false) {
    const pp = document.createElement("p");
    pp.className = "alert";
    pp.textContent = "Please rate first!";
    bod.appendChild(pp);
    setInterval(() => {
      document.querySelector(".alert").remove();
    }, 4000);
  }
}
