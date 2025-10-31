const wo = document.querySelector('#m-3-1');
const i = document.querySelector("#m-3-3"); 
const fe = document.querySelector("#m-3-2");

wo.addEventListener("click", () => {
    wo.style.backgroundColor='orange';
 

  i.innerHTML = `
    <div class="m-3-3"><img src='wc-gynecology.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Gynecology</p></div>
    <div class="m-3-3"><img src='wc-obstetrics.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Obstetrics</p></div>
    <div class="m-3-3"><img src='wc-pregnancy-delivery.webp' height='40px' width="40px" style="margin-top:0.75rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Pregnancy Delivery</p></div>
    <div class="m-3-3"><img src='wc-child-care.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Childcare</p></div>
    <div class="m-3-3" style="margin-left: 10rem;"><img src='wc-nicu.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">NICU</p></div>`;
    wo.style.color = 'white';
    fe.style.backgroundColor='white';
    fe.style.color='#0F346C';
});

fe.addEventListener("click", () => {
  
  i.innerHTML = `
    <div class="m-3-3"><img src='wc-fertility-ovulation-induction.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Ovulation Induction</p></div>
    <div class="m-3-3"><img src='wc-fertility-infertility.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Infertility</p></div>
    <div class="m-3-3"><img src='iui-treatment.webp' height='40px' width="40px" style="margin-top:0.75rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">IUI Treatment</p></div>
    <div class="m-3-3"><img src='wc-fertility-ivf-treatment.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1.5rem;margin-left:0.5rem; font-size: large;padding-bottom:40px;">IVF Treatment</p></div>
    <div class="m-3-3" style="margin-left: 10rem;"><img src='wc-fertility-preservation.webp' height='40px' width="40px" style="margin-top: 1rem;margin-left:0.5rem;">
    <p style="color:#0F346C;display: inline-block;margin-top:1rem;margin-left: 2rem; font-size: large;padding-bottom:40px;">Fertility Prevention</p></div>`;
    wo.style.backgroundColor = 'white';
    wo.style.color='#0F346C';
    fe.style.backgroundColor='orange';
    fe.style.color='white';
});
/* link to page of about*/
/* link to page of about*/
const abo = document.getElementById('abo');
abo.addEventListener("click",()=>
{
  window.location='about.html';
});
const ho = document.getElementById('ho');
{
  ho.addEventListener("click",()=>
  {
    window.location='main.html';
  })
};
const book = document.getElementById('book');
{
  book.addEventListener("click",()=>
  {
    window.location='book.html';
  })
};
const eme = document.getElementById('eme');
{
  eme.addEventListener("click",()=>
  {
    window.location='eme.html';
  })
};
const con = document.getElementById('con');
{
  con.addEventListener("click",()=>
  {
    window.location='contact.html';
  })
};
const hos = document.getElementById('hos');
{
  hos.addEventListener("click",()=>
  {
    window.location='hospital.html';
  })
};
const doc = document.getElementById('doc');
{
  doc.addEventListener("click",()=>
  {
    window.location='doctor.html';
  })
};
/*windows on load the poster */
var open = true;

/*document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
    const one = document.createElement("div");
    one.style.position = "fixed";
    one.style.width = "75%";
    one.style.height = "300px";
    one.style.borderRadius = "2rem";
    one.style.transform = "translate(-50%,-50%)";
    one.style.left = '50%';
    one.style.top = "50%";
    one.style.zIndex='10000'
    one.style.background = "white";
    one.innerHTML = `
      <button id="btn" style="position: absolute; right: 5px; top: 3rem;">X</button>
      <br><br>
      <center>
        <h1>THANK YOU FOR VISITING THE VIVIRA MALL</h1>
        <br>
        <h3>Please submit your valuable feedback</h3>
        <h3>Your feedback is very useful for us.</h3>
      </center>
    `;

    document.body.appendChild(one);

    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => {
      document.body.removeChild(one);
      open = true;
    });
  }, 60);
});*/
//  NUMBER INCRESSING FUNCTION
document.addEventListener("DOMContentLoaded", function() {
  const ip = document.querySelector("#IP");
  let count = 0;

  function updateip() {
      if (count <= 100) {
          ip.innerHTML = count + '+';
          count++;
          setTimeout(updateip, 250); // Delay of 100 milliseconds
      }
  }

  const op = document.querySelector("#OP");
  let count1 = 0;

  function updateop() {
      if (count1 <= 100) {
          op.innerHTML = `${count1} +`;
          count1++;
          setTimeout(updateop, 250); // Delay of 100 milliseconds
      }
  }

  const cat = document.querySelector("#CAT");
  let count2 = 0;

  function updateacat() {
      if (count2 <= 25) {
          cat.innerHTML = `${count2} +`;
          count2++;
          setTimeout(updateacat, 780); // Delay of 700 milliseconds
      }
  }

  const cona = document.querySelector("#CON");
  let count3 = 0;

  function updateacon() {
      if (count3 <= 500) {
          cona.innerHTML = `${count3} +`;
          count3++;
          setTimeout(updateacon, 50); // Delay of 30 milliseconds
      }
  }
  const surgeries = document.querySelector('#SUG')
  let count4 = 0;

  function updateasug() {
      if (count4 <= 3000) {
          surgeries.innerHTML = `${count4} +`;
          count4++;
          setTimeout(updateasug, 8); // Delay of 30 milliseconds
      }
  }
  const hosbeds = document.querySelector('#HOB')
  let count5 = 0;

  function updatehob() {
      if (count5 <= 500) {
          hosbeds.innerHTML = `${count5} +`;
          count5++;
          setTimeout(updatehob, 50); // Delay of 30 milliseconds
      }
  }

  setTimeout(() => {
      updateip();
      updateop();
      updateacat();
      updateacon();
      updateasug();
      updatehob()
  }, 10000); // Initial delay of 10 seconds before starting updates
});
