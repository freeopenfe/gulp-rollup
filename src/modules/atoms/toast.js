var toastIcons = {
  success: 'data:image/png;base64,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',
  clock: 'data:image/png;base64,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'
}

var Toast = {
  _el: null,
  _timer: null,
  show (icon, text, delay, cb) {
    var icondata = icon && toastIcons[icon] || toastIcons.success;
    if (!this._el) {
      var el = document.createElement('div');
      var wrapper = document.createElement('div');

      el.style.cssText = 'background-color: transparent; position: fixed; z-index: 1000; top: 0; bottom: 0; left: 0; right: 0; display: flex;';
      wrapper.style.cssText = 'border-radius: 10px; margin: auto; text-align: center; padding: 30px 20px 20px; min-width: 100px; min-height: 100px; background-color: rgba(0,0,0,.6);';

      var ptext = document.createElement('p');
      ptext.style.cssText = 'color: #fff; font-szie: 16px; margin-top: 10px';
      ptext.innerText = text;

      var imageicon = document.createElement('img');
      imageicon.style.cssText = 'width: 60px; height: 60px';
      if (icondata) {
        imageicon.src = icondata;
      } else {
        // 默认图标
        imageicon.alt = '默认图标';
      }

      wrapper.appendChild(imageicon);
      wrapper.appendChild(ptext);

      el.appendChild(wrapper);

      document.body.appendChild(el);
      this._el = el;
    } else {
      if (icondata) {
        this._el.querySelector('img').src = icondata;
      }
      this._el.querySelector('p').innerText = text;
      this._el.style.display = 'flex';
    }
    var delay = delay || 1000;
    if (Toast._timer) {
      clearTimeout(Toast._timer);
    }
    Toast._timer = setTimeout(function () {
      Toast._el.style.display = 'none';
      cb && cb(Toast._el);
    }, delay);
  }
}

export default Toast;
