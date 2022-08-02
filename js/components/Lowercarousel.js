import { presentationData } from "../data/presentationData.js";

class Lowercarousel {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
        this.DOM = null;
       
   
        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
        this.events();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string'
        || this.selector === '') {
        return false;
    }
    this.DOM = document.getElementById(this.selector);
    return !!this.DOM;
    }


    isTrueObject(obj, keysCount = 1) {
        if (typeof obj !== 'object'
            || obj === null
            || Array.isArray(obj)
            || Object.keys(obj).length !== keysCount) {
            return false;
        }
        return true;
    }

    isValidString(str, size = 100) {
        if (typeof str !== 'string'
            || str.trim() === ''
            || str.trim().length > size) {
            return false;
        }
        return true;
    }

    
    filterHTML() {
    const allTags = [''];
    let HTML = `<div class="item">${allTags[0]}</div>`;
    
    for (const item of presentationData) {
        for (const tag of item.tags) {
            if (allTags.includes (tag)) {
            allTags.push(tag);
            HTML += `<div class="item">${tag}</div>`;
        }
      }
    }
    return HTML;
    }

    listHTML() {

    let HTML = '';

    for (const serviceItem of this.data) {
        HTML += `<div class=blocss${serviceItem.tag} col-12 col-sm-12 col-md-12 col-lg-12 >
        <img class="photo-1" src='${serviceItem.image}' alt="photo1">
        <p class="presentation-1">${serviceItem.desc}</p>
        <p class="adress">${serviceItem.adress}</p>
        <div class="star">
            <i class="${serviceItem.icons1}" aria-hidden="true"></i>
            <i class="${serviceItem.icons2}" aria-hidden="true"></i>
            <i class="${serviceItem.icons3}" aria-hidden="true"></i>
            <i class="${serviceItem.icons4}" aria-hidden="true"></i>
            <i class="${serviceItem.icons5}" aria-hidden="true"></i>
        </div>           
        <p class="sbtext2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.</p>
        </div>
        `; 
        
    }


    return HTML;
    }
    
    render() {
  let HTML = '';
   // for (const serviceItem of this.data) {
     ////       if (!this.isValidServiceItem(serviceItem)) {
       ////         continue;
       //  //   }
   HTML = `<div class=blocss col-12 col-sm-12 col-md-12 col-lg-12 >
       <img class="photo-1" src="./img/avatar-1.png" alt="photo1">
         <p class="presentation-1">John Doe</p>
         <p class="adress">Los Angeles, California</p>
         <div class="star">
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star" aria-hidden="true"></i>
             <i class="fa fa-star-o" aria-hidden="true"></i>
         </div>           
         <p class="sbtext2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.</p> 
     </div>`
        
        
        this.DOM.classList.add('present_block');
        this.DOM.innerHTML = `<div class="list">${this.listHTML()}</div>
        <div class="item">${this.filterHTML()}</div>`;
        
}


events () { 
        

        const filterTag = document.querySelectorAll('.dotiss > .dots');  
        const blocksss = document.querySelectorAll('.list > .blocssa, .blocssb, .blocssc');
        console.log(blocksss);
       

        for (const filterTags of filterTag)  {
            filterTags.addEventListener('click', () => {
             const tag = filterTags.textContent;
        console.log(filterTags.textContent);

             for (let i = 0; i < this.data.length; i++) {
                let cardData = this.data[i];
                if (cardData.tags.includes(tag)|| tag === 'ALL') {
                    blocksss[i].classList.add('hidden') 
                } else {
                    blocksss[i].classList.remove('hidden') || blocksss[i].classList.add('active') ;
                }
            }
    }    )
    }
}
}


export { Lowercarousel }