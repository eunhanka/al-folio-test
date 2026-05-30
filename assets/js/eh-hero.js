// Hero focus-area interaction for Eunhan Ka's homepage.
// Reads the JSON injected by _includes/eh_hero.liquid and swaps the paper list
// on hover, click, or keyboard focus. No external dependencies.
(function () {
  var dataEl = document.getElementById("eh-research-data");
  var box = document.getElementById("eh-papers");
  if (!dataEl || !box) return;

  var data;
  try {
    data = JSON.parse(dataEl.textContent);
  } catch (e) {
    return;
  }

  var buttons = document.querySelectorAll("#eh-hero .eh-kw");

  function render(key) {
    var list = data[key] || [];
    var html = list
      .map(function (p) {
        var inner =
          '<p class="eh-pt">' + p.t + "</p>" +
          '<p class="eh-pv"><em>' + p.v + "</em> · " + p.y + "</p>";
        return p.url
          ? '<a class="eh-paper" href="' + p.url + '">' + inner + "</a>"
          : '<div class="eh-paper">' + inner + "</div>";
      })
      .join("");
    box.innerHTML = html;
  }

  function activate(btn) {
    buttons.forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    render(btn.dataset.k);
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () { activate(btn); });
    btn.addEventListener("focus", function () { activate(btn); });
    btn.addEventListener("click", function () { activate(btn); });
  });

  // Initial render: first pillar.
  if (buttons.length) render(buttons[0].dataset.k);
})();
