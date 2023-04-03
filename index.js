const slider_step = document.querySelector("#range");
const step = 10;
//slider
slider_step.addEventListener("input", function() {
  this.value = Math.round(this.value / step) * step;
});
    const range = document.querySelector("#range");
    const SaaS_Spend = document.querySelector(".annualSaaSspend");
   
    




    const slider_container =[...document.querySelectorAll(".slider_container")];
    const next=[...document.querySelectorAll("#next")];
    const prev =[...document.querySelectorAll("#prev")];
    slider_container.forEach((item,i) => {
        let sliderdimension = item.getBoundingClientRect();
        let sliderwidth = sliderdimension.width;
        next[i].addEventListener('click', () => {
            item.scrollLeft += sliderwidth;
        } )
        prev[i].addEventListener('click', () => {
            item.scrollLeft -= sliderwidth;
        } )
    })
    const rangeInputs = document.querySelectorAll('input[type="range"]')

// range input fill
function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})



    function updateText()
    {
        var selectElement = document.getElementById("dropdown_window");
        var savings= document.getElementById("savings")
        var monthlyprice=document.getElementById("monthly_price");
        var selectedIndex = selectElement.selectedIndex;


        switch(selectedIndex) {
          case 0:
            {
            savings.textContent = "$150,000";
            monthlyprice.textContent="$1,500";
            break;}
          case 1:
          savings.textContent = "$300,000";
            monthlyprice.textContent="$2,500";
            break;
          case 2:
          savings.textContent = "$600,000";
            monthlyprice.textContent="$3,500";
            break;
            case 3:
            savings.textContent = "$900,000";
            monthlyprice.textContent="$4,500";
            break;
            case 4:
            savings.textContent = "$1.2M";
            monthlyprice.textContent="$5,500";
            break;
            case 5:
            savings.textContent = "$1.5M";
            monthlyprice.textContent="$6,500";
            break;

        }
      }
      //slider positioning and steps
    const slider = document.getElementById("range");
    //MAIN HEADING OF THE DIV WITH THE ICON
    const heading = document.getElementById("savings_heading");
    const SaaS_spend_amount = document.querySelector(".SaaS_spend_amount");

    slider.addEventListener("input", function() {
    const value = parseInt(slider.value);
    if (value==0) {
        heading.innerText = "$0";
        SaaS_spend_amount.innerText = "$0";
        SaaS_Spend.style.marginLeft = -690 + "px";
        if (window.matchMedia("(max-width: 988px)").matches)
        {
          SaaS_Spend.style.marginLeft = -480 + "px";
        }
        if (window.matchMedia("(max-width: 620px)").matches)
        {
          SaaS_Spend.style.marginLeft = -280+ "px";
        }
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = -220+ "px";
        }
    } else if (value > 0 && value <= 10) {
        heading.innerText = "$150,000";
        SaaS_spend_amount.innerText = "$500k";
        SaaS_Spend.style.marginLeft = -450 + "px";
        if (window.matchMedia("(max-width: 988px)").matches)
        {
          SaaS_Spend.style.marginLeft = -320 + "px";
        }
        if (window.matchMedia("(max-width: 620px)").matches)
        {
          SaaS_Spend.style.marginLeft = -185+ "px";
        }
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = -145+ "px";
        }

    } else if (value > 10 && value <= 20) {
        heading.innerText = "$300,000";
        SaaS_spend_amount.innerText = "$1M";
        SaaS_Spend.style.marginLeft = -225 + "px";
        if (window.matchMedia("(max-width: 988px)").matches)
        {
          SaaS_Spend.style.marginLeft = -165 + "px";
        }
        if (window.matchMedia("(max-width: 620px)").matches)
        {
          SaaS_Spend.style.marginLeft = -95+ "px";
        }
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = -75+ "px";
        }

    } 
 else if (value > 20 && value <= 30) {
        heading.innerText = "$600,000";
        SaaS_spend_amount.innerText = "$2M";
        SaaS_Spend.style.marginLeft = 0 + "px";
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = -30+ "px";
        }
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = 0+ "px";
        }
    }
    else if (value > 30 && value <= 40) {
        heading.innerText = "$900,000";
        SaaS_spend_amount.innerText = "$3M";
        SaaS_Spend.style.marginLeft = 220 + "px";
        if (window.matchMedia("(max-width: 988px)").matches)
        {
          SaaS_Spend.style.marginLeft = 158+ "px";
        }
        if (window.matchMedia("(max-width: 620px)").matches)
        {
          SaaS_Spend.style.marginLeft = 90+ "px";
        }
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = 70+ "px";
        }


    }  
    else if (value > 40 && value <= 50) {
        heading.innerText = "$1,200,000";
        SaaS_spend_amount.innerText = "$4M";
        SaaS_Spend.style.marginLeft = 450 + "px";
        if (window.matchMedia("(max-width: 988px)").matches)
        {
          SaaS_Spend.style.marginLeft = 315+ "px";
        }
        if (window.matchMedia("(max-width: 620px)").matches)
        {
          SaaS_Spend.style.marginLeft = 180+ "px";
        }
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = 140+ "px";
        }
    } 
    else {
        heading.innerText = "$1,500,000";
        SaaS_spend_amount.innerText = "$5M";
        SaaS_Spend.style.marginLeft = 670 + "px";
        if (window.matchMedia("(max-width: 988px)").matches)
        {
          SaaS_Spend.style.marginLeft = 475+ "px";
        }
        if (window.matchMedia("(max-width: 620px)").matches)
        {
          SaaS_Spend.style.marginLeft = 270+ "px";
        }
        if (window.matchMedia("(max-width: 433px)").matches)
        {
          SaaS_Spend.style.marginLeft = 210+ "px";
        }
    }
    })
    //Hambuger Menu
    const Hambuger_icon = document.getElementById("hamburger_img");
    let flag=0;
    const hamburger_div =  document.getElementById("hamburgersection");
    const Hambuger_menu = document.getElementById("navbar_menu");
    const Hambuger_button =document.getElementById("navbar_buttons");
    const hamburger_list = document.getElementById("navbar_list");
    function function1 ()
    {
      
      if (flag == 0)
      {
        hamburger_div.style.visibility = "visible";
        Hambuger_menu.style.visibility = "visible";
        Hambuger_button.style.visibility="visible";
        hamburger_list.style.visibility ="visible";
        document.body.style.overflow = "hidden";
        Hambuger_icon.setAttribute('src', '/images/cross-23.svg');
       
        
        flag = 1;
        console.log(flag)

      }
      else 
      {
        hamburger_div.style.visibility = "hidden";
        Hambuger_menu.style.visibility = "hidden";
        Hambuger_button.style.visibility="hidden";
        hamburger_list.style.visibility ="hidden";
        document.body.style.overflow = "auto";
        Hambuger_icon.setAttribute('src', '/images/more.png');
        
       
        console.log(flag)
        flag=0;
      }

      
    }
    Hambuger_icon.addEventListener('click' , function1);

    