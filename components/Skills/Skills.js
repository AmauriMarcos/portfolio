import React from 'react';
import styles from './Skills.module.scss';
import SkillItem from './SkillItem/SkillItem';

function Skills() {
    const skills = ['HTML5','CSS3', 'GIT', 'Javascript', 'Node', 'React', 'Redux', 'Next', 'mySQL', 'Typescript'];

    return (
        <div className={styles.skills}>
            {skills.map((skill, idx) =>{
                return <SkillItem key={idx} skill={skill}/>
            })}
        </div>
    )
}

export default Skills;
