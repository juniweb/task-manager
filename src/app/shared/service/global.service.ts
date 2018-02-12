import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {
  private isAuthenticated = false;
  private isViewSidebarCollapse = false;

  constructor() {}

  setAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticated = isAuthenticated;
  }

  getAuthenticated(): boolean {
    return this.isAuthenticated;
  }

  setViewSidebarCollapse(isViewSidebarCollapse: boolean): void {
    this.isViewSidebarCollapse = isViewSidebarCollapse;
  }
  getViewSidebarCollapse(): boolean {
    return this.isViewSidebarCollapse;
  }
}
