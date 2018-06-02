import React from 'react';
import { Checkbox } from 'antd';
const CheckGroup = Checkbox.Group;

export default ({ theme, onChange }) => (
  <CheckGroup onChange={onChange} value={theme.layout}>
    <Checkbox className="fixedHeader" value="fixedHeader">
      固定头部
    </Checkbox>
    <Checkbox className="fixedSidebar" value="fixedSidebar">
      固定边栏
    </Checkbox>
    <Checkbox className="fixedBreadcrumbs" value="fixedBreadcrumbs">
      固定面包屑
    </Checkbox>
    <Checkbox className="hidedBreadcrumbs" value="hideBreadcrumbs">
      隐藏面包屑
    </Checkbox>
  </CheckGroup>
);