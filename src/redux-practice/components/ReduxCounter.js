import React from 'react';
import styles from './ReduxCounter.module.css';

const ReduxCounter = () => {

    return (
        <main className={styles.counter}>
            <h1>Redux Counter</h1>
            <div className={styles.value}>0</div>

            <div>
                <button>Increment</button>
                <button>Decrement</button>
            </div>

            <button>Toggle Counter</button>
        </main>
    );
};

export default ReduxCounter;
