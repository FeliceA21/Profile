import { Component } from '@angular/core';

export type EditorType = 'pinfo' | 'edu' | 'awards' | 'employ' | 'org' | 'sat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editor: EditorType = 'pinfo';
  
  get showPinfo() {
    return this.editor === 'pinfo';
  }
  
  get showEdu() {
    return this.editor === 'edu';
  }

  get showAwards() {
    return this.editor === 'awards';
  }

  get showEmploy() {
    return this.editor === 'employ';
  }

  get showOrg() {
    return this.editor === 'org';
  }
  
  get showSat() {
    return this.editor === 'sat';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}