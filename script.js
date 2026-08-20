const header=document.getElementById("header"), menu=document.getElementById("menu"), nav=document.getElementById("nav");
window.addEventListener("scroll",()=>header.classList.toggle("scrolled",scrollY>30));
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("form").addEventListener("submit",e=>{
 e.preventDefault();
 const d=new FormData(e.target);
 const body=encodeURIComponent(`Bharat Leadership Summit 2026 Enquiry\n\nName: ${d.get("name")}\nCompany: ${d.get("company")}\nEmail: ${d.get("email")}\nPhone: ${d.get("phone")}\nInterest: ${d.get("interest")}`);
 document.getElementById("msg").textContent="Opening your email app...";
 location.href=`mailto:?subject=BLS 2026 Enquiry&body=${body}`;
});