const creditType = document.querySelector(".form-select");
const vade = document.querySelector("#input-time");
const tutar = document.querySelector("#input-amount");
const hesapla = document.querySelector(".btn-dark");
let faiz = 0;
let taksitTutarı = 0;

hesapla.addEventListener("click", (e) => {
  e.preventDefault();
  if (creditType.value === "Seçiniz" || !vade.value || !tutar.value) {
    alert("Lütfen Kredi Tipini, Miktarını, Tutarı Seçiniz");
  }

  if (creditType.value === "Konut Kredisi") {
    faiz = 1.29;
  } else if (creditType.value === "İhtiyaç Kredisi") {
    faiz = 1.99;
  } else if (creditType.value === "Araç Kredisi") {
    faiz = 1.79;
  }

  taksitTutarı =
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
    ((1 + faiz) ** vade.value - 1);

  document.querySelector(".credit-info").innerHTML = `
<div class="credit-info">
<h1 class="text-warning mt-3 mb-3">Kredi Bilgileri</h1>
<table class="table table-bordered border-warning">
    <tbody>
        <tr>
            <th scope="row">Kredi Miktarı</th>
            <td>${tutar.value} ₺</td>
            <th>Kredi Tipi</th>
            <td>${creditType.value}</td>
        </tr>
        <tr>
            <th scope="row">Vade</th>
            <td>${vade.value}</td>
            <th>Faiz Oranı</th>
            <td>${faiz}</td>
        </tr>
        <tr>
            <th scope="row">Toplam Tutar</th>
            <td>${(taksitTutarı * vade.value).toFixed(2)} ₺</td>
            <th>Taksit Tutarı</th>
            <td>${taksitTutarı.toFixed(2)} ₺</td>
        </tr>
    </tbody>
</table>
</div>`;
});
