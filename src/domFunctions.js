// Inicializate the first state of the page
let initialState = () => {
    generate_initialDivs()
    sidebarContent()
    homepage()
    document.querySelector("#but_home").classList.add("main_information_toggle");
}

// Generate dinamic div displayer
let generate_initialDivs = () =>{
     let main_container = document.querySelector("#content"),
         main_dinamic = document.createElement("div"),
         sideContent = document.createElement("div");

    main_dinamic.classList.add("main_dinamic"); 
    sideContent.classList.add("main_information");  

    main_container.appendChild(sideContent);
    main_container.appendChild(main_dinamic);
}

// Generate sidebar content
let sidebarContent = () =>{
    let sideContent = document.querySelector(".main_information");

    sideContent.innerHTML= `<div>Cookies Shop</div>
                            <button id="but_home">Home</button>
                            <button id="but_menu">Menu</button>
                            <button id="but_contact">Contact</button>`;
}

// Generate home page
let homepage = () =>{
    let main_dinamic = document.querySelector(".main_dinamic"),
        homeContent = document.createElement("div");

    homeContent.classList.add("home_page");
    // just the grave acent (``) allow to make this kind of multiline html copy
    homeContent.innerHTML = `<div class="homepage_text">
                               
                               <div>A place to share the pleasure of the cookies.</div>
                              
                               <img src="img/coookie.png" >
                             </div>`;
    main_dinamic.appendChild(homeContent);
}

// Generate menu page
let menuPage = () =>{
    let main_dinamic = document.querySelector(".main_dinamic"),
        menuPage = document.createElement("div");

    menuPage.classList.add("menu_page");
    menuPage.innerHTML = `<div class="menu_items">
                              <div id="menu_text"> Menu </div> 
                              <div class="product product1">Product 1 <br> Ingredient / Ingredient / Ingredient .................................. $0,0 </div>
                              <div class="product product1">Product 2 <br> Ingredient / Ingredient / Ingredient .................................. $0,0 </div>
                              <div class="product product1">Product 3 <br> Ingredient / Ingredient / Ingredient .................................. $0,0 </div>
                              <div class="product product1">Product 4 <br> Ingredient / Ingredient / Ingredient .................................. $0,0 </div>
                              <div class="product product1">Product 5 <br> Ingredient / Ingredient / Ingredient .................................. $0,0 </div>
                          </div>`;
    main_dinamic.appendChild(menuPage);
}

// Generate contact page
let contactPage = () =>{
    let main_dinamic = document.querySelector(".main_dinamic"),
        contactpage = document.createElement("div");

    contactpage.classList.add("contact_page");
    contactpage.innerHTML = `<div id="cont_ele1"><strong>Open time:</strong> <br> 8am to 8pm</div> 
                             <div class="icons_contact" id="cont_ele2">
                               <div><img src="img/coffe.png" alt="a"></div>
                               <div><img src="img/eat.png" alt="e"></div>
                               <div><img src="img/wifi.png" alt="i"></div>
                               <div><img src="img/talk.png" alt="o"></div>
                             </div>
                             <div id="cont_ele3"><strong>Visit us at:</strong> <br> Medellín Calle 52 47–42</div>
                             <div id="cont_ele4"><strong>Contat us at:</strong> <br> Number: 6666 69 69 <br> <strong>or</strong> <br> <a href='https://github.com/0yapunpun'> ****************** </a> </div>`;
    main_dinamic.appendChild(contactpage);
}

export {initialState, homepage, menuPage, contactPage, sidebarContent, generate_initialDivs}
        
        
