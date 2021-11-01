import React from 'react';
import styles from './SkillItem.module.scss';

function SkillItem({skill, className}) {
    return (
        <div className={`${styles.skillItem} ${className}`}>
            <p>{skill}</p>
        </div>
    )
}

export default SkillItem;
