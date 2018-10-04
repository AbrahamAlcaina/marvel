import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-related-heros-body',
  template: `
    hola
  `
})
export class RelatedHerosComponent {

}

@Component({
  selector: 'app-related-heroes-dialog',
  template: `
    <h1 mat-dialog-title>Related</h1>
    <div mat-dialog-content>
      list
    </div>
  `
})
export class RelatedHerosDialogComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  constructor(public dialog: MatDialog, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       // In a real app: dispatch action to load the details here.
       setTimeout(() => this.dialog.open(RelatedHerosComponent), 1);
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

