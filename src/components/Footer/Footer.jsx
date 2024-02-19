import React from 'react';
import css from "./Footer.module.scss";
import { LIST_AUTHOR_INFO, LIST_TYPES } from "../config";
import { getColor, getIcon } from "../utils";

const Footer = (props) => {
  // Функция для подсчета задач по типу
  function getCountTasks(tasks, type) {
    // Проверяем, что tasks - это массив
    if (!tasks || !Array.isArray(tasks)) {
      console.log('Tasks is not an array or is undefined');
      return 0;
    }

    const filteredTasks = tasks.filter((task) => task.status === type);
    console.log(`Tasks for ${type}: `, filteredTasks);
    return filteredTasks.length;
  }

  const { firstname, secondname, link_github, year } = LIST_AUTHOR_INFO;

  return (
    <footer className={css.wrapper}>
      <div>
        <div className={css.wrapper__block}>
          {/* Блок для каждого типа задач */}
          {Object.values(LIST_TYPES).map((type) => (
            <div key={type} className={css.wrapper__item}>
              <span
                className={css.item__status}
                title={`Type task: ${type}`}
                style={{ backgroundColor: getColor(type) }}
              >
                {getIcon(type)}
              </span>
              <span className={css.wrapper__item_title}>{type}: </span>
              {getCountTasks(props.tasks, type)}
            </div>
          ))}
        </div>
      </div>
      <div className={css.wrapper__author}>
        <span className={css.wrapper__author_title}>
          Kanban board by {firstname} {secondname}
        </span>
        <a href={link_github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <span className={css.wrapper__author_year}>,&nbsp;{year}</span>
      </div>
    </footer>
  );
};

export default Footer;
