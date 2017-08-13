$.fn.flyInLeft = function (duration) {

    this.each(function () {
        var bound = $(this).get(0).getBoundingClientRect();
        $(this).css("left", (-1 * Math.abs(bound.width - bound.left)).toString() + "px");
        if (duration == null)
        {
            $(this).animate({ left: bound.left.toString() + "px" }, 1000);
        }
        else {
            $(this).animate({ left: bound.left.toString() + "px" }, duration);
        }
    });
};

$.fn.TypeText = function (text, interval) {
    if (this.length > 1)
        return;
    this.inter = Math.abs(interval);
    this.paper = this[0];
    this.ind = -1;
    this.write = function () {
        if ((++this.ind) >= text.length) {
            this.paper.innerHTML += '<span class="blink _cursor_">|</span>';
            setTimeout(function () { $(this.paper).children("._cursor_").fadeOut(1000); }.bind(this), 3000);
            return;
        }
        else {
            this.paper.innerHTML += text[this.ind];
        }
        setTimeout(this.write, this.inter);
    }.bind(this);
    this.write();
};

$.fn.HumanTypeText = function (text, interval) {
    if (this.length > 1)
        return;

    this.inter = Math.abs(interval);
    this.ind = -1;
    this.paper = this[0];
    this.pause = Math.floor((Math.random() * 100) + 1) % text.length;
    this.write = function () {
        if ((++this.ind) >= text.length) {
            this.paper.innerHTML += '<span class="blink _cursor_">|</span>';
            setTimeout(function () { $(this.paper).children("._cursor_").fadeOut(1000); }.bind(this), 3000);
            return;
        }
        else {
            if ((this.pause + 1) == this.ind)
            {
                this.inter += 500;
            }
            else if (this.pause == (this.ind - 3))
            {
                this.inter = Math.abs(this.inter - 500);
            }
            this.paper.innerHTML += text[this.ind];
            setTimeout(this.write, this.inter);
        }
    }.bind(this);
    this.write();
}