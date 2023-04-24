/*index.js*/


window.addEventListener("load", () => {
// 고객센터
// toggle()
// title = "고객센터 열기" -> title="고객센터 닫기"
const cs = document.querySelector(".topMenu>dd:nth-of-type(5)");
cs.addEventListener(("click"), e =>{
  e.preventDefault();
  cs.classList.toggle("on");
 (cs.classList.contains("on"))? cs.querySelector("a").setAttribute("title","고객센터 닫기"):cs.querySelector("a").setAttribute("title","고객센터 열기");
})

// 주메뉴
// .header_wrap.on
// nav.gnb>ul>li>ul.on
const headerWrap = document.querySelector(".header_wrap");
const gnbMenu = document.querySelectorAll(".gnb>ul>li");

gnbMenu.forEach((li) => {
  li.addEventListener("mouseover", () =>{
    // 고객센터에 on붙어 있으면 고객센터의 on을 지운다
    if(cs.classList.contains("on")) cs.classList.remove("on");
    // 검색박스에 on붙어 있으면 검색박스의 on을 지운다
    if(srchBox.classList.contains("on")) {
      srchBox.classList.remove("on");
      btnSrch.classList.remove("on");
     }
    li.closest("ul").querySelectorAll("li>ul").forEach((ul) => {
      ul.classList.add("on");
    })
    headerWrap.classList.add("on");
    li.addEventListener("mouseleave", () =>{
      li.closest("ul").querySelectorAll("li>ul").forEach((ul) => {
        ul.classList.remove("on");
      })
      headerWrap.classList.remove("on");
    })
  })
  li.children[0].addEventListener("focus", () =>{
    li.closest("ul").querySelectorAll("li>ul").forEach((ul) => {
      ul.classList.add("on");
    })
    headerWrap.classList.add("on");
  })
  li.children[0].addEventListener("blur", () =>{
    li.closest("ul").querySelectorAll("li>ul").forEach((ul) => {
      ul.classList.remove("on");
    })
    headerWrap.classList.remove("on");
  })
});

// 검색열기닫기
const btnSrch = document.querySelector(".srch_open");
const srchBox = document.querySelector(".srch")
btnSrch.addEventListener("click", e =>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  srchBox.classList.toggle("on");
  (e.currentTarget.classList.contains("on"))?
     e.currentTarget.children[0].setAttribute("title","검색입력서식 닫기"):e.currentTarget.children[0].setAttribute("title","검색입력서식 열기")
});

// 로그인 이미지
// a.appear 안에 img 0~56.png
// a.loop 안에 img 0~81.png
const loginAppear = document.querySelector(".appear");
const loginLoop = document.querySelector(".loop");
for(let i=0; i<57; i++) {
  let images = document.createElement("img");
  if(i<10){
    i = `0${i}`
  }
  images.src = `images/appear/appear_000${i}.png`;
  images.alt = `${i}`;
  loginAppear.appendChild(images);
}
for(let k=0; k<82; k++) {
  let images = document.createElement("img");
  if(k<10){
    k = `0${k}`
  }
  images.src = `images/loop/loop_000${k}.png`;
  images.alt = `${k}`;
  loginLoop.appendChild(images);
}

// 로그인 애니메이션
// appear 0~56 이미지 각각에 animation 속성 적용
// animation: ani 2.85s linear 0s 1;
// animation: ani 2.85s linear 0.05s 1;
// animation: ani 2.85s linear 0.10s 1;
// animation: ani 2.85s linear 2.80s 1; 맨마지막 

// loop 0~81 이미지 각각에 animation 속성 적용
// animation: ani 4.1s linear 2.85s infinite;
// animation: ani 4.1s linear 2.90s infinite;
// animation: ani 4.1s linear 2.95s infinite;
const delay = 0.05;
const appearImgs = document.querySelectorAll(".appear>img");
for(let a=0; a<appearImgs.length; a++){
  loginAppear.children[a].style.animation = `ani 2.85s linear ${a*delay}s 1`;
}
const loopImgs = document.querySelectorAll(".loop>img");

for(let j=0; j<loopImgs.length; j++){
  loginLoop.children[j].style.animation = `ani 4.1s linear ${2.85+(j*delay)}s infinite`;
}

// content1 - 퀵메뉴01~04 이미지 생성
// for()문 이용해서 <img> 를 quick01_00000.png~quick01_00019.png까지 생성
// <span>안에 넣기
const quickAni = document.querySelectorAll(".content1 span");
for(let q=0; q<20; q++){
  let cardImages = document.createElement("img"); //q1
  let saveImages = document.createElement("img"); //q2
  let bonusImages = document.createElement("img"); //q3
  let coponImages = document.createElement("img"); //q4
  if(q<10){
    q = `0${q}`
  }
  cardImages.src = `images/quick01/quick01_000${q}.png`;
  cardImages.alt = `${q}`
  saveImages.src = `images/quick02/quick02_000${q}.png`;
  saveImages.alt = `${q}`
  bonusImages.src = `images/quick03/quick03_000${q}.png`;
  bonusImages.alt = `${q}`
  coponImages.src = `images/quick04/quick04_000${q}.png`;
  coponImages.alt = `${q}`
  quickAni[0].appendChild(cardImages);
  quickAni[1].appendChild(saveImages);
  quickAni[2].appendChild(bonusImages);
  quickAni[3].appendChild(coponImages);
}

// content1
// li에 마우스올렸을 때 이미지에 애니메이션 적용
// 마우스 뗏을때 이미지에 애니메이션 삭제
const contentAni = document.querySelectorAll(".content1>ul>li");
const quickImages = document.querySelectorAll(".content1 .quick1 img");
contentAni.forEach((li,index) => {
  li.addEventListener("mouseover", () =>{
    for(let t=0; t<quickImages.length; t++) {
      li.querySelectorAll("img")[t].style.animation = `ani 1s linear ${t*delay}s 1`;
    }
  });
  li.addEventListener("mouseout", () =>{
    for(let t=0; t<quickImages.length; t++) {
      li.querySelectorAll("img")[t].style.animation = `none`;
    }
  });
});

// 배너
const body = document.querySelector("body");
const bannerFrame = document.querySelector(".banner_frame");
const bannerList = bannerFrame.querySelectorAll("section");
const bannerPrev = document.querySelector(".prev");
const bannerNext = document.querySelector(".next");
const rollingPlay = document.querySelector(".rolling .play");
const rollingList = document.querySelectorAll(".banner_roll li");
let bannerNum = 0;
// next버튼을 눌렀을때
// 배너번호 1증가
// 배너번호가 마지막 배너번호보다 크면 배너번호가 다시 0으로
// 배너프레임의 left값 변경해서 배너 움직이게
bannerNext.addEventListener("click", e => {
  e.preventDefault();
  bannerNum++;
  if(bannerNum>bannerList.length-1) bannerNum = 0;
  bannerMove(bannerNum);
});
// prev버튼 눌렀을때
bannerPrev.addEventListener("click", e => {
  e.preventDefault();
  bannerNum--;
  if(bannerNum<0) bannerNum = bannerList.length-1;
  bannerMove(bannerNum);
});
// 오토배너 작동 - setTimeout 사용, 재귀함수 사용, 5초 마다
let autobannerTimer;

let autobanner = () => {
  autobannerTimer = setTimeout(() => {
    bannerNum++;
    if (bannerNum > bannerList.length - 1) bannerNum = 0;
    bannerMove(bannerNum);
    autobanner();
  }, 5000);
}
autobanner();
// 재생/멈춤 버튼
rollingPlay.addEventListener("click", e => {
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  if (e.currentTarget.classList.contains("on")) {
    clearTimeout(autobannerTimer);
  } else {
    autobanner();
  }
});
// 롤링 클릭
rollingList.forEach((li,index) => {
  li.addEventListener("click", e => {
    e.preventDefault();
    bannerMove(index);
  })
})

// section에 .white가 있으면 각요소에 .white 붙이기
let secWhite = (bannerNum) => {
  for(el of rollingList){
    el.children[0].classList.remove("on");
  }
  rollingList[bannerNum].children[0].classList.add("on");
  bannerList.forEach((section) =>{
    const sectionchild = section.children;
    if(section.classList.contains("white")){
      for(let i=0; i<sectionchild.length; i++){
        sectionchild[i].classList.add("white");
      }
    }
    else{
      for(let i=0; i<sectionchild.length; i++){
        sectionchild[i].classList.remove("white");
      }
    }
  })
}
let bannerMove = (num) => {
  let bodyWidth = body.offsetWidth;
  bannerFrame.style.left = `-${num*bodyWidth}px`;
  secWhite(num);
}

// 스크롤 이벤트
window.addEventListener("scroll", () =>{
  let scroll = document.querySelector("html").scrollTop;
  
  // 도넛
  const doughnut_Left_L = document.querySelector(".doughnut_Left_L");
  const doughnut_Left_S = document.querySelector(".doughnut_Left_S");
  const combine_Left = document.querySelector(".combine_Left");

  const doughnut_Center_M = document.querySelector(".doughnut_Center_M");

  const dougnut_right_M = document.querySelector(".dougnut_right_M");
  const dougnut_right_s = document.querySelector(".dougnut_right_s");

  combine_Left.style.top = `${scroll*0.7}px`; //뒤에 숫자는 속도조절
  doughnut_Left_S.style.top = `${scroll*0.5}px`;
  doughnut_Left_L.style.top = `${1310-scroll*0.8}px`;

  doughnut_Center_M.style.bottom = `${200+scroll*0.4}px`;

  dougnut_right_M.style.top = `${scroll*0.7}px`;
  if(scroll>1593){
    dougnut_right_s.style.top = `${scroll*0.7}px`;
  }
})

// content3
// li 하나 하나에 마우스 오버하면 li에 .on이 붙어라 마우스아웃 하면 .on을지우고
const brandAll = document.querySelectorAll(".content3_inner>div>ul>li"); //li 26개
brandAll.forEach(li => {
  li.addEventListener("mouseover", e => {
    e.currentTarget.classList.add("on");
  })
  li.addEventListener("mouseout", e => {
    e.currentTarget.classList.remove("on");
  })
});

// 대분류
// - 각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고
// - 모든 li화면에 안보이게 하고
// 대분류 li a 하나하나를 클릭했을때
// class 속성값을 가져와서 변수에 저장
// 변수값이랑 정확하게 일치하는 케이스 찾아서 (스위치케이스문)
// 해당 클래스이름에 해당되는 li만 보이게 설정한다. - 각 클래스이름에 해당되는 li만 따로 모아서 저장해놓고
const brandList = document.querySelectorAll(".content3_inner>ul>li");
const ent = document.querySelectorAll(".content3_inner>div>ul>.ent");
const shop = document.querySelectorAll(".content3_inner>div>ul>.shop");
const diner = document.querySelectorAll(".content3_inner>div>ul>.diner");
const box = document.querySelectorAll(".content3_inner>div>ul>.box");

for(el of brandAll){
 if (brandList[0].getAttribute("class") === "all") {
    el.style.display = "block";
 }
 else{
    el.style.display = "none";
 }
}
brandList.forEach(li => {
  li.addEventListener("click", e => {
    e.preventDefault();
    for(el of brandList){
      el.children[0].classList.remove("on");
    }
    e.currentTarget.children[0].classList.add("on");
    let className = e.currentTarget.getAttribute("class");
    switch(className) {
      case "all":
        showList(brandAll);
        break;
      case "ent":
        showList(ent);
        break;
      case "shop":
        showList(shop);
        break;
      case "diner":
        showList(diner);
        break;
      case "box":
        showList(box);
        break;
      default :
        break;
    }
  })
})
let showList = (list) => {
  brandAll.forEach(li => {
    li.style.display = "none";
  })
  list.forEach(li => {
    li.style.display = "block";
  })
}

//family_site
const familySite = document.querySelector(".family_site");

familySite.children[0].addEventListener("click", e => {
  e.preventDefault();
  familySite.classList.toggle("on");
  (familySite.classList.contains("on"))? familySite.children[0].setAttribute("title","닫기"):familySite.children[0].setAttribute("title","열기");
})

// top
const btnTop = document.querySelector(".top");
btnTop.addEventListener("click", e =>{
  e.preventDefault();
  window.scroll({
    top:0,
    left:0,
    behavior:"smooth"
  })
})

window.addEventListener("scroll", () =>{
  let scroll = document.querySelector("html").scrollTop;
  (scroll<=100)? btnTop.style.display = `none`:btnTop.style.display = `block`;
  (scroll>2300)? btnTop.classList.add("on"):btnTop.classList.remove("on");
})

// 햄버거 버튼 클릭
// 1. div.mob.on
// 2.div.moBtn_close.on
// 3.body.on,div.bg.on

// 모바일 닫기 클릭
const mob = document.querySelector(".mob");
const mobBtn = document.querySelector(".mobBtn");
const mobBtnClose = document.querySelector(".mobBtn_close");
const bg = document.querySelector(".bg");
const mobTopMenu = document.querySelector("dl.mob_topMenu");
const mobGnb = document.querySelector("nav.mob_gnb");

mobBtn.addEventListener("click", e =>{
  e.preventDefault();
  bg.classList.add("on");
  mobBtnClose.classList.add("on");
  mob.classList.add("on");
  body.classList.add("on");
});
mobBtnClose.addEventListener("click", e =>{
  e.preventDefault();
  bg.classList.remove("on");
  mobBtnClose.classList.remove("on");
  mob.classList.remove("on");
  body.classList.remove("on");
});
// 모바일 메뉴 클릭시 하위메뉴 열리고 닫히게 하기
mobTopMenu.querySelectorAll("dl>dd").forEach(dd => {
  dd.addEventListener("click", e => {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
  })
})
mobGnb.querySelectorAll("ul>li").forEach(li => {
  li.addEventListener("click", e => {
    e.preventDefault();
    for(el of querySelectorAll("ul>li")){
      el.classList.remove("on");
    }
    e.currentTarget.classList.add("on");
  })
})

})
