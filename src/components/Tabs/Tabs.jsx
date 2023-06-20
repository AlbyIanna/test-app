import clsx from 'clsx';
import styles from './tabs.module.css';
import { useId } from 'react';

const Tabs = ({ tabs = [], onChange, selectedTabId }) => {
  const tabsId = useId()

  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowLeft':
        e.target.previousElementSibling?.focus()
        break;
      case 'ArrowRight':
        e.target.nextElementSibling?.focus()
        break;
      case 'Home':
        e.target.parentElement.firstElementChild?.focus()
        break;
      case 'End':
        e.target.parentElement.lastElementChild?.focus()
        break;
    }
  }

  return <div>
    <h2 id={tabsId}>Tabs</h2>
    <div role='tablist' aria-labelledby={tabsId} className={styles["tabs-controller"]}>
      {tabs.map((tab, index) => {
        const isActive = index === selectedTabId;
        return (
          <button key={index}
            role='tab'
            id={`tab-${index}`}
            aria-selected={isActive}
            aria-controls={`panel-${index}`}
            tabIndex={isActive ? 0 : -1}
            className={clsx({
              [styles.active]: isActive,
            })}
            onClick={() => onChange(index)}
            onKeyDown={handleKeyDown}>
            {tab.title}
          </button>
        )
      }
      )}
    </div>
    {
      tabs.map((tab, index) => {
        const isActive = index === selectedTabId;
        return (
          <p key={index}
            id={`panel-${index}`}
            role='tabpanel'
            aria-labelledby={`tab-${index}`}
            hidden={!isActive}
            className={clsx({
              [styles.active]: isActive,
            })}
            tabIndex={isActive ? 0 : -1}
          >
            {tab.content}
          </p>
        )
      }
      )
    }
  </div>
}

export default Tabs;
