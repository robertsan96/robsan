import React from 'react';

import styles from "./Navigation.module.scss"

interface NavigationProps {
    title: string
}

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
    return <h1 className={styles.Navigation}>{props.title}</h1>
}

export default Navigation;