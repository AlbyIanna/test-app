import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Tabs from '../components/Tabs/Tabs';

const tabs = [
  {
    title: 'Tab 1',
    content: 'Tab 1 content',
    renderTabContent: () => <div>Tab 1 content</div>,
  },
  {
    title: 'Tab 2',
    content: 'Tab 2 content',
  },
  {
    title: 'Tab 3',
    content: 'Tab 3 content',
  },
  {
    title: 'Tab 4',
    content: <div>loool<button>gimme some chicken</button></div>,
  },
];

const TabsPage = () => {
  const selectedTabId = Number(useParams().selectedTabId);
  const navigate = useNavigate();
  const selectedTab = tabs[selectedTabId];

  useEffect(() => {
    if (!selectedTab) {
      navigate('/tabs/0');
    }
  }, [selectedTab, navigate]);


  return (
    <div>
      <h1>Tabs</h1>
      <Tabs tabs={tabs} selectedTabId={selectedTabId} onChange={(value) => navigate(`/tabs/${value}`)} />
    </div>
  );
}

export default TabsPage;
