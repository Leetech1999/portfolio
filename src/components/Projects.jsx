import React, { useState } from "react";
import Card from "./Card";

function Projects() {
  const projects = [
    {
      title: "Greenfund",
      image: "Coupang-Discovery.png",
      detail: "환경재단 웹페이지의 리뉴얼 홈페이지 제작 결과물입니다",
      start: "2025.05.02",
      end: "2025.05.09",
      tech: ["HTML5", "CSS3", "JS"],
      work: ["HTML 마크업", "CSS 스타일링", "JS 스크립트"],
      demo: "https://leetech1999.github.io/Greenfund/",
      source: "https://github.com/Leetech1999/Greenfund",
    },
    {
      title: "inbody",
      image: "Coupang-Offer.png",
      detail:
        "React 기반으로 건강 데이터를 직관적으로 보여주는 사용자 맞춤형 인터페이스를 구현한 프로젝트입니다.",
      start: "2025.06.16",
      end: "2022.06.20",
      tech: ["React", "Redux", "Chart.js", "CSS Modules"],
      work: [
        "Redux 기반 상태 관리 구현",
        "Chart.js를 활용한 데이터 시각화",
        "React.memo, useCallback 등 성능 최적화",
      ],
      demo: "https://leetech1999.github.io/inbody/",
      source: "https://github.com/Leetech1999/inbody",
    },
    {
      title: "Kiosk",
      image:
        "병원 층별 안내 시스템을 React와 SVG를 활용해 구현한 키오스크용 인터페이스 프로젝트입니다.",
      detail:
        "쿠팡 웹페이지의 <카테고리별 추천 광고상품> 영역을 마크업한 결과물입니다.",
      start: "2025.02.10",
      end: "2025.02.18",
      tech: ["React", "SVG"],
      work: [
        "층별 안내 컴포넌트 및 전환 메뉴 구현",
        "SVG를 이용한 병원 부서 위치 시각화",
      ],
      demo: "https://leetech1999.github.io/kiosk/",
      source: "https://github.com/Leetech1999/kiosk",
    },
    {
      title: "SPOANY",
      image: "Coupang-Header.png",
      detail:
        "운동용품과 지점 정보를 제공하는 SPOANY 브랜드의 반응형 웹사이트를 제작했습니다.",
      start: "2025.07.10",
      end: "2025.07.24",
      tech: ["HTML5", "CSS3", "JavaScript", "Swiper.js", "Kakao Map API"],
      work: [
        "반응형 웹 구조 설계 및 UI/UX 구현",
        "Swiper.js를 이용한 배너 슬라이더 개발",
        "카카오맵 API로 매장 위치 시각화 및 인포윈도우 구성",
      ],
      demo: "https://leetech1999.github.io/Spoany/",
      source: "https://github.com/Leetech1999/Spoany",
    },
    {
      title: "Mole Game",
      image: "Coupang-NavFooter.png",
      detail:
        "제한 시간 내 타겟을 클릭해 점수를 획득하는 간단한 웹 기반 슈팅 게임입니다.",
      start: "2025.03.05",
      end: "2025.03.15",
      tech: ["HTML5", "CSS3", "JavaScript"],
      work: [
        "타겟 무작위 등장 및 클릭 이벤트 처리",
        "점수 집계 및 게임 시간 제한 구현",
        "게임 시작 카운트다운 UI 구현",
      ],
      demo: "https://leetech1999.github.io/web_Shooting_game/",
      source: "https://github.com/Leetech1999/web_Shooting_game",
    },
    {
      title: "SamsungSDI",
      image: "DatepickerCalendar.png",
      detail:
        "기존 삼성SDI PR 센터 웹페이지를 React로 재구현하며 구조적 리팩토링과 컴포넌트화를 적용한 프로젝트입니다.",
      start: "2025.06.01",
      end: "2025.06.09",
      tech: ["React", "TailwindCSS", "Swiper.js", "Intersection Observer API"],
      work: [
        "뉴스 카드 슬라이더 및 애니메이션 구현",
        "반응형 스타일링 및 UI 유지 설계",
        "컴포넌트 단위로 구조 분리",
      ],
      demo: "https://leetech1999.github.io/SamsungSDI/",
      source: "https://github.com/Leetech1999/SamsungSDI/tree/gh-pages",
    },
    {
      title: "SPOANY SHOP",
      image: "NewsViewer.png",
      detail:
        "React 기반 SPA 쇼핑몰로, Redux Toolkit과 로컬스토리지를 활용한 장바구니 상태 관리와 슬라이더 기능을 구현했습니다.]",
      start: "2025.07.18",
      end: "2022.08.01",
      tech: [
        "React",
        "Redux Toolkit",
        "React Router",
        "CSS",
        "Swiper.js",
        "FontAwesome",
      ],
      work: [
        "SPA(싱글 페이지 애플리케이션) 구조 설계",
        "React Router를 통한 페이지 라우팅 구성",
        "Redux Toolkit + localStorage 상태 관리",
      ],
      demo: "https://savinpark.github.io/infiniteScroll-newsViewer/",
      source: "https://github.com/SavinPark/infiniteScroll-newsViewer",
    },
    {
      title: "Portfolio",
      image: "Portfolio.png",
      detail: "개인 포트폴리오 웹페이지 입니다.",
      start: "2025.08.01",
      end: "2022.08.14",
      tech: ["Scss", "styled-component", "React", "react hook"],
      work: ["Design", "Frontend"],
      demo: "https://savinpark.github.io/portfolio/",
      source: "https://github.com/Leetech1999/portfolio",
    },
  ];
  const [flipAll, setFlipAll] = useState(false);
  const [flip, setFlip] = useState(-1);
  const cardFlip = (n) => {
    if (flip !== -1) {
      setFlip(-1);
    } else {
      setFlip(n);
    }
  };

  return (
    <section id="projects">
      <h2>PROJECTS</h2>
      <div className="flipBtn">
        <button
          className="filp-all"
          onClick={() => {
            setFlipAll(!flipAll);
          }}
        >
          {!flipAll ? <span>Flip All &gt;</span> : <span>Reset &gt;</span>}
        </button>
      </div>
      <div className="projects-grid">
        {projects.map((ele, idx) => {
          return (
            <div
              key={`proj-${idx}`}
              className={flip === idx || flipAll ? "flip active" : "flip"}
              onClick={() => {
                cardFlip(idx);
              }}
            >
              <Card proj={ele} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
