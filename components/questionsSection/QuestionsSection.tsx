import React, { useState } from "react";
import styles from "./QuestionsSection.module.scss";
import { pageAnimation } from "../../utils/animation/animation";
import { motion } from "framer-motion";

const QuestionsSection = ({ data, title }: any) => {
  const [expandedQuestionIndex, setExpandedQuestionIndex] = useState<
    number | null
  >(null);

  const toggleQuestion = (questionIndex: number) => {
    if (expandedQuestionIndex === questionIndex) {
      setExpandedQuestionIndex(null);
    } else {
      setExpandedQuestionIndex(questionIndex);
    }
  };
  return (
    <section className={`section ${styles.questions}`}>
      <p className={styles.title}>{`שאלות נפוצות בנושא ${title}`}</p>
      <div className={styles.container}>
        {data.map((question: any, index: number) => (
          <div key={index}>
            <button onClick={() => toggleQuestion(index)}>
              {question.question}
            </button>
            {expandedQuestionIndex === index && (
              <motion.p variants={pageAnimation}>{question.answer}</motion.p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionsSection;
