var RandomXProto,
    RandomX;

if (D.registerElement) {
    RandomXProto = Object.create(HTMLElement.prototype);
    RandomXProto.createdCallback = function(){ this.randomize(); };
    RandomX = window.RandomX = D.registerElement('random-x', {
        prototype: RandomXProto
    });
} else {
    RandomXProto = {};
    RandomX = window.RandomX = function RandomX(el) {
        if (!el.randomize) {
            Object.getOwnPropertyNames(RandomXProto)
            .forEach(function(prop) {
                Object.defineProperty(el, prop,
                    Object.getOwnPropertyDescriptor(RandomXProto, prop));
            });
            el.randomize();
        }
    };
    RandomX.load = function() {
        D.queryAll('random-x').each(RandomX);
    };

    RandomX.load();// early availability
    D.addEventListener('DOMContentLoaded', RandomX.load);// eventual consistency
}

RandomXProto.randomize = function() {
    var all = this._randomize || (this._randomize = this.queryAll('*')),
        chosen = all[Math.floor(Math.random()*all.length)];
    this.queryAll('*').remove();
    this.append(chosen);
};
