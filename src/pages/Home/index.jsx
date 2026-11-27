import './index.css';

import DeckyGCM from 'assets/deckygcm.jpg';
import CreamDeck from 'assets/creamdeck.jpg';
import Seen1 from 'assets/seen1.jpg';
import Seen2 from 'assets/seen2.jpg';
import ThinkMoreForum from 'assets/ThinkMoreForum.png';
import MyGuard1 from 'assets/myguard1.jpg';
import MyGuard2 from 'assets/myguard2.jpg';
import ScientificArticles from 'assets/Scientific-Articles-Retrieval-Tool.png';
import phone from 'assets/phone.glb';
import laptop from 'assets/laptop.glb';
import Footer from 'components/Footer';
import { usePrefersReducedMotion, useRouteTransition } from 'hooks';
import { createRef, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

import Profile from 'combination/Profile';
import ProjectSummary from 'combination/ProjectSummary';
import Intro from 'combination/Intro';

import { disciplines } from 'app/config';

const screen = (src, widths) => ({
  src,
  srcSet: widths.map(w => `${src} ${w}w`).join(', '),
  placeholder: src,
});

const projects = [
  {
    title: 'Steam Deck Plugins',
    description:
      'Decky Loader plugins that make the Steam Deck do more. DeckyGCM finds, downloads and runs game trainers with Game Cheats Manager. CreamDeck manages Steam DLC unlockers with SmokeAPI and CreamAPI.',
    buttons: [
      {
        text: 'DeckyGCM',
        href: 'https://github.com/Qiming-Liu/Decky-Game-Cheats-Manager',
      },
      { text: 'CreamDeck', href: 'https://github.com/Qiming-Liu/CreamDeck' },
    ],
    model: {
      type: 'steamDeck',
      alt: 'DeckyGCM and CreamDeck running on a Steam Deck',
      textures: [screen(DeckyGCM, [1280]), screen(CreamDeck, [1280])],
    },
  },
  {
    title: 'ThinkMore Forum',
    description: 'A responsive community platform built with Next.js and Spring Boot.',
    buttonLink: 'https://github.com/Qiming-Liu/ThinkMoreForum-Frontend',
    model: {
      type: 'laptop',
      alt: 'ThinkMore Forum home page',
      textures: [screen(ThinkMoreForum, [980, 1376])],
    },
  },
  {
    title: 'Android Native App - Seen',
    description: 'An easy forum Android app with instant messaging.',
    buttonLink: 'https://github.com/Qiming-Liu/Seen',
    model: {
      type: 'phone',
      alt: 'Seen app screens',
      textures: [screen(Seen1, [254, 508]), screen(Seen2, [254, 508])],
    },
  },
  {
    title: 'Scientific Articles Retrieval Tool',
    description:
      'My master project: natural language processing that shows how articles relate to each other.',
    buttonLink: 'https://github.com/Qiming-Liu/Scientific-Articles-Retrieval-Tool',
    model: {
      type: 'laptop',
      alt: 'Graph of related articles',
      textures: [screen(ScientificArticles, [980, 1376])],
    },
  },
  {
    title: 'MyGuard',
    description: 'An indoor surveillance system using Raspberry Pi, Android and sensors.',
    buttonLink: 'https://github.com/Qiming-Liu/MyGuard',
    model: {
      type: 'phone',
      alt: 'MyGuard app screens',
      textures: [screen(MyGuard2, [254, 508]), screen(MyGuard1, [254, 508])],
    },
  },
];

const Home = () => {
  const { status } = useRouteTransition();
  const { hash, state } = useLocation();
  const initHash = useRef(true);
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectRefs = useRef(projects.map(() => createRef()));
  const projectOne = projectRefs.current[0];
  const about = useRef();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const revealSections = [intro, ...projectRefs.current, about];

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
        <title>Qiming Liu | Full Stack Developer</title>
        <link rel="prefetch" href={phone} as="fetch" />
        <link rel="prefetch" href={laptop} as="fetch" />
      </Helmet>
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      {projects.map((project, index) => {
        const ref = projectRefs.current[index];
        return (
          <ProjectSummary
            key={project.title}
            id={index === 0 ? 'project' : `project${index + 1}`}
            alternate={index % 2 === 0}
            sectionRef={ref}
            visible={visibleSections.includes(ref.current)}
            index={index + 1}
            buttonText="View Project"
            {...project}
          />
        );
      })}
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
