class Lowercarousel {
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;
       
   
        this.init();
    }

    init() {
        if (!this.isValidSelector()
            || !this.findTargetElement()
            || !this.isValidData()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        if (typeof this.selector !== 'number'
            || this.selector === '') {
            return false;
        }
        return true;
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

    isValidServiceItem(item) {
        if (!this.isTrueObject(item, 9)
            || !this.isValidString(item.image)
            || !this.isValidString(item.desc)
            || !this.isValidString(item.icons)
            || !this.isValidString(item.icons2)
            || !this.isValidString(item.icons3)
            || !this.isValidString(item.icons4)
            || !this.isValidString(item.icons5)) {
            return false;
        }
        return true;
    }
   
        render() {
            let HTML = '';

        for (const serviceItem of this.data) {
            if (!this.isValidServiceItem(serviceItem)) {
                continue;
            }

            HTML += `
            <img class="photo-1" src='${serviceItem.image}' alt="photo1">
            <p class="presentation-1">${serviceItem.desc}</p>
            <p class="adress">${serviceItem.adress}</p>
            <div class="star">
                <i class="${serviceItem.icons}" aria-hidden="true"></i>
                <i class="${serviceItem.icons2}" aria-hidden="true"></i>
                <i class="${serviceItem.icons3}" aria-hidden="true"></i>
                <i class="${serviceItem.icons4}" aria-hidden="true"></i>
                <i class="${serviceItem.icons5}" aria-hidden="true"></i>
            </div>           
            <p class="sbtext2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam rem sunt nulla ducimus expedita, incidunt laborum assumenda. Deleniti iste placeat nostrum incidunt rem laudantium, sapiente, cum, molestias unde, quidem labore.</p>
            `; 

        }
        const DOM = document.getElementById(this.selector);
        DOM.innerHTML = HTML;
    }

}

    //enableClicks() {
        // cia aprasome veiksmu logika...
        // susirandame skyles
        // susirandame jungiklius
        // kai jungiklis paspaustas: ijungiam/isjungiam atitinkama skyle



export { Lowercarousel }