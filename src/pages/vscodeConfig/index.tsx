import { Segmented, Space, Tabs } from 'antd';
import { FC, memo, useState } from 'react';
import vscodeSettings from '../../../configs/vscode-settings.json?raw';
import vscodePlugins from '../../../configs/vscode-plugins.txt?raw';
import { Editor } from '@/ui';
import { prettyJsonString } from '@/utils/handleJson';
import { contentHeight } from '@/constant/content';

enum TabEnum {
  SETTINGS = 'Settings',
  PLUGINS = 'Plugins',
}

const VscodeConfig: FC = memo(() => {
  const [currentTab, setCurrentTab] = useState<TabEnum>(TabEnum.SETTINGS);

  return (
    <Space direction="vertical" className="w-full">
      <Segmented<TabEnum> options={Object.values(TabEnum)} onChange={setCurrentTab} />
      <Tabs
        activeKey={currentTab}
        renderTabBar={() => <div />}
        items={[
          {
            key: TabEnum.SETTINGS,
            label: TabEnum.SETTINGS,
            children: (
              <Editor
                language="json"
                value={prettyJsonString(vscodeSettings)}
                readOnly
                height={contentHeight}
              />
            ),
          },
          {
            key: TabEnum.PLUGINS,
            label: TabEnum.PLUGINS,
            children: <Editor language="json" value={vscodePlugins} readOnly height={contentHeight} />,
          },
        ]}
      />
    </Space>
  );
});

export default VscodeConfig;
