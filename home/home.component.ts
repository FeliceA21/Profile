import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export type EditorType = 'about' | 'pinfo' | 'edu' | 'awards' | 'employ' | 'org';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.items = this.firestore.collection('data').valueChanges();
  }
  editor: EditorType = 'about';
  
  get showAbout() {
    return this.editor === 'about';
  }

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

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}

