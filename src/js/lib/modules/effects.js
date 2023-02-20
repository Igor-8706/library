import $ from "../core";

// запуск анимации и вычисление времени работы анимации
$.prototype.animateиOverTime = function (duration, callback, finall) {
    let timeStart;

    function _animateOverTime(time) {
        if (!timeStart) {
            timeStart = time;
        }

        let timeElapsed = time - timeStart;
        let complection = Math.min(timeElapsed / duration, 1);

        callback(complection);

        if (timeElapsed < duration) {
            requestAnimationFrame(_animateOverTime);
        } else {
            if (typeof (finall) === 'function') {
                finall();
            }
        }
    }
    return _animateOverTime;
};

// анимация fadeIn
$.prototype.fadeIn = function (duration, display, finall) {
    for (let i = 0; i < this.length; i++) {
        this[i].style.display = display || 'block';

        const _fadeIn = (complection) => {
            this[i].style.opacity = complection;
        };

        const ani = this.animateиOverTime(duration, _fadeIn, finall);
        requestAnimationFrame(ani);
    }
    return this;

};

// анимация fadeOut
$.prototype.fadeOut = function (duration, finall) {
    for (let i = 0; i < this.length; i++) {

        const _fadeOut = (complection) => {
            this[i].style.opacity = 1 - complection;
            if (complection === 1) {
                this[i].style.display = 'none';
            }
        };

        const ani = this.animateиOverTime(duration, _fadeOut, finall);
        requestAnimationFrame(ani);
    }
    return this;
};

//  анимация fadeToggle
$.prototype.fadeToggle = function (duration, display, finall) {
    for (let i = 0; i < this.length; i++) {
        if (window.getComputedStyle(this[i]).display === 'none') {
            this[i].style.display = display || 'block';

            const _fadeIn = (complection) => {
                this[i].style.opacity = complection;
            };

            const ani = this.animateиOverTime(duration, _fadeIn, finall);
            requestAnimationFrame(ani);
        } else {
            for (let i = 0; i < this.length; i++) {

                const _fadeOut = (complection) => {
                    this[i].style.opacity = 1 - complection;
                    if (complection === 1) {
                        this[i].style.display = 'none';
                    }
                };

                const ani = this.animateиOverTime(duration, _fadeOut, finall);
                requestAnimationFrame(ani);
            }
        }
    }
    return this;

};