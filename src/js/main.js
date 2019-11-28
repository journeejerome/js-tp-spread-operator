(function (){
    const Spread = {
        init(){
            document.querySelector('html').className = 'js-enabled';
            const h1 = document.querySelector('h1.jump').textContent;
            this.title = "";

            for(const elmnt of h1){
                if(elmnt===' '){
                    this.title = this.title + "<span>\u00A0</span>";
                }else {
                    this.title = this.title + "<span>" + elmnt + "</span>";
                }
            }
            document.querySelector('h1.jump').innerHTML = this.title;
        }
    };
    Spread.init();
})();