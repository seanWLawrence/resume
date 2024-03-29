import React, { memo, FC } from "react";

import Card from "./Card";

import { contact } from "src/data";

import styles from "./OpenSource.module.sass";

interface OpenSourceContribution {
  name: string;
  url: string;
  description: string;
  programmingLanguage: string;
  year?: number;
  inProgress?: boolean;
}

interface OpenSourceSectionProps {
  projects: OpenSourceContribution[];
  title: string;
}

let OpenSourceSection: FC<OpenSourceSectionProps> = ({ projects, title }) => {
  return (
    <div className={styles.openSourceSectionWrapper}>
      <h5 className={styles.openSourceSectionHeader}>{title}</h5>
      {projects.map(
        ({ name, description, url, programmingLanguage, year, inProgress }) => {
          return (
            <div key={name} className={styles.openSourceProjectWrapper}>
              <h6>
                <a
                  href={url}
                  className={styles.projectName}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {name}
                </a>{" "}
                <span className={styles.programmingLanguage}>
                  ({programmingLanguage}
                  {year && `, ${year}`}
                  {inProgress && ", in progress"})
                </span>
              </h6>

              <p>{description}</p>
            </div>
          );
        }
      )}
    </div>
  );
};

interface OpenSourceProps {
  openSourceContributions: OpenSourceContribution[];
  openSourceProjects: OpenSourceContribution[];
}

let OpenSource: FC<OpenSourceProps> = ({
  openSourceContributions,
  openSourceProjects
}) => {
  return (
    <Card>
      <OpenSourceSection
        title="Contributions"
        projects={openSourceContributions}
      />

      <OpenSourceSection
        title="Projects I've Created"
        projects={openSourceProjects}
      />

      <p>
        And{" "}
        <a
          href={contact.gitHubUrl}
          target="_blank"
          rel="nofollow noreferrer noopener"
        >
          more
        </a>
        ...
      </p>
    </Card>
  );
};

export default memo(OpenSource);
