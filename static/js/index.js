/*Iniciando o desenvolvimento JS*/
/*alert("Teste Alert"); /*Cria um alerta no navegador*/
/* alert("Esse site está em construção!!"); */

//Swich Function
const swichTheme = () => {
  //Get root elements and date theme value
  const rootElement = document.documentElement
  let dataTheme = rootElement.getAttribute('data-theme'),
    newTheme
  
  newTheme = (dataTheme === 'light') ? 'dark' : 'light'
  if (newTheme === 'dark'){
    document.getElementById("Desktop_Dark_Mode").innerHTML = "light_mode";
    document.getElementById("Dark_Mode").innerHTML = "light_mode";
  } else{
    document.getElementById("Desktop_Dark_Mode").innerHTML = "dark_mode";
    document.getElementById("Dark_Mode").innerHTML = "dark_mode";
  }

  //Set the new HTML attribute
  rootElement.setAttribute('data-theme', newTheme)
}

//Add event listner for the theme switcher
document.querySelector('#Desktop_Dark_Mode').addEventListener('click', swichTheme)
document.querySelector('#Dark_Mode').addEventListener('click', swichTheme)

//Others functions
function change_display()
{
	if (Nav_Mobile.style.display == "block")
	{
		Nav_Mobile.style.display = "none";
		document.getElementById("Mobile_Menu").style.borderRadius = "10px 0px";
		document.getElementById("Mobile_Menu").innerHTML = "menu";
	}
	else
	{
		Nav_Mobile.style.display = "block";
		document.getElementById("Mobile_Menu").style.borderRadius = "10px 0px 0px 0px";
		document.getElementById("Mobile_Menu").innerHTML = "close";
	}
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) // ação a partir de 40% de tela
  {
    document.getElementById("Mobile_logo").style.display = "none";
    document.getElementById("Header_Mobile").style.height = "70px";
    document.getElementById("Mobile_name").style.marginTop = "-30px";
  } 
  else 
  {
    document.getElementById("Mobile_logo").style.display = "block";
    document.getElementById("Header_Mobile").style.height = "150px";
    document.getElementById("Mobile_name").style.marginTop = "5px";
  }
}

/* function dark_theme()
{
	const html = document.querySelector('body');
	html.style.backgroundColor = "black";

} */

//

//falta implementar o dark mode
//	if ()
//}

/*var select = document.querySelector('select');
var paragrafo = document.querySelector('p');

const html = document.querySelector('html');
document.body.style.padding = '15px';

select.addEventListener('change', idadeAtleta);

function idadeAtleta() {

    const classificacao = select.value;

    switch (classificacao) {
        case 'infantilA':
            paragrafo.textContent = "classificação do atleta infantil A";
            html.style.backgroundColor = "black";
            html.style.color = "white";
            break;

        case 'infantilB':
            paragrafo.textContent = "classificação do atleta infantil B";
            html.style.backgroundColor = "pink";
            html.style.color = "white";
            break;   

        case 'juvenilA':
            paragrafo.textContent = "classificação do atleta juvenil A";
            html.style.backgroundColor = "#3464eb";
            html.style.color = "white";
            break;
        case 'juvenilB':
            paragrafo.textContent = "classificação do atleta juvenil B";
            html.style.backgroundColor = "#c248c2";
            html.style.color = "white";
            break;
        default:
             html.style.backgroundColor = "white";
             html.style.color = "black";
        break;

    }

}*/