import './index.css';

import Seen1 from 'assets/seen1.jpg';
import Seen2 from 'assets/seen2.jpg';
import ThinkMoreForum from 'assets/ThinkMoreForum.png';
import MyGuard1 from 'assets/myguard1.jpg';
import MyGuard2 from 'assets/myguard2.jpg';
import WebSubtitlePlayer from 'assets/websubtitleplayer.png';
import phone from 'assets/phone.glb';
import laptop from 'assets/laptop.glb';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import Profile from 'combination/Profile';
import ProjectSummary from 'combination/ProjectSummary';
import Intro from 'combination/Intro';

import { disciplines } from 'app/config';

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const about = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      about,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px' }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    revealSections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  useEffect(() => {
    const hasEntered = status === 'entered';
    const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;
    let scrollObserver;
    let scrollTimeout;

    const handleHashchange = (hash, scroll) => {
      clearTimeout(scrollTimeout);
      const hashSections = [intro, projectOne, about];
      const hashString = hash.replace('#', '');
      const element = hashSections.filter(item => item.current.id === hashString)[0];
      if (!element) return;
      const behavior = scroll && !prefersReducedMotion ? 'smooth' : 'instant';
      const top = element.current.offsetTop;

      scrollObserver = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            scrollTimeout = setTimeout(
              () => {
                element.current.focus();
              },
              prefersReducedMotion ? 0 : 400
            );
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '-20% 0px -20% 0px' }
      );

      scrollObserver.observe(element.current);

      if (supportsNativeSmoothScroll) {
        window.scroll({
          top,
          left: 0,
          behavior,
        });
      } else {
        window.scrollTo(0, top);
      }
    };

    if (hash && initHash.current && hasEntered) {
      handleHashchange(hash, false);
      initHash.current = false;
    } else if (!hash && initHash.current && hasEntered) {
      window.scrollTo(0, 0);
      initHash.current = false;
    } else if (hasEntered) {
      handleHashchange(hash, true);
    }

    return () => {
      clearTimeout(scrollTimeout);
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, [hash, state, prefersReducedMotion, status]);

  return (
    <div className="home">
      <Helmet>
        <title>Qiming Liu | Web Developer</title>
        <link rel="prefetch" href={phone} as="fetch" />
        <link rel="prefetch" href={laptop} as="fetch" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project"
        alternate
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Android Native App - Seen"
        description="An easy forum Android app include instant messaging."
        buttonText="View Project"
        buttonLink="https://github.com/Qiming-Liu/Seen"
        model={{
          type: 'phone',
          textures: [
            {
              src: Seen1,
              srcSet: `${Seen1} 254w, ${Seen1} 508w`,
              placeholder: Seen1,
            },
            {
              src: Seen2,
              srcSet: `${Seen2} 254w, ${Seen2} 508w`,
              placeholder: Seen2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="ThinkMore Community Forum"
        description="A forum build with Next.js and Spring Boot"
        buttonText="View Project"
        buttonLink="www.thinkmoreapp.com"
        model={{
          type: 'laptop',
          textures: [
            {
              src: ThinkMoreForum,
              srcSet: `${ThinkMoreForum} 980w, ${ThinkMoreForum} 1376w`,
              placeholder: ThinkMoreForum,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project3"
        alternate
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="MyGuard"
        description="Raspberry Pi - Android - Sensor: Indoor Surveillance System (Firebase, Tensorflow.js, Cordova, cdnVue2)"
        buttonText="View Project"
        buttonLink="https://github.com/Qiming-Liu/Seen"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              src: MyGuard2,
              srcSet: `${MyGuard2} 254w, ${MyGuard2} 508w`,
              placeholder: MyGuard2,
            },
            {
              src: MyGuard1,
              srcSet: `${MyGuard1} 254w, ${MyGuard1} 508w`,
              placeholder: MyGuard1,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Web Subtitle Player"
        description="A Local Web .srt (Subtitle) File Player. You can pause, play and adjust the font size."
        buttonText="View Project"
        buttonLink="https://github.com/Qiming-Liu/WebSubtitlePlayer"
        model={{
          type: 'laptop',
          textures: [
            {
              src: WebSubtitlePlayer,
              srcSet: `${WebSubtitlePlayer} 980w, ${WebSubtitlePlayer} 1376w`,
              placeholder: WebSubtitlePlayer,
            },
          ],
        }}
      />
      <Profile
        id="about"
        sectionRef={about}
        visible={visibleSections.includes(about.current)}
      />
      <Footer />
    </div>
  );
};

export default Home;
