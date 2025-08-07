import React from "react";
import TypeIt from "typeit-react";
import { FaBirthdayCake } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { GoPerson, GoHome, GoMail, GoMortarBoard } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

// import { IoNewspaperOutline } from "react-icons/io5";

function About() {
  return (
    <section id="about">
      <div id="introduction" className="about-inner">
        <div className="typeit">
          <TypeIt
            options={{
              strings: [
                "안녕하세요 : ) <br/>주니어 Frontend 개발자 이정준입니다.",
              ],
              speed: 100,
              loop: true,
              loopDelay: [2500],
              waitUntilVisible: true,
            }}
          />
        </div>
        <p>
          저는 고객 경험을 더 나은 방식으로 전달하고 싶다는 마음이 프론트엔드
          개발로 이어졌습니다.
        </p>
        <p>헬스트레이너와 요식업에서의 경험을 통해 고객의 니즈를 파악하고,</p>
        <p>
          피드백을 반영해 서비스를 개선하는 과정을 반복했습니다. 그러던 중,
          ‘이러한 사용자 중심 사고를 디지털 공간에서도 구현해보고 싶다’는 생각이
          들었고,
        </p>
        <p>자연스럽게 프론트엔드 개발에 관심을 가지게 되었습니다.</p>
        <p>현재는 HTML, CSS, JavaScript 등 핵심 기술을 학습하며,</p>
        <p>
          사용자 입장에서 고민하는 개발자가 되기 위한 역량을 쌓아가고 있습니다.
        </p>
      </div>
      <div id="profile" className="about-inner">
        <h2>ABOUT</h2>
        <div className="profile-inner">
          <div className="profile-img">
            <img
              src={`${process.env.PUBLIC_URL}/images/profileImg.jpg`}
              alt="프로필 이미지"
            />
          </div>
          <div className="profile-list">
            <ul>
              <li>
                <GoPerson />
                <span>이정준</span>
              </li>
              <li>
                <FaBirthdayCake />
                <span>1999. 08. 20</span>
              </li>
              <li>
                <GoHome />
                <span>인천광역시</span>
              </li>
              <li>
                <GoMail />
                <span>dlwjdwns999@naver.com</span>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://github.com/Leetech1999">
                  <FaGithub />
                  <span>Git</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
