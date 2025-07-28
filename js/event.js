AOS.init({
  disable: function () {
    return window.innerWidth < 1200; // 화면 너비가 1200px 이하일 경우 AOS 비활성화
  },
});

/* 페이지 위로 이동 버튼 */
window.onscroll = function () {
  scrollFunction();
};

$(function () {
  let currentLink = "";

  // 팝업을 클릭 시 열기
  $(".item_gide").on("click", function () {
    const imgSrc = $(this).attr("data-img");
    currentLink = $(this).attr("data-link");

    $(".popup_img").attr("src", imgSrc); // 이미지 설정
    $(".popup_gide").fadeIn(); // 팝업 보이기
  });

  // "사이트로 이동" 버튼 클릭 시 링크 열기
  $("#go_site_btn").on("click", function () {
    if (currentLink) {
      window.open(currentLink, "_blank"); // 새로운 탭에서 링크 열기
    }
  });

  // 배경 또는 닫기 버튼 클릭 시 팝업 닫기
  $(".popup_gide, #close_btn").on("click", function (e) {
    // .popup_content 내부를 클릭한 경우는 무시
    if ($(e.target).is(".popup_gide") || $(e.target).is("#close_btn")) {
      $(".popup_gide").fadeOut(); // 팝업 닫기
      $(".popup_img").attr("src", ""); // 이미지 초기화
    }
  });
});

/* 스크롤 시 "위로 이동" 버튼 보이기/숨기기 */
function scrollFunction() {
  let button = document.getElementById("topBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block"; // 스크롤 위치가 20px 이상이면 버튼 보이기
  } else {
    button.style.display = "none"; // 스크롤 위치가 20px 이하이면 버튼 숨기기
  }
}

/* 페이지 상단으로 스크롤 */
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" }); // 부드럽게 상단으로 스크롤
}

/* 마우스 오버 시 비디오 일시 정지, 마우스 아웃 시 비디오 재생 */
let video = document.getElementById("myVideo");

video.addEventListener("mouseover", function () {
  this.pause(); // 마우스 오버 시 비디오 정지
});

video.addEventListener("mouseout", function () {
  this.play(); // 마우스 아웃 시 비디오 재생
});

/* 스킬 바 애니메이션 */
const bars = document.querySelectorAll(".bar");
let animated = false;

window.addEventListener("scroll", () => {
  const triggerPoint = 200; // 스크롤 위치가 200px 이상일 때 바 애니메이션 시작

  if (window.scrollY >= triggerPoint && !animated) {
    bars.forEach((bar) => {
      const targetWidth = bar.getAttribute("data-width");
      bar.style.width = targetWidth; // 바의 너비를 data-width 값으로 설정하여 애니메이션
    });
    animated = true; // 애니메이션이 한 번만 실행되도록 설정
  }

  if (window.scrollY === 0 && animated) {
    bars.forEach((bar) => {
      bar.style.width = "0"; // 스크롤이 맨 위로 돌아가면 바를 초기화
    });
    animated = false; // 애니메이션 초기화
  }
});
