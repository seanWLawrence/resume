import React, { FC, memo, useEffect } from "react";
import { useTrail, animated } from "react-spring";

import Contact from "src/components/Contact";
import Experience from "src/components/Experience";
import OpenSource from "src/components/OpenSource";
import PublicSpeaking from "src/components/PublicSpeaking";

import { contact, openSource, experience, publicSpeaking } from "src/data";
import {
  useIsPrinterFriendlyMode,
  LIGHT_GRAY,
  DARK_PURPLE,
  BACKGROUND_IMAGE_PATTERN
} from "src/lib";

import styles from "./Resume.module.sass";

let Resume: FC = props => {
  let isPrinterFriendlyMode = useIsPrinterFriendlyMode();

  useEffect(() => {
    let body = document.getElementById("body") as HTMLElement;

    if (isPrinterFriendlyMode) {
      body.style.backgroundImage = "unset";
      body.style.backgroundColor = LIGHT_GRAY;
    } else {
      body.style.backgroundImage = BACKGROUND_IMAGE_PATTERN;
      body.style.backgroundColor = DARK_PURPLE;
    }
  }, [isPrinterFriendlyMode]);

  let sectionHeaders = isPrinterFriendlyMode
    ? ["Contact", "Experience"]
    : ["Contact", "Experience", "Public Speaking", "Open Source"];

  let sectionContents = isPrinterFriendlyMode
    ? [<Contact {...contact} />, <Experience {...experience} />]
    : [
        <Contact {...contact} />,
        <Experience {...experience} />,
        <PublicSpeaking {...publicSpeaking} />,
        <OpenSource {...openSource} />
      ];

  let config = { mass: 5, tension: 500, friction: 100 };

  let trail = useTrail(sectionHeaders.length, {
    config,
    opacity: 1,
    x: 0,
    height: 48,
    from: { opacity: 0, x: 0, height: 48 }
  });

  return (
    <main>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={sectionHeaders[index]}
            className={
              isPrinterFriendlyMode
                ? styles.printerFriendlyHeaderWrapper
                : styles.headerWrapper
            }
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
            }}
          >
            {!isPrinterFriendlyMode && (
              <animated.h2
                style={{ height }}
                className={
                  isPrinterFriendlyMode
                    ? styles.printerFriendlyHeader
                    : styles.header
                }
              >
                {sectionHeaders[index]}
              </animated.h2>
            )}

            {sectionContents[index]}
          </animated.div>
        ))}
      </div>
    </main>
  );
};

export default memo(Resume);
