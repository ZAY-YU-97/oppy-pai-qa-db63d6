// ===== Oppy × PAI 2.0 测试标准 · 交互 =====
(function () {
  var KEY = 'oppypai-lang';

  function applyLang(lang) {
    document.body.classList.remove('lang-zh', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'zh-CN');
    var btns = document.querySelectorAll('.langtoggle button');
    btns.forEach(function (b) { b.classList.toggle('on', b.dataset.lang === lang); });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }

  function initLang() {
    var saved = 'zh';
    try { saved = localStorage.getItem(KEY) || 'zh'; } catch (e) {}
    applyLang(saved);
    document.querySelectorAll('.langtoggle button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.dataset.lang); });
    });
  }

  // TOC：滚动高亮当前章节
  function initToc() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
    if (!links.length) return;
    var targets = links.map(function (a) {
      var el = document.getElementById(a.getAttribute('href').slice(1));
      return el ? { a: a, el: el } : null;
    }).filter(Boolean);
    if (!('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.remove('active'); });
          var hit = targets.filter(function (t) { return t.el === en.target; })[0];
          if (hit) hit.a.classList.add('active');
        }
      });
    }, { rootMargin: '-70px 0px -75% 0px', threshold: 0 });
    targets.forEach(function (t) { io.observe(t.el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initLang(); initToc(); });
  } else { initLang(); initToc(); }
})();
