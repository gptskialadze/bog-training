import { AfterContentInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { Tab } from './tab/tab';

@Component({
  selector: 'app-tabs',
  standalone: false,
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs implements AfterContentInit {
  @ContentChildren(Tab) tabComponent!: QueryList<Tab>;
  @Input('activeTabIndex') activeTabIndex: number = 0;
  activeTab!: any;

  setTabIndex(index: number) {
    this.activeTabIndex = index;
    if (this.activeTab) {
    this.activeTab.tabShow = false;
    }

    let tabCompm = this.tabComponent.get(index);
    tabCompm!.tabShow = true;
     this.activeTab = tabCompm
  }

  ngAfterContentInit(): void {
    this.tabComponent.forEach((tab: Tab) => {
      console.log(tab.title);
    });
     this.activeTab = this.tabComponent.get(this.activeTabIndex)
    this.tabComponent.get(this.activeTabIndex)!.tabShow = true;
   
  }
}
