import React from 'react';
import styles from './SkillItem.module.scss';

function SkillItem({skill}) {
    return (
        <div className={styles.skillItem}>
            <p>{skill}</p>
        </div>
    )
}

export default SkillItem;
