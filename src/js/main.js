(function (){
    const Spread = {
        init(){
            document.querySelector('html').className = 'js-enabled';
            this.jump = document.querySelector('.jump');
            this.jumpText = document.querySelector('.jump').textContent;
            this.jump.textContent = "";

            for(this.lettre of this.jumpText){
                this.jump.insertAdjacentHTML("beforeend",`<span> ${(this.lettre === ' ') ? "\u00A0" : this.lettre}</span>`);
                // if (this.lettre === ' ') {
                //     this.jump.insertAdjacentHTML("beforeend", "<span> \u00A0 </span>");
                // } else {
                //     this.jump.insertAdjacentHTML("beforeend", "<span>" +this.lettre+ "</span>");
                // }
            }
        }
    };
    Spread.init();
})();