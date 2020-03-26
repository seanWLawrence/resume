import React, { FC, memo } from "react";

import Card from "./Card";

import { prettyDate, useIsPrinterFriendlyMode } from "src/lib";

import styles from "./Experience.module.sass";

interface Job {
  company: { name: string; url: string };
  startDate: Date;
  endDate?: Date;
  responsibilities: string[];
  title: string;
}

interface ExperienceProps {
  jobs: Job[];
}

interface HTMLStringListProps {
  items: string[];
}

let HTMLStringList: FC<HTMLStringListProps> = ({ items }) => {
  let isPrinterFriendlyMode = useIsPrinterFriendlyMode();

  let displayItems = isPrinterFriendlyMode ? items.slice(0, 3) : items;

  return (
    <div>
      <ul>
        {displayItems.map(item => {
          return <li key={item} dangerouslySetInnerHTML={{ __html: item }} />;
        })}
      </ul>
    </div>
  );
};

interface TimeProps {
  date?: Date;
}

let Time: FC<TimeProps> = ({ date }) => {
  if (!date) {
    return <span className={styles.time}>Current</span>;
  }

  return (
    <time className={styles.time} dateTime={date.toUTCString()}>
      {prettyDate(date)}
    </time>
  );
};

let RightArrow = () => (
  <span
    className={styles.time}
    dangerouslySetInnerHTML={{ __html: " &rarr; " }}
  />
);

let Experience: FC<ExperienceProps> = ({ jobs }) => {
  return (
    <Card>
      {jobs.map(({ company, startDate, endDate, responsibilities, title }) => {
        return (
          <div key={company.name} className={styles.jobWrapper}>
            <h5>
              <a href={company.url}>{company.name}</a>
              <span>
                <Time date={startDate} />
                <RightArrow />
                <Time date={endDate} />
              </span>
            </h5>

            <h6 className={styles.title}>{title}</h6>

            <HTMLStringList items={responsibilities} />
          </div>
        );
      })}
    </Card>
  );
};

export default memo(Experience);
