document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-image-comparison]").forEach(function (comparison) {
    var slider = comparison.querySelector(".image-comparison__range");
    var reveal = comparison.querySelector("[data-comparison-reveal]");
    var activePointerId = null;
    var dragBounds = null;
    var currentPosition = 50;

    if (!slider || !reveal) {
      return;
    }

    var renderPosition = function (position) {
      var boundedPosition = Math.min(100, Math.max(0, position));

      currentPosition = boundedPosition;
      reveal.style.width = boundedPosition + "%";
    };

    var updateFromPointer = function (event) {
      var pointerEvents = event.getCoalescedEvents ? event.getCoalescedEvents() : [];
      var latestEvent = pointerEvents.length ? pointerEvents[pointerEvents.length - 1] : event;
      var position = ((latestEvent.clientX - dragBounds.left) / dragBounds.width) * 100;

      renderPosition(position);
    };

    var stopDragging = function (event) {
      if (event.pointerId !== activePointerId) {
        return;
      }

      slider.value = currentPosition.toFixed(1);
      activePointerId = null;
      dragBounds = null;
      comparison.classList.remove("is-dragging");
    };

    slider.addEventListener("input", function () {
      renderPosition(Number(slider.value));
    });

    comparison.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }

      activePointerId = event.pointerId;
      dragBounds = comparison.getBoundingClientRect();
      comparison.setPointerCapture(event.pointerId);
      comparison.classList.add("is-dragging");
      updateFromPointer(event);

      if (event.pointerType === "mouse") {
        event.preventDefault();
      }
    });

    var pointerMoveEvent = "onpointerrawupdate" in window ? "pointerrawupdate" : "pointermove";
    comparison.addEventListener(pointerMoveEvent, function (event) {
      if (event.pointerId === activePointerId) {
        updateFromPointer(event);
      }
    });

    comparison.addEventListener("pointerup", stopDragging);
    comparison.addEventListener("pointercancel", stopDragging);
    comparison.addEventListener("lostpointercapture", function () {
      slider.value = currentPosition.toFixed(1);
      activePointerId = null;
      dragBounds = null;
      comparison.classList.remove("is-dragging");
    });

    renderPosition(Number(slider.value));
  });

  document.querySelectorAll("[data-ood-carousel]").forEach(function (carousel) {
    var slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
    var dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    var previous = carousel.querySelector("[data-carousel-previous]");
    var next = carousel.querySelector("[data-carousel-next]");
    var status = carousel.querySelector("[data-carousel-status]");
    var currentIndex = 0;
    var touchStartX = null;

    if (!slides.length) {
      return;
    }

    var showSlide = function (index) {
      currentIndex = (index + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        var isCurrent = slideIndex === currentIndex;
        slide.hidden = !isCurrent;
        slide.setAttribute("aria-hidden", String(!isCurrent));

        var range = slide.querySelector(".image-comparison__range");
        if (range) {
          range.tabIndex = isCurrent ? 0 : -1;
        }
      });

      dots.forEach(function (dot, dotIndex) {
        dot.setAttribute("aria-current", String(dotIndex === currentIndex));
      });

      if (status) {
        status.textContent = (currentIndex + 1) + " / " + slides.length;
      }
    };

    if (previous) {
      previous.addEventListener("click", function () {
        showSlide(currentIndex - 1);
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        showSlide(currentIndex + 1);
      });
    }

    dots.forEach(function (dot, dotIndex) {
      dot.addEventListener("click", function () {
        showSlide(dotIndex);
      });
    });

    carousel.addEventListener("keydown", function (event) {
      if (event.target.matches("input[type='range']")) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(currentIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(currentIndex + 1);
      } else if (event.key === "Home") {
        event.preventDefault();
        showSlide(0);
      } else if (event.key === "End") {
        event.preventDefault();
        showSlide(slides.length - 1);
      }
    });

    carousel.addEventListener("touchstart", function (event) {
      if (event.target.closest("[data-image-comparison]")) {
        touchStartX = null;
        return;
      }

      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    carousel.addEventListener("touchend", function (event) {
      if (touchStartX === null || event.target.closest("[data-image-comparison]")) {
        return;
      }

      var distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;

      if (Math.abs(distance) < 50) {
        return;
      }

      showSlide(currentIndex + (distance < 0 ? 1 : -1));
    }, { passive: true });

    showSlide(0);
  });
});
